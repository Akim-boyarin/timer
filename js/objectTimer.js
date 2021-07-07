// дисплей
let displayScreen = document.querySelector(".display__screen");

let timer = new Timer(
    displayScreen,
    showScreen,
    showForm,
    showPauseButton,
    showStartButton,
    setZerosToScreen,
    setZerosToForm
);