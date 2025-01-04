document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
  
    sections.forEach((section, i) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= -50 && rect.top <= window.innerHeight / 2) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[i].classList.add('active');
      }
    });
  });
  
  window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero-text');
    heroText.style.opacity = '1';
    heroText.style.transform = 'translateY(0)';
  });
