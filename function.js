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
const navLink = document.querySelectorAll('.nav-');

// Function to change navbar color on scroll
function changeNavbarColorOnScroll() {
    if (window.scrollY > 10) {
        navbar.style.backgroundColor = 'white'; // Change background to white on scroll
        navLink.style.color = 'indianred'; // Change text color to indianred on scroll
    } else {
        navbar.style.backgroundColor = 'transparent'; // Reset background to transparent when at the top
        navLink.style.color = 'white'; // Reset text color to white when at the top
    }
}

// Listen for the scroll event and call the function
window.addEventListener('scroll', changeNavbarColorOnScroll);

