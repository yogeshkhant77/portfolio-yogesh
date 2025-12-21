# Quick Start Guide - Contact Form Email Service

## 🚀 Quick Setup (5 minutes)

### 1. Install Backend Dependencies
```bash
cd server
npm install
```

### 2. Get Gmail App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select **Mail** → **Other** → Name it "Portfolio"
3. Copy the 16-character password

### 3. Create `.env` File
In the `server` directory, create `.env`:
```env
PORT=5000
FRONTEND_URL=http://localhost:5173
EMAIL=khantyogesh021@gmail.com
APP_PASSWORD=paste-your-16-char-password-here
RECEIVER_EMAIL=khantyogesh021@gmail.com
```

### 4. Start Backend Server
```bash
cd server
npm run dev
```

### 5. Start Frontend (in a new terminal)
```bash
npm run dev
```

### 6. Test It!
- Go to http://localhost:5173
- Navigate to Contact page
- Fill out and submit the form
- Check your email!

## 📝 Important Notes

- Use **App Password**, not your regular Gmail password
- Remove spaces from App Password when pasting
- Never commit `.env` file to git
- Check spam folder if email not received

## 🐛 Troubleshooting

**"EAUTH" Error?**
→ Use App Password, not regular password

**Email not received?**
→ Check spam folder

**CORS Error?**
→ Make sure backend is running on port 5000

For detailed setup, see `SETUP_GUIDE.md`

