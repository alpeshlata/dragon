let boxes=document.querySelectorAll(".box");
let game_con=document.querySelector(".game_con");
let start=document.querySelector(".start_game");
let main_con=document.querySelector(".container");
let sms=document.querySelector(".game_sms");
let player1_name="Alpesh";//document.querySelector(".f_p_name");
let player2_name="Sakuntlaben";//document.querySelector(".s_p_name");
// let ditail=document.querySelector(".play_name");
let home=document.querySelector(".home_p")
let reset_game=document.querySelector(".reset_Game");
console.log(boxes);
console.log(game_con);
let turnBtn=true;
let player1=0;
let player2=0;
let coutSeps=0;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

let checkWin=()=>{
    for(let pattern of winPattern){
        //  console.log(pattern[0],pattern[1],pattern[2]);
       let pos1= boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3= boxes[pattern[2]].innerText;
       if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3)
            {
                // console.log(pos1,pos2,pos3);
            //   home.classList.remove("hide");
                turnBtn=true;
                home.classList.remove("hide");
                main_con.classList.add("hide");
                // ditail.classList.add("hide");
                sms.classList.remove("hide");
                start.innerText="Start Again";
                if(player1>player2){
                     sms.innerText="The Winner Is "+player1_name;
                    console.log("The Winner Is  Alpesh");
                }
                else
                {
                     sms.innerText="The Winner Is "+player2_name;
                       console.log("The Winner Is Dragon");
                }

            }
            else
            {
                    console.log("Out Of Commparision");
            }
        }
        else
        {
            console.log("Out Of check Empty condition");
        }
    }
}
main_con.classList.add("hide");
// ditail.classList.add("hide");

boxes.forEach((box)=>{
    
    start.addEventListener("click",()=>{
        sms.classList.add("hide")
        if(start.innerText=="Start Game"){
            start.innerText="Submite";
            if(start.innerText=="Submite"){
                start.addEventListener("click",()=>{
                    home.classList.add("hide")
                    main_con.classList.remove("hide");
                    boxes.forEach((box)=>{
                    box.addEventListener("click",()=>{
                        if(turnBtn==true)
                        {
                            box.innerText="O";
                            turnBtn=false;
                            player1++;
                        }
                        else{
                            box.innerText="X";
                            turnBtn=true;
                            player2++;
                        }
                        box.disabled=true;
                        checkWin();          
                        if(start.innerText=="Start Again"){
                            start.addEventListener("click",()=>{
                                boxes.forEach((box)=>{
                                    box.disabled=false;
                                    box.innerText="";
                                    player1=0;
                                    player2=0;
                                    coutSeps=0;
                                });
                            });
                        }
                        coutSeps++;

                    });
                    
                })
                });
            }
        }

        
    });
    
});


    reset_game.addEventListener("click",()=>{
        boxes.forEach((box)=>{
            box.disabled=false;
            box.innerText="";
            player1=0;
            player2=0;
            coutSeps=0;
        });
    });
