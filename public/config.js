// Public configuration - only put non-sensitive data here
// This file will be publicly accessible on GitHub Pages
window.APP_CONFIG = {
  // Non-sensitive configuration
  apiUrl: 'https://api.siyazamafuthi.com',
  appName: 'Siyazama Futhi',
  version: '1.0.0',
  
  // For EmailJS, you'll need to use GitHub Secrets instead
  // as these are sensitive credentials
  emailjs: {
    // These will be injected during build from GitHub Secrets
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  }
}; 