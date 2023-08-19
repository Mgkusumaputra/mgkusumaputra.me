import Link from "next/link";

import Mail from "@/icons/Mail";

export default function Newsletter() {
  return (
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
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="px-2 py-1 w-full rounded-md focus:outline-none focus:ring focus:ring-primary"
          />
          <button className="px-3 py-1 bg-primary text-background rounded-md hover:b">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
