const nav = document.querySelector('nav');
window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }
    else {
        nav.classList.remove("sticky");
    }
})


window.addEventListener('scroll', reveal)

function reveal(){
    var reveals = document.querySelectorAll('.reveal')
    for(var i = 0; i < reveals.length; i++){
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].computedStyleMap.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length)
    {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].styledisplay = "block";
    dots[slideIndex-1].className += "active";
    setTimeout(showSlides, 2000);
}