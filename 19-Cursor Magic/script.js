let smallCourser = document.querySelector(".smallCourser");
let bigCourser = document.querySelector(".bigCourser");
let btn = document.querySelector(".button");
let body = document.querySelector("body");

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;

  // Small Crsor  - fast follow
  smallCourser.style.left = x + "px";
  smallCourser.style.top = y + "px";
  smallCourser.style.position = "absolute";

  // Big Cursor - smooth delay
  setTimeout(() => {
    bigCourser.style.left = x + "px";
    bigCourser.style.top = y + "px";
    bigCourser.style.position = "absolute";
  }, 90);
});

let color = true;
btn.addEventListener("click", function () {
  if (color) {
    body.style.backgroundColor = "black";
    btn.innerText = " White ";
    smallCourser.style.backgroundColor = "yellow";
    bigCourser.style.backgroundColor = "yellow";
  } else {
    body.style.backgroundColor = "white";
    btn.innerText = " Black";
    smallCourser.style.backgroundColor = "red";
    bigCourser.style.backgroundColor = "red";
  }

  color = !color;
});
