import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

const audienceID = process.env.MAILCHIMP_AUDIENCE_ID;

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const api_key = searchParams.get("API-KEY");
  if (!api_key) new Response(JSON.stringify({ error: "API Key is required" }));

  const { email } = await request.json();

  if (!email) new Response(JSON.stringify({ error: "Email is required" }));

  if (api_key == process.env.API_KEY) {
    try {
      const res = await mailchimp.lists.addListMember(audienceID!, {
        email_address: email,
        status: "subscribed",
      });

      return new Response(JSON.stringify({ res }));
    } catch (error: any) {
      return new Response(
        JSON.stringify({ error: JSON.parse(error.response.text) }),
      );
    }
  } else {
    return new Response(JSON.stringify({ error: "API Key is invalid" }));
  }
}
