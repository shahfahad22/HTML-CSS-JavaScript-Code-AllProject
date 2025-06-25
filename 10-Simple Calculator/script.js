document.getElementById("submit").addEventListener("click", function () {
  let num1 = document.querySelector(".numb1").value;
  let num2 = document.querySelector(".numb2").value;
  let rslt = document.querySelector(".result");
  let oprtor = document.getElementById("selectOp").value;

     if (num1.trim() === "" || num2.trim() === "" ) {
        alert(" Please enter valid numbers in both input fields!");
        return; 
    }

  let numInput1 = Number(num1);
  let numInput2 = Number(num2);
  switch (oprtor) {
    case "plus":
      rslt.innerHTML = Number(num1) + Number(num2);
      break;
    case "minus":
      rslt.innerHTML = Number(num1) - Number(num2);
      break;
    case "devide":
      rslt.innerHTML = Number(num1) / Number(num2);
      break;
    case "multi":
      rslt.innerHTML = Number(num1) * Number(num2);
  }
  document.querySelector(".numb1").value = "";
  document.querySelector(".numb2").value = "";
});
