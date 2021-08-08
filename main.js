//code refactoring 


const player1ScoreDisplay=document.getElementById('player1Score');
const player2ScoreDisplay=document.getElementById('player2Score');
const winingScoreDisplay=document.querySelector('p span');
const inputScore=document.getElementById('inputScore');
const player1Btn=document.getElementById('player1Btn');
const player2Btn=document.getElementById('player2Btn');
const resetBtn=document.getElementById('resetBtn');

let player1Score=0;
let player2Score=0;
let winingScore=5;
let gameOver=false;

//changing the color at winning stage
function color(winingScore){
    if(winingScore==player1Score){
        player1ScoreDisplay.style.color='red'; 
    }
    else{
        player2ScoreDisplay.style.color='red';
    }
}

function winner(oldScore,winingScore){
    if(oldScore===winingScore){

        color(winingScore)
       

        gameOver=true;
        player1Btn.setAttribute('disabled','disabled');
        player2Btn.setAttribute('disabled','disabled');
    }

}


function reset(){
    player1Score=0;
    player2Score=0;
    player1ScoreDisplay.textContent=player1Score;
    player2ScoreDisplay.textContent=player2Score;
    player1ScoreDisplay.style.color=''; 
    player2ScoreDisplay.style.color=''; 
    player1Btn.removeAttribute('disabled');
    player2Btn.removeAttribute('disabled');
    gameOver=false;
}

player1Btn.addEventListener('click',()=>{

    if(!gameOver){
    //data change:programmatic way 
    player1Score++;

    //button disabled after winning 
    winner(player1Score,winingScore);
    
    // show changed data :Dom not same 
    player1ScoreDisplay.textContent=player1Score;
}
});

player2Btn.addEventListener('click',()=>{
    if(!gameOver){
      //data change:programmatic way 
    player2Score++;

    winner(player2Score,winingScore);
    // show changed data :Dom not same 
    player2ScoreDisplay.textContent=player2Score;
    }
});

resetBtn.addEventListener('click',reset);

inputScore.addEventListener('change',()=>{
    winingScore=Number(inputScore.value);
    winingScoreDisplay.textContent=inputScore.value;
    inputScore.value='';
    reset();
});
