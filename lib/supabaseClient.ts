import { createClient } from "@supabase/supabase-js";

const supabaseKey = process.env.SUPABASE_KEY as string;

export const supabase = createClient(
  "https://zoovavayqduzdznpetnk.supabase.co",
  `${supabaseKey}`,
  {
    auth: {
      persistSession: false,
    },
  }
);
