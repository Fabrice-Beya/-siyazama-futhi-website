#!/bin/bash

# Setup script for local environment variables
# Run this script to create your .env file for local development

echo "🚀 Setting up environment variables for local development..."
echo ""

# Check if .env already exists
if [ -f ".env" ]; then
    echo "⚠️  .env file already exists!"
    read -p "Do you want to overwrite it? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Setup cancelled."
        exit 1
    fi
fi

echo "📧 Please enter your EmailJS credentials:"
echo "(You can get these from https://www.emailjs.com/)"
echo ""

read -p "EmailJS Service ID: " SERVICE_ID
read -p "EmailJS Template ID: " TEMPLATE_ID
read -p "EmailJS Public Key: " PUBLIC_KEY

# Create .env file
cat > .env << EOF
# EmailJS Configuration for Local Development
# DO NOT commit this file to version control!

REACT_APP_EMAILJS_SERVICE_ID=$SERVICE_ID
REACT_APP_EMAILJS_TEMPLATE_ID=$TEMPLATE_ID
REACT_APP_EMAILJS_PUBLIC_KEY=$PUBLIC_KEY
EOF

echo ""
echo "✅ .env file created successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Start your development server: npm start"
echo "2. Test the contact form locally"
echo "3. Add the same credentials to GitHub Secrets for production"
echo ""
echo "🔒 Security reminder:"
echo "- Never commit the .env file to version control"
echo "- Use GitHub Secrets for production deployment"
echo "- Keep your EmailJS credentials secure"
echo ""
echo "📚 For more information, see:"
echo "- HOSTINGER_EMAIL_SETUP.md"
echo "- GITHUB_PAGES_ENV_GUIDE.md" 