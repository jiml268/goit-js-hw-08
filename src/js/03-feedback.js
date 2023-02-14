import _throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formInfo = document.querySelector('.feedback-form');

formInfo.addEventListener('submit', onSubmitButtom);
formInfo.addEventListener('input', _throttle(onFormInput, 500));

function onSubmitButtom(event) {
    event.preventDefault();
  const formData = new FormData(formInfo);
  formData.forEach((value, name) => console.log(value, name));
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onFormInput(event) {
  let inputData = localStorage.getItem(LOCALSTORAGE_KEY);
  inputData = inputData ? JSON.parse(inputData) : {};
  inputData[event.target.name] = event.target.value;
  console.log(event.target.name)
  console.log(event.target.value)

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputData));
}

function initForm() {
  let fillForm = localStorage.getItem(LOCALSTORAGE_KEY);
  console.log(fillForm)

  if (fillForm) {
    fillForm = JSON.parse(fillForm);
    console.log(fillForm)

    Object.entries(fillForm).forEach(([name, value]) => {
        formInfo.elements[name].value = value;
    });
  }
}

initForm();