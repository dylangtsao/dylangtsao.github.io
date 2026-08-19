/* ==========================================================================
   National Couples Day - Photo & Visual Experience for Joanne
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initTapSpawner();
  initBlastButton();
  initPolaroidTaps();
  initStickers();
});

/* ==========================================================================
   1. Dynamic Background Particles
   ========================================================================== */
function initParticleCanvas() {
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
  const count = window.innerWidth < 600 ? 30 : 50;

  const colors = [
    'rgba(255, 117, 140, ',
    'rgba(255, 64, 113, ',
    'rgba(255, 204, 213, ',
    'rgba(255, 209, 102, '
  ];

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 20;
      this.size = Math.random() * 12 + 6;
      this.speedY = Math.random() * 0.9 + 0.4;
      this.speedX = (Math.random() - 0.5) * 0.6;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.isHeart = Math.random() > 0.4;
      this.rotation = Math.random() * Math.PI * 2;
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.02) * 0.4;
      if (this.y < -30) this.reset();
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = `${this.color}${this.opacity})`;

      if (this.isHeart) {
        const s = this.size / 15;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-10 * s, -10 * s, -20 * s, 5 * s, 0, 20 * s);
        ctx.bezierCurveTo(20 * s, 5 * s, 10 * s, -10 * s, 0, 0);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2);
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#ff4071';
        ctx.fill();
      }

      ctx.restore();
    }
  }

  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
      p.update();
      p.draw();
    }
    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   2. Tap Anywhere to Spawn Floating Graphics
   ========================================================================== */
function initTapSpawner() {
  const graphicPool = ['💖', '❤️', '🌸', '✨', '🧸', '🌹', '🥰', '💐', '🎀', '💋'];

  window.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button')) return;
    spawnPopGraphic(e.clientX, e.clientY, graphicPool[Math.floor(Math.random() * graphicPool.length)]);
  });
}

function spawnPopGraphic(x, y, emoji) {
  const el = document.createElement('div');
  el.textContent = emoji;
  el.style.position = 'fixed';
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.pointerEvents = 'none';
  el.style.fontSize = '24px';
  el.style.zIndex = '9999';
  el.style.transform = 'translate(-50%, -50%) scale(0.4)';
  el.style.transition = 'all 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  el.style.opacity = '1';
  document.body.appendChild(el);

  const deltaX = (Math.random() - 0.5) * 80;
  const deltaY = -60 - Math.random() * 60;
  const rot = (Math.random() - 0.5) * 60;

  requestAnimationFrame(() => {
    el.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px)) scale(1.6) rotate(${rot}deg)`;
    el.style.opacity = '0';
  });

  setTimeout(() => el.remove(), 900);
}

/* ==========================================================================
   3. Big Love Blast Button & Toast
   ========================================================================== */
const cuteToasts = [
  { emoji: '💖', text: "Joanne, you're the absolute cutest!" },
  { emoji: '🌹', text: "Happy National Couples Day, my love!" },
  { emoji: '✨', text: "You make every day 1000x brighter!" },
  { emoji: '🥰', text: "Forever thankful for you, Joanne!" },
  { emoji: '🧸', text: "Big hugs and infinite kisses for you!" },
  { emoji: '💫', text: "My favorite adventure is being with you!" }
];

function initBlastButton() {
  const btn = document.getElementById('love-blast-btn');
  const countEl = document.getElementById('heart-count');
  const toast = document.getElementById('toast');
  const toastEmoji = document.getElementById('toast-emoji');
  const toastText = document.getElementById('toast-text');

  let total = parseInt(localStorage.getItem('joanne_photo_kisses') || '0', 10);
  if (countEl) countEl.textContent = total;

  if (!btn) return;

  btn.addEventListener('click', () => {
    total++;
    localStorage.setItem('joanne_photo_kisses', total);
    if (countEl) countEl.textContent = total;

    // Full screen blast
    const rect = btn.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    const emojis = ['❤️', '💖', '💕', '✨', '🌹', '🥰', '💐', '🌸', '💋', '🧸', '🎀'];

    for (let i = 0; i < 40; i++) {
      const el = document.createElement('div');
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.position = 'fixed';
      el.style.left = `${startX}px`;
      el.style.top = `${startY}px`;
      el.style.pointerEvents = 'none';
      el.style.fontSize = `${Math.random() * 20 + 20}px`;
      el.style.zIndex = '9999';
      el.style.transition = 'all 1.4s cubic-bezier(0.25, 1, 0.5, 1)';
      el.style.opacity = '1';
      el.style.transform = 'translate(-50%, -50%) scale(0.3)';
      document.body.appendChild(el);

      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 280 + 100;
      const destX = Math.cos(angle) * velocity;
      const destY = Math.sin(angle) * velocity - 120;
      const rot = (Math.random() - 0.5) * 360;

      requestAnimationFrame(() => {
        el.style.transform = `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) rotate(${rot}deg) scale(${Math.random() * 0.8 + 1.2})`;
        el.style.opacity = '0';
      });

      setTimeout(() => el.remove(), 1400);
    }

    // Show popup
    const item = cuteToasts[Math.floor(Math.random() * cuteToasts.length)];
    if (toast && toastEmoji && toastText) {
      toastEmoji.textContent = item.emoji;
      toastText.textContent = item.text;
      toast.classList.add('show');
      clearTimeout(window.toastTimer);
      window.toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
    }
  });
}

/* ==========================================================================
   4. Polaroid Photo Card Taps
   ========================================================================== */
function initPolaroidTaps() {
  const polaroids = document.querySelectorAll('.polaroid-frame');
  polaroids.forEach(p => {
    p.addEventListener('click', () => {
      const rect = p.getBoundingClientRect();
      const emojis = ['💖', '✨', '🥰', '🌸', '🌹'];
      for (let i = 0; i < 12; i++) {
        spawnPopGraphic(
          rect.left + rect.width / 2 + (Math.random() - 0.5) * 80,
          rect.top + rect.height / 2 + (Math.random() - 0.5) * 80,
          emojis[Math.floor(Math.random() * emojis.length)]
        );
      }
    });
  });

  const heroHeart = document.querySelector('.graphic-hero-heart');
  if (heroHeart) {
    heroHeart.addEventListener('click', () => {
      const rect = heroHeart.getBoundingClientRect();
      for (let i = 0; i < 15; i++) {
        spawnPopGraphic(
          rect.left + rect.width / 2 + (Math.random() - 0.5) * 80,
          rect.top + rect.height / 2 + (Math.random() - 0.5) * 80,
          '💖'
        );
      }
    });
  }
}

/* ==========================================================================
   5. Interactive Stickers
   ========================================================================== */
function initStickers() {
  const stickers = document.querySelectorAll('.sticker');
  stickers.forEach(s => {
    s.addEventListener('click', () => {
      const rect = s.getBoundingClientRect();
      spawnPopGraphic(rect.left + rect.width / 2, rect.top, s.textContent);
    });
  });
}
