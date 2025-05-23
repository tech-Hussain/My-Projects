document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe all sections
  const sections = document.querySelectorAll('.section, .grab-section, .cta-block, .hard-section, .get-section, .footer');
  sections.forEach(section => {
    observer.observe(section);
  });

  // Smooth scroll for chevron
  const chevron = document.querySelector('.chevron');
  if (chevron) {
    chevron.addEventListener('click', () => {
      const nextSection = document.querySelector('.section');
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
}); 