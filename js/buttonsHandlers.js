let startButton = document.querySelector(".button-start");
let pauseButton = document.querySelector(".button-pause");
let dropButton = document.querySelector(".button-drop");

// обработчик старта
startButton.addEventListener("click", event => { timer.start() });
// startButton.addEventListener("pointerdown", event => { timer.start() });

// обработчик паузы
pauseButton.addEventListener("click", event => { timer.pause() });
pauseButton.addEventListener("pointerdown", event => { timer.pause() });

// обработчик сброса
dropButton.addEventListener("click", event => { timer.drop() });
dropButton.addEventListener("pointerdown", event => { timer.drop() });