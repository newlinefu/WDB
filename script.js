let menu = document.getElementById('menu');

let home = document.getElementById('home');
let about = document.getElementById('about');
let services = document.getElementById('services');
let portfolio = document.getElementById('portfolio');
let testimonials = document.getElementById('testimonials');
let contacts = document.getElementById('contacts');

let toHome = document.getElementById('to_home');
let toAbout = document.getElementById('to_about');
let toServ = document.getElementById('to_services');
let toPort = document.getElementById('to_portfolio');
let toTest = document.getElementById('to_testimonials');
let toCont = document.getElementById('to_contacts');

menu.addEventListener('click', () =>{
    var divNav = document.getElementById('my_div_nav');
    if(divNav.className === 'header_nav'){
        divNav.className += ' res';
    }else{
        divNav.className = 'header_nav';
    }
});


let pixels = 50;
home.addEventListener('click', function finalGoToPoint(){
    if(pageYOffset < toHome.getBoundingClientRect().y + pageYOffset){
        window.scrollBy(0, pixels);
        requestAnimationFrame(finalGoToPoint);
    }
});
about.addEventListener('click', function finalGoToPoint(){
    if(pageYOffset < toAbout.getBoundingClientRect().y + pageYOffset){
        window.scrollBy(0, pixels);
        requestAnimationFrame(finalGoToPoint);
    }
});
services.addEventListener('click', function finalGoToPoint(){
    if(pageYOffset < toServ.getBoundingClientRect().y + pageYOffset){
        window.scrollBy(0, pixels);
        requestAnimationFrame(finalGoToPoint);
    }
});
portfolio.addEventListener('click', function finalGoToPoint(){
    if(pageYOffset < toPort.getBoundingClientRect().y + pageYOffset){
        window.scrollBy(0, pixels);
        requestAnimationFrame(finalGoToPoint);
    }
});
testimonials.addEventListener('click', function finalGoToPoint(){
    if(pageYOffset < toTest.getBoundingClientRect().y + pageYOffset){
        window.scrollBy(0, pixels);
        requestAnimationFrame(finalGoToPoint);
    }
});
contacts.addEventListener('click', function finalGoToPoint(){
    if(pageYOffset < toCont.getBoundingClientRect().y + pageYOffset){
        window.scrollBy(0, pixels);
        requestAnimationFrame(finalGoToPoint);
    }
});

