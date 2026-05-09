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
  <h1 style="text-align:center;color:#6b21a8;">
    JoyKiss Pistore
  </h1>

  <div class="products-grid">
    ${productHTML}
  </div>
`;

const style = document.createElement("style");

style.innerHTML = `
body {
  font-family: Arial;
  padding: 20px;
  background:#f5f5f5;
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
  border-radius:10px;
}

.price {
  color:#6b21a8;
  font-weight:bold;
}

.buy-btn {
  background:#6b21a8;
  color:white;
  border:none;
  padding:10px;
  width:100%;
  border-radius:10px;
}
`;

document.head.appendChild(style);
