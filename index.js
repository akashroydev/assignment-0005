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



























//document.addEventListener("DOMContentLoaded", function (){
//    const buttons = document.querySelectorAll(".call-btn-click");
//    const outPut = document.getElementById("output");
//
//    for (const button of buttons) {
//        button.addEventListener("click", function () {
//            const img = parentDiv.querySelector("img").src;
//            const parentDiv = this.closest(".call-btn-click");
//            const header = parentDiv.querySelector("h2").textContent;
//            const numBer = document.getElementById("number")
//            const time = new Date().toLocaleTimeString();

            
//        });
//    }
//});



