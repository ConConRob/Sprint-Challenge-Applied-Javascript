class Carousel {
  constructor(element) {
    this.element = element;
    this.currentImg
    // get the left and right button
    this.buttonLeft = this.element.querySelector('.left-button');
    this.buttonRight = this.element.querySelector('.right-button');
    // get a list of the images
    this.images = this.element.querySelectorAll('img')
    console.log(this.images);
    // add event listeners to the buttons
    //this.buttonLeft.addEventListener('click', () =>)
    console.log(this.buttonRight);
  }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/