console.log("welcome to tik tac toe");
let audioTurn=new Audio("tap_sound.mp3");

let turn="X";

//   function to change turn
const changeTurn= () =>{
   return turn === "X"?"0":"X" ;
}

// Function to check the win

 const checkWin= () =>{

 }

//  Logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach( element => {
            let boxtext =element.querySelector('.boxtext');
            element.addEventListener('click',()=>{
                if (boxtext.innerText === '') {
                    boxtext.innerText=turn;
                     turn=changeTurn();
                     audioTurn.play();
                     checkWin();
                     document.getElementsByClassName("info")[0].innerText= "Turn for " +turn;
                }
            })
})