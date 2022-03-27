/*----- constants -----*/
const colors = null;


/*----- app's state (variables) -----*/


/*----- cached element references -----*/

const squareEls = Array.from(document.querySelectorAll('section > div'));

/*----- event listeners -----*/

document.querySelector('section')
  .addEventListener('click', function(evt) {
    // const idx = parseInt(evt.target.id);
    const idx = squareEls.indexOf(evt.target);
    if (idx === -1) return;
    console.log(idx);
  });

/*----- functions -----*/

function render() {

}






