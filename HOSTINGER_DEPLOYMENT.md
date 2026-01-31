# Hostinger Deployment Guide - Complete Setup

## 📦 What You Have:
- ✅ PHP Backend files for contact form
- ✅ Updated React frontend
- ✅ Hostinger SMTP configuration ready

---

## 🚀 Deployment Steps:

### **Step 1: Prepare Your Files**

#### Build React App:
```bash
cd "/home/rahman/Desktop/lifecycle 3/lifecycle-core-solutions"
npm run build
```

This creates a `dist/` folder with your production-ready files.

---

### **Step 2: Upload to Hostinger**

#### **A. Upload Frontend (React Build)**
1. Connect to Hostinger via FTP (FileZilla) or File Manager
2. Go to `/public_html/`
3. Upload ALL files from `dist/` folder to `/public_html/`
4. Your structure should look like:
   ```
   /public_html/
   ├── index.html
   ├── assets/
   │   ├── logo.png
   │   ├── logo-arrow.png
   │   └── ... (all other assets)
   └── ...
   ```

#### **B. Upload Backend (PHP API)**
1. Create folder: `/public_html/api/`
2. Upload `api/contact.php` or `api/contact-phpmailer.php` to this folder
3. Rename to just `contact.php`

#### **C. Create Required Folders**
Create these folders with permissions **755**:
- `/public_html/uploads/`
- `/public_html/logs/`

---

### **Step 3: Configure PHP File**

**IMPORTANT:** Open `/public_html/api/contact.php` and update:

```php
// Line 57: REPLACE THIS
$smtpPassword = 'YOUR_EMAIL_PASSWORD_HERE';

// WITH YOUR ACTUAL EMAIL PASSWORD
$smtpPassword = 'your_actual_password_here';
```

---

### **Step 4: Secure Uploads Folder**

Create file: `/public_html/uploads/.htaccess`

```apache
# Prevent PHP execution in uploads folder
<FilesMatch "\.php$">
    Order Deny,Allow
    Deny from all
</FilesMatch>

# Only allow specific file types
<FilesMatch "\.(pdf|doc|docx|txt|png|jpg|jpeg|gif)$">
    Order Allow,Deny
    Allow from all
</FilesMatch>
```

---

### **Step 5: PHPMailer Setup (Recommended)**

If using `contact-phpmailer.php` (more reliable):

#### **Install PHPMailer via Composer:**

SSH into Hostinger and run:
```bash
cd /home/your_username/public_html
composer require phpmailer/phpmailer
```

OR manually upload PHPMailer:
1. Download from: https://github.com/PHPMailer/PHPMailer
2. Extract and upload to `/public_html/vendor/phpmailer/`

---

### **Step 6: Test Everything**

#### **Test 1: Check PHP File Accessibility**
Visit: `https://lifecyclecore.com/api/contact.php`

You should see:
```json
{"error":"Method not allowed"}
```
This is GOOD! It means the file is accessible.

#### **Test 2: Submit Form**
1. Go to: `https://lifecyclecore.com/contact`
2. Fill out the form
3. Upload a test file
4. Submit

#### **Test 3: Check Email**
- Check `contact@lifecyclecore.com` inbox
- Should receive formatted email with attachment link

#### **Test 4: Check File Upload**
- Visit: `https://lifecyclecore.com/uploads/`
- Should see your uploaded file (or get "Forbidden" - both are fine)

---

### **Step 7: Security Checklist**

- [ ] Email password updated in `contact.php`
- [ ] Uploads folder has `.htaccess` protection
- [ ] Logs folder exists with 755 permissions
- [ ] PHP file is NOT accessible via browser directly
- [ ] Test rate limiting (submit multiple times rapidly)
- [ ] Verify file size limit (try uploading >10MB file)

---

## 🔧 Troubleshooting:

### **Issue: Emails not sending**

**Solution 1:** Verify SMTP credentials
```php
// Test SMTP connection
$mail->SMTPDebug = 2; // Add this line temporarily
```

**Solution 2:** Check Hostinger email limits
- Login to Hostinger panel
- Check email account status
- Verify no sending limits reached

**Solution 3:** Use alternative SMTP port
```php
$mail->Port = 587;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
```

### **Issue: File upload fails**

**Check permissions:**
```bash
chmod 755 /public_html/uploads
chmod 755 /public_html/logs
```

**Check PHP upload settings:**
```php
// Check in contact.php
echo ini_get('upload_max_filesize'); // Should be at least 10M
echo ini_get('post_max_size'); // Should be at least 10M
```

### **Issue: CORS error**

**Update header in contact.php:**
```php
header('Access-Control-Allow-Origin: https://lifecyclecore.com');
// Or for testing:
header('Access-Control-Allow-Origin: *');
```

---

## 📊 File Structure (Final):

```
/public_html/
├── index.html                     # React app entry
├── assets/                        # Images, CSS, JS
│   ├── logo.png
│   ├── volocopter.png
│   └── ...
├── api/
│   └── contact.php               # Backend API
├── uploads/                       # User uploaded files
│   └── .htaccess                 # Security
├── logs/
│   └── submissions.log           # Form logs
└── vendor/                       # PHPMailer (if using)
    └── phpmailer/
```

---

## 🎯 Post-Deployment:

### **Monitor Submissions:**
Check logs file:
```bash
cat /public_html/logs/submissions.log
```

### **View Uploaded Files:**
Via FTP/File Manager:
```
/public_html/uploads/
```

### **Backup Strategy:**
Regular backups of:
- `/uploads/` folder
- `/logs/` folder
- Database (if you add one later)

---

## ✅ Success Checklist:

- [ ] Website loads at lifecyclecore.com
- [ ] Contact form appears correctly
- [ ] Form validation works
- [ ] File upload works (with 10MB limit)
- [ ] Email received at contact@lifecyclecore.com
- [ ] File attachment accessible via link in email
- [ ] Rate limiting prevents spam
- [ ] Logs are being created

---

## 🔐 Security Best Practices:

1. **Change email password regularly**
2. **Monitor logs for suspicious activity**
3. **Keep PHPMailer updated**
4. **Backup uploads folder weekly**
5. **Use strong passwords**
6. **Enable HTTPS (should be automatic on Hostinger)**

---

## 📞 Need Help?

If something doesn't work:
1. Check PHP error logs in Hostinger panel
2. Enable debug mode temporarily
3. Test with simple form data first
4. Verify SMTP credentials are correct

---

**You're all set! 🎉**

Your production-ready contact form with file uploads and unlimited emails is now live!
