/*----- constants -----*/

// const winningCombos = [
//   [0,1,2]
//   [3,4,5]
//   [6,7,8]
//   [0,3,6]
//   [1,4,7]
//   [2,5,8]
//   [0,4,8]
//   [2,4,6]
// ]


/*----- app's state (variables) -----*/


let player = "x";
let gameStatus;
let board;


/*----- cached element references -----*/

let squareEls = Array.from(document.querySelectorAll('section > div'));
const resetBtn = document.getElementById('reset-btn');


/*----- event listeners -----*/

 
resetBtn.addEventListener('click', init);

    
  document.querySelector('section')
    .addEventListener('click', function(evt) {
    // const idx = parseInt(evt.target.id);
      const idx = squareEls.indexOf(evt.target);
      if (idx === -1) return;
      // console.log(idx);
    });
    
    /*----- functions -----*/

    init (); 

    function init() {
      squareEls.forEach(function(squareEl){
        squareEl.innerText = "";
      }) 
      player = 'x';
      board = [null, null, null, null, null, null, null, null, null];
      // div = '';
      render();
     }

  function render() {
      // squareEls.innerText = '';
    }
  
    squareEls.forEach(function(squareEl) {
      squareEl.addEventListener('click', function(){
        if(squareEl.innerText != '') return;
        squareEl.innerText = player;
        player = (player === "x" ? "o" : "x");
     })
    });
