/* ═══════════════════════════════════════════════════════════════
   SANGRAM ADHIKARY — Portfolio Scripts
   Features: Cursor glow, Code rain, Nav tracking, Scroll anim
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Cursor Glow ──────────────────────────────────────────────
  const cursorGlow = document.getElementById('cursor-glow');

  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.setProperty('--mouse-x', e.clientX + 'px');
    cursorGlow.style.setProperty('--mouse-y', e.clientY + 'px');
  });

  // ── Code Rain (Matrix-style) ─────────────────────────────────
  const canvas = document.getElementById('code-rain');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Characters: mix of code symbols, binary, and ML/AI terms
  const chars = '01{}[]()<>=/+-*&|!?;:,.#@$%^~`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ∑∏∫∂∇λσμπ';
  const charArray = chars.split('');

  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = new Array(columns).fill(1);

  // Randomize start positions
  for (let i = 0; i < drops.length; i++) {
    drops[i] = Math.random() * -100;
  }

  // Speed variation per column
  const speeds = new Array(columns).fill(0).map(() => 0.3 + Math.random() * 0.7);

  function drawCodeRain() {
    // Fade effect
    ctx.fillStyle = 'rgba(10, 10, 10, 0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + 'px "Fira Code", Consolas, monospace';

    for (let i = 0; i < drops.length; i++) {
      // Vary brightness per character
      const brightness = Math.random() > 0.95 ? 255 : 80 + Math.floor(Math.random() * 80);
      ctx.fillStyle = `rgba(255, ${Math.floor(brightness * 0.2)}, ${Math.floor(brightness * 0.2)}, ${0.4 + Math.random() * 0.3})`;

      const char = charArray[Math.floor(Math.random() * charArray.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillText(char, x, y);

      // Reset when off screen
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i] += speeds[i];
    }
  }

  // Run at ~30fps for performance
  let lastTime = 0;
  const interval = 1000 / 30;

  function animate(currentTime) {
    requestAnimationFrame(animate);
    if (currentTime - lastTime < interval) return;
    lastTime = currentTime;
    drawCodeRain();
  }
  requestAnimationFrame(animate);

  // ── Active Section Nav Tracking ──────────────────────────────
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav__link');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.dataset.section === id);
          });
        }
      });
    },
    {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    }
  );

  sections.forEach((section) => navObserver.observe(section));

  // ── Scroll Fade-In Animations ────────────────────────────────
  // Add fade-in class to all cards and portfolio cards
  const animElements = document.querySelectorAll('.card, .portfolio-card, .skills-grid, .section__content > p, .section__intro');
  animElements.forEach((el) => el.classList.add('fade-in'));

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1,
    }
  );

  animElements.forEach((el) => fadeObserver.observe(el));

  // ── Stagger fade-in delays ───────────────────────────────────
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.05}s`;
  });

  const portfolioCards = document.querySelectorAll('.portfolio-card');
  portfolioCards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });

  // ── Smooth scroll for nav links ──────────────────────────────
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

})();
