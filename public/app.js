const app = document.getElementById("products");

app.innerHTML = `
  <div style="
    background:white;
    padding:20px;
    border-radius:15px;
    max-width:300px;
    margin:auto;
    box-shadow:0 4px 12px rgba(0,0,0,0.1);
  ">

    <img 
      src="/images/madu.jpg"
      style="
        width:100%;
        border-radius:15px;
      "
    >

    <h2>Madu Hutan</h2>

    <p style="color:purple;font-weight:bold;">
      5 Pi
    </p>

    <button style="
      width:100%;
      padding:12px;
      border:none;
      border-radius:10px;
      background:purple;
      color:white;
    ">
      Tes Button
    </button>

  </div>
`;
document.querySelector("button").onclick = () => {
  alert("Tombol berhasil!");
};
