let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "green", "purple", "red"];

let started = false;
let level = 0;
let highest = 0;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let body = document.querySelector("body");
let st = document.querySelector(".start");

st.addEventListener("click", function () {
    if (started == false) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    
    level++;
    h3.innerText = `Highest Score ${highest}`;

    if(highest < level){
        highest++;
    }
    h2.innerText = `Level ${level}`;
    h3.innerText = `Highest Score ${highest}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function check(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }

    } else {
        h2.innerHTML = `Game Over ! Your Score was <b>${level}</b>  <br>Press start to start game`;
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}



function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    body.classList.add("bodyback");
    

    setTimeout(function(){
        body.classList.remove("bodyback");

    },100);
}