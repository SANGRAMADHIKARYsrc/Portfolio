/* ═══════════════════════════════════════════════════════════════
   SANGRAM ADHIKARY — Portfolio Scripts
   Features: Cursor glow, Matrix Code Rain, Intersection Observer,
             Smooth Scroll, Staggered Reveal Animations
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Cursor Glow ──────────────────────────────────────────────
  const cursorGlow = document.getElementById('cursor-glow');

  if (cursorGlow) {
    document.addEventListener('mousemove', (e) => {
      cursorGlow.style.setProperty('--mouse-x', e.clientX + 'px');
      cursorGlow.style.setProperty('--mouse-y', e.clientY + 'px');
    });
  }

  // ── Code Rain (Matrix-style with Crimson Red Accents) ─────────
  const canvas = document.getElementById('code-rain');
  if (canvas) {
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters: mix of code symbols, binary, AI/ML math notations
    const chars = '01{}[]()<>=/+-*&|!?;:,.#@$%^~`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ∑∏∫∂∇λσμπθ';
    const charArray = chars.split('');

    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = new Array(columns).fill(1);
    let speeds = new Array(columns).fill(0).map(() => 0.3 + Math.random() * 0.7);

    function initDrops() {
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
      for (let i = 0; i < drops.length; i++) {
        drops[i] = Math.random() * -100;
      }
      speeds = new Array(columns).fill(0).map(() => 0.3 + Math.random() * 0.7);
    }
    initDrops();
    window.addEventListener('resize', initDrops);

    function drawCodeRain() {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.07)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + 'px "Fira Code", Consolas, monospace';

      for (let i = 0; i < drops.length; i++) {
        const isHighlight = Math.random() > 0.97;
        const brightness = isHighlight ? 255 : 60 + Math.floor(Math.random() * 70);
        ctx.fillStyle = `rgba(255, ${Math.floor(brightness * 0.2)}, ${Math.floor(brightness * 0.2)}, ${0.35 + Math.random() * 0.35})`;

        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += speeds[i];
      }
    }

    let lastTime = 0;
    const interval = 1000 / 30;

    function animate(currentTime) {
      requestAnimationFrame(animate);
      if (currentTime - lastTime < interval) return;
      lastTime = currentTime;
      drawCodeRain();
    }
    requestAnimationFrame(animate);
  }

  // ── Active Section Navigation Tracking ────────────────────────
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav__link');

  if (sections.length && navLinks.length) {
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
        rootMargin: '-25% 0px -65% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  // ── Smooth Scroll for Internal Nav and Buttons ────────────────
  const scrollTriggers = document.querySelectorAll('.nav__link, #hero-btn-work');
  scrollTriggers.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ── Scroll Reveal Animations ─────────────────────────────────
  const animSelectors = [
    '.flagship-card',
    '.capability-card',
    '.differentiator-box',
    '.skill-group',
    '.exp-card',
    '.achievement-metric-card',
    '.cert-card',
    '.cert-drive-callout',
    '.mini-card',
    '.portfolio-card',
    '.contact-card'
  ];

  const animElements = document.querySelectorAll(animSelectors.join(', '));
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
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.08,
    }
  );

  animElements.forEach((el) => fadeObserver.observe(el));

})();
