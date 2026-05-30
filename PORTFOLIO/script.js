// Smooth scrolling for navigation links
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
          const offset = 70;
          const pos = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: pos, behavior: 'smooth' });
      }
  });
});

// Mobile menu toggle
const toggle = document.getElementById('mobileToggle');
const navDiv = document.getElementById('navLinks');

if (toggle && navDiv) {
  toggle.addEventListener('click', () => {
      navDiv.classList.toggle('active');
  });
  
  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
          navDiv.classList.remove('active');
      });
  });
}
