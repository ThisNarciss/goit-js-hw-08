const formRef = document.querySelector('.feedback-form');
const throttle = require('lodash.throttle');

formRef.addEventListener('input', throttle(onTextareaInput, 500));
formRef.addEventListener('submit', onFormSubmit);

fillInTextarea();

const formData = {
  email: '',
  message: '',
};

function onTextareaInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  formData.email = '';
  formData.message = '';

  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.message.value === ''
  ) {
    alert('Для відправки форми мають бути заповнені всі поля!!!');
    return;
  }

  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}

function fillInTextarea() {
  try {
    const dataArr = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (dataArr.email) {
      formRef.elements.email.value = dataArr.email;
    }

    if (dataArr.message) {
      formRef.elements.message.value = dataArr.message;
    }
  } catch (error) {
    error.name;
    error.message;
  }
}
