let getHole = index => document.getElementById(`hole${index}`);
let deads = document.getElementById("dead");
let miss = document.getElementById("lost");
let wings = parseInt(dead.textContent);
let losts = parseInt(miss.textContent);

function checkGame(deads, miss) {
    if(deads === 10) {
        alert("Вы победили!!!");
        location.reload();
    }
    else if(miss === 5) {
        alert("Вы проиграли!");
        location.reload();
    }
}

for(let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        if(this.className.includes("hole_has-mole")) {
            wings += 1;
            deads.textContent = wings;
        }
        else {
            losts += 1;
            miss.textContent = losts;
        }
        checkGame(wings, losts);
    }
}
