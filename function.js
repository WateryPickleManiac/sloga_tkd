const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click" , () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
const navbar = document.querySelector('.navbar');
const navBrand = document.querySelector('.nav-branding'); // Select the branding/logo element
const navItems = document.querySelectorAll('.nav-item'); // Select all nav-items

// Function to change navbar elements' color on scroll for larger screens
function changeNavbarColorOnScroll() {
    if (window.innerWidth > 768) { // Check viewport width
        if (window.scrollY > 10) {
            navbar.style.backgroundColor = 'white'; // Change background to white on scroll
            navBrand.style.color = 'indianred'; // Change branding/logo color to indianred on scroll

            // Loop through each nav-item and change text color to indianred
            navItems.forEach(navItem => {
                const navLink = navItem.querySelector('.nav-link');
                if (navLink) {
                    navLink.style.color = 'indianred';
                }
            });
        } else {
            navbar.style.backgroundColor = 'transparent'; // Reset background to transparent when at the top
            navBrand.style.color = 'white'; // Reset branding/logo color to white when at the top

            // Loop through each nav-item and change text color to white
            navItems.forEach(navItem => {
                const navLink = navItem.querySelector('.nav-link');
                if (navLink) {
                    navLink.style.color = 'white';
                }
            });
        }
    }
}

// Listen for the scroll event and call the function
window.addEventListener('scroll', changeNavbarColorOnScroll);

let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let thumbnails = document.getElementsByClassName("thumbnail");
    
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].style.border = "2px solid #ccc";
    }
    
    slides[slideIndex].style.display = "block";
    thumbnails[slideIndex].style.border = "2px solid #f00";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Automatically advance the slideshow
setInterval(() => {
    showSlides(++slideIndex);
}, 3000);

