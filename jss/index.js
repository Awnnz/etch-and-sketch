let row = 16;
let column = 16;

let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');

document.body.appendChild(mainContainer);

for (let i = 0; i < row; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('horizontal-container');
    mainContainer.appendChild(newDiv)
}

let horizontalContainers = document.querySelectorAll('.horizontal-container');

horizontalContainers.forEach(container => {
  for (let i = 0; i < column; i++) {
    let newDiv = document.createElement('div');
      newDiv.classList.add('vertical');
      container.appendChild(newDiv)
  }
})


  

