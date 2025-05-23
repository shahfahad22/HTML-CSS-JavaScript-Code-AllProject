let bulb = document.querySelector(".bulb")
let btn = document.querySelector(".butn")

let isOn = false
btn.addEventListener("click", function (){
    if(!isOn){
    btn.classList.toggle("on")
    bulb.classList.add("on");
    btn.innerText = "OF"
    isOn = true
    }else{
        btn.classList.remove("on")
        bulb.classList.remove("on");
        btn.innerText = "ON"
            isOn = false
    }
})