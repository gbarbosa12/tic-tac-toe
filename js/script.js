const squares = document.querySelectorAll(".grid-game div");
let circleTrue = true;
const botaoPlayAgain = document.querySelector("[data-modal='playAgain']");
const containerModal = document.querySelector("[data-modal='container']");

function circleOrX(element, classRespective) {
  element.classList.add(classRespective);
}

const handleClick = (e) => {
  element = e.target;

  const classRespective = circleTrue ? "circle" : "x";

  circleOrX(element, classRespective);

  checkWin();
  checkDraw();

  circleTrue = !circleTrue;
};

squares.forEach((square) => {
  square.addEventListener("click", handleClick);
});

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
      containerModal.classList.add("ativo");
    }
  });
}

function checkDraw() {
  const newSquares = Array.from(squares);
  const squares2 = newSquares.map((square) => {
    return square.className;
  });

  if (!squares2.includes("")) {
    console.log("empate");
  }
}

function initModal() {
  if (botaoPlayAgain && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    function clickForaModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    botaoPlayAgain.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickForaModal);
  }
}

initModal();
