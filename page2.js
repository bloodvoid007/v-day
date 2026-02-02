const petalLayer = document.getElementById("photo-layer");
const enterBtn = document.getElementById("enterBtn");

function createPetals(count = 20) {
  for (let i = 0; i < count; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 2 + Math.random() * 2 + "s";
    petal.style.opacity = Math.random();

    petalLayer.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 4000);
  }
}

enterBtn.addEventListener("click", () => {
  createPetals(25);

  // TEMP: For now just alert (later → Page 2)
  setTimeout(() => {
    window.location.href = "page2.html";
  }, 800);
});
