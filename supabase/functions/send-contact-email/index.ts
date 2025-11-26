import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  created_at: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const submission: ContactSubmission = await req.json();

    // Get Zoho email credentials from environment
    const zohoSMTPHost = Deno.env.get("ZOHO_SMTP_HOST");
    const zohoSMTPPort = Deno.env.get("ZOHO_SMTP_PORT");
    const zohoSMTPUser = Deno.env.get("ZOHO_SMTP_USER");
    const zohoSMTPPassword = Deno.env.get("ZOHO_SMTP_PASSWORD");
    const recipientEmail = Deno.env.get("RECIPIENT_EMAIL") || "shreyavarma@outlook.in";

    // For now, we'll just log and return success
    // When Zoho credentials are provided, uncomment the email sending logic
    console.log("Contact form submission received:", {
      name: submission.name,
      email: submission.email,
      subject: submission.subject,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement Zoho SMTP email sending when credentials are available
    // const emailResponse = await sendEmailViaZoho({
    //   from: zohoSMTPUser,
    //   to: recipientEmail,
    //   cc: submission.email,
    //   subject: `New Contact: ${submission.subject}`,
    //   html: emailBody
    // });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact form received. Email notification queued.",
        submissionId: submission.id,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to process contact form",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      },
    );
  }
});
