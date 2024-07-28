const cookieClick = document.getElementById("clicker__counter");
let cookieImage = document.getElementById("cookie");
let initialClick = 0;
let cookieSpeedClick = document.getElementById("clicker__speed__counter")
let lastTimeClick = Date.now();


cookieImage.onclick = function() {
    cookieImage.classList.contains("clicker__cookie") ? cookieImage.className = "new__clicker__cookie" : cookieImage.className = "clicker__cookie";

    let currentClick = parseInt(cookieClick.textContent);
    cookieClick.textContent = currentClick + 1;

    cookieSpeedClick.textContent = (((Date.now() - lastTimeClick) / 1000) / (currentClick - initialClick)).toFixed(2);
}