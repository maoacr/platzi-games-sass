const btnSwitch = document.getElementById('switch');

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('darkmode');
  btnSwitch.classList.toggle('active');
})