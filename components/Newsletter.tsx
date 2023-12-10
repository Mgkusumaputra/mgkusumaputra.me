"use client";

import Mail from "@/icons/Mail";
import { useRef } from "react";
import toast from "react-hot-toast/headless";
import { useToast } from "./ui/use-toast";

export default function Newsletter() {
  const ref = useRef<HTMLFormElement>(null);
  const {toast} = useToast();

  async function handleSubmit(formData: FormData) {
    const email = formData.get("email");

    const res = await fetch("/api/subs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.error) {
      // toast.error("You're already added to newsletter");
      toast({
        variant: "destructive",
        description: "You're already added to newsletter",
        classNames: ""
      })
      console.log(data.error);
      return;
    }

    toast({
      description: `Hi ${data.res.email_address}! Welcome to newsletter`
    })
    console.log(`Hi ${data.res.email_address}! Welcome to newsletter`);
    // toast.success(`Hi ${data.res.email_address}! Welcome to newsletter`);
  }

  return (
    <>
      <div className="flex flex-col gap-y-4 px-2 py-3 bg-secondary rounded-md">
        <div className="flex flex-col">
          <div className=" flex flex-col gap-1 mb-3">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <h1 className="text-base font-medium">Stay up to date!</h1>
            </div>
            <p className="text-sm text-text-secondary">
              Receive the latest post updates directly in your inbox ASAP.
            </p>
          </div>
          <p className="text-xs font-medium text-inactive">
            No spam — Unsubscribe anytime!
          </p>
        </div>
        <div className="">
          <form
            className="flex gap-4"
            ref={ref}
            action={async (FormData) => {
              await handleSubmit(FormData);
              ref.current?.reset();
            }}
          >
            <input
              name="email"
              type="email"
              placeholder="Email address"
              required
              className="px-2 py-1 w-full rounded-md focus:outline-none focus:ring focus:ring-primary"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-primary text-background rounded-md hover:b"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
