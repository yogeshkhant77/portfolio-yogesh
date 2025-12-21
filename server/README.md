# Portfolio Backend API

Backend server for handling contact form submissions via email using Nodemailer.

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:
   - `EMAIL`: Your Gmail address
   - `APP_PASSWORD`: Gmail App Password (see below)
   - `RECEIVER_EMAIL`: Email address to receive contact form submissions
   - `PORT`: Server port (default: 5000)
   - `FRONTEND_URL`: Frontend URL (default: http://localhost:5173)

### 3. Generate Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable it if not already enabled)
3. Go to **App passwords**: https://myaccount.google.com/apppasswords
4. Select **Mail** and **Other (Custom name)** → Enter "Portfolio Contact Form"
5. Click **Generate**
6. Copy the 16-character password and paste it into your `.env` file as `APP_PASSWORD`

**Important:** Use the App Password, NOT your regular Gmail password.

### 4. Run the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000` (or your configured PORT).

## API Endpoints

### POST /api/contact

Submit a contact form.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "This is a test message"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error message",
  "errors": {
    "email": "Please enter a valid email address"
  }
}
```

### GET /api/health

Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Security Features

- Input validation and sanitization
- XSS prevention
- CORS configuration
- Environment variable protection
- Error handling with user-friendly messages

## Troubleshooting

### "EAUTH" Error
- Verify your Gmail App Password is correct
- Ensure 2-Step Verification is enabled
- Check that you're using App Password, not regular password

### "ECONNECTION" Error
- Check your internet connection
- Verify Gmail SMTP settings
- Check firewall settings

### Email Not Received
- Check spam folder
- Verify RECEIVER_EMAIL is correct
- Check server logs for errors

