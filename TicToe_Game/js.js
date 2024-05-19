let boxes=document.querySelectorAll(".box");
let game_con=document.querySelector(".game_con");
let start=document.querySelector(".start_game");
let main_con=document.querySelector(".container");
let sms=document.querySelector(".game_sms");
let reset_game=document.querySelector(".reset_Game");

let boxturn=true;

let winPattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8]
];
let enabled=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("Newbox1");
        box.classList.remove("Newbox2");
    }
    sms.classList.add("hide");
    
}
let disabled=()=>{
    
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    sms.innerText=`Congratulation  "${winner}" You are Winner`; 
    sms.classList.remove("hide");
    disabled();

    
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(boxturn){
            box.innerText="O";
            boxturn=false;
            box.classList.add("Newbox1");
        }
        else{
            box.innerText="X";
            boxturn=true;
            box.classList.add("Newbox2");
        }
        box.disabled=true;
        checkwinner();
    })
})
const checkwinner=() => {
    for(let pattern of winPattern){

       let pos1= boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3= boxes[pattern[2]].innerText;
       if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3)
            {
                console.log("Winner Is : ",pos1);
                showWinner(pos1);

                boxes[pattern[0]].color="red";
       
            }
       }

    }
}

let resetGame=()=>{
    boxturn=true;
   
    enabled();
}
let startGame=()=>{
    boxturn=true;
    enabled();
    
}
start.addEventListener("click",resetGame);
reset_game.addEventListener("click",resetGame);