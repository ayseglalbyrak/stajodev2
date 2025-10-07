// Sayfa açıldığında isim sor ve header'a yaz
const welcome = document.getElementById("welcome");
const isim = prompt("İsminizi giriniz:");
if (isim) {
  welcome.textContent = "Merhaba, " + isim;
} else {
  welcome.textContent = "Merhaba, Ziyaretçi";
}

// Resim ekleme ve silme
const ekleBtn = document.getElementById("ekleBtn");
const silBtn = document.getElementById("silBtn");
const resimlerDiv = document.querySelector(".resimler");

ekleBtn.addEventListener("click", () => {
  const img = document.createElement("img");
  img.src = "images/kadin-haklari-sembol-maketi.jpg"; // örnek resim
  resimlerDiv.appendChild(img);
});

silBtn.addEventListener("click", () => {
  if (resimlerDiv.lastChild) {
    resimlerDiv.removeChild(resimlerDiv.lastChild);
  }
});
