const whatsappNumber = "918969333717";
const instagramUrl = "https://www.instagram.com/";

const products = [
  {
    name: "Mini Gift Hamper",
    price: "₹299+delivery charges",
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Gift Hamper",
    price: "₹499+delivery charges",
    image:
      "Gift hamper.webp",
  },
  {
    name: "Celebration box Hamper",
    price: "₹699+delivery charges",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Birthday Gift hamper",
    price: "₹999+delivery charges",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Proposal box Hamper",
    price: "₹1399(deliveryincluded)",
    image:
      "proposel box.jpg",
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
