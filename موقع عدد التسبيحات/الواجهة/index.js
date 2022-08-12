let countEl = document.getElementById("count-el");

let count = 0;

function firebase() {

    count += 1;
    countEl.innerText = count;
}

function youe() {

    count -= 1
    countEl.innerText = count;
}

function reset() {
    count = 0;
    countEl.innerText = count;
}