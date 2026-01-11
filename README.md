[Русская инструкция](READMERU.md)

# CASUS CONSILIUM - Legal Website (Madrid)

## 🌐 Prototype Demo


## 📋 Project Description
A mini prototype of a law firm website for CASUS CONSILIUM in Madrid. Built according to the technical specification.

## ✅ Implemented Prototype Functionality

### 1. General Requirements
- [x] Mobile-first design (responsive layout)
- [x] Blue-gray color scheme
- [x] Burger menu for mobile devices
- [x] Horizontal menu for desktop

### 2. Multilingual Support
- [x] Spanish (ES)
- [x] English (EN)
- [x] Russian (RU)
- [x] Language switcher in the header
- [x] Full translation of all content

### 3. Header
- [x] "CASUS CONSILIUM" Madrid logo
- [x] Address (link to Google Maps)
- [x] Phone (click to call)
- [x] Email (click to send)
- [x] WhatsApp and Telegram links
- [x] Menu with 6 services

### 4. Home Page
- [x] Hero section with a Madrid photo
- [x] "About us" block with advantages
- [x] Statistics (from €1000, 99% success, 15+ years)
- [x] Team gallery (icons)
- [x] 6 service cards
- [x] Successful cases
- [x] Client testimonials
- [x] Contact form
- [x] Google Maps

### 5. Services (Modal Windows)
- [x] Legal services
- [x] Accounting services
- [x] Financial consultant
- [x] Lawyers
- [x] Real estate agency
- [x] Architects-designers-project planners

### 6. Application Forms
- [x] Name, phone, email
- [x] Service selection (auto-fill)
- [x] Preferred contact method
- [x] Communication language
- [x] Issue description
- [x] "Thank you" modal after submission

### 7. Footer
- [x] Contact information
- [x] Services list
- [x] QR code for business cards
- [x] Copyright
- [x] Disclaimer

### 8. Additional
- [x] Fixed call button (mobile version)
- [x] Smooth animations

## 🔧 Technologies
- **Framework:** Hono (TypeScript)
- **Styling:** Tailwind CSS (CDN)
- **Icons:** Font Awesome
- **Fonts:** Playfair Display, Inter (Google Fonts)
- **Hosting:** Cloudflare Pages (ready for deployment)

## 📁 Project Structure
```
webapp/
├── src/
│   └── index.tsx      # Main application code
├── dist/              # Built files
├── ecosystem.config.cjs  # PM2 configuration
├── package.json
├── vite.config.ts
└── wrangler.jsonc
```

## 🚀 Run Locally
```bash
npm install
npm run build
npm run preview
```

## ☁️ Deploy to Cloudflare
```bash
npm run build
npx wrangler pages deploy dist --project-name casus-consilium
```

## 📝 Not Implemented in the Prototype (for full version)
- [ ] reCAPTCHA form protection
- [ ] Google Analytics and GTM
- [ ] Email form submissions
- [ ] Separate pages for each service
- [ ] Blog/FAQ section
- [ ] Privacy Policy page
- [ ] SEO optimization for alt tags
- [ ] Real team photos
- [ ] Real contact details
- [ ] Download QR code in PNG/SVG

---
*Prototype created to demonstrate the design and structure to the client*
