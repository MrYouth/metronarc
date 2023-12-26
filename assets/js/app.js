const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksLi = document.querySelectorAll('.nav-links li')

window.addEventListener('scroll', () => {
    if (this.scrollY >= 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinksLi.forEach(li => li.addEventListener('click', ()=> {
    navLinksLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove('active')
    navLinks.classList.remove('active')
}))


// Typed.js
var options = {
    strings: [
        'Beyond Where You Have Imagined', 
        'Connectivity Like Never Before',
        'Our IoT, Your Future',
    ],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
    backSpeed: 30, // Adjust this value for the backspacing speed
    backDelay: 100,
    // Add the preStringTyped callback to add margin-bottom between lines
    preStringTyped: function(pos, self) {
        self.el.innerHTML = '<span style="margin-bottom: 10px">' + self.strings[pos] + '</span>';
    }
};

var typed = new Typed('#hero-titles', options);

// AOS
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS on page load
    AOS.init({
        duration: 1000,
        mirror: true,
    });
});


