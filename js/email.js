const inputMail = document.querySelectorAll('.inputs');
const form = document.querySelector('form');
const inputTel = document.querySelector('#phone');
const alertMessage = document.querySelector('.alert');

form.addEventListener('submit', (e)=>{
  e.preventDefault();

  const numbers = /^[0-9]+$/;
  if(inputTel.value == '' || inputTel.value.match(numbers) ){
    emailjs.sendForm('service_yekkatu', 'template_jqly22s', e.target, 'user_2q1XBdhAcBHUVtGBKWKvi')
      .then((result) => {
      alertMessage.classList.remove('hide');
      inputMail.forEach(input => input.value = '');
  }, (error) => {
    alert('Sending the message failed');
  });
  }
  else{
    inputTel.value = '';
    inputTel.placeholder = "Enter numbers only..";
  }
}); 
