# Environment Variables for Production

## Add to your project:

1. Create `.env` file in root:
```
VITE_EMAILJS_SERVICE_ID=service_v4exnr5
VITE_EMAILJS_TEMPLATE_ID=template_8ye7lxb
VITE_EMAILJS_PUBLIC_KEY=Mhhj-cnv-CDp8_Fmq
```

2. Update `.gitignore` to include:
```
.env
.env.local
.env.production
```

3. Update ContactPage.tsx to use env variables:
```typescript
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

4. In Vercel/Netlify dashboard, add these environment variables with same names and values

## Why use environment variables?

- ✅ More secure
- ✅ Easy to change without code update
- ✅ Different keys for dev/production
- ✅ Keys not exposed in GitHub

## Current Setup is Fine Too!

Your current hardcoded setup works perfectly and is acceptable because:
- EmailJS public key is meant to be public (in the name!)
- It has rate limiting built-in
- No sensitive data exposed
- 200 emails/month limit protects from abuse
