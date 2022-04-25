// Store the wallet amount to your local storage with key "amount"
// let amountrs = JSON.parse(localStorage.getItem("amount")) || [];
let money = 0;
let wal = document.querySelector("#wallet");
wal.innerText = money;
wal.style.textAlign = "right";

function Amountfun(){
    
    let add_wallet = document.querySelector("#amount").value;
    wal = document.querySelector("#wallet")
    wal.innerText = Number(money) + Number(add_wallet);
   
    document.querySelector("#navbar").append(wal);
    localStorage.setItem("amount", JSON.stringify(Number(wal.innerText)));

}