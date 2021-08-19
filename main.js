// Coloring text <p> 2 "First blood 2"



const elemTextFirst = document.getElementById('text_1');
const elemTextTwo = document.getElementById('text_2');
const elemTextThree = document.getElementById('text_3');

const changeColor = () => {
  const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
      return this;
    },
    next() {
      this.current++
      if (this.current < this.data.length) {
        return {
          done: false,
          value: this.data[this.current],
        };
      } else {
        this.current = 0;
        return {
          done: true,
          value: this.data[this.current],
        };
      }
    }
  };
  return (event) => event.target.style.color = colors.next(colors).value;
};

elemTextFirst.addEventListener('click', changeColor());
elemTextTwo.addEventListener('click', changeColor());
elemTextThree.addEventListener('click', changeColor());