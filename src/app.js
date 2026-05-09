import { loginWithPi } from "./pi-sdk.js";

const products = [
  {
    name: "Tomat",
    price: 3,
    image: "/images/tomat merah.jpg"
  },
  {
    name: "Madu Hutan",
    price: 5,
    image: "/images/madu.jpg"
  },
  {
    name: "Ikan Segar",
    price: 4,
    image: "/images/ikan nila hitam.jpg"
  }
];

document.getElementById("loginBtn").addEventListener("click", () => {
  loginWithPi((user) => {
    alert("Halo, " + user.username);
  });
});

const app = document.getElementById("app");

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

app.innerHTML += `
  <div class="products-grid">
    ${productHTML}
  </div>
`;

const style = document.createElement("style");

style.innerHTML = `
  body {
    font-family: Arial;
    background: #f5f5f5;
    margin: 0;
    padding: 20px;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
    gap: 20px;
    margin-top: 30px;
  }

  .card {
    background: white;
    border-radius: 16px;
    padding: 15px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    text-align: center;
  }

  .product-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 12px;
  }

  .price {
    color: #6b21a8;
    font-weight: bold;
    font-size: 20px;
  }

  .buy-btn {
    background: #6b21a8;
    color: white;
    border: none;
    padding: 12px;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
  }

  .buy-btn:hover {
    background: #581c87;
  }
`;

document.head.appendChild(style);
