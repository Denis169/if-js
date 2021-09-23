const formSendFile = document.getElementById('form');

const sendFile = async(event) => {
  event.preventDefault();

  try {
    const formData = new FormData(formSendFile);
    const data = await fetch('https://fe-student-api.herokuapp.com/api/file', {method: 'POST', body: formData}).then(data => data.json());
    console.log(data);

  } catch (err) {
    console.log('An error has occurred:', err);
  }
};

formSendFile.addEventListener('submit', sendFile)