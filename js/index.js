var hamburger= document.getElementsByClassName("hamburger-img")[0];
var closeIcon= document.getElementsByClassName("close-icon")[0];
var tOverlay=document.getElementsByClassName("transparent-overlay")[0];
var navbarMenu=document.getElementsByClassName("nav-bar")[0];
var nextPrev= document.getElementsByClassName("angle-div");
var currentSlide=0;


// NAVBAR CLOSING AND OPENING LISTENERS
hamburger.addEventListener('click', function(){
    avbarMenu=document.getElementsByClassName("nav-bar")[0];
    // toggle display: hidden property from the black navbar overlay
    tOverlay=document.getElementsByClassName("transparent-overlay")[0];
    showElement(navbarMenu);
    showElement(tOverlay);
});

closeIcon.addEventListener('click', function(){
  navbarMenu=document.getElementsByClassName("nav-bar")[0];
  tOverlay=document.getElementsByClassName("transparent-overlay")[0];
  showElement(navbarMenu);
  showElement(tOverlay);
});

tOverlay.addEventListener('click', function(){
  navbarMenu=document.getElementsByClassName("nav-bar")[0];
  tOverlay=document.getElementsByClassName("transparent-overlay")[0];
  showElement(navbarMenu);
  showElement(tOverlay);

});

//SlideShow Control Listeners *for NEXT AND PREVIOUS BUTTONS*

  nextPrev[0].addEventListener('click', function(){
    var imgList= document.getElementsByClassName("slide-img");
    slideImages(imgList,-1);
  });

  nextPrev[1].addEventListener('click', function(){
    var imgList= document.getElementsByClassName("slide-img");
    slideImages(imgList,1);
  });




function showElement(elementToggle,button){
  var i= 0;
  var classToMatch="display-hide";
  var classToCompare;
  for(i;i<elementToggle.classList.length; i++){
    classToCompare=elementToggle.classList[i];
    if(classToMatch==classToCompare){
      classToCompare=elementToggle.classList[i];
    }
    // console.log(classToCompare);
    // console.log(elementToggle.classList[i]);
  }
  if(classToMatch!=classToCompare){
    elementToggle.classList.add("display-hide");
  }
  else{
    elementToggle.classList.remove("display-hide");
  }
}


function slideImages(element,move){
  // get total number of slides
  var numberOfSlides = element.length;

    if(currentSlide===0 && currentSlide<numberOfSlides && move>0){
      element[0].setAttribute("src","./images/mobile-image-hero-2.jpg");
      showElement(document.getElementsByClassName("discovery")[currentSlide]);
      showElement(document.getElementsByClassName("discovery")[currentSlide+1]);
      currentSlide+=move;
      return;

    }
    else if (currentSlide>0 && currentSlide<numberOfSlides-1 && move>0) {
      element[0].setAttribute("src","./images/mobile-image-hero-3.jpg");
      console.log(currentSlide);
      showElement(document.getElementsByClassName("discovery")[currentSlide]);
      showElement(document.getElementsByClassName("discovery")[currentSlide+1]);
      currentSlide+=move;
      return;
    }
    else if (currentSlide===numberOfSlides-1 && move>0) {
      element[0].setAttribute("src","./images/mobile-image-hero-1.jpg");
      showElement(document.getElementsByClassName("discovery")[currentSlide]);
      currentSlide=0;
      showElement(document.getElementsByClassName("discovery")[currentSlide]);
      return;
    }
    else if(currentSlide===0 && move<0){
      element[0].setAttribute("src","./images/mobile-image-hero-3.jpg");
      showElement(document.getElementsByClassName("discovery")[currentSlide]);
      console.log(element.length);
      showElement(document.getElementsByClassName("discovery")[element.length+move]);
      currentSlide=element.length+move;
      return;
    }
    else if (currentSlide>0 && currentSlide<(numberOfSlides-1) && move<0) {
      element[0].setAttribute("src","./images/mobile-image-hero-1.jpg");
      showElement(document.getElementsByClassName("discovery")[currentSlide]);
      showElement(document.getElementsByClassName("discovery")[currentSlide+move]);
      currentSlide+=move;
      return;
    }
    else if (currentSlide===(element.length-1) && move<0) {
      element[0].setAttribute("src","./images/mobile-image-hero-2.jpg");
      showElement(document.getElementsByClassName("discovery")[currentSlide]);
      showElement(document.getElementsByClassName("discovery")[currentSlide+move]);
      currentSlide+=move;
      return;
    }

}
