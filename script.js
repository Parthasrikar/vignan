const images = document.querySelector('.images');
let index = 0;
const imageCount = images.children.length;

function showNextImage() {
    index++;
    if (index >= imageCount) {
        index = 0; // Reset the index to loop back to the first image
    }
    images.style.transform = `translateX(${-index * 100}%)`; // Slide to the next image
}

// Set the interval to 3 seconds for each image transition
setInterval(showNextImage, 3000);
