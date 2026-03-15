/* ============================================
   URBANPLAY PADEL — JAVASCRIPT
   main.js
   ============================================ */

/* ── MOBILE MENU ── */
function toggleMenu() {
  const menu   = document.getElementById('mobileMenu');
  const burger = document.getElementById('burger');
  menu.classList.toggle('open');
  burger.classList.toggle('open');
}

function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('burger').classList.remove('open');
}

// Close mobile menu when clicking outside of it
document.addEventListener('click', function (e) {
  const menu   = document.getElementById('mobileMenu');
  const burger = document.getElementById('burger');
  if (
    menu.classList.contains('open') &&
    !menu.contains(e.target) &&
    !burger.contains(e.target)
  ) {
    closeMenu();
  }
});

/* ── NOTIFY FORM ── */
function submitNotify() {
  const emailInput = document.getElementById('notifyEmail');
  const email      = emailInput.value;

  if (!email || !email.includes('@')) {
    emailInput.style.borderColor = 'rgba(255,80,80,0.5)';
    return;
  }

  document.getElementById('notifyForm').style.display    = 'none';
  document.getElementById('notifySuccess').style.display = 'block';
}

/* ── CONTACT FORM ── */
function submitContact(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.textContent          = '✓ Message Sent!';
  btn.style.background     = '#1a1a1a';
  btn.style.color          = '#d4f040';
  btn.style.border         = '1px solid rgba(212,240,64,0.3)';
  btn.disabled             = true;
}

/* ── NAV: tighten on scroll ── */
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 60) {
    nav.style.background        = 'rgba(8,8,8,0.97)';
    nav.style.borderBottomColor = 'rgba(255,255,255,0.1)';
  } else {
    nav.style.background        = 'rgba(8,8,8,0.88)';
    nav.style.borderBottomColor = 'rgba(255,255,255,0.07)';
  }
});

/* ── SMOOTH SCROLL for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
