import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, department, subject, message, subscribe } = await req.json();

    // Basic validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Augustinian Institute Contact Form <noreply@makurdiai.com.ng>",
      to: "info@makurdiai.com.ng",
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="background: #1e2a78; padding: 20px 24px; border-radius: 6px 6px 0 0; margin: -24px -24px 24px;">
            <h2 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
            <p style="color: #c7d2fe; margin: 4px 0 0; font-size: 14px;">Augustinian Institute — makurdiai.com.ng</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #374151;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; width: 140px; vertical-align: top;">Full Name:</td>
              <td style="padding: 8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1a56db;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Phone:</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>` : ""}
            ${department ? `
            <tr>
              <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Department:</td>
              <td style="padding: 8px 0;">${department}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Subject:</td>
              <td style="padding: 8px 0;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Newsletter:</td>
              <td style="padding: 8px 0;">${subscribe ? "✅ Yes, subscribed" : "No"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background: #f9fafb; border-radius: 6px; border-left: 4px solid #1e2a78;">
            <p style="font-weight: 600; margin: 0 0 8px; color: #1e2a78;">Message:</p>
            <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; padding-top: 16px;">
            This message was sent via the contact form at makurdiai.com.ng. Reply directly to this email to respond to ${firstName}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}