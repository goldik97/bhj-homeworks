const countTime = function() {
    const timer = document.getElementById("timer");

    if(timer.textContent >=1) {
        timer.textContent --;
    }
    else if(timer.textContent === "0") {
        window.alert ("Вы победили в конкурсе!")
    }
}

setInterval(countTime, 1000);