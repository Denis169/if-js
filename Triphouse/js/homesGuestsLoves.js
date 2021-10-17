export async function placesData() {
  try {
    if (sessionStorage.getItem('places') === null){
      let places = await (await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')).json();

      const bubbleSort = (arr) => {
        let swap;
        do {
          swap = false;
          for (let i = 1; i < arr.length; ++i) {
            if (arr[i - 1].name > arr[i].name) {
              [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
              swap = true;
            }
          }
        } while (swap)
        return arr;
      }

      sessionStorage.setItem('places', JSON.stringify(bubbleSort(places)));
    }

    const data = JSON.parse(sessionStorage.getItem('places'));

    let count = 0;
    let countLeft = data.length - 1;

    const sliderRight = document.getElementById('homes-arrow-right');
    const sliderLeft = document.getElementById('homes-arrow-left');

    const addNewElement = (counter) => {
      const newDiv =  document.createElement('div');
      newDiv.setAttribute('class', 'homes__col');
      newDiv.innerHTML = `
        <img class="homes__images" src="${data[counter].imageUrl}" alt="Hotel">
        <a class="homes__link" href="">${data[counter].name}</a>
        <p class="homes__text">${data[counter].city}, ${data[counter].country}</p>
      `;
      return newDiv;
    }

    const blockFilling = () => {
      for (let i = 0; i <= 3; i++) {
        document.getElementById('homes__section-col').append(addNewElement(i));
        count = i + 1;
      }
    }

    const changeColRight = () => {
      document.getElementById('homes__section-col').removeChild(document.getElementById('homes__section-col').firstElementChild);
      document.getElementById('homes__section-col').append(addNewElement(count));
      count === data.length - 1 ? count = 0 : count++;
      countLeft === data.length - 1 ? countLeft = 0 : countLeft++;
    }
    const changeColLeft = () => {
      document.getElementById('homes__section-col').removeChild(document.getElementById('homes__section-col').lastElementChild);
      document.getElementById('homes__section-col').prepend(addNewElement(countLeft));
      countLeft === 0 ? countLeft = data.length - 1 : countLeft--;
      count === 0 ? count = data.length - 1 : count--;
    }

    blockFilling();
    sliderRight.addEventListener('click', changeColRight);
    sliderLeft.addEventListener('click', changeColLeft);

  } catch (error) {
    console.error(error);
  }
}