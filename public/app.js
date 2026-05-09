
const products = [
  {
    name: "Madu Hutan",
    price: 5,
    image: "/images/madu.jpg"
  },
  {
    name: "Tomat Segar",
    price: 3,
    image: "/images/tomat-merah.jpg"
  },
  {
    name: "Ikan Nila",
    price: 4,
    image: "/images/ikan-mila-hitam.jpg"
  }
];

const app = document.getElementById("products");

const productHTML = products.map(product => `
  <div class="card">

    <img 
      src="${product.image}" 
      class="product-image"
    >

    <h2>${product.name}</h2>

    <p class="price">
      ${product.price} Pi
    </p>

    <button class="buy-btn">
      Buy with Pi
    </button>

  </div>
`).join("");

app.innerHTML = `

  <div class="header">
    <h1>JoyKiss Pistore</h1>

    <p>
      Marketplace Petani Digital Berbasis Pi
    </p>
  </div>

  <div class="products-grid">
    ${productHTML}
  </div>
`;

const style = document.createElement("style");

style.innerHTML = `

body{
  margin:0;
  padding:20px;
  background:#f5f5f5;
  font-family:Arial;
}

.header{
  text-align:center;
  margin-bottom:30px;
}

.header h1{
  color:#6b21a8;
  margin-bottom:5px;
}

.products-grid{
  display:grid;
  grid-template-columns:
    repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
}

.card{
  background:white;
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 4px 12px rgba(0,0,0,0.1);
  transition:0.3s;
}

.card:hover{
  transform:translateY(-5px);
}

.product-image{
  width:100%;
  height:180px;
  object-fit:cover;
}

.card h2{
  padding:10px;
  margin:0;
}

.price{
  padding:0 10px;
  color:#6b21a8;
  font-weight:bold;
}

.buy-btn{
  margin:10px;
  width:calc(100% - 20px);
  padding:12px;
  border:none;
  border-radius:10px;
  background:#6b21a8;
  color:white;
  font-size:16px;
}

.buy-btn:hover{
  background:#581c87;
}
`;

document.head.appendChild(style);

document.querySelectorAll(".buy-btn")
.forEach(btn => {

  btn.onclick = () => {
    alert("Fitur pembayaran Pi segera hadir!");
  };

});
