// Mobile menu open/close
function openMenu() {
  document.getElementById('mobileMenu').classList.add('open');
}

function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// Scroll fade-in animation
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));

// Navigation shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 2px 16px rgba(100,70,50,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
}, { passive: true });
