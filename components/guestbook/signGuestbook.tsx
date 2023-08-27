"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import Mail from "@/icons/Mail";

export function SignGuestbookLogedIn() {
  return (
    <div className="flex flex-col gap-y-4 px-2 py-3 bg-secondary rounded-md">
      <div className=" flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5" />
          <h1 className="text-base font-medium">Sign The Guestbook</h1>
        </div>
        <p className="text-sm text-text-secondary">
          Share a message for a future visitor of my site.
        </p>
      </div>
      <div className="">
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Your Message..."
            className="px-2 py-1 w-full rounded-md focus:outline-none focus:ring focus:ring-primary"
          />
          <button className="px-3 py-1 bg-primary text-background rounded-md hover:b">
            Sign
          </button>
        </form>
        <button
          onClick={() => signOut()}
          className="mt-2 text-sm text-text-secondary"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export function SignGuestbookNotLogedIn() {
  return (
    <div className="flex flex-col gap-y-4 px-2 py-3 bg-secondary rounded-md">
      <div className=" flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5" />
          <h1 className="text-base font-medium">Sign The Guestbook</h1>
        </div>
        <p className="text-sm text-text-secondary">
          Share a message for a future visitor of my site.
        </p>
      </div>
      <div className="">
        <button
          onClick={() => signIn("github")}
          className="px-3 py-1 bg-primary text-background rounded-md hover:b"
        >
          Login With Github
        </button>
      </div>
    </div>
  );
}

export default function SignGuestbook() {
  const { status } = useSession();

  if (status === "authenticated") {
    return <SignGuestbookLogedIn />;
  }

  return <SignGuestbookNotLogedIn />;
}
