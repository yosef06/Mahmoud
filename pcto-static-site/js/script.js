// Script per il sito PCTO

// Toggle menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
    });
  }
  
  // Chiudi menu quando si clicca su un link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileNav.classList.remove('active');
    });
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
  
  // Effetto hover sulle card
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
  });
  
  // Modalità scura (opzionale)
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      // Salva preferenza
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });
    
    // Controlla preferenza salvata
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
    }
  }
});
