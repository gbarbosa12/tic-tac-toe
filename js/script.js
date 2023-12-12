const squares = document.querySelectorAll(".grid-game div");
const resultAlert = document.querySelector("span");
const botaoPlayAgain = document.querySelector("[data-modal='playAgain']");
const containerModal = document.querySelector("[data-modal='container']");
let circleTrue;

function startGame() {
  squares.forEach((square) => {
    square.addEventListener("click", handleClick, { once: true });
  });

  circleTrue = true;
  initModal();
}

const handleClick = (e) => {
  element = e.target;

  const classRespective = circleTrue ? "circle" : "x";

  circleOrX(element, classRespective);

  checkWin();
  changePlayer();
};

function changePlayer() {
  circleTrue = !circleTrue;
}

function circleOrX(element, classRespective) {
  element.classList.add(classRespective);
}

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

  for (let i = 0; i < possibleWinnings.length; i++) {
    const [a, b, c] = possibleWinnings[i];
    if (
      squares[a].className == squares[b].className &&
      squares[a].className == squares[c].className &&
      squares[a].className !== ""
    ) {
      containerModal.classList.add("ativo");
      resultAlert.innerText = `${squares[a].className} won!!`;
      break;
    }
    checkDraw();
  }
}

function checkDraw() {
  const newSquares = Array.from(squares);
  const squares2 = newSquares.map((square) => {
    return square.className;
  });

  if (!squares2.includes("")) {
    containerModal.classList.add("ativo");
    resultAlert.innerText = "Draw!";
  }
}

function initModal() {
  if (botaoPlayAgain && containerModal) {
    containerModal.classList.remove("ativo");

    squares.forEach((square) => {
      square.removeAttribute("class");
      circleTrue = true;
    });
  }
}

botaoPlayAgain.addEventListener("click", startGame);

startGame();
