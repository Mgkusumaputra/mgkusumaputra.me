import GuestMessages from "@/components/guestbook/guestMessages";
import SignGuestbook from "@/components/guestbook/signGuestbook";
import { supabase } from "@/lib/supabaseClient";
import { Metadata } from "next";

import Provider from "../../provider";

export const metadata: Metadata = {
  title: "Guestbook",
  description:
    "Personal notes from fellow digital explorers who've left their mark.",
};

async function getGuestbook() {
  const { data: guestbook } = await supabase
    .from("guestbook")
    .select("*")
    .order("id", { ascending: false })
    .limit(100);

  return guestbook;
}

export default async function GuestbookPage() {
  let entries;

  try {
    const [guestbookRes] = await Promise.allSettled([getGuestbook()]);

    if (guestbookRes.status === "fulfilled") {
      entries = guestbookRes.value;
    } else {
      console.error(guestbookRes);
    }
  } catch (error) {
    console.error(error);
  }

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
          {entries &&
            entries.map((entry) => (
              <GuestMessages
                key={entry.id}
                profileURL={entry.profileImage_URL}
                name={entry.name}
                message={entry.message}
              />
            ))}
        </div>
      </div>
    </Provider>
  );
}
