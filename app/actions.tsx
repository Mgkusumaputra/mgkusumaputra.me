"use server";

import { getServerSession } from "next-auth";
import { supabase } from "@/lib/supabaseClient";

import { revalidatePath } from "next/cache";

export async function saveGuestbookEntry(formData: FormData) {
  const session = await getServerSession();
  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }

  const email = session.user?.email;
  const name = session.user?.name;
  const profile = session.user?.image;
  const entry = formData.get("entry")?.toString() || "";

  let { data, error } = await supabase
    .from("guestbook")
    .insert([
      {
        name: name,
        message: entry,
        email: email,
        profileImage_URL: profile,
      },
    ])
    .select();

  revalidatePath("/guestbook");
}
