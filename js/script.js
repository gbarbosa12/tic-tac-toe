const squares = document.querySelectorAll(".grid-game div");
let circleTrue = true;

function alternandoPlayer() {
  function circleOrX(element, classRespective) {
    element.classList.add(classRespective);

    // if (element.classList.contains(classRespective)) {
    //   console.log("tem " + classRespective);
    // }
  }

  const handleClick = (e) => {
    element = e.target;

    const classRespective = circleTrue ? "circle" : "x";

    circleOrX(element, classRespective);

    checkWin();

    circleTrue = !circleTrue;
  };

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
}

alternandoPlayer();

// if (
//   squares[0].classList.contains("circle") &&
//   squares[0] == squares[1] &&
//   squares[0] == squares[2]
// ) {
//   console.log("true");
// } else {
//   console.log("false");
// }

function checkWin() {
  const possibleWinnings = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  possibleWinnings.forEach((event) => {
    const [a, b, c] = event;

    if (
      squares[a].className == squares[b].className &&
      squares[a].className == squares[c].className &&
      squares[a].className !== ""
    ) {
      console.log(squares[a].className + " venceu");
    }
  });
}

let todosComClasse = true

squares.forEach((square) => {
  if (square.className !== 'circle') {
    todosComClasse = false
  }
})