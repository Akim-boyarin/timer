// валидация формы, передача значения времени
function timeValuesHandler(event) {
    let minValue = 0;
    let maxValue;
    
    switch(this.id) {
        case "hours":
            maxValue = 99;
            break;

        case "minutes":
            maxValue = 59;
            break;

        case "seconds":
            maxValue = 59;
            break;
    }

    if (!(event instanceof InputEvent)) {
        this.value = (+this.value > maxValue) ? `${minValue}` : this.value;
        this.value = (+this.value < minValue) ? `${maxValue}` : this.value;
        this.value = (this.value.length === 1) ? "0" + this.value : this.value;
    } else {
        this.value = (+this.value > maxValue) ? `${maxValue}` : this.value;
        this.value = (this.value.length > 2) ? this.value.slice(0, 2) : this.value;
    }
        
    // передача значения
    timer[this.id] = +this.value;
}

// придать законченный внешний вид полю ввода
function correctInputAppearance(event) {
    this.value = (this.value.length === 1) ? "0" + this.value : this.value;
}

// показать дисплей таймера
function showScreen() {
    let displayForm = document.querySelector(".display__form");
    displayForm.classList.add("none");
        
    let displayScreen = document.querySelector(".display__screen");
    displayScreen.classList.remove("none");
}

// показать форму ввода таймера
function showForm() {
    let displayForm = document.querySelector(".display__form");
    displayForm.classList.remove("none");
        
    let displayScreen = document.querySelector(".display__screen");
    displayScreen.classList.add("none");
}

// показать кнопку паузы
function showPauseButton() {
    let startButton = document.querySelector(".button-start");
    startButton.classList.add("none");
    
    let pauseButton = document.querySelector(".button-pause");
    pauseButton.classList.remove("none");
}

// показать кнопку старта
function showStartButton() {
    let startButton = document.querySelector(".button-start");
    startButton.classList.remove("none");
        
    let pauseButton = document.querySelector(".button-pause");
    pauseButton.classList.add("none");
}

// выставить на экране нулевые значения
function setZerosToScreen() {
    let displayScreen = document.querySelector(".display__screen");
    displayScreen.textContent = "00 : 00 : 00";
}

// выставить формам нулевые значения
function setZerosToForm() {
    let hoursInputField = document.querySelector(".form__hours-field");
    hoursInputField.value = "";
    
    let minutesInputField = document.querySelector(".form__minutes-field");
    minutesInputField.value = "";
    
    let secondsInputField = document.querySelector(".form__seconds-field");
    secondsInputField.value = "";
}