import dotenv from "dotenv";

dotenv.config();

// Send contact form email using Resend API
export const sendContactEmail = async ({
  firstName,
  lastName,
  email,
  subject,
  message,
}) => {
  try {
    console.log("🔍 Starting email send process...");

    // Validate environment variables
    console.log("📋 Checking environment variables...");
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ Missing RESEND_API_KEY");
      throw new Error("RESEND_API_KEY not configured");
    }
    console.log("✅ RESEND_API_KEY found");

    if (!process.env.EMAIL) {
      console.error("❌ Missing EMAIL:", process.env.EMAIL);
      throw new Error("EMAIL not configured");
    }
    console.log("✅ EMAIL found:", process.env.EMAIL);

    if (!process.env.RECEIVER_EMAIL) {
      console.error("❌ Missing RECEIVER_EMAIL");
      throw new Error("RECEIVER_EMAIL not configured");
    }
    console.log("✅ RECEIVER_EMAIL found:", process.env.RECEIVER_EMAIL);

    // Email content
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #ffa500; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #333;">Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6; color: #555;">
            ${message}
          </p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
          <p>This email was sent from your portfolio contact form.</p>
          <p>You can reply directly to this email to respond to ${firstName}.</p>
        </div>
      </div>
    `;

    console.log("📧 Sending via Resend API...");

    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.EMAIL,
          to: process.env.RECEIVER_EMAIL,
          replyTo: email,
          subject: `Portfolio Contact: ${subject}`,
          html: html,
        }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("❌ Resend API Error:", errorData);
        throw new Error(errorData.message || "Failed to send email via Resend");
      }

      const info = await response.json();

      console.log("✅ Email sent successfully!");
      console.log("   Message ID:", info.id);

      return {
        success: true,
        messageId: info.id,
      };
    } finally {
      clearTimeout(timeoutId);
    }
  } catch (error) {
    console.error("❌ EMAIL SERVICE ERROR");
    console.error("   Error Message:", error.message);
    console.error("   Full Error:", JSON.stringify(error, null, 2));

    let errorMessage = "Failed to send email";

    if (error.name === "AbortError") {
      errorMessage = "Email service connection timeout - please try again";
    } else if (error.message.includes("RESEND_API_KEY")) {
      errorMessage = "Resend API key not configured in .env file";
    } else if (error.message.includes("EMAIL")) {
      errorMessage = "EMAIL not configured in .env file";
    } else if (error.message.includes("RECEIVER_EMAIL")) {
      errorMessage = "RECEIVER_EMAIL not configured in .env file";
    } else if (
      error.message.includes("fetch") ||
      error.code === "ECONNREFUSED"
    ) {
      errorMessage =
        "Network error: Unable to connect to email service. Check your internet connection.";
    } else {
      errorMessage = error.message;
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
};
