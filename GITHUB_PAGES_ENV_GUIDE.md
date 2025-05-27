# Managing Environment Variables for GitHub Pages

GitHub Pages only serves static files, so traditional server-side environment variables don't work. Here's how to properly manage environment variables for your GitHub Pages deployment.

## 🔐 Security First

**NEVER commit sensitive data to your repository!** This includes:
- API keys
- Passwords
- Email credentials
- Database connection strings
- Any private tokens

## 📋 Methods for Environment Variables

### Method 1: GitHub Secrets + Actions (Recommended for Sensitive Data)

This is the most secure approach for sensitive credentials like EmailJS keys.

#### Step 1: Add Secrets to GitHub Repository

1. **Go to your GitHub repository**
2. **Click Settings → Secrets and variables → Actions**
3. **Click "New repository secret"**
4. **Add these secrets**:
   ```
   Name: EMAILJS_SERVICE_ID
   Value: service_abc123

   Name: EMAILJS_TEMPLATE_ID
   Value: template_xyz789

   Name: EMAILJS_PUBLIC_KEY
   Value: abcdefghijklmnop
   ```

#### Step 2: Update Your Deployment Workflow

The workflow file `.github/workflows/deploy.yml` has been created to:
- Pull secrets from GitHub
- Inject them as environment variables during build
- Deploy the built site to GitHub Pages

#### Step 3: Update Your Local Development

For local development, create a `.env` file (this should NOT be committed):

```bash
# .env (add this to .gitignore)
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

### Method 2: Build-Time Configuration

Update your `package.json` to handle different environments:

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "build:production": "REACT_APP_ENV=production react-scripts build",
    "deploy": "npm run build:production && gh-pages -d build"
  }
}
```

### Method 3: Runtime Configuration (Public Data Only)

For non-sensitive configuration, you can use the `public/config.js` file created above.

## 🛠️ Implementation Steps

### Step 1: Update .gitignore

Ensure your `.gitignore` includes:

```gitignore
# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build output
/build
/dist

# Dependencies
node_modules/
```

### Step 2: Update EmailJS Configuration

Your `src/config/emailjs.ts` is already set up to use environment variables:

```typescript
export const emailjsConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
};
```

### Step 3: Set Up GitHub Secrets

1. **Get your EmailJS credentials** from your EmailJS dashboard
2. **Add them as GitHub Secrets** (as shown in Method 1)
3. **Test the deployment** by pushing to your main branch

### Step 4: Local Development Setup

Create a `.env` file for local development:

```bash
# Create .env file (don't commit this)
echo "REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id" > .env
echo "REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id" >> .env
echo "REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key" >> .env
```

## 🚀 Deployment Process

### Automatic Deployment (Recommended)

1. **Push to main branch**
2. **GitHub Actions automatically**:
   - Builds your app with secrets
   - Deploys to GitHub Pages
   - Your environment variables are securely injected

### Manual Deployment

If you prefer manual deployment:

```bash
# Build with environment variables
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🔍 Verification

### Check if Environment Variables are Working

Add this temporary code to verify (remove after testing):

```typescript
// In your Contact component (temporary - remove after testing)
console.log('EmailJS Config:', {
  serviceId: emailjsConfig.serviceId,
  templateId: emailjsConfig.templateId,
  publicKey: emailjsConfig.publicKey?.substring(0, 5) + '...' // Only show first 5 chars
});
```

### Test the Contact Form

1. **Deploy your site**
2. **Open browser developer tools**
3. **Check console for the config log**
4. **Test the contact form**
5. **Verify emails are received**

## 🛡️ Security Best Practices

### Do's:
- ✅ Use GitHub Secrets for sensitive data
- ✅ Add `.env` to `.gitignore`
- ✅ Use `REACT_APP_` prefix for React environment variables
- ✅ Validate environment variables in your code
- ✅ Use different secrets for different environments

### Don'ts:
- ❌ Never commit `.env` files
- ❌ Don't put secrets in `public/` folder
- ❌ Don't hardcode credentials in source code
- ❌ Don't use sensitive data in client-side code if avoidable

## 🔧 Troubleshooting

### Environment Variables Not Loading

1. **Check variable names** - Must start with `REACT_APP_`
2. **Restart development server** after adding new variables
3. **Verify GitHub Secrets** are correctly named
4. **Check build logs** in GitHub Actions

### GitHub Actions Failing

1. **Check workflow file** syntax
2. **Verify secret names** match in workflow and repository
3. **Check build logs** for specific errors
4. **Ensure all dependencies** are in `package.json`

### Contact Form Not Working

1. **Check browser console** for errors
2. **Verify EmailJS credentials** are correct
3. **Test EmailJS service** independently
4. **Check network tab** for failed requests

## 📚 Additional Resources

- [GitHub Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [React Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [EmailJS Documentation](https://www.emailjs.com/docs/)

## 🎯 Quick Setup Checklist

- [ ] Add EmailJS credentials to GitHub Secrets
- [ ] Create `.env` file for local development (don't commit)
- [ ] Update `.gitignore` to exclude `.env`
- [ ] Test locally with `npm start`
- [ ] Push to main branch to trigger deployment
- [ ] Test contact form on live site
- [ ] Verify emails are received 