// Array of image paths
const images = [
   "SKY-1.jpg", "SKY-1a", "Slide-0.1.jpg", "Slide-0.2.jpg", "Slide-1d.jpg", "Slide-1e.jpg", "Slide-2a.jpg", "Slide-2b.jpg", "Slide-2c.jpg", "Slide-3c.jpg", "Slide-3d.jpg", "Slide-4a.jpg","Slide-4b.jpg"
];

let currentIndex = 0; // Track the current image index
const slideshowElements = document.querySelectorAll('.slideshow'); // Get all images with the class 'slideshow'

function updateSlideshow() {
    // Update the src of the first image in the 'slideshow' class group
    slideshowElements.forEach(img => img.style.display = 'none'); // Hide all images
    slideshowElements[currentIndex].style.display = 'block'; // Show the current image

    currentIndex = (currentIndex + 1) % slideshowElements.length; // Loop back to the first image
}

// Initially hide all images except the first
slideshowElements.forEach(img => img.style.display = 'none');
slideshowElements[0].style.display = 'block';

// Change image every 10 seconds (10000ms)
setInterval(updateSlideshow, 10000);
