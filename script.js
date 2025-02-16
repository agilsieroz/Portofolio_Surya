// Animasi tambahan (opsional)
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });

// ScrollReveal Configuration
ScrollReveal().reveal('header', {
    delay: 200,
    distance: '50px',
    origin: 'top',
    opacity: 0,
    easing: 'ease-in-out',
  });
  
  ScrollReveal().reveal('#about', {
    delay: 300,
    distance: '50px',
    origin: 'left',
    opacity: 0,
    easing: 'ease-in-out',
  });
  
  ScrollReveal().reveal('#skills', {
    delay: 400,
    distance: '50px',
    origin: 'right',
    opacity: 0,
    easing: 'ease-in-out',
  });
  
  ScrollReveal().reveal('#projects', {
    delay: 500,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-in-out',
  });
  
  ScrollReveal().reveal('#contact', {
    delay: 600,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-in-out',
  });
  
  ScrollReveal().reveal('footer', {
    delay: 700,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-in-out',
  });