let userseq = [];
let gameseq = [];
let btns = ["red","green","yellow","purple"]

let h2 = document.querySelector("h2");

let start = false;
let btn = document.querySelector("button");

btn.addEventListener("mouseenter",function(){
    btn.style.backgroundColor = "blue";
})
btn.addEventListener("mouseleave",function(){
    btn.style.backgroundColor = "rgb(0, 93, 254)";
})
btn.addEventListener("click",function(){
    if (start === false) {

        start = true;
        levelUp();
       
    }
})


let level = 0;


function levelUp(){
  level++;
  userseq = [];
  h2.innerText = `Level ${level}`;

  let inx = Math.floor(Math.random()*4);
    let randColor = btns[inx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameFlash(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
   
}


function gameFlash(btn){
    btn.classList.add("gameFlash");

    setTimeout(() => {
        btn.classList.remove("gameFlash");
    }, 400);
}


function userFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 200);
}

let allBtns = document.querySelectorAll(".box");

for ( let btn of allBtns) {
    btn.addEventListener("click",function(){
        userFlash(btn);
        let userColor = btn.getAttribute("id");
       
        userseq.push(userColor);

        checkResult(userseq.length-1);
    })
}

let h3 = document.querySelector("h3");
let higest = 0;

function checkResult(idx){
    if (userseq[idx] == gameseq[idx]) {

       
        if (userseq.length == gameseq.length) {
            
            if (level > higest) {
                higest = `${level}`; 
                h3.innerHTML = `Higest Score is -: <strong>${higest}</strong>`;
            }

            setTimeout(() => {
                levelUp();
            }, 700);
        }
      
    }
    else{
        h2.innerHTML = `Game Over! Wrong color selected <br>start again`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor ="white";
        }, 250);
        reset();
    }
}


function reset(){
    userseq = [];
    gameseq = [];
    level = 0;
    start = false;
}