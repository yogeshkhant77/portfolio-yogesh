import express from "express";
import { sendContactEmail } from "../services/emailService.js";
import { validateContactForm } from "../utils/validation.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("✉️ Contact form submission received:", req.body);

    const { firstName, lastName, email, subject, message } = req.body;

    // Validate input
    console.log("🔍 Validating contact form...");
    const validation = validateContactForm({
      firstName,
      lastName,
      email,
      subject,
      message,
    });

    if (!validation.isValid) {
      console.warn("❌ Validation failed:", validation.errors);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validation.errors,
      });
    }

    console.log("✅ Validation passed");

    // Send email
    console.log("📤 Calling sendContactEmail...");
    const emailResult = await sendContactEmail({
      firstName,
      lastName,
      email,
      subject: subject || "No Subject",
      message,
    });

    console.log("📬 Email service response:", emailResult);

    if (emailResult.success) {
      console.log("✅ SUCCESS - Email sent successfully!");
      res.status(200).json({
        success: true,
        message: "Email sent successfully!",
      });
    } else {
      console.error("❌ Email send failed:", emailResult.error);
      return res.status(500).json({
        success: false,
        message: emailResult.error || "Failed to send email",
      });
    }
  } catch (error) {
    console.error("❌ Contact form error:", error.message);
    console.error("   Stack:", error.stack);
    res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
});

export { router as contactRouter };
