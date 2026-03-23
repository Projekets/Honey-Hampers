# 🍯 Honey Hamper's Store

A clean, responsive gift hamper storefront where customers can browse products and place orders instantly via **WhatsApp** or **Instagram** — no checkout flow, no backend required.

---

## ✨ Features

- 🎁 Product grid showcasing curated gift hampers
- 📱 One-click ordering via WhatsApp (pre-filled message) and Instagram
- 💅 Soft pastel theme with card-based, responsive layout
- ⚡ Zero dependencies — pure HTML, CSS & vanilla JavaScript
- 🖼️ Lazy-loaded product images for fast page loads

---

## 📁 Project Structure

```
Honey Hampers/
├── index.html   # Main page structure & layout
├── style.css    # All styles, variables & responsive design
├── script.js    # Product data & dynamic card rendering
└── README.md    # You're reading it!
```

---

## 🚀 Getting Started

No build tools or installs needed. Just open the file:

```bash
# Option 1 – double-click
open index.html

# Option 2 – VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

---

## 🛍️ Adding / Editing Products

All products are defined in `script.js` inside the `products` array. Each product has three fields:

```js
const products = [
  {
    name: "Birthday Celebration Hamper",
    price: "₹1,499",
    image: "https://your-image-url.com/photo.jpg",
  },
  // add more hampers here...
];
```

| Field   | Description                              |
|---------|------------------------------------------|
| `name`  | Display name shown on the card           |
| `price` | Price string shown on the card           |
| `image` | URL of the product image (supports lazy loading) |

---

## 📲 Updating Contact Links

Edit the top two lines of `script.js`:

```js
const whatsappNumber = "91xxxxxxxxxx"; // Country code + number, no + or spaces
const instagramUrl   = "https://www.instagram.com/yourusername/";
```

When a customer clicks **WhatsApp**, they're taken directly to a chat with a pre-filled message:
> *"Hi! I want to order the Birthday Celebration Hamper (₹1,499)."*

---

## 🎨 Customising the Theme

CSS custom properties in `style.css` make it easy to restyle the whole site:

```css
:root {
  --bg:       #fff7fb;   /* page background  */
  --card:     #ffffff;   /* product card     */
  --text:     #2b1d2f;   /* body text        */
  --accent:   #8a2be2;   /* purple / Instagram button */
  --accent-2: #25d366;   /* green  / WhatsApp button  */
}
```

---

## 🌐 Deployment

The site is 100% static — deploy anywhere for free:

| Platform        | How                                      |
|-----------------|------------------------------------------|
| **GitHub Pages**| Push to `main`, enable Pages in Settings |
| **Netlify**     | Drag & drop the project folder           |
| **Vercel**      | Import the GitHub repo                   |

---

## 📄 License

This project is open for personal and small-business use. Feel free to customise it for your own store!

---

<p align="center">Made with ❤️ for special moments.</p>
