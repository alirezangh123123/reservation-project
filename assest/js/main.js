const getNavBarBrand = document.querySelector(".custom-navbar-brand img");
const getSocailIcons = document.querySelectorAll(".social-media span span a i");


document.addEventListener("scroll",function(){
   if(document.documentElement.scrollTop>120){
    getNavBarBrand.style.height = "64px"
    getSocailIcons[0].classList.remove("fa-square-facebook")
    getSocailIcons[0].classList.add("fa-circle","fa-facebook")
    getSocailIcons[1].classList.remove("fa-square-twitter")
    getSocailIcons[1].classList.add("fa-circle","fa-twitter")
   }else{
    getNavBarBrand.style.height = "43px"
    getSocailIcons[0].classList.add("fa-square-facebook")
    getSocailIcons[0].classList.remove("fa-circle","fa-facebook")
    getSocailIcons[1].classList.remove("fa-circle","fa-twitter")
    getSocailIcons[1].classList.add("fa-square-twitter")
   }
})