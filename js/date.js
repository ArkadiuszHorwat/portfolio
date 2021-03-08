const dateYear = document.querySelector('footer');
const year = new Date();

dateYear.innerHTML = `<p>Copyright ©${year.getFullYear()} Arkadiusz Horwat</p>`;