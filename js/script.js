document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    // Intersection Observer for fade-in effect
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Burger menu functionality
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Toggle nav menu on mobile

        // Burger animation
        burger.classList.toggle('toggle');
    });
});
