const funny = [
  "I'm on a whiskey diet. I've lost three days already.",
  "I'm not lazy, I'm just on energy-saving mode.",
  "My wallet is like an onion — opening it makes me cry.",
  "I used to think I was indecisive, but now I’m not so sure.",
  "I’m not arguing, I’m just explaining why I’m right.",
  "Common sense is like deodorant. The people who need it most never use it.",
  "I told my computer I needed a break, and it froze.",
  "I'm not short, I'm just concentrated awesome.",
  "I don't need a hairstylist, my pillow gives me a new hairstyle every morning.",
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Life is short. Smile while you still have teeth.",
  "If we shouldn’t eat at night, why is there a light in the fridge?",
  "I’m on a seafood diet. I see food and I eat it.",
  "I didn’t fall, I just attacked the floor.",
  "I’d agree with you, but then we’d both be wrong.",
  "I'm not late, I'm just running on my own time zone.",
  "I used to play piano by ear, but now I use my hands.",
  "If stress burned calories, I’d be a supermodel.",
  "My bed and I have a special relationship — we’re perfect for each other.",
  "I don’t trip, I do random gravity checks."
];

const h1 = document.querySelector("h1")
const btn = document.querySelector("button")


btn.addEventListener('click', ()=>{
    const indx = Math.floor(Math.random()*20)
    h1.textContent = funny[indx]

})