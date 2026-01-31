# Email Authentication Setup Guide
## SPF, DKIM, and DMARC for lifecyclecore.com

---

## 📧 Why You Need These:

- **SPF** - Prevents email spoofing (who can send emails from your domain)
- **DKIM** - Adds digital signature to verify email authenticity  
- **DMARC** - Tells receiving servers what to do with failed emails

**Benefits:**
- ✅ Better email deliverability (avoid spam folder)
- ✅ Protect your domain from spoofing
- ✅ Build sender reputation
- ✅ Professional email setup

---

## 🚀 Quick Setup (3 Steps):

### **Step 1: Access Hostinger DNS**
1. Login to **Hostinger Panel**
2. **Domains** → **lifecyclecore.com** → **DNS/Name Servers**

### **Step 2: Add SPF Record**
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.hostinger.com ~all
```

### **Step 3: Add DMARC Record**
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@lifecyclecore.com; pct=100
```

### **Step 4: Enable DKIM**
1. **Emails** → Click on your email → **Settings**
2. Find **"Email Authentication"** or **"DKIM"**
3. Click **"Enable DKIM"** (Hostinger auto-configures)

**Done!** Wait 1-2 hours for DNS propagation.

---

## ✅ Verification (After 2 Hours):

### **Check All Records:**
- SPF: https://mxtoolbox.com/spf.aspx → Enter `lifecyclecore.com`
- DKIM: https://mxtoolbox.com/dkim.aspx → Selector: `default`, Domain: `lifecyclecore.com`
- DMARC: https://mxtoolbox.com/dmarc.aspx → Enter `lifecyclecore.com`

### **Test Email Deliverability:**
- Visit: https://www.mail-tester.com
- Send test email from your contact form
- Aim for 9-10/10 score

---

## 📋 Complete DNS Records:

| Type | Name/Host | Value | TTL |
|------|-----------|-------|-----|
| TXT | @ | `v=spf1 include:_spf.hostinger.com ~all` | 14400 |
| TXT | _dmarc | `v=DMARC1; p=quarantine; rua=mailto:dmarc@lifecyclecore.com; pct=100` | 14400 |
| TXT | default._domainkey | (Auto-added by Hostinger when you enable DKIM) | 14400 |

---

## 🎯 Expected Results:

### **Before Setup:**
- Emails may go to spam
- No sender authentication
- Email score: 5-7/10

### **After Setup:**
- Better inbox delivery
- Professional sender reputation
- Email score: 9-10/10
- Domain protection

---

## 🔧 Troubleshooting:

### **SPF Not Working?**
- Wait 24 hours for DNS propagation
- Check no duplicate SPF records exist
- Verify value starts with `v=spf1`

### **DKIM Not Found?**
- Contact Hostinger support to enable
- Check Emails → Settings → DKIM section
- Usually enabled automatically on newer accounts

### **Still Going to Spam?**
- Ensure SPF, DKIM, DMARC all pass
- Check email content (avoid spam keywords)
- Build sender reputation (takes 1-2 weeks)
- Verify "From" address matches domain

---

## 📊 DMARC Policy Guide:

### **p=none (Start Here)**
```
v=DMARC1; p=none; rua=mailto:dmarc@lifecyclecore.com
```
- Monitor only
- Good for testing (1 week)

### **p=quarantine (Recommended)**
```
v=DMARC1; p=quarantine; rua=mailto:dmarc@lifecyclecore.com; pct=100
```
- Move suspicious emails to spam
- Balanced protection

### **p=reject (Maximum Security)**
```
v=DMARC1; p=reject; rua=mailto:dmarc@lifecyclecore.com; pct=100
```
- Reject failed emails completely
- Use after successful testing

---

## 💡 Pro Tips:

1. Start with `p=none` for 1 week to monitor
2. Check DMARC reports for issues
3. Upgrade to `p=quarantine` after testing
4. Test deliverability monthly
5. Create `dmarc@lifecyclecore.com` to receive reports

---

## ✅ Final Checklist:

- [ ] SPF record added
- [ ] DKIM enabled in Hostinger
- [ ] DMARC record added
- [ ] Wait 2-24 hours for propagation
- [ ] Verify on MXToolbox
- [ ] Test with mail-tester.com
- [ ] Send test email from contact form
- [ ] Verify emails reach inbox

---

**Your emails will now have enterprise-level authentication!** ✉️🔒
