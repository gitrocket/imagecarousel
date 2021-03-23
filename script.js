const images = document.querySelectorAll('img');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

// set count
let count = 0;

// initialize an empty array
let imagesArr = [];

// invoke function to populate imagesArr
createImagesArr();

// event lisener for right button
rightBtn.addEventListener('click', () => {
    removeActiveClass();
    // if count reaches last item, set count to be reinitialized to first item
    if(count === imagesArr.length - 1) {
        count = 0;
    } else {
        count++;
    }
    imagesArr[count].classList.add('active');
})

// event listener for left button
leftBtn.addEventListener('click', () => {
    removeActiveClass();
    if(count === 0) {
        // if count reaches 0, set count to last item
        count = imagesArr.length - 1;
    } else {
        count--;
    }
    imagesArr[count].classList.add('active');
})


// remove active class from current image
function removeActiveClass() {
    images.forEach(image => {
        image.classList.remove('active');
    })
}


// populate empty array
function createImagesArr() {
    images.forEach(image => {
        imagesArr.push(image);
    })
}

