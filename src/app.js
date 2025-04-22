import { loginWithPi } from "./pi-sdk.js";

document.getElementById("loginBtn").addEventListener("click", () => {
  loginWithPi((user) => {
    alert("Halo, " + user.username);
    // Tambahkan logika lain nanti
  });
});
