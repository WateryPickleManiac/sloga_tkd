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
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000); // Change slides every 2 seconds (2000 milliseconds)
}


function toggleExpand(item) {
    const expandContent = item.querySelector('.expand-content');
    const allExpandContents = document.querySelectorAll('.expand-content');
  
    if (expandContent.classList.contains('active')) {
      expandContent.classList.remove('active');
      item.querySelector('.toggle-icon').innerText = '+';
    } else {
      allExpandContents.forEach(content => {
        content.classList.remove('active');
      });
      expandContent.classList.add('active');
      item.querySelector('.toggle-icon').innerText = '-';
    }
  }


