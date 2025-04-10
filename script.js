const rock=document.getElementById("btn1");
const paper=document.getElementById("btn2");
const scissor=document.getElementById("btn3");
const reset=document.getElementById("btn4");
const res=document.getElementById("result");
let score=0;

rock.addEventListener("click",()=> play("rock"));
paper.addEventListener("click",()=> play("paper"));
scissor.addEventListener("click",()=> play("scissor"));
reset.addEventListener("click",resetgame);

function play(playerchoice)
{
    const choices=['rock','paper','scissor'];
    const pc=choices[Math.floor(Math.random()*choices.length)];
    document.querySelector("p:nth-of-type(1)").textContent = `Your choice: ${playerchoice}`;
    document.querySelector("p:nth-of-type(2)").textContent = `Computer choice: ${pc}`;
    if(playerchoice===pc)
    {
        res.textContent='Its a tie';
    }
    else if((playerchoice==='rock' && pc==='scissor') ||
    (playerchoice==='paper' && pc==='rock') ||
    (playerchoice==='scissors' && pc==='paper'))
    {
        score++;
        res.textContent='You won';
    }
    else
    {
        res.textContent='Computer won';
    }
    document.querySelector("h3:nth-of-type(2)").textContent = `Your Score: ${score}`;
}
function resetgame() {
    score = 0;
    document.querySelector("h3:nth-of-type(2)").textContent = "Your Score: 0";
    document.querySelector("p:nth-of-type(1)").textContent = "Your choice: ";
    document.querySelector("p:nth-of-type(2)").textContent = "Computer choice: ";
    res.textContent = "Choose your weapon";
}