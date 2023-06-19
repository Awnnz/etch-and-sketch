let size = 16;
let mainContainer = document.querySelector('.main-container');
let newBoardButton = document.querySelector('.newBoard');
let colorButton = document.querySelector('.changeColor');
let rainbowButton = document.querySelector('.rainbowColor')
let gradualButton = document.querySelector('.gradual')
let mouseDown = false

document.body.onmousedown = (e) => {
  e.preventDefault();
  (mouseDown = true);
  document.querySelector('.mode').textContent = `Drawing Mode: On`;
}
document.body.onmouseup = () => {
  (mouseDown = false);
  document.querySelector('.mode').textContent = `Drawing Mode: Off`;
}

colorButton.addEventListener('click', randomColor)
rainbowButton.addEventListener('click', rainbowColor)
gradualButton.addEventListener('click', rainbowGradualBlack)
newBoardButton.addEventListener('click', () => {
  let value = +prompt('Size of Board?');
  
  while ((value < 2 || value > 100) || isNaN(value)) {
    value = prompt('Size of Board?');
  }

  clearBoard()
  createboard(value)
})

createboard(size)

// FUNCTIONS GO HERE

function createboard(size) {
  
  for (let i = 0; i < size; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('horizontal-container');
    mainContainer.appendChild(newDiv)
  }

  let horizontalContainers = document.querySelectorAll('.horizontal-container');

  horizontalContainers.forEach(container => {
  for (let i = 0; i < size; i++) {
    let newDiv = document.createElement('div');
      newDiv.classList.add('vertical');
      container.appendChild(newDiv)
  }
  })

  let square = document.querySelectorAll('.vertical');
  square.forEach(square => square.addEventListener('mouseover', () => {
    if (mouseDown) square.style.backgroundColor = "black";
    
  }))

  square.forEach(square => square.addEventListener('mousedown', () => {
     square.style.backgroundColor = "black";
  }))


}

function clearBoard() {
    let squares = document.querySelectorAll('.horizontal-container', '.vertical');
    squares.forEach(square => square.remove())
  }

function randomColor() {
  let square = document.querySelectorAll('.vertical');
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr[i] = ~~(Math.random() * 255);
  }
  square.forEach(square => square.addEventListener('mouseover', () => {
    if (mouseDown) square.style.backgroundColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
  }))

  square.forEach(square => square.addEventListener('mousedown', () => {
    square.style.backgroundColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
  }))
}

function randomValue() {
  return ~~(Math.random() * 255)
}

function rainbowColor() {
  let square = document.querySelectorAll('.vertical');
  square.forEach(square => square.addEventListener('mouseover', () => {
    let arr = [];
    for (let i = 0; i < 3; i++) {
    arr[i] = ~~(Math.random() * 255);
    }
    if (mouseDown) square.style.backgroundColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
  }))

  square.forEach(square => square.addEventListener('mousedown', () => {
    let arr = [];
    for (let i = 0; i < 3; i++) {
    arr[i] = ~~(Math.random() * 255);
    }
    square.style.backgroundColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
  }))
}

function rainbowGradualBlack() {
  let darkBuffer = 1;
  let square = document.querySelectorAll('.vertical');
  square.forEach(square => square.addEventListener('mouseover', () => {
    if (!mouseDown) return;
    let arr = [];
    for (let i = 0; i < 3; i++) {
    arr[i] = ~~(Math.random() * 255);
    }
    if (mouseDown) square.style.backgroundColor = `rgb(${arr[0]*darkBuffer}, ${arr[1]*darkBuffer}, ${arr[2]*darkBuffer})`;
    darkBuffer -= .01;
  }))

  square.forEach(square => square.addEventListener('mousedown', () => {
    if (!mouseDown) return;
    let arr = [];
    for (let i = 0; i < 3; i++) {
    arr[i] = ~~(Math.random() * 255);
    }
    square.style.backgroundColor = `rgb(${arr[0]*darkBuffer}, ${arr[1]*darkBuffer}, ${arr[2]*darkBuffer})`;
    darkBuffer -= .01;
  }))
}



// END OF FUNCTIONS


