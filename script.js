window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'blue';
        navbar.style.color = 'yellow';
    } else {
        navbar.style.backgroundColor = 'red';
        navbar.style.color = 'white';
    }
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = 'yellow';
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = 'white';
    });
});
