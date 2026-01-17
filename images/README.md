# Images Folder

This folder contains all images used in the HosteVPG website.

## Required Images

### Hero Section Background
- **`hero-bg.jpg`** - Main hero background image
  - **Size**: 1920x1080px (or larger, will be cropped)
  - **Format**: JPG or WebP
  - **Description**: High-quality image of a modern PG/hostel room interior or building exterior
  - **Style**: Luxury, clean, professional - should match the brand aesthetic
  - **Used in**: All pages (index.html, about.html, rooms.html, amenities.html, location.html, pricing.html, booking.html, rules.html, contact.html)
  - **CSS Location**: `css/style.css` line 52

### Room Images
- **`room-single.jpg`** - Single sharing room photo
  - **Size**: 800x600px or 1200x900px
  - **Format**: JPG or WebP
  - **Description**: Professional photo of a single sharing room showing bed, furniture, and amenities
  - **Used in**: index.html (room preview section), rooms.html (room details section)

- **`room-double.jpg`** - Double sharing room photo
  - **Size**: 800x600px or 1200x900px
  - **Format**: JPG or WebP
  - **Description**: Professional photo of a double sharing room
  - **Used in**: index.html (room preview section), rooms.html (room details section)

- **`room-triple.jpg`** - Triple sharing room photo
  - **Size**: 800x600px or 1200x900px
  - **Format**: JPG or WebP
  - **Description**: Professional photo of a triple sharing room
  - **Used in**: index.html (room preview section), rooms.html (room details section)

### About Page
- **`about-us.jpg`** - About us section image
  - **Size**: 800x600px or 1200x900px
  - **Format**: JPG or WebP
  - **Description**: Image representing the HosteVPG facility, staff, or community
  - **Used in**: about.html

## Optional Images

### Logo
- **`logo.png`** - Website logo (optional)
  - **Size**: 200x60px (or proportional)
  - **Format**: PNG with transparent background
  - **Description**: HosteVPG logo for navbar
  - **To enable**: Uncomment the logo img tag in navbar-brand section of HTML files

### Favicon
- **`favicon.ico`** - Website favicon (optional)
  - **Size**: 32x32px or 16x16px
  - **Format**: ICO or PNG
  - **To enable**: Add `<link rel="icon" href="images/favicon.ico" type="image/x-icon">` in `<head>` section

## Image Guidelines

### Technical Requirements
- **Format**: JPG for photos, PNG for logos/icons, WebP preferred for better compression
- **Quality**: High resolution, professional photography
- **File Size**: Optimize images to keep file sizes reasonable (aim for < 500KB per image)
- **Optimization**: Use tools like TinyPNG, ImageOptim, or Squoosh to compress images
- **Responsive**: Images should look good on all screen sizes

### Style Guidelines
- **Aesthetic**: Clean, modern, luxury feel matching the brand
- **Colors**: Should complement the brand colors (Matte Black #0B0B0B, Champagne Gold #C9A24D, Off-White #FAFAFA)
- **Lighting**: Well-lit, professional photography
- **Composition**: Focus on showcasing the quality and comfort of the accommodation

### Accessibility
- All images have proper alt text in HTML
- Ensure images are descriptive and meaningful
- Avoid text-heavy images (use HTML/CSS for text instead)

## Recommended Image Sources

### Free Stock Photos
- **Unsplash** (unsplash.com) - Search: "modern hostel", "student accommodation", "co-living space"
- **Pexels** (pexels.com) - Search: "hostel room", "student housing", "furnished room"
- **Pixabay** (pixabay.com) - Free stock photos

### Professional Photography
- Hire a professional photographer for custom images
- Take photos of your actual facility
- Ensure proper lighting and staging

### Stock Photo Services (Paid)
- Shutterstock
- Getty Images
- Adobe Stock

## Image Naming Convention

- Use lowercase letters
- Use hyphens to separate words
- Be descriptive (e.g., `room-single-sharing.jpg`)
- Keep names short but clear

## Quick Setup Guide

1. **Download or create images** following the requirements above
2. **Optimize images** using compression tools
3. **Place images** in this `images/` folder
4. **Verify image paths** in HTML files match the filenames
5. **Test the website** to ensure all images load correctly

## Image Checklist

- [ ] hero-bg.jpg (required)
- [ ] room-single.jpg (required)
- [ ] room-double.jpg (required)
- [ ] room-triple.jpg (required)
- [ ] about-us.jpg (required)
- [ ] logo.png (optional)
- [ ] favicon.ico (optional)

## Troubleshooting

- **Images not showing?** Check file paths match exactly (case-sensitive)
- **Images too large?** Compress using online tools or image editing software
- **Hero background not showing?** Verify `hero-bg.jpg` exists in `images/` folder
- **Room images broken?** Ensure all three room images are in the `images/` folder

