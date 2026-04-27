# Royal Track Building & Contracting Website

## How to Deploy on Vercel (Free)

Follow these steps carefully. Total time: ~20 minutes.

---

## STEP 1: Create GitHub Account (Skip if you have one)

1. Go to https://github.com
2. Click "Sign up"
3. Create account with email/password
4. Verify email

---

## STEP 2: Upload Code to GitHub

### Option A: Easy Way (Web Upload)

1. Go to https://github.com/new
2. Repository name: `royal-track-website`
3. Make it **Public**
4. Click **"Create repository"**
5. On next page, click **"uploading an existing file"** link
6. **Drag and drop ALL files** from this folder (including the `public`, `app` folders)
7. Scroll down and click **"Commit changes"**
8. Wait for upload to complete

### Important Files to Upload:
- `package.json`
- `tailwind.config.js`
- `postcss.config.js`
- `app/` folder (with layout.js, page.js, globals.css)
- `public/` folder (with all images)

---

## STEP 3: Deploy on Vercel

1. Go to https://vercel.com
2. Click **"Sign Up"** → choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub
4. After login, click **"Add New..."** → **"Project"**
5. Find `royal-track-website` repository → Click **"Import"**
6. Don't change any settings — just click **"Deploy"**
7. Wait 2-3 minutes for build to complete
8. ✅ **DONE!** You'll get a URL like `royal-track-website.vercel.app`

---

## STEP 4: Custom Domain (Optional)

If you want `royaltrack.ae` instead of `vercel.app`:

1. In Vercel dashboard, click your project
2. Go to **"Settings"** → **"Domains"**
3. Add your domain (you need to own it first)
4. Vercel will give you DNS records to add to your domain provider
5. Update DNS → wait 24 hours → done!

---

## How to Edit Content Later

### Quick Way (GitHub Web):
1. Go to your GitHub repo
2. Click on file you want to edit (e.g., `app/page.js`)
3. Click the **pencil icon (✏️)** to edit
4. Make changes → scroll down → click **"Commit changes"**
5. Vercel auto-deploys in 2 minutes — your live site updates!

### Pro Way (Local Development):
1. Install Node.js from https://nodejs.org
2. Download repo as ZIP
3. Open terminal in folder
4. Run: `npm install`
5. Run: `npm run dev`
6. Open http://localhost:3000

---

## Need Help?

If anything breaks during deployment:
- Check Vercel build logs (it tells you what went wrong)
- Make sure all images are uploaded to `public/images/` folder
- Make sure `package.json` is in root folder

---

## File Structure

```
royal-track-website/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
└── public/
    └── images/
        ├── logo.png
        ├── pool_landscape.jpg
        ├── kitchen_marble.jpg
        ├── kitchen_gold.jpg
        ├── living_marble.jpg
        ├── living_modern.jpg
        ├── project_1.jpg → project_7.jpg
        ├── yas_island.webp
        ├── dubai_hills.png
        └── turnkey.png
```
