import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

document.querySelector("h1").addEventListener("mouseover", function () {
  this.style.color = "red";
});

document.querySelector("h1").addEventListener("mouseout", function () {
  this.style.color = "black";
});

document.addEventListener("keydown", function (event) {
  alert("Tuşa basıldı: " + event.key);
});

window.addEventListener("load", function () {
  alert("Sayfa yüklendi!");
});

document.getElementById("firstParag").addEventListener("dblclick", function () {
  this.style.color = "purple";
});

document
  .getElementById("navContact")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("İstenen davranış engellendi.");
  });

document.getElementById("btn").addEventListener("click", displayDate);

document.getElementById("textarea").addEventListener("select", function () {
  alert("Metin seçildi.");
});

window.addEventListener("scroll", function () {
  console.log("Sayfa kaydırıldı.");
});

document.getElementById("firstParag").addEventListener("select", function () {
  alert("Metin seçildi.");
});
