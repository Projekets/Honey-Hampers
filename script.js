const whatsappNumber = "918969333717";
const instagramUrl = "https://www.instagram.com/";

const products = [
  {
    name: "Birthday Celebration Hamper",
    price: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chocolate Delight Hamper",
    price: "₹1,199",
    image:
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Festive Family Hamper",
    price: "₹2,299",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Premium Luxury Hamper",
    price: "₹3,499",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
  },
];

const productList = document.getElementById("product-list");

products.forEach((product) => {
  const card = document.createElement("article");
  card.className = "product-card";

  const whatsappText = encodeURIComponent(
    `Hi! I want to order the ${product.name} (${product.price}).`
  );

  card.innerHTML = `
    <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" />
    <h3>${product.name}</h3>
    <p class="price">${product.price}</p>
    <div class="actions">
      <a class="btn btn-whatsapp" href="https://wa.me/${whatsappNumber}?text=${whatsappText}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a class="btn btn-instagram" href="${instagramUrl}" target="_blank" rel="noopener noreferrer">Instagram</a>
    </div>
  `;

  productList.appendChild(card);
});
