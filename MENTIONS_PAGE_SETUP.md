# Mentions Page Setup Guide

## What's Been Created

✅ **New mentions page**: `/src/pages/mentions.js`
✅ **Custom CSS styling**: `/src/components/mentions.css`
✅ **Navigation integration**: Added to header menu (both mobile and desktop)
✅ **SEO optimization**: Proper meta tags and descriptions
✅ **Responsive design**: Mobile-friendly layout
✅ **Video embed structure**: Ready for YouTube videos with timestamps

## Next Steps to Complete

### 1. Update Video IDs
Replace `PLACEHOLDER_VIDEO_ID` in `/src/pages/mentions.js` with actual YouTube video IDs:

- **Digital Identity section**: Need video ID for "Day One Solana Investor: Why AI is Overhyped"
- **Communication Protocols**: Need video ID for "Bootstrapping an AI Company to $5M ARR"
- **Other videos**: Already have correct IDs (v9JBMnxuPX8, H90HY-lGraw, etc.)

### 2. Video ID Extraction
From YouTube URLs like `https://www.youtube.com/watch?v=ABC123`, extract `ABC123`

### 3. Test the Page
1. Run `npm run develop`
2. Visit `http://localhost:8000/mentions`
3. Check that videos load and start at correct timestamps
4. Test mobile responsiveness

### 4. Optional Enhancements
- Add video thumbnails for faster loading
- Consider adding a table of contents
- Add social sharing buttons
- Include estimated reading/viewing time

## Page Features

- **Clean, professional design** matching your site's aesthetic
- **Timestamped video embeds** that start at the exact moments mentioned
- **Conversation format** for Q&A sections (like the Yudkowsky/Wolfram exchange)
- **Highlight boxes** for key insights
- **Mobile responsive** design
- **SEO optimized** with relevant keywords and descriptions

## Content Structure

The page follows your preferred format with:
1. Brief intro explaining the page purpose
2. Video sections organized by topic
3. Clean spacing between sections
4. Consistent formatting throughout
5. Professional presentation suitable for VCs and entrepreneurs

## Navigation Placement

Added "Mentions" to the main navigation between "Blog" and "Help" - this gives it good visibility while maintaining logical flow. 