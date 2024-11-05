let count = parseInt(localStorage.getItem('count')) || 0;



const counterDisplay = document.querySelector("#counter");
const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn")
const resetBtn = document.querySelector("#resetBtn");

function handleIncrement() {
    count++;
   updateCounter();
}

function handleReset() {
    count = 0;
   updateCounter();
}

function handleDecrement() {
    if (count > 0) {
        count--;
       updateCounter();
    }
}

function updateCounter(){
    counterDisplay.textContent = count;
    localStorage.setItem('count', count.toString());
}
incrementBtn.addEventListener("click", handleIncrement);
resetBtn.addEventListener("click", handleReset);
decrementBtn.addEventListener("click", handleDecrement);

updateCounter();