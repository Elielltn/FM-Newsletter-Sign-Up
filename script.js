const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");
const buttonSubmit = document.getElementById("button-submit");
const mainContainer = document.getElementById("container");
const secondContainer = document.getElementById("container-thank");

var estrela = 0;

button1.addEventListener("click", function (e) {
  if (
    button2.classList.contains("button-star-active") ||
    button3.classList.contains("button-star-active") ||
    button4.classList.contains("button-star-active") ||
    button5.classList.contains("button-star-active")
  ) {
    button2.classList.remove("button-star-active");
    button3.classList.remove("button-star-active");
    button4.classList.remove("button-star-active");
    button5.classList.remove("button-star-active");
    button1.classList.add("button-star-active");
  } else {
    button1.classList.add("button-star-active");
  }
  estrela = 1
  document.getElementById("p-rating").textContent = `You selected ${estrela} out of 5`
});

button2.addEventListener("click", function (e) {
  if (
    button1.classList.contains("button-star-active") ||
    button3.classList.contains("button-star-active") ||
    button4.classList.contains("button-star-active") ||
    button5.classList.contains("button-star-active")
  ) {
    button1.classList.remove("button-star-active");
    button3.classList.remove("button-star-active");
    button4.classList.remove("button-star-active");
    button5.classList.remove("button-star-active");
    button2.classList.add("button-star-active");
  } else {
    button2.classList.add("button-star-active");
  }
  estrela = 2
  document.getElementById("p-rating").textContent = `You selected ${estrela} out of 5`
});
button3.addEventListener("click", function (e) {
  if (
    button1.classList.contains("button-star-active") ||
    button2.classList.contains("button-star-active") ||
    button4.classList.contains("button-star-active") ||
    button5.classList.contains("button-star-active")
  ) {
    button1.classList.remove("button-star-active");
    button2.classList.remove("button-star-active");
    button4.classList.remove("button-star-active");
    button5.classList.remove("button-star-active");
    button3.classList.add("button-star-active");
  } else {
    button3.classList.add("button-star-active");
  }
  estrela = 3
  document.getElementById("p-rating").textContent = `You selected ${estrela} out of 5`
});
button4.addEventListener("click", function (e) {
  if (
    button1.classList.contains("button-star-active") ||
    button2.classList.contains("button-star-active") ||
    button3.classList.contains("button-star-active") ||
    button5.classList.contains("button-star-active")
  ) {
    button1.classList.remove("button-star-active");
    button2.classList.remove("button-star-active");
    button3.classList.remove("button-star-active");
    button5.classList.remove("button-star-active");
    button4.classList.add("button-star-active");
  } else {
    button4.classList.add("button-star-active");
  }
  estrela = 4
  document.getElementById("p-rating").textContent = `You selected ${estrela} out of 5`
});

button5.addEventListener("click", function (e) {
  if (
    button1.classList.contains("button-star-active") ||
    button2.classList.contains("button-star-active") ||
    button3.classList.contains("button-star-active") ||
    button4.classList.contains("button-star-active")
  ) {
    button1.classList.remove("button-star-active");
    button2.classList.remove("button-star-active");
    button3.classList.remove("button-star-active");
    button4.classList.remove("button-star-active");
    button5.classList.add("button-star-active");
  } else {
    button5.classList.add("button-star-active");
  }
  estrela = 5
  document.getElementById("p-rating").textContent = `You selected ${estrela} out of 5`
});

buttonSubmit.addEventListener("click", function (e) {
  mainContainer.classList.add("hidden");
  secondContainer.classList.remove("hidden");
});
