import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log("🔍 Testing Gmail Configuration...\n");

// Check environment variables
console.log("📋 Environment Variables Check:");
console.log(`   EMAIL: ${process.env.EMAIL ? "✅ Set" : "❌ Missing"}`);
console.log(
  `   APP_PASSWORD: ${process.env.APP_PASSWORD ? "✅ Set" : "❌ Missing"}`
);
console.log(
  `   RECEIVER_EMAIL: ${process.env.RECEIVER_EMAIL ? "✅ Set" : "❌ Missing"}\n`
);

if (!process.env.EMAIL || !process.env.APP_PASSWORD) {
  console.error("❌ Missing required environment variables!");
  process.exit(1);
}

// Create transporter with explicit Gmail SMTP settings
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
  connectionTimeout: 10000,
  socketTimeout: 10000,
});

console.log("🔗 Testing Connection to Gmail SMTP...");

// Verify connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Connection FAILED:");
    console.error(`   Error: ${error.message}`);
    console.error(`   Code: ${error.code}`);
    console.error(`   Command: ${error.command}`);
    console.error("\n📝 Troubleshooting Tips:");
    console.error("   1. Verify EMAIL is correct (must have @gmail.com)");
    console.error(
      "   2. Check APP_PASSWORD - must be 16 characters from Google Account Settings"
    );
    console.error("   3. Ensure 2-Factor Authentication is enabled on Gmail");
    console.error("   4. Go to: https://myaccount.google.com/apppasswords");
    console.error("   5. Check your internet connection");
    process.exit(1);
  } else {
    console.log("✅ Connection to Gmail SMTP Successful!\n");
    sendTestEmail();
  }
});

// Send test email
const sendTestEmail = async () => {
  try {
    console.log("📧 Sending Test Email...");
    const info = await transporter.sendMail({
      from: `"Test" <${process.env.EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "✅ Portfolio Contact Form - Test Email",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #27ae60;">✅ Your Contact Form is Working!</h2>
          <p>This is a test email from your portfolio backend.</p>
          <p><strong>Test Details:</strong></p>
          <ul>
            <li>Gmail SMTP Connection: ✅ Working</li>
            <li>Authentication: ✅ Successful</li>
            <li>Email Service: ✅ Ready</li>
          </ul>
          <p style="color: #888; font-size: 12px; margin-top: 30px;">
            If you received this email, your contact form is fully functional!
          </p>
        </div>
      `,
    });

    console.log("✅ Test Email Sent Successfully!");
    console.log(`   Message ID: ${info.messageId}`);
    console.log(`   Response: ${info.response}`);
    console.log("\n✨ Your contact form setup is working correctly!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to Send Test Email:");
    console.error(`   Error: ${error.message}`);
    console.error(`   Code: ${error.code}`);
    process.exit(1);
  }
};
