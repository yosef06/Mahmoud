// Script per il sito PCTO - Versione corretta

document.addEventListener('DOMContentLoaded', function() {
  // Toggle menu mobile - Versione corretta
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      // Aggiungiamo un'animazione per rendere più evidente l'apertura/chiusura
      if (mobileNav.classList.contains('active')) {
        mobileNav.style.display = 'block';
        setTimeout(() => {
          mobileNav.style.opacity = '1';
        }, 10);
      } else {
        mobileNav.style.opacity = '0';
        setTimeout(() => {
          mobileNav.style.display = 'none';
        }, 300);
      }
    });
  }
  
  // Chiudi menu quando si clicca su un link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileNav.classList.remove('active');
      mobileNav.style.opacity = '0';
      setTimeout(() => {
        mobileNav.style.display = 'none';
      }, 300);
    });
  });
  
  // Chiudi menu quando si clicca fuori
  document.addEventListener('click', function(event) {
    if (mobileNav.classList.contains('active') && 
        !mobileNav.contains(event.target) && 
        !mobileMenuBtn.contains(event.target)) {
      mobileNav.classList.remove('active');
      mobileNav.style.opacity = '0';
      setTimeout(() => {
        mobileNav.style.display = 'none';
      }, 300);
    }
  });
  
  // Animazioni al caricamento della pagina
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => {
    element.style.opacity = '0';
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.animation = 'fadeIn 0.5s ease-in forwards';
    }, 100);
  });
  
  // Gestione form di contatto
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulazione invio form
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Invio in corso...';
      
      setTimeout(() => {
        alert('Messaggio inviato con successo!');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 1500);
    });
  }
});
