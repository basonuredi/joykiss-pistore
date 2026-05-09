const products = [
  {
    name: "Tomat",
    price: 3,
    image: "/images/tomat.jpg"
  },
  {
    name: "Madu Hutan",
    price: 5,
    image: "/images/madu.jpg"
  }
];

const app = document.getElementById("products");

const productHTML = products.map(product => `
  <div class="card">
    <img src="${product.image}" class="product-image">

    <h2>${product.name}</h2>

    <p class="price">${product.price} Pi</p>

    <button class="buy-btn">
      Buy with Pi
    </button>
  </div>
`).join("");

app.innerHTML = `
  <div class="products-grid">
    ${productHTML}
  </div>
`;

const style = document.createElement("style");

style.innerHTML = `
body {
  font-family: Arial;
  padding: 20px;
}

.products-grid {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
}

.card {
  background:white;
  padding:15px;
  border-radius:15px;
  box-shadow:0 4px 12px rgba(0,0,0,0.1);
}

.product-image {
  width:100%;
  height:180px;
  object-fit:cover;
}
`;

document.head.appendChild(style);
