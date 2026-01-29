# Deploy to Vercel - Complete Step-by-Step Guide

## 🚀 Step 1: Sign Up / Log In to Vercel

1. Go to https://vercel.com
2. Click **"Sign Up"** (if new) or **"Log In"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

---

## 📦 Step 2: Import Your Project

### Option A: From Dashboard (Recommended)

1. After logging in, you'll see the Vercel dashboard
2. Click the **"Add New..."** button (top right)
3. Select **"Project"**
4. You'll see a list of your GitHub repositories
5. Find **"Life-Cycle-Core-Solution"** (or your repo name)
6. Click **"Import"** next to it

### Option B: Direct Link

Go to: https://vercel.com/new

---

## ⚙️ Step 3: Configure Project Settings

After clicking Import, you'll see configuration options:

### Basic Settings:
```
Project Name: life-cycle-core-solution
Framework Preset: Vite (should auto-detect)
Root Directory: ./
```

### Build Settings (Should auto-fill):
```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**Don't click Deploy yet!** We need to add environment variables first.

---

## 🔐 Step 4: Add Environment Variables

This is the MOST IMPORTANT step!

1. Scroll down to **"Environment Variables"** section
2. Add these THREE variables one by one:

### Variable 1:
```
Name:  VITE_EMAILJS_SERVICE_ID
Value: service_v4exnr5
```
Click **"Add"**

### Variable 2:
```
Name:  VITE_EMAILJS_TEMPLATE_ID
Value: template_8ye7lxb
```
Click **"Add"**

### Variable 3:
```
Name:  VITE_EMAILJS_PUBLIC_KEY
Value: Mhhj-cnv-CDp8_Fmq
```
Click **"Add"**

### Environment Selection:
For each variable, make sure all three are checked:
- ✅ Production
- ✅ Preview
- ✅ Development

---

## 🎯 Step 5: Deploy!

1. After adding all 3 environment variables
2. Click the big **"Deploy"** button
3. Vercel will:
   - Clone your GitHub repo
   - Install dependencies (npm install)
   - Build your project (npm run build)
   - Deploy to their CDN

This takes 1-3 minutes.

---

## ⏳ Step 6: Wait for Deployment

You'll see a building animation with logs:

```
Running "npm install"...
Running "npm run build"...
Uploading build outputs...
Deployment ready!
```

---

## 🎉 Step 7: Your Site is Live!

Once complete, you'll see:

```
🎉 Congratulations!
Your project has been deployed!

https://life-cycle-core-solution.vercel.app
```

Click **"Visit"** to see your live website!

---

## 📱 Step 8: Test the Contact Form

1. Go to your live site
2. Navigate to the Contact page
3. Fill out the form and submit
4. Check your email: **contact@lifecyclecore.com**
5. You should receive the form submission!

---

## 🔄 Future Updates (Automatic Deployment)

Every time you push to GitHub:

```bash
git add .
git commit -m "your changes"
git push origin master
```

Vercel will automatically:
- Detect the push
- Rebuild your project
- Deploy the new version

**No manual redeployment needed!** 🎉

---

## 🛠️ Useful Vercel Dashboard Features

### View Your Projects:
https://vercel.com/dashboard

### Project Settings:
1. Go to your project
2. Click **"Settings"** tab
3. Here you can:
   - Edit environment variables
   - Change domain name
   - View deployment history
   - Configure build settings

### View Deployment Logs:
1. Go to **"Deployments"** tab
2. Click any deployment
3. Click **"View Build Logs"**

### Add Custom Domain:
1. Go to **"Settings"** > **"Domains"**
2. Add your custom domain (like lifecyclecore.com)
3. Follow DNS configuration instructions

---

## 🐛 Troubleshooting

### Build Failed?

**Check logs:**
1. Click the failed deployment
2. Look at build logs
3. Common issues:
   - Missing dependencies: Run `npm install` locally first
   - TypeScript errors: Fix them locally first
   - Wrong build command: Should be `npm run build`

### Form Not Working?

**Check environment variables:**
1. Go to **Settings** > **Environment Variables**
2. Verify all 3 variables are added correctly
3. If you change them, redeploy:
   - Go to **Deployments**
   - Click "..." menu
   - Click **"Redeploy"**

### Site Not Updating?

**Force redeploy:**
1. Go to **Deployments**
2. Click latest deployment
3. Click **"Redeploy"**

---

## 📋 Quick Checklist

Before deploying, make sure:

- ✅ Code pushed to GitHub
- ✅ `.env` file is NOT on GitHub (check .gitignore)
- ✅ Local build works: `npm run build`
- ✅ All 3 environment variables ready to add

---

## 🎯 Summary

1. Sign up at vercel.com with GitHub
2. Click "Add New Project"
3. Import your repo
4. Add 3 environment variables
5. Click Deploy
6. Wait 2-3 minutes
7. Test your live site!

**That's it!** 🚀

---

## 🔗 Important Links

- Vercel Dashboard: https://vercel.com/dashboard
- Vercel Docs: https://vercel.com/docs
- Your GitHub Repo: https://github.com/AbdulRahmanAraka/Life-Cycle-Core-Solution

---

## 💡 Pro Tips

1. **Preview Deployments**: Every branch push creates a preview URL
2. **Analytics**: Enable analytics in project settings
3. **Performance**: Vercel automatically optimizes images and assets
4. **HTTPS**: Automatically enabled with SSL certificate
5. **Global CDN**: Your site is served from edge locations worldwide

---

Good luck with your deployment! 🎉
