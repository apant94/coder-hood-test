const submitBtn = document.querySelector(".popup__submit");
const textInputs = document.querySelectorAll(`.validate`);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".popup").classList.remove("opened");
});

function _showInputError(inputElement, errorMessage) {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("error-border");
  errorElement.textContent = errorMessage;
}

// Прячем функционал ошибки
function _hideInputError(inputElement) {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("error-border");
  errorElement.textContent = "";
}

// сброс ошибок
function resetError() {
  textInputs.forEach((inputElement) => {
    _hideInputError(inputElement);
  });
}

// При невалидном элементе внутри поля формы - добавляем ошибку, при валидном - прячем ошибку
function _isValid(inputElement) {
  if (!inputElement.validity.valid) {
    _showInputError(inputElement, inputElement.validationMessage);
  } else {
    _hideInputError(inputElement);
  }
}

// Проверем наличие хоть одного невалидного элемента внутри массива
function _hasInvalidInput() {
  return Array.from(textInputs).some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

// cтилизуем неактивную кнопку
function _disableButton() {
  submitBtn.classList.add("popup__submit_disabled");
  submitBtn.setAttribute("disabled", true);
}

// стилизуем активную кнопку
function _ableButton() {
  submitBtn.classList.remove("popup__submit_disabled");
  submitBtn.removeAttribute("disabled");
}

// функция изменения активности кнопки при условии
function _toggleButtonState() {
  if (_hasInvalidInput()) {
    _disableButton();
  } else {
    _ableButton();
  }
}

// устанавливаем слушатели на событие инпут
function _setEventListeners(inputElement) {
  inputElement.addEventListener("input", () => {
    _isValid(inputElement);
    _toggleButtonState();
  });

  // установим изначально неактивную кнопку на все формы
  _toggleButtonState();
}

Array.from(textInputs).forEach((item) => {
  _setEventListeners(item);
});
