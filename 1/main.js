const formSendFile = document.getElementById('form');

formSendFile.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(formSendFile);
  const reader = new FileReader();

  fetch('https://fe-student-api.herokuapp.com/api/file', {
    method: 'POST',
    body: formData,
  })  .then(response => response.json())
      .then(data => console.log(data));
});
