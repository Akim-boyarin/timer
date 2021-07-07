// поля для введённых значений времени
let hoursInputField = document.querySelector(".form__hours-field");
hoursInputField.addEventListener("input", timeValuesHandler);
hoursInputField.addEventListener("blur", correctInputAppearance);

let minutesInputField = document.querySelector(".form__minutes-field");
minutesInputField.addEventListener("input", timeValuesHandler);
minutesInputField.addEventListener("blur", correctInputAppearance);

let secondsInputField = document.querySelector(".form__seconds-field");
secondsInputField.addEventListener("input", timeValuesHandler);
secondsInputField.addEventListener("blur", correctInputAppearance);