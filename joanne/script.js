/* ==========================================================================
   National Couples Day - Interactive Press to Open Experience for Joanne
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initParticleBackground();
  initIntroOpen();
  initPolaroidInteractions();
});

/* ==========================================================================
   1. Press to Open Interactive Logic
   ========================================================================== */
function initIntroOpen() {
  const openBtn = document.getElementById('open-btn');
  const introScreen = document.getElementById('intro-screen');
  const mainContent = document.getElementById('main-content');
  const bouquets = document.querySelectorAll('.side-bouquets');

  if (!openBtn || !introScreen || !mainContent) return;

  function handleOpen(e) {
    const rect = openBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Big explosive floral & heart celebration
    triggerHeartConfetti(centerX, centerY, 36);

    // Fade & scale out intro screen
    introScreen.classList.add('hidden');

    // Reveal main page content & bouquets
    setTimeout(() => {
      mainContent.classList.add('visible');
      bouquets.forEach(b => b.classList.add('visible'));
      triggerHeartConfetti(window.innerWidth / 2, window.innerHeight / 3, 20);
    }, 400);
  }

  openBtn.addEventListener('click', handleOpen);
}

/* ==========================================================================
   2. Floating Particle & Heart Canvas
   ========================================================================== */
function initParticleBackground() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = window.innerWidth < 768 ? 25 : 45;

  const heartColors = [
    'rgba(255, 101, 132, ',
    'rgba(255, 182, 193, ',
    'rgba(244, 143, 177, ',
    'rgba(254, 205, 211, '
  ];

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 20;
      this.size = Math.random() * 14 + 8;
      this.speedY = Math.random() * 0.8 + 0.4;
      this.speedX = (Math.random() - 0.5) * 0.6;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.colorBase = heartColors[Math.floor(Math.random() * heartColors.length)];
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      this.type = Math.random() > 0.4 ? 'heart' : 'sparkle';
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.01) * 0.3;
      this.rotation += this.rotationSpeed;

      if (this.y < -30 || this.x < -30 || this.x > width + 30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = `${this.colorBase}${this.opacity})`;

      if (this.type === 'heart') {
        const s = this.size / 15;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-10 * s, -10 * s, -20 * s, 5 * s, 0, 20 * s);
        ctx.bezierCurveTo(20 * s, 5 * s, 10 * s, -10 * s, 0, 0);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.25, 0, Math.PI * 2);
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ff6584';
        ctx.fill();
      }

      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   3. Polaroid Card Tap Interactions
   ========================================================================== */
function initPolaroidInteractions() {
  const cards = document.querySelectorAll('.polaroid-card');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      const rect = card.getBoundingClientRect();
      triggerHeartConfetti(e.clientX || rect.left + rect.width / 2, e.clientY || rect.top + rect.height / 2, 18);
    });
  });
}

function triggerHeartConfetti(startX, startY, count = 18) {
  // Orchids (🌸), Hydrangeas (💠), Lily of the Valley (🤍), Hearts (💖, ❤️), and Sparkles (✨)
  const emojis = ['🌸', '💠', '🤍', '💖', '❤️', '✨', '🌹', '🥰'];

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.position = 'fixed';
    el.style.left = `${startX}px`;
    el.style.top = `${startY}px`;
    el.style.pointerEvents = 'none';
    el.style.fontSize = `${Math.random() * 16 + 18}px`;
    el.style.zIndex = '99999';
    el.style.transition = 'all 1.1s cubic-bezier(0.25, 1, 0.5, 1)';
    el.style.opacity = '1';
    el.style.transform = 'translate(-50%, -50%) scale(0.4)';
    document.body.appendChild(el);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 220 + 70;
    const destX = Math.cos(angle) * velocity;
    const destY = Math.sin(angle) * velocity - 70;
    const rot = (Math.random() - 0.5) * 360;

    requestAnimationFrame(() => {
      el.style.transform = `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) rotate(${rot}deg) scale(${Math.random() * 0.6 + 1})`;
      el.style.opacity = '0';
    });

    setTimeout(() => el.remove(), 1100);
  }
}
