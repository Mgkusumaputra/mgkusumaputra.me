"use client";

import { saveGuestbookEntry } from "@/app/actions";
import { Github, MailIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SignGuestbookLogedIn() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="flex flex-col gap-y-4 px-3 py-4 bg-secondary rounded-md">
      <div className=" flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <MailIcon className="w-5 h-5" />
          <h1 className="text-base font-medium">Sign The Guestbook</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Share a message for a future visitor of my site.
        </p>
      </div>
      <div className="">
        <form
          className="flex gap-4"
          ref={formRef}
          action={async (formData) => {
            await saveGuestbookEntry(formData);
            formRef.current?.reset();
          }}
        >
          <Input
            required
            type="text"
            name="entry"
            placeholder="Your Message..."
            className="px-2 py-1 w-full rounded-md focus:outline-none focus:ring focus:ring-primary"
          />
          <Button
            className="px-3 py-1 bg-primary text-primary-foreground rounded-md"
            type="submit"
          >
            Sign
          </Button>
        </form>
        <button
          onClick={() => signOut()}
          className="mt-2 text-sm text-muted-foreground hover:text-secondary-foreground hover:underline"
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
          <MailIcon className="w-5 h-5" />
          <h1 className="text-base font-medium">Sign The Guestbook</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Share a message for a future visitor of my site.
        </p>
      </div>
      <div className="">
        <Button
          onClick={() => signIn("github")}
          className="px-3 py-1 gap-2 bg-primary text-primary-foreground rounded-md"
        >
          <Github className="w-5 h-5" /> Login With Github
        </Button>
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
