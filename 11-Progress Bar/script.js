let progress = document.getElementById("progress")
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")
let circles = document.querySelectorAll(".circle")


let activeIndex = 0;

nextBtn.addEventListener("click", ()=>{
    activeIndex++;
    if(activeIndex > circles.length){
        activeIndex = circles.length
    }
    UpdtUI();
})
prevBtn.addEventListener("click", ()=>{
    activeIndex--;
    if(activeIndex < 0){
        activeIndex = 0
    }
    UpdtUI();
})

function UpdtUI(){
    circles.forEach((circle, index) => {
        if(index < activeIndex){
            circle.classList.add("active")
        } else{
            circle.classList.remove ("active")
        }
    })
    const active = document.querySelectorAll(".active");
    progress.style.width = ((active.length -1) / (circles.length - 1) ) * 100 + "%"

    if(activeIndex === 0){
        prevBtn.disabled = true; 
        nextBtn.disabled = false; 
    }else if(activeIndex === circles.length){
        nextBtn.disabled = true;
        prevBtn.disabled = false
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}