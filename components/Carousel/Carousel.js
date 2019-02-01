class Carousel {
  constructor(element) {
    this.element = element;
    this.currentImg = 0;
    // get the left and right button
    this.buttonLeft = this.element.querySelector('.left-button');
    this.buttonRight = this.element.querySelector('.right-button');
    // get a list of the images
    this.images = this.element.querySelectorAll('img');
    // add event listeners to the buttons
    this.buttonLeft.addEventListener('click', () => {
      this.hideImg();
      this.currentImg--;
      if (this.currentImg === -1) {
        this.currentImg = this.images.length - 1;
      }
      this.displayImg();
    });
    this.buttonRight.addEventListener('click', () => {
      this.hideImg();
      this.currentImg++;
      if (this.currentImg === this.images.length) {
        this.currentImg = 0;
      }
      this.displayImg();
    });
  }

  displayImg() {
    this.images[this.currentImg].style.display = 'block';
  }

  hideImg() {
    this.images[this.currentImg].style.display = 'none';
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