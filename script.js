function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Add Event Listener for Scroll Button
document.querySelector('.scroll-top').addEventListener('click', scrollToTop);