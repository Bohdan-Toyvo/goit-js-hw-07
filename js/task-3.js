"use strict";

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

function updateGreeting() {
  let currentValue = nameInput.value.trim();
  if (currentValue === '') {
      nameOutput.textContent = 'Anonymous';
  } else {
      nameOutput.textContent = currentValue;
  }
}

nameInput.addEventListener("input", updateGreeting);
