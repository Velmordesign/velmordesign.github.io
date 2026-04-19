# Velmor Design - Premium Dark Mode Website

A stunning, premium dark-mode website for Velmor Design creative agency. Built with clean, semantic HTML, modern CSS, and JavaScript—designed to integrate seamlessly with Wix Studio.

## 📋 Project Overview

**Velmor Design** is a creative agency specializing in:
- Custom website design
- Wix Studio development
- Wix Editor to Wix Studio migration
- CMS setup and dynamic content
- Branding & identity services
- Logo design
- SEO setup and meta optimization

The website showcases these services with a refined, elegant dark aesthetic featuring black backgrounds, white typography, and premium minimal design.

---

## 🎨 Design Philosophy

- **Dark & Elegant**: Deep black backgrounds with white typography
- **High-End Aesthetic**: Refined spacing, clean layouts, premium feel
- **Minimal but Powerful**: No clutter, maximum impact
- **Editorial Vibe**: Strong typography, bold spacing, cinematic composition
- **Luxury Approach**: Sophisticated, boutique studio energy
- **Technical Excellence**: Clean code ready for Wix Studio integration

---

## 📁 Project Structure

```
Velmor Sitio web/
├── index.html          # Homepage
├── contact.html        # Contact page
├── styles.css          # All styling (responsive, dark mode)
├── script.js           # Form handling & interactivity
└── README.md          # This file
```

### File Descriptions

#### **index.html** - Homepage
Contains 11 main sections:
1. Navigation bar (fixed, minimal)
2. Hero section with CTAs
3. About/Positioning section
4. Services grid (8 services)
5. Why Choose Us grid
6. 4-Step Process section
7. Featured Work/Portfolio placeholder
8. Branding section
9. SEO & CMS expertise area
10. Contact form section
11. Final CTA section
12. Footer

#### **contact.html** - Contact Page
Dedicated contact page with:
- Contact hero section
- Business information cards
- Full contact form with more fields
- Services listing
- Response time info
- Matching footer

#### **styles.css** - Comprehensive Styling
- Complete dark mode design system
- CSS variables for easy customization
- Responsive breakpoints (768px, 480px)
- Premium typography system
- Smooth transitions and hover effects
- Mobile-first responsive design

#### **script.js** - Form Handling & Interactivity
- Form validation
- Form submission handling
- Success/error notifications
- Smooth scroll interactions
- Wix integration hooks
- Data export utilities

---

## 🎯 Key Features

### Design Features
✅ Premium dark theme (black background, white text)
✅ Elegant typography hierarchy
✅ Refined spacing system (8px grid)
✅ Smooth hover transitions
✅ Professional color palette (blacks, whites, grays)
✅ Minimal animations (no distracting effects)
✅ High contrast for readability

### Responsive Design
✅ Desktop-first approach
✅ Tablet optimization (768px)
✅ Mobile optimization (480px)
✅ Flexible grid layouts
✅ Touch-friendly buttons and links
✅ Readable on all devices

### Form Functionality
✅ Clean form validation
✅ Email format checking
✅ Required field validation
✅ Success/error notifications
✅ Form data structured for Wix integration
✅ Two forms: Homepage & Contact page

### Accessibility & Standards
✅ Semantic HTML
✅ Proper heading hierarchy
✅ Form labels and ARIA attributes
✅ High contrast text for accessibility
✅ Keyboard navigation support

---

## 🧩 Integration with Wix Studio

### Form Integration Steps

The forms are structured to work seamlessly with Wix Studio. Here's how to connect them:

#### **Option 1: Wix REST API Integration**
```javascript
// Data will be formatted like this for Wix API:
{
    name: "Client Name",
    email: "client@email.com",
    businessName: "Brand Name",
    serviceNeeded: "website-design",
    projectDetails: "Project description...",
    formType: "homepage",
    timestamp: "2024-04-12T15:30:00.000Z"
}
```

#### **Option 2: Email Service Integration**
The form can send to email services like:
- Zapier
- Make.com
- SendGrid
- Mailgun

#### **Option 3: Native Wix Forms Import**
Export the form HTML and import into Wix Studio form elements.

### Implementation Guide

1. **Connect Form Submission**
   - Update the `sendToWixBackend()` function in `script.js`
   - Add your Wix API key or backend endpoint
   - Replace placeholder with actual API calls

2. **Map Form Fields**
   - Field names are clear: `name`, `email`, `businessName`, `serviceNeeded`, `projectDetails`
   - Match these to your Wix CRM fields

