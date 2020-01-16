let sliderImages = document.querySelectorAll('.white-wrap'), 
arrowLeft = document.querySelector('.arrowLeft'),
arrowRight = document.querySelector('.arrowRight'),
current = 0;

function reset() {
    for(let i = 3; i < sliderImages.length; i+3) {
      sliderImages[i].style.display = 'none';
    }
  }

  function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
  }

  function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
  }

  function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
  }

  arrowLeft.addEventListener('click', function(){
    if(current === 0) {
      current = sliderImages.length;
    }
    slideLeft();
  });

  arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  });

  startSlide();
// let array1 = ['.white-wrap','.white-wrap-con']

// const clickBtn = document.querySelector('.fas');
// // const whiteWrap = document.querySelector('.white-wrap');

// clickBtn.addEventListener('click', function(wrap) {
//     array1.forEach( (anElement) => {
//         console.log(anElement);
//     });
// });     




// let i;


// function arrowLeft() {
//     for( i = 0; i < length; i++) {
//         document.querySelector('.white-wrap').style.width = '50px';
//         console.log(i);
//     }
// }
        

   
