const squares = document.querySelectorAll(".grid-game div");
let circleTrue = true;

function circleOrX(element, classRespective) {
  element.classList.add(classRespective);
}

const handleClick = (e) => {
  element = e.target;

  const classRespective = circleTrue ? "circle" : "x";

  circleOrX(element, classRespective);

  circleTrue = !circleTrue;
};

squares.forEach((square) => {
  square.addEventListener("click", handleClick);
});
