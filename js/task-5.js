"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const newColor = document.querySelector(".change-color");
newColor.addEventListener("click", () => {
  const newColorUpgreat = getRandomHexColor();
  document.body.style.backgroundColor = newColorUpgreat;
  document.querySelector(".color").textContent = newColorUpgreat;
});
