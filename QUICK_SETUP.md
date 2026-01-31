# Quick Setup Reference - Hostinger SMTP

## 🔑 Your Configuration:

```
Domain: lifecyclecore.com
From Email: contact@lifecyclecore.com
To Email: contact@lifecyclecore.com
SMTP Host: smtp.hostinger.com
SMTP Port: 465
Encryption: SSL
```

---

## ⚡ Quick Deploy (5 Steps):

### 1. Build React App
```bash
npm run build
```

### 2. Upload Files to Hostinger
- Upload `dist/` contents to `/public_html/`
- Upload `api/contact.php` to `/public_html/api/`
- Create folders: `/uploads/` and `/logs/`

### 3. Update Password in contact.php
```php
// Line 147 (in contact-phpmailer.php)
$mail->Password = 'PUT_YOUR_EMAIL_PASSWORD_HERE';
```

### 4. Set Folder Permissions
```
/public_html/uploads/ → 755
/public_html/logs/ → 755
```

### 5. Test
Visit: `https://lifecyclecore.com/contact`

---

## 📁 Files Created:

1. **`/api/contact.php`** - Simple version (uses PHP mail())
2. **`/api/contact-phpmailer.php`** - Advanced version (uses PHPMailer)

**Recommendation:** Use `contact-phpmailer.php` for better reliability

---

## 🚨 Important:

- ✅ **DO:** Update email password in PHP file
- ✅ **DO:** Test form before going live
- ✅ **DO:** Create `.htaccess` in uploads folder
- ❌ **DON'T:** Share password in code repositories
- ❌ **DON'T:** Set uploads folder to 777

---

## 🔧 If Emails Don't Send:

Try alternative SMTP settings:
```php
$mail->Port = 587;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
```

---

## 📞 Test URLs:

- Website: https://lifecyclecore.com
- Contact Form: https://lifecyclecore.com/contact
- API Endpoint: https://lifecyclecore.com/api/contact.php

---

## ✅ Success Indicators:

1. Form submits without errors
2. Email received at contact@lifecyclecore.com
3. File uploaded to `/uploads/` folder
4. Entry added to `/logs/submissions.log`

---

**Need detailed guide?** → See `HOSTINGER_DEPLOYMENT.md`
