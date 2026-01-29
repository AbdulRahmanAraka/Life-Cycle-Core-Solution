# Deployment Guide with Environment Variables

## ✅ What I've Done:

1. ✅ Created `.env` file with your EmailJS credentials
2. ✅ Updated `.gitignore` to exclude `.env` from Git
3. ✅ Updated `ContactPage.tsx` to use environment variables
4. ✅ Created `.env.example` for reference

## 🚀 How to Deploy:

### For Vercel:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add contact form with environment variables"
   git push origin main
   ```

2. **Go to Vercel.com** and import your repository

3. **Add Environment Variables** in Vercel:
   - Go to Project Settings → Environment Variables
   - Add these 3 variables:
     ```
     VITE_EMAILJS_SERVICE_ID = service_v4exnr5
     VITE_EMAILJS_TEMPLATE_ID = template_8ye7lxb
     VITE_EMAILJS_PUBLIC_KEY = Mhhj-cnv-CDp8_Fmq
     ```

4. **Deploy** - Vercel will build and deploy automatically!

### For Netlify:

1. **Push to GitHub** (same as above)

2. **Go to Netlify.com** and import your repository

3. **Add Environment Variables**:
   - Go to Site Settings → Environment Variables
   - Add the same 3 variables as above

4. **Deploy** - Netlify will build automatically!

## 🧪 Testing:

### Local Testing:
1. **Restart your dev server**:
   ```bash
   npm run dev
   ```
2. Test the form - it should work exactly as before!

### Production Testing:
1. After deployment, go to your live site
2. Fill out the contact form
3. Check your email at contact@lifecyclecore.com

## 🔒 Security Benefits:

✅ **Credentials not in code** - They're in `.env` file  
✅ **Not committed to Git** - `.env` is in `.gitignore`  
✅ **Different keys per environment** - Can use different keys for dev/prod  
✅ **Easy to update** - Change in one place (Vercel/Netlify dashboard)

## 📝 Notes:

- `.env` file only works locally
- For production, you MUST add variables to Vercel/Netlify
- `.env.example` is committed to Git (safe) for reference
- Your `.env` file stays on your computer only

## ⚠️ Important:

**Your dev server needs to be restarted** to load the new environment variables:
```bash
npm run dev
```

## Next Steps:

1. ✅ Restart dev server: `npm run dev`
2. ✅ Test form locally
3. ✅ Push to GitHub
4. ✅ Deploy to Vercel/Netlify
5. ✅ Add environment variables in dashboard
6. ✅ Test on live site

---

**All set!** Your form now uses environment variables securely! 🎉
