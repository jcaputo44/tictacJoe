/*----- constants -----*/


/*----- app's state (variables) -----*/


let player = "x";
let gameStatus;


/*----- cached element references -----*/

let squareEls = Array.from(document.querySelectorAll('section > div'));
const resetBtn = document.getElementById('reset-btn');


/*----- event listeners -----*/

 
// document.querySelector('button')
//   .addEventListener('click', init() );

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
      player = 'x';
     }

    render();

    function render() {
      squareEls.innerText = '';
    }
  
    
    squareEls.forEach(function(squareEl) {
      squareEl.addEventListener('click', function(){
        if(squareEl.innerText != '') return;
        squareEl.innerText = player;
        player = (player === "x" ? "o" : "x");
     })
    });



   






