function addTodo(){
  let input=document.getElementById("input")
  if (!input){
    console.error("Input element not found!")
    return;k 
  }
  let taskText = input.value.trim();

  if(taskText === ""){
    alert("please enter Your task")
    return;
  }
  let card = document.createElement("div")
  card.className = "todo-card" 
  
  let span = document.createElement("span")
  span.textContent = taskText;


  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.backgroundColor = "#0d265a"
  editBtn.style.color = "white"
  editBtn.onclick = function(){
    let update = prompt("Enter Task :", span.textContent);
    if (update){
      span.textContent = update;
    }
  };
  let dltBtn = document.createElement("button");
  dltBtn.style.backgroundColor = "green"
  dltBtn.style.color = "white"
  dltBtn.textContent = "delete";
  dltBtn.addEventListener("mouseenter", function(){
     dltBtn.style.backgroundColor = "red";
  dltBtn.style.color = "white";
  });
  dltBtn.addEventListener("mouseleave", function(){
     dltBtn.style.backgroundColor = "green";
  dltBtn.style.color = "white";
  });
  dltBtn.onclick = function(){
    card.remove();
  };

  card.appendChild(span)
  card.appendChild(editBtn)
  card.appendChild(dltBtn)

  document.getElementById("todo-container").appendChild(card);
  input.value = ""
}