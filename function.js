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


  document.addEventListener('DOMContentLoaded', function() {
    var img = document.getElementById('myImage');
    
    if (window.innerWidth < 768) {
      img.src = "https://lh3.googleusercontent.com/pw/AP1GczPzSjKg1A1Aj6jxcvwJ9ZOzrX3OuoD4ZU3SOYCRETmtNJC-wtc-3iKHL4IKvNp6h-SMyart0K_GeYmH8tOfgNeWFTyLnMQnOxRudN5CKLsrv20k_aAcq7PVet1gorB1ywnWeKuhVCcOZIVQXYSSGCyf=w739-h953-s-no-gm?authuser=0";
    } else {
      img.src = "https://lh3.googleusercontent.com/pw/AP1GczOXDgERh918MfLwttxvY4dsRozvceng8073Fkl6ULsR4uBRMh_6ZuQY6ySY1n7n1NCVifOMMQ8ise2jJMXYEt-WYrjHu1INv-LeSAinsXNsLlVz5DCl30yle6p-BvYDNl_1hhrqdhWBJKaHsYwZ0mdU=w1440-h578-s-no-gm?authuser=0";
    }
  });
  