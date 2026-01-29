# Quick EmailJS Setup - Test Emails in 2 Minutes!

This is the FASTEST way to test if emails are working. No backend needed!

## Step 1: Create EmailJS Account (1 minute)

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** (it's FREE!)
3. Sign up with Google/GitHub or Email
4. Confirm your email

## Step 2: Add Email Service (30 seconds)

1. In EmailJS dashboard, click **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (easiest option)
4. Click **Connect Account**
5. Select your Google account
6. Give it a name like "LCS Contact Form"
7. **Copy the Service ID** (looks like: `service_xyz123`)

## Step 3: Create Email Template (30 seconds)

1. Click **Email Templates** in sidebar
2. Click **Create New Template**
3. Use this template:

**Template Name:** `contact_form`

**Subject:** `New Contact from {{from_name}}`

**Content:**
```
New consultation request from your website!

Full Name: {{from_name}}
Company: {{company_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

4. Set **To Email** to: `contact@lifecyclecore.com`
5. Click **Save**
6. **Copy the Template ID** (looks like: `template_xyz123`)

## Step 4: Get Public Key (10 seconds)

1. Click **Account** in sidebar
2. Scroll down to **API Keys**
3. **Copy the Public Key** (looks like: `abc123XYZ-abc123`)

## Step 5: Update Your Website (10 seconds)

Open `pages/ContactPage.tsx` and replace:

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID';     // Paste your Service ID here
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';   // Paste your Template ID here
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';     // Paste your Public Key here
```

## Step 6: TEST IT! 🚀

1. Save the file
2. Go to your contact page
3. Fill out the form
4. Click Submit
5. **Check contact@lifecyclecore.com inbox!**

## ✅ That's It!

You should receive an email at `contact@lifecyclecore.com` immediately!

## Free Tier Limits

- ✅ 200 emails/month (FREE forever)
- ✅ No credit card required
- ✅ Perfect for testing and small sites

## Troubleshooting

**Not receiving emails?**
- Check spam folder
- Verify email is `contact@lifecyclecore.com` in template
- Check EmailJS dashboard for delivery logs

**Form not submitting?**
- Open browser console (F12) for errors
- Verify all 3 IDs are correct
- Make sure EmailJS package is installed

## Want Google Sheets Too?

After confirming emails work, you can:
1. Keep EmailJS for emails (super reliable)
2. Add Google Sheets separately following `FORM_SETUP_GUIDE.md`

---

**Total Setup Time: 2 minutes**  
**Cost: FREE**  
**Perfect for: Quick testing & production use**
