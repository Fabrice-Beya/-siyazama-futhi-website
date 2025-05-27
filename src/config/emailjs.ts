// EmailJS Configuration for Hostinger Webmail
// To set up EmailJS with Hostinger:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Add a Custom SMTP service with your Hostinger email settings:
//    - SMTP Server: smtp.hostinger.com
//    - Port: 587 (TLS)
//    - Username: your-email@siyazamafuthi.com
//    - Password: your email password
// 3. Create an email template with the variables listed below
// 4. Get your Service ID, Template ID, and Public Key
// 5. Update the values below

// For production, use environment variables:
export const emailjsConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
};

// For development/testing, uncomment and update with your actual credentials:
// export const emailjsConfig = {
//   serviceId: 'service_xxxxxxx',    // Your EmailJS Service ID
//   templateId: 'template_xxxxxxx',  // Your EmailJS Template ID
//   publicKey: 'xxxxxxxxxxxxxxx'     // Your EmailJS Public Key
// };

// Template variables that will be sent to EmailJS:
// - {{from_name}} - sender's name
// - {{from_email}} - sender's email
// - {{municipality}} - organization name
// - {{phone}} - phone number
// - {{subject}} - message subject
// - {{message}} - message content
// - {{reply_to}} - reply-to email (same as from_email)

// The emails will be sent to:
// - nomkhosi.khumalo@siyazamafuthi.com
// - fabrice.beya@siyazamafuthi.com 