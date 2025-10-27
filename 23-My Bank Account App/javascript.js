function createBankAccount(){
    let balance = 1000;
    
    return{
        deposit(newAmount){
            balance += newAmount
             return `Deposit ${newAmount}. New Balance : ${balance}`
        }, withdrawl(newAmount){
            if(newAmount <= balance){
                balance -= newAmount;
                 return `withdrawl ${newAmount}. New Balance : ${balance} `
            }else{
                return `Insufficient Balance!`
            }
        }, cheakBalance(){
             return `Your Current Balance Is ${balance}`
        }
    }
}

const myAccount  = createBankAccount()
const amountInput = document.getElementById("amount")
const message = document.getElementById("message")
const depositBtn = document.getElementById("depositBtn")
const withdrawBtn = document.getElementById("withdrawBtn")
const checkBtn = document.getElementById("checkBtn")


depositBtn.addEventListener("click", ()=>{
    const value = Number(amountInput.value)
    if(value > 0){
        message.textContent  = myAccount.deposit(value)
    }else{
        message.textContent = "⚠️ Please enter a valid amount!"
    }
})

withdrawBtn.addEventListener("click", ()=>{
    const value = Number(amountInput.value)
    if(value > 0){
        message.textContent = myAccount.withdrawl(value)
    }else{
         message.textContent = "⚠️ Please enter a valid amount!"
    }
})

checkBtn.addEventListener("click", ()=>{
    const value = Number(amountInput.value)
    message.textContent = myAccount.cheakBalance(value)
})