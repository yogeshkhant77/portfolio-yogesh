import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });
};

// Send contact form email using nodemailer
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
    if (!process.env.EMAIL) {
      console.error("❌ Missing EMAIL:", process.env.EMAIL);
      throw new Error("EMAIL not configured");
    }
    console.log("✅ EMAIL found:", process.env.EMAIL);

    if (!process.env.APP_PASSWORD) {
      console.error("❌ Missing APP_PASSWORD");
      throw new Error("APP_PASSWORD not configured");
    }
    console.log("✅ APP_PASSWORD found");

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

    console.log("📧 Creating Gmail transporter...");
    const transporter = createTransporter();

    console.log("🔗 Verifying transporter connection...");
    await transporter.verify();
    console.log("✅ Transporter verified successfully");

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: html,
    };

    console.log("📤 Sending email with options:", {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
    });

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully!");
    console.log("   Message ID:", info.messageId);
    console.log("   Response:", info.response);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("❌ EMAIL SERVICE ERROR");
    console.error("   Error Code:", error.code);
    console.error("   Error Message:", error.message);
    console.error("   Full Error:", JSON.stringify(error, null, 2));

    let errorMessage = "Failed to send email";

    if (error.code === "EAUTH" || error.message.includes("Invalid login")) {
      errorMessage =
        "Gmail login failed. Check EMAIL and APP_PASSWORD are correct. Use App Password, not regular password.";
    } else if (error.code === "ECONNECTION") {
      errorMessage =
        "Cannot connect to Gmail server. Check internet connection.";
    } else if (error.message.includes("EMAIL")) {
      errorMessage = "EMAIL not configured in .env file";
    } else if (error.message.includes("APP_PASSWORD")) {
      errorMessage = "APP_PASSWORD not configured in .env file";
    } else if (error.message.includes("RECEIVER_EMAIL")) {
      errorMessage = "RECEIVER_EMAIL not configured in .env file";
    } else {
      errorMessage = error.message;
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
};
