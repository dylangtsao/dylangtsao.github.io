/* ==========================================================================
   National Couples Day - Interactive Experience for Joanne
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initParticleBackground();
  initEnvelope();
  initSurpriseButton();
  initLoveCounter();
  initAudioPlayer();
  initPolaroidEffects();
});

/* ==========================================================================
   1. Floating Particle & Heart Canvas
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
        // Glowing sparkle / star
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

  // Gentle touch/cursor sparkle
  window.addEventListener('pointermove', (e) => {
    if (Math.random() > 0.7) {
      createCursorSparkle(e.clientX, e.clientY);
    }
  });
}

function createCursorSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.innerText = Math.random() > 0.5 ? '✨' : '💖';
  sparkle.style.position = 'fixed';
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  sparkle.style.pointerEvents = 'none';
  sparkle.style.fontSize = '14px';
  sparkle.style.zIndex = '999';
  sparkle.style.transform = 'translate(-50%, -50%) scale(1)';
  sparkle.style.transition = 'all 0.8s ease-out';
  sparkle.style.opacity = '1';
  document.body.appendChild(sparkle);

  requestAnimationFrame(() => {
    sparkle.style.transform = `translate(-50%, ${-30 - Math.random() * 20}px) scale(1.4)`;
    sparkle.style.opacity = '0';
  });

  setTimeout(() => sparkle.remove(), 800);
}

/* ==========================================================================
   2. Interactive Love Letter Envelope
   ========================================================================== */
function initEnvelope() {
  const envelope = document.getElementById('love-envelope');
  const closedState = document.getElementById('envelope-closed');
  const letterContent = document.getElementById('letter-content');
  const closeBtn = document.getElementById('letter-close-btn');

  if (!envelope || !closedState || !letterContent) return;

  function openLetter(e) {
    if (e) e.stopPropagation();
    closedState.style.display = 'none';
    letterContent.classList.add('active');
    triggerHeartConfetti(window.innerWidth / 2, window.innerHeight / 2, 25);
  }

  function closeLetter(e) {
    if (e) e.stopPropagation();
    letterContent.classList.remove('active');
    setTimeout(() => {
      closedState.style.display = 'flex';
    }, 300);
  }

  envelope.addEventListener('click', () => {
    if (!letterContent.classList.contains('active')) {
      openLetter();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLetter);
  }
}

/* ==========================================================================
   3. Surprise Kiss & Hug Explosion Button
   ========================================================================== */
const sweetNotes = [
  "Joanne, you make every single day brighter! ✨",
  "Sending you 1,000 hugs and kisses right now! 💋",
  "You're my absolute favorite human in the world 🌎❤️",
  "Happy National Couples Day, my love! 🌹",
  "You have the sweetest smile ever 🥰",
  "Forever grateful to have you by my side 💕",
  "Can't wait for our next adventure together! ✈️✨",
  "I love you more than words can say! 💌"
];

function initSurpriseButton() {
  const hugBtn = document.getElementById('hug-btn');
  const kissCountEl = document.getElementById('kiss-count');
  const toast = document.getElementById('love-toast');
  const toastText = document.getElementById('toast-text');

  let kisses = parseInt(localStorage.getItem('joanne_kisses') || '0', 10);
  if (kissCountEl) kissCountEl.textContent = kisses;

  if (!hugBtn) return;

  hugBtn.addEventListener('click', (e) => {
    kisses++;
    localStorage.setItem('joanne_kisses', kisses);
    if (kissCountEl) kissCountEl.textContent = kisses;

    // Trigger explosive heart confetti
    const rect = hugBtn.getBoundingClientRect();
    triggerHeartConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 40);

    // Show rotating sweet toast message
    const randomNote = sweetNotes[Math.floor(Math.random() * sweetNotes.length)];
    if (toast && toastText) {
      toastText.textContent = randomNote;
      toast.classList.add('show');
      clearTimeout(window.toastTimer);
      window.toastTimer = setTimeout(() => {
        toast.classList.remove('show');
      }, 3500);
    }
  });
}

function triggerHeartConfetti(startX, startY, count = 30) {
  const emojis = ['❤️', '💖', '💕', '✨', '🌹', '🥰', '💌', '🌸', '💋'];

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.position = 'fixed';
    el.style.left = `${startX}px`;
    el.style.top = `${startY}px`;
    el.style.pointerEvents = 'none';
    el.style.fontSize = `${Math.random() * 18 + 16}px`;
    el.style.zIndex = '9999';
    el.style.transition = 'all 1.2s cubic-bezier(0.25, 1, 0.5, 1)';
    el.style.opacity = '1';
    el.style.transform = 'translate(-50%, -50%) scale(0.5)';
    document.body.appendChild(el);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 220 + 80;
    const destX = Math.cos(angle) * velocity;
    const destY = Math.sin(angle) * velocity - 100;
    const rot = (Math.random() - 0.5) * 360;

    requestAnimationFrame(() => {
      el.style.transform = `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) rotate(${rot}deg) scale(${Math.random() * 0.8 + 1})`;
      el.style.opacity = '0';
    });

    setTimeout(() => el.remove(), 1200);
  }
}

/* ==========================================================================
   4. Love Counter / Relationship Milestone
   ========================================================================== */
function initLoveCounter() {
  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minutesEl = document.getElementById('count-minutes');
  const secondsEl = document.getElementById('count-seconds');

  if (!daysEl) return;

  // Customizable anniversary start date (default to 1 year back or current date celebration)
  // Dylan can customize this date easily in the HTML or script
  const startDateAttr = document.getElementById('love-counter')?.dataset?.startDate;
  const startDate = startDateAttr ? new Date(startDateAttr) : new Date('2024-01-01T00:00:00');

  function updateCounter() {
    const now = new Date();
    const diff = Math.abs(now - startDate);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCounter();
  setInterval(updateCounter, 1000);
}

/* ==========================================================================
   5. Ambient Romantic Audio Synth / Music Player
   ========================================================================== */
function initAudioPlayer() {
  const musicBtn = document.getElementById('music-toggle-btn');
  if (!musicBtn) return;

  let isPlaying = false;
  let audioContext = null;
  let synthInterval = null;

  // Gentle romantic pentatonic notes for soothing ambient music
  const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25]; // C D E G A C D E

  function playAmbientChime() {
    if (!audioContext) return;
    try {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      const note = notes[Math.floor(Math.random() * notes.length)];
      osc.type = 'sine';
      osc.frequency.setValueAtTime(note, audioContext.currentTime);

      gain.gain.setValueAtTime(0.001, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.06, audioContext.currentTime + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 3.0);

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.start();
      osc.stop(audioContext.currentTime + 3.0);
    } catch (e) {
      console.warn(e);
    }
  }

  function startMusic() {
    if (!audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioCtx();
    }
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    isPlaying = true;
    musicBtn.classList.add('playing');
    musicBtn.innerHTML = '🎵';

    // Play a gentle chord / chime immediately, then every few seconds
    playAmbientChime();
    synthInterval = setInterval(playAmbientChime, 1800);
  }

  function stopMusic() {
    isPlaying = false;
    musicBtn.classList.remove('playing');
    musicBtn.innerHTML = '🔈';
    if (synthInterval) clearInterval(synthInterval);
  }

  musicBtn.addEventListener('click', () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  });
}

/* ==========================================================================
   6. Polaroid Delight
   ========================================================================== */
function initPolaroidEffects() {
  const polaroids = document.querySelectorAll('.polaroid-card');
  polaroids.forEach((card) => {
    card.addEventListener('click', () => {
      const rect = card.getBoundingClientRect();
      triggerHeartConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 12);
    });
  });
}
