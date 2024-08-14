'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='🎉Correct Number!';

let number=Math.trunc(Math.random()*20)+1;
//document.querySelector('.number').textContent=number;
let score= 20;
let highScore=0;

document.querySelector(".check").addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    if (! guess){
        document.querySelector('.message').textContent="⛔ No number entered";
    }else if (guess === number){
         document.querySelector('.message').textContent="🎉Correct Number";
         document.querySelector('.number').textContent=number;
         document.querySelector('body').style.backgroundColor='#60b347';
    }else if (guess > number){
        document.querySelector('.message').textContent="📈Too High";
        score--;
        document.querySelector(".score").textContent=score;
    }else if (guess < number){
         document.querySelector('.message').textContent="📉Too Low";
         score--;
         document.querySelector(".score").textContent=score;
    }

});


document.querySelector('.again').addEventListener('click',function(){
    // if (highscore < score){
    //     document.querySelector('.highscore').textContent=score;
    // }
    number=Math.trunc(Math.random()*20)+1;
    score =20;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent='?';
    //document.querySelector('.guess').textContent=null;
    document.querySelector('.message').textContent='Start guessing...';
});