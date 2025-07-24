let allData = document.querySelector(".alldata");
let searchInput = document.getElementById("input");

const users = [
  { userImage: "./assets/ShahidAfridi.jpg ", name: "Shahid Afridi ", email: "ShahidAfridi45@gmail.com"},
  { userImage: "./assets/ChrisPratt.jpg", name: "Chris Pratt",  email: "ChrisPratt12@gmail.com"},
  { userImage: "./assets/Celebrity.jpg", name: "Celebrity", email: "Celebrity22@gmail.com"},
  { userImage: "./assets/JohnnyDepp.jpg", name: "Johnny Depp", email: "Johnny Depp13@gmail.com"},
  { userImage: "./assets/JohnWick.jpg", name: "John Wick", email: "JohnWick07@gmail.com"},
  { userImage: "./assets/JohnCena.jpg", name: "John Cena", email: "John Cena55@gmail.com"},
];

function renderUser(arr) {
  allData.innerHTML = " ";
  arr.map(function (obj) {
    let { userImage, name, email } = obj;

    let divEl = document.createElement("div");
    divEl.className = "userItem";
    divEl.innerHTML = `
      <div class="userItem"> 
          <div class="image">
            <img src= '${userImage}' alt='background Image'/>
          </div>
          <div class="userDatails">
            <h3>${name}</h3>
            <p>${email}</p>
          </div>
        </div>
    `;
    allData.appendChild(divEl);
  });
}

renderUser(users);

function handleSearch(e) {
  let searchVal = e.target.value;
  let filterUser = users.filter((obj) => {
    return obj.name.toLowerCase().includes(searchVal.toLowerCase());
  });
  renderUser(filterUser );
}

searchInput.addEventListener("input", handleSearch);
