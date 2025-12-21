// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate contact form data
export const validateContactForm = ({ firstName, lastName, email, subject, message }) => {
  const errors = {};

  // First name validation
  if (!firstName || firstName.trim().length === 0) {
    errors.firstName = 'First name is required';
  } else if (firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  } else if (firstName.trim().length > 50) {
    errors.firstName = 'First name must be less than 50 characters';
  }

  // Last name validation
  if (!lastName || lastName.trim().length === 0) {
    errors.lastName = 'Last name is required';
  } else if (lastName.trim().length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  } else if (lastName.trim().length > 50) {
    errors.lastName = 'Last name must be less than 50 characters';
  }

  // Email validation
  if (!email || email.trim().length === 0) {
    errors.email = 'Email is required';
  } else if (!EMAIL_REGEX.test(email.trim())) {
    errors.email = 'Please enter a valid email address';
  } else if (email.length > 100) {
    errors.email = 'Email must be less than 100 characters';
  }

  // Subject validation (optional but if provided, validate length)
  if (subject && subject.trim().length > 200) {
    errors.subject = 'Subject must be less than 200 characters';
  }

  // Message validation
  if (!message || message.trim().length === 0) {
    errors.message = 'Message is required';
  } else if (message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (message.length > 2000) {
    errors.message = 'Message must be less than 2000 characters';
  }

  // Sanitize input (basic XSS prevention)
  const sanitizeInput = (input) => {
    if (typeof input !== 'string') return '';
    return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  };

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitizedData: {
      firstName: firstName ? sanitizeInput(firstName) : '',
      lastName: lastName ? sanitizeInput(lastName) : '',
      email: email ? sanitizeInput(email).toLowerCase() : '',
      subject: subject ? sanitizeInput(subject) : '',
      message: message ? sanitizeInput(message) : ''
    }
  };
};

