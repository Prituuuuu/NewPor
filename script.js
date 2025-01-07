// Toggle Menu Icon and Navbar Active State
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle 'bx-x' class for menu icon
    navbar.classList.toggle('active'); // Toggle 'active' class for navbar
};

// Highlight Active Section in Navbar on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollTop = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 150; // Adjust offset for highlighting
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute('id');

        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            // Remove 'active' class from all nav links and add it to the current section's link
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`header nav a[href*="${sectionId}"]`).classList.add('active');
        }
    });

    // Add 'sticky' class to header on scroll
    const header = document.querySelector('header');
    header.classList.toggle('sticky', scrollTop > 100);

    // Close navbar menu when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Initialize ScrollReveal Animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    // reset: true, // Uncomment to make animations repeat on scroll
});

// ScrollReveal configurations for different sections
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Initialize Typed.js for Typing Effect
const typed = new Typed('.multiple-text', {
    strings: ['CSE Student at NMIT', 'Frontend Developer'], // Strings to display
    typeSpeed: 100, // Typing speed
    backSpeed: 100, // Backspacing speed
    backDelay: 1000, // Delay before typing restarts
    loop: true // Loop the typing effect
});
