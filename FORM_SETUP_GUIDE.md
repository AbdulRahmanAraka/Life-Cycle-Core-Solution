# Form Submission Setup Guide

This guide will help you set up form submissions to send data to **contact@lifecyclecore.com** and save it in **Google Sheets**.

## Setup Steps

### 1. Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "LCS Contact Form Submissions"

### 2. Add Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy the entire code from `google-apps-script.js` file
4. Paste it into the Apps Script editor
5. **Important**: Update the email address on line 8:
   ```javascript
   const EMAIL_TO = 'contact@lifecyclecore.com';
   ```
6. Click the **Save** icon (💾)
7. Name your project "LCS Form Handler"

### 3. Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "LCS Contact Form"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Grant Permissions**:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" → "Go to [Project Name] (unsafe)"
   - Click "Allow"
7. **Copy the Web App URL** (it will look like: `https://script.google.com/macros/s/...../exec`)

### 4. Update Frontend Code

1. Open `pages/ContactPage.tsx`
2. Find line 21: `const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your Web App URL
4. Save the file

### 5. Test the Form

1. Go to your website's contact page
2. Fill out the form with test data
3. Click "Submit Request"
4. Check:
   - ✅ Email sent to contact@lifecyclecore.com
   - ✅ Data appears in Google Sheet
   - ✅ Success message shows on website

## What Happens When Form is Submitted

1. ✉️ **Email Notification**: Professional HTML email sent to `contact@lifecyclecore.com` with all form details
2. 📊 **Google Sheet**: Data automatically saved with timestamp
3. ✅ **User Confirmation**: Success message displayed on website

## Email Template Features

- Professional design with your brand colors
- All form data clearly displayed
- Direct reply button
- Mobile-friendly layout

## Google Sheet Features

- Automatic headers (Timestamp, Full Name, Company Name, Work Email, Project Overview)
- Auto-formatted columns
- Color-coded header row
- Chronological order (newest first)

## Troubleshooting

### Form not submitting?
- Check browser console for errors (F12)
- Verify Web App URL is correct in ContactPage.tsx
- Ensure Web App is deployed with "Anyone" access

### Not receiving emails?
- Check spam/junk folder
- Verify EMAIL_TO address in script
- Check Google Apps Script execution logs (View → Executions)

### Data not in Google Sheet?
- Open Apps Script and check "Executions" tab for errors
- Ensure sheet permissions are correct
- Try redeploying the Web App

## Security Notes

- The script runs under your Google account
- Only you can access the Google Sheet
- No sensitive data is exposed in frontend code
- Form uses HTTPS for secure transmission

## Updating the Script

If you need to make changes:

1. Edit the code in Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click the edit icon (pencil) next to your deployment
4. Click **Deploy**
5. No need to update the URL in frontend

## Additional Features (Optional)

You can enhance the script to:
- Send auto-reply to the user
- Add more fields to the form
- Filter spam submissions
- Integrate with CRM systems
- Set up response templates

## Support

If you encounter any issues, check:
- Apps Script execution logs
- Browser console errors
- Email delivery logs in Google Admin (if using Google Workspace)

---

**Created for**: Lifecycle Core Solutions  
**Contact**: contact@lifecyclecore.com
