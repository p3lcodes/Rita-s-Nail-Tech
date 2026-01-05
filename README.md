
# Rita’s Nail Salon Website

A high-converting, professional landing page for Rita’s Nail Salon in Nairobi, Kenya.

## How to Customize

### 1. Update Contact Information
Open `constants.ts` and update the following fields:
- `phone`: For the `tel:` and `sms:` links.
- `whatsapp`: The numeric ID (e.g., `254...`) for the booking button.
- `instagram`: Your handle for the social links.
- `googleMapsLink`: The embed URL from Google Maps.

### 2. Update Services & Prices
Modify the `SERVICES` array in `constants.ts`. You can change descriptions, "best for" advice, and pricing to reflect your current menu.

### 3. Replace Images
All images are sourced from Unsplash. To use real salon photos:
- Host your images (e.g., on GitHub, Cloudinary, or Imgur).
- Replace the URLs in `App.tsx` (specifically in the `Hero`, `About`, and `Gallery` components).
- For Instagram embeds, you can replace the `Gallery` image grid with the standard Instagram Embed script inside the `Gallery` component.

## Deployment to GitHub Pages

1. Create a new repository on GitHub.
2. Push this code to the `main` branch.
3. Go to **Settings > Pages**.
4. Select **Deploy from a branch** and choose `main`.
5. Since this is a static site (using the standard React/Vite-like structure provided), ensure your build settings are correct or simply host the `index.html`, `index.tsx`, `App.tsx`, and `constants.ts` using a bundler like Vite.

*Note: For direct GitHub Pages hosting without a build tool, you would need to compile the TypeScript to JavaScript. However, this repository is structured for a modern React environment.*

## SEO Optimization
The site is pre-configured with Meta Tags in `index.html` optimized for:
- "Nail salon in Nairobi"
- "Manicure and pedicure Nairobi"
- "Nail art Nairobi"

Make sure to keep the `title` and `description` updated if you change the business name or location.
