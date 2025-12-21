import express from 'express';
import { sendContactEmail } from '../services/emailService.js';
import { validateContactForm } from '../utils/validation.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log('Contact form submission received:', req.body);
    
    const { firstName, lastName, email, subject, message } = req.body;

    // Validate input
    const validation = validateContactForm({
      firstName,
      lastName,
      email,
      subject,
      message
    });

    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validation.errors
      });
    }

    // Send email
    const emailResult = await sendContactEmail({
      firstName,
      lastName,
      email,
      subject: subject || 'No Subject',
      message
    });

    if (emailResult.success) {
      res.status(200).json({
        success: true,
        message: 'Email sent successfully!'
      });
    } else {
      throw new Error(emailResult.error || 'Failed to send email');
    }
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    });
  }
});

export { router as contactRouter };

