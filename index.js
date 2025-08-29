let counter = 0;

document.addEventListener("DOMContentLoaded", function (){
const buttons = document.querySelectorAll(".copy-btn-click");
const count = document.getElementById("counter");

for (const button of buttons) {
    button.addEventListener("click", function() {
        counter++;
        count.textContent = counter;
    });
}
});


let addcoin = 100;

document.addEventListener("DOMContentLoaded", function(){
const buttons = document.querySelectorAll(".call-btn-click");
const addCoin = document.getElementById("addcoin");

for (const button of buttons) {
    button.addEventListener("click", function(){
        if (addcoin >= 20) {
            addcoin -= 20;
            addCoin.textContent = `Coins: ${addcoin}`;
        }
        else {
            alert("Sorry you're out of coins !")
        }
    });
}
});


























