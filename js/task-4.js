"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: email,
    password: password,
  };
  console.log(formData);
  form.reset(); //чому тут Form, а не Event (бо з ним не працює), я так і не розібрався і навіть ллмки не дали конкретну відповідь???
}
