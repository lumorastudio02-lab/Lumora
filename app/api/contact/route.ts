import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, service, message, budget } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required fields." },
        { status: 400 }
      );
    }

    const adminEmail = "lumorastudio02@gmail.com";
    const clientName = name || (service === "Newsletter Subscription" ? "Subscriber" : "Valued Client");
    const isNewsletter = service === "Newsletter Subscription";

    // -----------------------------------------------------------------------
    // 1. ADMIN LEAD OPPORTUNITY EMAIL HTML TEMPLATE (Sent to lumorastudio02@gmail.com)
    // -----------------------------------------------------------------------
    const adminHtml = isNewsletter
      ? `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E4E4E2; border-radius: 16px; overflow: hidden; background-color: #ffffff; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
        <div style="background: linear-gradient(135deg, #1F2937 0%, #060816 100%); padding: 28px 24px; text-align: center; color: white;">
          <span style="background-color: rgba(253, 186, 34, 0.2); border: 1px solid #FDBA22; color: #FDBA22; font-size: 11px; font-weight: bold; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">⚡ NEW SUBSCRIBER</span>
          <h2 style="margin: 12px 0 0 0; color: #ffffff; font-size: 22px; font-weight: 800;">Newsletter Subscription Alert</h2>
        </div>
        <div style="padding: 24px; color: #1F2937; font-size: 15px; line-height: 1.6;">
          <p style="margin-top: 0;">A new user just subscribed to the <strong>Lumora Weekly Tech Digest</strong> newsletter.</p>
          <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px; margin: 16px 0;">
            <p style="margin: 0 0 8px 0; font-size: 13px; color: #64748B; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">SUBSCRIBER EMAIL</p>
            <a href="mailto:${email}" style="font-size: 16px; font-weight: bold; color: #F97316; text-decoration: none;">${email}</a>
          </div>
          <p style="font-size: 13px; color: #64748B; margin-bottom: 0;">Add this email to your marketing outreach list or follow up with a personalized welcome offer.</p>
        </div>
        <div style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 16px; text-align: center; font-size: 12px; color: #64748B;">
          © ${new Date().getFullYear()} Lumora Technologies Lead Management System
        </div>
      </div>
    `
      : `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #E4E4E2; border-radius: 16px; overflow: hidden; background-color: #ffffff; box-shadow: 0 8px 30px rgba(0,0,0,0.08);">
        <!-- Header Banner -->
        <div style="background: linear-gradient(135deg, #060816 0%, #1F2937 100%); padding: 30px 24px; text-align: center; color: white; border-bottom: 4px solid #F97316;">
          <span style="background-color: #EF4444; color: #ffffff; font-size: 11px; font-weight: 800; padding: 4px 14px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">🚨 HIGH-VALUE LEAD OPPORTUNITY</span>
          <h2 style="margin: 14px 0 4px 0; color: #FDBA22; font-size: 26px; font-weight: 900;">New Project Scope Inbound</h2>
          <p style="margin: 0; color: #9CA3AF; font-size: 14px;">Submission Time: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST</p>
        </div>

        <div style="padding: 28px; color: #1F2937; font-size: 15px; line-height: 1.6;">
          <!-- Prospect Details Grid -->
          <div style="margin-bottom: 24px;">
            <div style="background-color: #FFF7ED; border: 1px solid #FFEDD5; border-radius: 12px; padding: 18px;">
              <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #C2410C; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">📋 CLIENT PROSPECT PROFILE</h3>
              <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; color: #64748B; width: 130px; font-weight: 600;">Client Name:</td>
                  <td style="padding: 6px 0; font-weight: 800; color: #1F2937;">${clientName}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #64748B; font-weight: 600;">Client Email:</td>
                  <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #F97316; font-weight: 800; text-decoration: underline;">${email}</a></td>
                </tr>
                ${company ? `<tr><td style="padding: 6px 0; color: #64748B; font-weight: 600;">Company:</td><td style="padding: 6px 0; font-weight: 700; color: #1F2937;">${company}</td></tr>` : ""}
                <tr>
                  <td style="padding: 6px 0; color: #64748B; font-weight: 600;">Requested Service:</td>
                  <td style="padding: 6px 0; font-weight: 800; color: #2563EB;">${service || "Website Development"}</td>
                </tr>
                ${budget ? `<tr><td style="padding: 6px 0; color: #64748B; font-weight: 600;">Estimated Budget:</td><td style="padding: 6px 0; font-weight: 800; color: #059669;">${budget}</td></tr>` : ""}
              </table>
            </div>
          </div>

          <!-- Project Brief Card -->
          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 8px 0; font-size: 13px; color: #64748B; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">PROJECT BRIEF & REQUIREMENTS:</p>
            <div style="background-color: #F8FAFC; border-left: 4px solid #F97316; border-top: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0; padding: 18px; border-radius: 0 12px 12px 0; font-size: 14px; color: #334155; line-height: 1.7;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
          </div>

          <!-- Sales Action Buttons -->
          <div style="text-align: center; margin-top: 28px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
            <a href="mailto:${email}?subject=Re:%20Project%20Scope%20Inquiry%20-%20Lumora%20Technologies&body=Hi%20${encodeURIComponent(clientName)},%0A%0AThank%20you%20for%20reaching%20out%20to%20Lumora%20Technologies!%20We%20reviewed%20your%20project%20scope%20brief..." style="display: inline-block; background: linear-gradient(135deg, #FDBA22 0%, #F97316 100%); color: #1F2937; font-weight: 800; font-size: 14px; padding: 14px 28px; border-radius: 30px; text-decoration: none; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);">
              ✉️ Reply Directly to Client (${email})
            </a>
          </div>
        </div>

        <div style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 16px; text-align: center; font-size: 12px; color: #64748B;">
          Lumora Technologies Sales & Lead Management Platform • Pune, India
        </div>
      </div>
    `;

    // -----------------------------------------------------------------------
    // 2. CLIENT AUTO-REPLY / WELCOME EMAIL HTML TEMPLATE (Sent to Client Email)
    // -----------------------------------------------------------------------
    const clientHtml = isNewsletter
      ? `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E4E4E2; border-radius: 16px; overflow: hidden; background-color: #ffffff; box-shadow: 0 8px 30px rgba(0,0,0,0.06);">
        <!-- Lumora Header -->
        <div style="background: linear-gradient(135deg, #FDBA22 0%, #FB923C 50%, #F97316 100%); padding: 32px 24px; text-align: center; color: #1F2937;">
          <h1 style="margin: 0; font-size: 26px; font-weight: 900; letter-spacing: -0.5px;">Welcome to Lumora Inner Circle!</h1>
          <p style="margin: 8px 0 0 0; font-size: 14px; font-weight: 600; opacity: 0.9;">Weekly Tech Digest & UI/UX Insights</p>
        </div>

        <div style="padding: 28px; color: #334155; font-size: 15px; line-height: 1.7;">
          <p style="margin-top: 0; font-size: 16px;">Hello <strong>Innovator</strong>,</p>
          <p>Thank you for subscribing to the <strong>Lumora Technologies Weekly Tech Digest</strong>!</p>
          <p>Every week, our senior software engineers and design architects curate actionable insights on:</p>

          <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; margin: 20px 0;">
            <ul style="margin: 0; padding-left: 20px; color: #1F2937; line-height: 1.8;">
              <li><strong>Modern UI/UX Tokens & Micro-Interactions</strong> (Framer & Apple standards)</li>
              <li><strong>High-Scale Web Architecture</strong> (Next.js 14+, React Server Components, Supabase)</li>
              <li><strong>AI Engine Integration</strong> (Automated pipelines, LLM fine-tuning, vector caching)</li>
              <li><strong>Performance Benchmarks</strong> (0.2s latencies, Lighthouse 99+ scores)</li>
            </ul>
          </div>

          <p>Have an upcoming digital project or website upgrade you'd like to discuss?</p>

          <div style="text-align: center; margin: 28px 0;">
            <a href="https://lumoratechnologies.com/#contact" style="display: inline-block; background-color: #1F2937; color: #ffffff; font-weight: 800; font-size: 14px; padding: 14px 28px; border-radius: 30px; text-decoration: none;">
              Explore Our Portfolio & Pricing Tiers
            </a>
          </div>

          <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 24px 0;" />

          <p style="margin-bottom: 4px;">Best regards,</p>
          <p style="margin: 0; font-weight: 800; color: #1F2937;">Lumora Technologies Team</p>
          <p style="margin: 2px 0 0 0; font-size: 13px; color: #64748B;">Email: <a href="mailto:lumorastudio02@gmail.com" style="color: #F97316;">lumorastudio02@gmail.com</a> | Phone: +91 96651 19803 / +91 83292 85087</p>
        </div>

        <div style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 18px; text-align: center; font-size: 12px; color: #64748B;">
          © ${new Date().getFullYear()} Lumora Technologies • Pune, Maharashtra, India
        </div>
      </div>
    `
      : `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E4E4E2; border-radius: 16px; overflow: hidden; background-color: #ffffff; box-shadow: 0 8px 30px rgba(0,0,0,0.06);">
        <!-- Lumora Header -->
        <div style="background: linear-gradient(135deg, #FDBA22 0%, #FB923C 50%, #F97316 100%); padding: 32px 24px; text-align: center; color: #1F2937;">
          <h1 style="margin: 0; font-size: 26px; font-weight: 900; letter-spacing: -0.5px;">Thank You for Reaching Out!</h1>
          <p style="margin: 8px 0 0 0; font-size: 14px; font-weight: 700; opacity: 0.95;">Lumora Technologies Engineering Team</p>
        </div>

        <div style="padding: 28px; color: #334155; font-size: 15px; line-height: 1.7;">
          <p style="margin-top: 0; font-size: 16px;">Dear <strong>${clientName}</strong>,</p>
          <p>We have successfully received your project inquiry! Our engineering team is currently conducting a technical scope analysis based on your requirements.</p>

          <!-- Response SLA Card -->
          <div style="background-color: #FFF7ED; border: 1px solid #FDBA74; padding: 18px; border-radius: 12px; color: #C2410C; margin: 22px 0;">
            <p style="margin: 0; font-weight: 800; font-size: 14px;">⚡ Guaranteed Proposal Response Within 2 Hours</p>
            <p style="margin: 4px 0 0 0; font-size: 13px; color: #9A3412;">A dedicated technical lead will review your project specs and contact you directly with a blueprint estimate.</p>
          </div>

          <!-- Submission Summary Table -->
          <p style="margin: 0 0 8px 0; font-size: 13px; color: #64748B; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">SUBMISSION RECAP:</p>
          <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px; margin-bottom: 24px;">
            <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
              <tr>
                <td style="padding: 4px 0; color: #64748B; width: 140px;">Primary Service:</td>
                <td style="padding: 4px 0; font-weight: 700; color: #1F2937;">${service || "Website Development"}</td>
              </tr>
              ${company ? `<tr><td style="padding: 4px 0; color: #64748B;">Company:</td><td style="padding: 4px 0; font-weight: 700; color: #1F2937;">${company}</td></tr>` : ""}
              ${budget ? `<tr><td style="padding: 4px 0; color: #64748B;">Estimated Budget:</td><td style="padding: 4px 0; font-weight: 700; color: #059669;">${budget}</td></tr>` : ""}
            </table>
          </div>

          <!-- Next Steps Roadmap -->
          <p style="margin: 0 0 8px 0; font-size: 13px; color: #64748B; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">WHAT HAPPENS NEXT:</p>
          <div style="background-color: #ffffff; border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
            <ol style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.8; font-size: 14px;">
              <li><strong>Scope Analysis:</strong> Reviewing technology stack and feature specs.</li>
              <li><strong>Blueprint Plan:</strong> Preparing wireframe outline & fixed timeline.</li>
              <li><strong>Technical Consultation:</strong> Sending formal proposal & scheduling introductory call.</li>
            </ol>
          </div>

          <p style="font-size: 14px;">If you have any immediate questions or additional documents to share, feel free to reply directly to this email or reach us at <a href="mailto:lumorastudio02@gmail.com" style="color: #F97316; font-weight: 700;">lumorastudio02@gmail.com</a>.</p>

          <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 24px 0;" />

          <p style="margin-bottom: 4px;">Best regards,</p>
          <p style="margin: 0; font-weight: 800; color: #1F2937;">Lumora Technologies Team</p>
          <p style="margin: 2px 0 0 0; font-size: 13px; color: #64748B;">Phone: <strong>+91 96651 19803 / +91 83292 85087</strong></p>
        </div>

        <div style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 18px; text-align: center; font-size: 12px; color: #64748B;">
          © ${new Date().getFullYear()} Lumora Technologies • Pune, Maharashtra, India
        </div>
      </div>
    `;

    // Configure Transporter (using SMTP environment variables from .env.local if present)
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || "lumorastudio02@gmail.com";
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_PASS;

    let emailSentSuccessfully = false;

    if (smtpUser && smtpPass && smtpPass.trim() !== "") {
      const isGmail = smtpHost.includes("gmail") || smtpUser.includes("@gmail.com");
      
      const transporterConfig = isGmail
        ? {
            service: "gmail",
            auth: {
              user: smtpUser,
              pass: smtpPass.replace(/\s+/g, ""), // clean spaces in 16-character app pass
            },
          }
        : {
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          };

      const transporter = nodemailer.createTransport(transporterConfig);

      // 1. Send Lead Reminder Notification to Admin (lumorastudio02@gmail.com)
      try {
        await transporter.sendMail({
          from: `"Lumora Lead Alert" <${smtpUser}>`,
          to: adminEmail,
          replyTo: email,
          subject: isNewsletter 
            ? `🔥 New Newsletter Subscriber: ${email}` 
            : `🚨 [NEW HIGH-PRIORITY LEAD] ${clientName} — ${service}`,
          html: adminHtml,
        });
        console.log(`[SMTP] Sent lead opportunity notification to admin (${adminEmail})`);
        emailSentSuccessfully = true;
      } catch (adminMailErr) {
        console.error("[SMTP Error] Failed to send admin email:", adminMailErr);
      }

      // 2. Send Professional Auto-Reply Email to Client (client's email)
      try {
        await transporter.sendMail({
          from: `"Lumora Technologies" <${smtpUser}>`,
          to: email,
          replyTo: adminEmail,
          subject: isNewsletter
            ? "🚀 Welcome to Lumora Technologies Inner Circle!"
            : "⚡ We Received Your Project Brief — Lumora Technologies",
          html: clientHtml,
        });
        console.log(`[SMTP] Sent client auto-reply email to ${email}`);
        emailSentSuccessfully = true;
      } catch (clientMailErr) {
        console.error("[SMTP Error] Failed to send client email:", clientMailErr);
      }
    }

    // Fallback: If SMTP credentials fail or missing, dispatch via Web3Forms API to lumorastudio02@gmail.com
    if (!emailSentSuccessfully) {
      try {
        const web3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY || "8d7fbfbb-1a55-46f9-8cf0-5c62df5a3c9e",
            name: clientName,
            email,
            company: company || "N/A",
            service: service || "Website Development",
            budget: budget || "N/A",
            message: `[LEAD OPPORTUNITY ALERT]\n\nClient Name: ${clientName}\nClient Email: ${email}\nCompany: ${company || 'N/A'}\nService: ${service}\nMessage: ${message}`,
            subject: `🚨 [NEW LEAD OPPORTUNITY] ${clientName} (${email})`,
            from_name: "Lumora Technologies Web Form",
            to_email: adminEmail,
          }),
        });

        if (web3Res.ok) {
          emailSentSuccessfully = true;
          console.log("Fallback lead email delivered successfully via Web3Forms API to:", adminEmail);
        }
      } catch (fallbackErr) {
        console.error("Web3Forms Fallback Error:", fallbackErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Project scope submitted successfully! Confirmation email dispatched.",
        emailDispatched: emailSentSuccessfully,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Failed to process form submission. Please try again later." },
      { status: 500 }
    );
  }
}
