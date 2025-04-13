
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.getElementById('mobileNav');
  
  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenuToggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });
  }
  
  // Services Banner Rotation
  const serviceItems = document.querySelectorAll('.service-item');
  let currentServiceIndex = 0;
  
  if (serviceItems.length > 0) {
    // Initially set the first service as active
    serviceItems[0].classList.add('active');
    
    // Only start the rotation if we're on a small screen
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // Set up rotation every 3 seconds
      setInterval(() => {
        // Remove active class from current service
        serviceItems[currentServiceIndex].classList.remove('active');
        
        // Move to next service
        currentServiceIndex = (currentServiceIndex + 1) % serviceItems.length;
        
        // Add active class to new current service
        serviceItems[currentServiceIndex].classList.add('active');
      }, 3000);
    } else {
      // On desktop, make them all active but still highlight one
      serviceItems.forEach(item => item.style.opacity = '0.6');
      
      // Set up rotation for highlighting
      setInterval(() => {
        // Set all to lower opacity
        serviceItems.forEach((item, index) => {
          if (index === currentServiceIndex) {
            item.style.opacity = '1';
            item.style.transform = 'scale(1.05)';
          } else {
            item.style.opacity = '0.6';  
            item.style.transform = 'scale(1)';
          }
        });
        
        // Move to next service
        currentServiceIndex = (currentServiceIndex + 1) % serviceItems.length;
      }, 3000);
    }
  }
  
  // Add animation classes to elements when they come into view
  const animateElements = document.querySelectorAll('.hero-title, .hero-description, .services-banner, .hero-buttons, .hero-image');
  
  // Simple function to add animation classes with slight delay
  function addAnimationClasses() {
    animateElements.forEach((element, index) => {
      setTimeout(() => {
        if (element.classList.contains('hero-title')) {
          element.classList.add('animate-slide-up');
        } else if (element.classList.contains('hero-image')) {
          element.classList.add('animate-scale-in');
        } else {
          element.classList.add('animate-fade-in');
        }
      }, index * 200); // Stagger animations
    });
  }
  
  // Run animations on page load
  addAnimationClasses();
  
  // Handle floating cards animation on mobile
  const floatingCards = document.querySelectorAll('.floating-card');
  
  // Add initial animation classes with delay
  floatingCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.9)';
      
      setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      }, 50);
    }, 500 + (index * 200)); // Stagger animations
  });
});
