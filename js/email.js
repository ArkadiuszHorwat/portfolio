const inputMail = document.querySelectorAll('.inputs');

const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_yekkatu', 'template_jqly22s', e.target, 'user_2q1XBdhAcBHUVtGBKWKvi')
        .then((result) => {
        alert('Message was sent');
        inputMail.forEach(input => input.value = '');
    }, (error) => {
      alert('Sending the message failed');
    });
}