3. **Set Email Notifications**
   - Configure where form submissions go (CRM, email, database)
   - The form includes timestamp for tracking

---

## 🔧 Customization Guide

### Change Colors
Edit CSS variables in `:root` within `styles.css`:
```css
:root {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-gray-dark: #0a0a0a;
    /* ... other variables ... */
}
```

### Change Typography
The site uses these font families (system fonts by default):
```css
--font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-family-display: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

To use custom fonts:
1. Import fonts (Google Fonts, etc.)
2. Update CSS variables
3. Fonts automatically apply throughout

### Change Spacing
All spacing uses variables:
```css
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 24px;
/* ... etc ... */
```

### Modify Services
Edit the services grid in `index.html`:
```html
<div class="service-card">
    <div class="service-icon">01</div>
    <h3>Your Service</h3>
    <p>Your description...</p>
</div>
```

### Update Contact Information
Change email and links in footer and contact sections:
- Footer: Footer section
- Contact page: Email address in info boxes
- Update `hello@velmordesign.com` throughout

---

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## ⚡ Performance

- Optimized CSS with minimal file size
- Clean semantic HTML
- JavaScript without external dependencies
- Smooth animations using CSS transitions
- Responsive images ready for implementation

---

## 🚀 Ready for Wix Studio

This codebase is specifically designed for integration with Wix Studio:

✅ Clean component structure (sections are modular)
✅ Reusable form components
✅ Semantic HTML for Wix sections
✅ CSS ready for Wix editor
✅ Forms structured for Wix CRM integration
✅ No external dependencies
✅ Easy to copy/paste into Wix Studio

---

## 📝 Form Fields Reference

### Homepage Form Fields
- `name` - Client/visitor name
- `email` - Contact email
- `businessName` - Business/brand name
- `serviceNeeded` - Selected service
- `projectDetails` - Project description

### Contact Page Form Fields
- `name` - Full name (required)
- `email` - Email address (required)
- `businessName` - Business/brand name (required)
- `phone` - Phone number (optional)
- `serviceNeeded` - Primary service (required)
- `projectDetails` - Project details (required)
- `additionalInfo` - Additional information (optional)

---

## 🎨 Color Palette

| Color | Usage | Variable |
|-------|-------|----------|
| Black #000000 | Main background | `--color-black` |
| White #ffffff | Primary text, CTAs | `--color-white` |
| Dark Gray #0a0a0a | Secondary background | `--color-gray-dark` |
| Medium Gray #1a1a1a | Card backgrounds | `--color-gray-medium` |
| Light Gray #2a2a2a | Borders, dividers | `--color-gray-divider` |
| Light Gray #f5f5f5 | Light text accent | `--color-gray-light` |
| Primary Text #cccccc | Body text | `--color-text-secondary` |
| Tertiary Text #999999 | Subtle text | `--color-text-tertiary` |

---

## 📞 Support & Maintenance

### Common Updates
- Update email addresses in multiple locations (footer, contact section)
- Modify service descriptions in services grid
- Update process steps
- Change portfolio items
- Update branding section features

### Wix Studio Integration Checklist
- [ ] Set up form submission endpoint
- [ ] Connect forms to CRM/email service
- [ ] Test form submissions
- [ ] Configure success notifications
- [ ] Set up auto-replies to visitors
- [ ] Customize fields as needed
- [ ] Test on mobile devices
- [ ] Set up analytics tracking

---

## 📧 Contact Information

Update these throughout the site:
- Email: `hello@velmordesign.com`
- Form submissions go to: [Your email/CRM]
- Footer links and navigation as needed

---

## 💡 Tips for Success

1. **Keep the minimalist aesthetic** - Don't add too much color or clutter
2. **Use consistent spacing** - Follow the spacing variables
3. **Test all forms** - Ensure submissions work correctly
4. **Check mobile** - Ensure responsive design looks great
5. **Update content** - Keep services and projects current
6. **Monitor analytics** - Track which CTAs get most engagement
7. **Respond to inquiries** - Maintain the premium service feel

---

## 📄 License

This website design and code is custom-built for Velmor Design. All rights reserved.

---

**Version:** 1.0  
**Last Updated:** April 2024  
**Status:** Production Ready

---

## Quick Start

1. Replace `hello@velmordesign.com` with actual contact email
2. Update service descriptions to your offerings
3. Connect forms to Wix backend/email service
4. Test all functionality
5. Deploy to Wix Studio
6. Monitor form submissions and analytics

Velmor Design - Crafted with precision. 🎨
