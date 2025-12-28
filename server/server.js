import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { contactRouter } from "./routes/contact.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      // Allow localhost and Vercel deployments
      if (
        allowedOrigins.indexOf(origin) !== -1 ||
        (origin && origin.includes("vercel.app"))
      ) {
        callback(null, true);
      } else {
        callback(null, true); // Allow all origins for now
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Portfolio API Server is running",
    endpoints: {
      health: "/api/health",
      contact: "/api/contact",
    },
  });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Test Resend API connectivity
app.get("/api/test-email", async (req, res) => {
  console.log("🧪 Testing Resend API...");
  try {
    if (!process.env.RESEND_API_KEY) {
      return res.status(400).json({
        success: false,
        error: "RESEND_API_KEY not set",
      });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: process.env.EMAIL || "onboarding@resend.dev",
        to: process.env.RECEIVER_EMAIL || "khantyogesh021@gmail.com",
        subject: "Test Email from Portfolio",
        html: "<p>This is a test email</p>",
      }),
    });

    const result = await response.json();
    console.log("Resend API Response:", result);

    res.json({
      status: response.status,
      success: response.ok,
      data: result,
    });
  } catch (error) {
    console.error("Test error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Routes
app.use("/api/contact", contactRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
