const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
    
})

// scroll effect
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset:true
})

sr.reveal(`.intro`)
sr.reveal(`.my-work`,{delay:600, origin: 'left'})
sr.reveal(`.email`,{delay:600, origin: 'right'})
sr.reveal(`.about-me`)
sr.reveal(`.my-services`,{delay:600, origin: 'bottom'})
sr.reveal(`.portfolio-item-individual`,{delay:600, origin: 'bottom'})

