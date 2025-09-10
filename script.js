// =======================
// Loader & Page Fade In
// =======================
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  // fade out loader
  loader.style.opacity = '0';
  loader.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    loader.style.display = 'none';
    // fade in page
    document.body.classList.add('page-loaded');
  }, 500);
});

// =======================
// Navbar Active Highlight
// =======================
const navLinks = document.querySelectorAll('.futuristic-nav ul li a');
const currentURL = location.href;

navLinks.forEach(link => {
  if(link.href === currentURL){
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }

  // =======================
  // Smooth Page Transition
  // =======================
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.href;
    // fade out current page
    document.body.classList.remove('page-loaded');
    setTimeout(() => {
      // pindah ke halaman target
      window.location.href = target;
    }, 500); // durasi fade out sama dengan CSS transition
  });
});