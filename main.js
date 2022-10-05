const nameInput = document.querySelector("input[name = name]");
const cardInput = document.querySelector("input[name = card]");
const monthInput = document.querySelector("input[name = month]");
const yearInput = document.querySelector("input[name = year]");
const cvgInput = document.querySelector("input[name = cvg]");
const cardName = document.querySelector(".card-front .name");
const numberName = document.querySelector(".card-front .number");
const monthName = document.querySelector(".card-front .month");
const yearName = document.querySelector(".card-front .year");
const submit = document.querySelector("form");
const submmited = document.querySelector(".submitted");
const form = document.querySelector(".input-container");
const continueBtn = document.querySelector(".continue");

const nameRegex = /[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+/;
const cardRegex = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0]{4}/;
const monthRegex = /[0-9]{2}/;
const yearRegex = /[0-9]{4}/;
let match = false;

nameInput.addEventListener("input", (e) => {
  const input = e.target.value;
  if (nameRegex.test(input)) {
    cardName.textContent = input;
    nameInput.classList.remove("error");
    match = true;
  } else {
    cardName.textContent = "Jane Appleseed";
    nameInput.classList.add("error");
    match = false;
  }
});

cardInput.addEventListener("input", (e) => {
  const input = e.target.value;

  if (cardRegex.test(input)) {
    cardInput.classList.remove("error");
    numberName.textContent = input;

    match = true;
  } else {
    cardInput.classList.add("error");
    numberName.textContent = "0000 0000 0000 0000";
    match = false;
  }
});

monthInput.addEventListener("input", (e) => {
  const input = e.target.value;

  if (monthRegex.test(input)) {
    monthInput.classList.remove("error");
    monthName.textContent = input;
    match = true;
  } else {
    monthInput.classList.add("error");
    monthName.textContent = "00";
    match = false;
  }
});

yearInput.addEventListener("input", (e) => {
  const input = e.target.value;

  if (yearRegex.test(input)) {
    yearInput.classList.remove("error");
    yearName.textContent = input;
    match = true;
  } else {
    yearInput.classList.add("error");
    yearName.textContent = "00";
    match = false;
  }
});

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  if (match) {
    submmited.classList.remove("done");
    form.classList.add("done");
    submit.reset();
  } else alert("Must be correct inputs");
});

continueBtn.addEventListener("click", (e) => {
  submmited.classList.add("done");
  form.classList.remove("done");
  cardName.textContent = "Jane Appleseed";
  numberName.textContent = "0000 0000 0000 0000";
  monthName.textContent = "00";
  yearName.textContent = "00";
});
