import UmamiAPIClient from "umami-api";

const umamiSrcEndpoint = process.env.UMAMI_SRC_ENDPOINT as string;
const umamiUserId = process.env.UMAMI_USERID as string;
const umamiUserKey = process.env.UMAMI_USERKEY as string;

const umami = new UmamiAPIClient(umamiSrcEndpoint, umamiUserId, umamiUserKey);

const webList = await umami.getWebsite();

console.log(webList);
