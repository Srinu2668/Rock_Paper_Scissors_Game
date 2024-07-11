let img=document.querySelectorAll(".backImg");
let yourPoints=0;
let compPoints=0;
let scoreOfMe=document.querySelector("#cop1");
let scoreOfCom=document.querySelector("#cop2");
let statuOfWin=document.querySelector(".status");

let restart=document.querySelector("#para");

restart.addEventListener("click",()=>
{
    statuOfWin.innerText="All the Best";
    yourPoints=0;
    compPoints=0;
    scoreOfMe.innerText=yourPoints;
    scoreOfCom.innerText=compPoints;
});

img.forEach((pic)=>
{
    pic.addEventListener("click",()=>
    {

        let humanChoice=pic.getAttribute("id");
        let computerChoice=computer();
        let win=result(humanChoice,computerChoice);
        // win=true means you won. win=flase means computer won
        if(win==="draw")
        {
            statuOfWin.innerText="Match Was Draw";
            statuOfWin.style.background="none";
        }
        else
        {
            if(win)
            {
                yourPoints++;
                scoreOfMe.innerText=yourPoints;
                statuOfWin.innerText=`Your ${humanChoice} Beat Computer's ${computerChoice}`;
                statuOfWin.style.background="linear-gradient(to right,#074c00,#42A341,#85d767)";
            }
            else
            {
                compPoints++;
                scoreOfCom.innerText=compPoints;
                statuOfWin.innerText=`Computer's ${computerChoice} Beat Your ${humanChoice}`;
                statuOfWin.style.background="linear-gradient(to right,#b71a3e,#FE0944,#FEAE96)";
            }
        }
    });
});


let compArray=["rock","paper","scissor"];

let computer=()=>
{
   let randomNumber=Math.trunc(Math.random()*3);
   let compChoice=compArray[randomNumber];
   return compChoice;
};


let result=(hc,cc)=>
{
    console.log("you choice ",hc,"\ncop choice ",cc);

    if(hc===cc)
        return "draw";
    else
    {
        if(hc==="rock")
            return (cc=="paper")?false:true;
        else if(hc==="paper")
            return (cc=="rock")?true:false;
        else
            return (cc=="paper")?true:false;
    }
};