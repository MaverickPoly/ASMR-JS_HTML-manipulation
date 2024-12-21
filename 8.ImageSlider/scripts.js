const images = document.querySelectorAll("img");
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    showImage();
});

function showImage() {
    images.forEach((img) => {
        img.classList.remove('active');
    });
    images[currentIndex].classList.add("active");
}


function prev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage();
}

function next() {
    currentIndex++;
    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    }
    showImage()
}



