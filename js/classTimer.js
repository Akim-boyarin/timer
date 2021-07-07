class Timer {
    #hours = 0;
    #minutes = 0;
    #seconds = 0;
    
    constructor(
        display,
        showScreen,
        showForm,
        showPauseButton,
        showStartButton,
        setZerosToScreen,
        setZerosToForm
        ) {
        this.display = display;
        this.showScreen = showScreen;
        this.showForm = showForm;
        this.showPauseButton = showPauseButton;
        this.showStartButton = showStartButton;
        this.setZerosToScreen = setZerosToScreen;
        this.setZerosToForm = setZerosToForm;
    }

    // старт
    start() {
        const TICK_RANGE = 1000;
        
        this.#render();
        this.showScreen();
        this.showPauseButton();

        this.interval = setInterval(() => {
            this.#tick();
        }, TICK_RANGE);
    }
    
    // пауза
    pause() {
        this.showStartButton();
        clearInterval(this.interval);
    }

    // сброс значений
    drop() {
        clearInterval(this.interval);
        this.#setZero();
        this.setZerosToForm();
        this.showForm();
        this.setZerosToScreen();
        this.showStartButton();
    }

    set hours(value) {
        let maxValue = 99;
        let minValue = 0;

        if (typeof value !== "number" || value > maxValue || value < minValue || !Number.isInteger(value)) return;

        this.#hours = value;
    }

    set minutes(value) {
        let maxValue = 59;
        let minValue = 0;
        
        if (typeof value !== "number" || value > maxValue || value < minValue || !Number.isInteger(value)) return;

        this.#minutes = value;
    }

    set seconds(value) {
        let maxValue = 59;
        let minValue = 0;
        
        if (typeof value !== "number" || value > maxValue || value < minValue || !Number.isInteger(value)) return;

        this.#seconds = value;
    }

    #tick() {
        if (this.#isTotalZero()) {
            clearInterval(this.interval);
            this.setZerosToForm();
            this.showForm();
            this.showStartButton();

            return;
        }

        this.#seconds--;

        if (this.#seconds < 0) {
            this.#minutes--;
            this.#seconds = 59;
        }
        if (this.#minutes < 0) {
            this.#hours--;
            this.#minutes = 59;
        }

        this.#render();
    }

    #render() {
        let result = `${this.#getValueToShow(this.#hours)} : ${this.#getValueToShow(this.#minutes)} : ${this.#getValueToShow(this.#seconds)}`;
        this.display.textContent = result;
    }
    
    #isTotalZero() {
        return this.#hours === 0 && this.#minutes === 0 && this.#seconds === 0;
    }

    #setZero() {
        this.#hours = 0;
        this.#minutes = 0;
        this.#seconds = 0;
    }

    #getValueToShow(value) {
        let valueToShow = String(value);
            
        return valueToShow.length >= 2 ? valueToShow : "0" + valueToShow;
    }
}