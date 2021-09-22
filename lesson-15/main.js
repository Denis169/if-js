const formSendFile = document.getElementById('form');

const sendFile = (event) => {
  event.preventDefault();
  const formData = new FormData(formSendFile);
  
  fetch('https://fe-student-api.herokuapp.com/api/file', {
    method: 'POST',
    body: formData,
  })  .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log('Fetch err:', err));
};


formSendFile.addEventListener('submit', sendFile)