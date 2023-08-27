import Provider from "../provider";

import GuestMessages from "@/components/guestbook/guestMessages";
import SignGuestbook from "@/components/guestbook/signGuestbook";

export default function GuestbookPage() {
  return (
    <Provider>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Messages at My E-Door</h1>
          <p className="text-sm font-normal">
            Personal notes from fellow digital explorers who{"'"}ve left their
            mark.
          </p>
        </div>
        <SignGuestbook />
        <div className="flex flex-col gap-3">
          <GuestMessages />
          <GuestMessages />
          <GuestMessages />
          <GuestMessages />
        </div>
      </div>
    </Provider>
  );
}
