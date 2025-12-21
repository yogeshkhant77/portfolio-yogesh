# Contact Form Email Service Setup Guide

This guide will help you set up the Nodemailer email service for your portfolio contact form.

## Prerequisites

- Node.js (v16 or higher)
- A Gmail account
- Gmail App Password (see instructions below)

## Step 1: Install Backend Dependencies

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

## Step 2: Generate Gmail App Password

**Important:** You cannot use your regular Gmail password. You need to generate an App Password.

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification**
   - If 2-Step Verification is not enabled, enable it first
3. Scroll down and click on **App passwords**
   - Direct link: https://myaccount.google.com/apppasswords
4. Select **Mail** as the app
5. Select **Other (Custom name)** as the device
6. Enter a name like "Portfolio Contact Form"
7. Click **Generate**
8. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

## Step 3: Configure Environment Variables

1. In the `server` directory, create a `.env` file:

```bash
cd server
touch .env
```

2. Copy the contents from `server/env.example.txt` and fill in your details:

```env
# Server Configuration
PORT=5000
FRONTEND_URL=http://localhost:5173

# Gmail SMTP Configuration
EMAIL=your-email@gmail.com
APP_PASSWORD=your-16-character-app-password
RECEIVER_EMAIL=your-email@gmail.com
```

**Example:**
```env
PORT=5000
FRONTEND_URL=http://localhost:5173
EMAIL=khantyogesh021@gmail.com
APP_PASSWORD=abcd efgh ijkl mnop
RECEIVER_EMAIL=khantyogesh021@gmail.com
```

**Important Notes:**
- Remove spaces from the App Password when pasting (e.g., `abcdefghijklmnop`)
- `EMAIL` and `RECEIVER_EMAIL` can be the same if you want to receive emails at your Gmail address
- Never commit the `.env` file to git (it's already in `.gitignore`)

## Step 4: Start the Backend Server

In the `server` directory:

```bash
# Development mode (with auto-reload)
npm run dev

# Or production mode
npm start
```

The server should start on `http://localhost:5000`

## Step 5: Start the Frontend

In the root directory:

```bash
npm run dev
```

The frontend should start on `http://localhost:5173`

## Step 6: Test the Contact Form

1. Open your portfolio in the browser
2. Navigate to the Contact page
3. Fill out the form and submit
4. Check your email inbox (and spam folder) for the message

## Troubleshooting

### Error: "EAUTH" - Authentication Failed

**Solution:**
- Verify you're using the App Password, not your regular Gmail password
- Ensure 2-Step Verification is enabled
- Regenerate the App Password if needed
- Check that there are no extra spaces in the `.env` file

### Error: "ECONNECTION" - Connection Error

**Solution:**
- Check your internet connection
- Verify Gmail SMTP is accessible
- Check firewall settings
- Try again after a few minutes

### Email Not Received

**Solution:**
- Check your spam/junk folder
- Verify `RECEIVER_EMAIL` in `.env` is correct
- Check server console logs for errors
- Test with a different email address

### CORS Error

**Solution:**
- Ensure `FRONTEND_URL` in `.env` matches your frontend URL
- Check that the backend server is running
- Verify the API URL in the frontend matches the backend port

## Production Deployment

### Environment Variables

When deploying to production (e.g., Heroku, Vercel, Railway):

1. Set environment variables in your hosting platform's dashboard
2. Update `FRONTEND_URL` to your production frontend URL
3. Keep `EMAIL`, `APP_PASSWORD`, and `RECEIVER_EMAIL` the same

### Example for Heroku:

```bash
heroku config:set EMAIL=your-email@gmail.com
heroku config:set APP_PASSWORD=your-app-password
heroku config:set RECEIVER_EMAIL=your-email@gmail.com
heroku config:set FRONTEND_URL=https://your-portfolio.com
heroku config:set PORT=5000
```

### Example for Railway/Render:

Add the environment variables in the platform's dashboard:
- `EMAIL`
- `APP_PASSWORD`
- `RECEIVER_EMAIL`
- `FRONTEND_URL`
- `PORT`

## Security Best Practices

1. ✅ Never commit `.env` file to git
2. ✅ Use App Passwords, not regular passwords
3. ✅ Keep your App Password secret
4. ✅ Enable 2-Step Verification on Gmail
5. ✅ Regularly rotate App Passwords
6. ✅ Use environment variables for all sensitive data
7. ✅ Validate and sanitize all user inputs (already implemented)

## API Endpoints

### POST /api/contact

Submit contact form.

**Request:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "This is a test message"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

**Error Response:**
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

## Support

If you encounter any issues, check:
1. Server console logs
2. Browser console for frontend errors
3. Network tab in browser DevTools
4. Email service status

For more details, see `server/README.md`.

