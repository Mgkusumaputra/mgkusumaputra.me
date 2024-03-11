import { redis } from "@/lib/redis";
import type { AxiosError } from "axios";
import axios, { type AxiosRequestConfig } from "axios";
import { cache } from "react";

const UMAMI_URL = process.env.UMAMI_URL;
const UMAMI_WEBSITE_ID = process.env.UMAMI_WEBSITE_ID;
const UMAMI_USERNAME = process.env.UMAMI_USERNAME;
const UMAMI_PASSWORD = process.env.UMAMI_PASSWORD;

async function setRedisViews(slug: string, count: number) {
  try {
    return await redis.set(`page-views-${slug}`, count, "EX", 60 * 60 * 24);
  } catch (error) {
    return "No";
  }
}
async function getRedisViews(slug: string) {
  try {
    const views = await redis.get(`page-views-${slug}`);
    if (!views) throw new Error("No post views");
    return parseInt(views);
  } catch (err) {
    return null;
  }
}
async function setRedisToken(token: string) {
  try {
    return await redis.set("umami-token", token, "EX", 60 * 60 * 24);
  } catch (error) {
    return "No";
  }
}
async function getRedisToken() {
  try {
    const token = await redis.get("umami-token");
    if (!token) throw new Error("No umami token");
    return token;
  } catch (err) {
    return null;
  }
}

async function getUmamiToken() {
  try {
    const res = await axios(UMAMI_URL + "/api/auth/login", {
      method: "POST",
      data: {
        username: UMAMI_USERNAME,
        password: UMAMI_PASSWORD,
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (res.status === 200 || res.status === 201) {
      return res.data.token;
    }

    throw new Error(res.statusText);
  } catch (error) {
    return null;
  }
}

async function getUmamiViews(payload: { token: string; slug: string }) {
  //   const firstDeployedUmami = 1709426313379;
  const firstDeployedUmami = 1688450792783;
  const endDate = new Date().getTime();
  //   const postURL = `/blog/${payload.slug}`;
  const postURL = `/${payload.slug}`;

  const url = new URL(`api/websites/${UMAMI_WEBSITE_ID}/stats`, UMAMI_URL);
  url.searchParams.set("start_at", firstDeployedUmami.toString());
  url.searchParams.set("end_at", endDate.toString());
  url.searchParams.set("url", postURL);

  try {
    const res = await axios(url.toString(), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${payload.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (res.status === 200 || res.status === 201) {
      return res.data.pageviews.value;
    }

    throw new Error(res.statusText);
  } catch (error) {
    return error;
  }
}

async function getToken() {
  const tokenFromRedis = await getRedisToken();
  if (!tokenFromRedis) {
    const token = await getUmamiToken();
    if (!token) return null;
    await setRedisToken(token);
    return token;
  }
  return tokenFromRedis;
}

export const getViews = cache(async (slug: string) => {
  try {
    const viewsFromRedis = await getRedisViews(slug);

    if (!viewsFromRedis) {
      const token = await getToken();

      if (!token) throw new Error("Cannot get token");

      const viewsFromUmami = await getUmamiViews({ token, slug });
      await setRedisViews(slug, viewsFromUmami);

      return [viewsFromUmami, null] as const;
    }

    return [viewsFromRedis, null] as const;
  } catch (error) {
    return [null, error as Error] as const;
  }
});
