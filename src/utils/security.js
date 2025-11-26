export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;

  return input
    .replace(/[<>]/g, '')
    .trim()
    .substring(0, 1000);
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  if (!phone) return true;
  const phoneRegex = /^[\d\s\-+()]+$/;
  return phoneRegex.test(phone) && phone.length >= 10;
};

export const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

export const preventXSS = (html) => {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

export const getClientInfo = () => {
  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    timestamp: new Date().toISOString(),
  };
};

export const logSecurityEvent = (eventType, details) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Security Event] ${eventType}:`, details);
  }
};
