var slidesImg = Array.from(document.querySelectorAll("#slide-gallery img"));
var slideNumber = document.getElementById("slide-number");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var currentSlide = 1;
var slideImgCount = slidesImg.length;

prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;

function nextSlide() {
    if(nextBtn.classList.contains('disabled')){
        return false;
    }else{
        currentSlide++;
        check();
    }
};
function prevSlide() {
    if(prevBtn.classList.contains('disabled')){
        return false;
    }else{
        currentSlide--;
        check();
    }
};


// create pagination element
var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id' , 'pagination-ul');



// make loop through slide img
for(var i = 1; i <= slideImgCount; i++){
    var paginationItems = document.createElement('li');
    paginationItems.setAttribute('data-index' , i);
    paginationItems.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItems);
}
var myIndicators = document.getElementById("indicators");
myIndicators.appendChild(paginationElement);

var createdNewElement = document.getElementById("pagination-ul");
var slidesBullets = Array.from(document.querySelectorAll("#pagination-ul li"));
check();


var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));
for(var i = 0; i < paginationBullets.length; i++){
    paginationBullets[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute('data-index'));
        check();
    }
}


// create function to check
function check(){
    slideNumber.textContent = 'Slide # ' + currentSlide + ' of ' + slideImgCount;
    removeActiveClasses();
    slidesImg[currentSlide - 1].classList.add('active');
    createdNewElement.children[currentSlide - 1].classList.add('active');
    if(currentSlide == 1){
        prevBtn.classList.add('disabled')
    } else {
        prevBtn.classList.remove('disabled')
    }
    if(currentSlide == slideImgCount){
        nextBtn.classList.add('disabled')
    } else {
        nextBtn.classList.remove('disabled')
    }
}

// create function to remove class active
function removeActiveClasses(){
    slidesImg.forEach(function(img){
        img.classList.remove('active');
    });
    slidesBullets.forEach(function(bullet){
        bullet.classList.remove('active')
    });
}
