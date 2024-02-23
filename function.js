const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navMenuActive = document.querySelector(".nav-menu .active");
const navbar = document.querySelector(".navbar");




hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navbar.classList.toggle("navbar-fixed");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click" , () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navbar.classList.remove("navbar-fixed");
}))


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


