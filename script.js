const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const toggleSwitch = doc.querySelector("#billingToggle"); // Change this selector
const monthlyPriceElements = doc.querySelectorAll(".monthly-price");
const yearlyPriceElements = doc.querySelectorAll(".yearly-price");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    monthlyPriceElements.forEach((element) => {
      element.style.display = "none";
    });
    yearlyPriceElements.forEach((element) => {
      element.style.display = "block";
    });
  } else {
    monthlyPriceElements.forEach((element) => {
      element.style.display = "block";
    });
    yearlyPriceElements.forEach((element) => {
      element.style.display = "none";
    });
  }
});
