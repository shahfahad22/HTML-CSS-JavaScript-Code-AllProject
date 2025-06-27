let inputField = document.getElementById("input-field");
let outputField = document.querySelector(".outputfield");
let buttons = document.querySelectorAll("button");

inputField.addEventListener(
  "keyup",
  () => (outputField.innerHTML = inputField.value)
);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("uppercase")) {
      outputField.innerHTML = outputField.innerHTML.toUpperCase();
    } else if (btn.classList.contains("lowercase")) {
      outputField.innerHTML = outputField.innerHTML.toLowerCase();
    } else if (btn.classList.contains("capitalize")) {
  outputField.innerHTML = outputField.innerHTML
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
    } else if (btn.classList.contains("bold")) {
      outputField.style.fontWeight = "1000";
    } else if (btn.classList.contains("ialic")) {
      outputField.style.fontStyle = "italic";
    } else if (btn.classList.contains("underline")) {
      outputField.style.textDecoration = "underline";
    }
  });
});
