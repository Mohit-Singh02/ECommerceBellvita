document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
    alert('Item added to cart!');
  });

  
//-------------------------------------- customer review-----------------------------------------

const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;


function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}


// Next button event
nextBtn.addEventListener('click', () => {
    if (index < slides.length - 2) {
        index++;
    } else {
        index = 0;
    }
    updateSlidePosition();
});

// Previous button event
prevBtn.addEventListener('click', () => {
    if (index > 1) {
        index--;
    } else {
        index = slides.length-1; 
    }
    updateSlidePosition();
});
