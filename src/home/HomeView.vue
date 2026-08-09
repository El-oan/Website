<template>
  <div class="home-wrapper" :data-theme="theme">
    <canvas 
      ref="bgCanvas" 
      class="bg-canvas"
    ></canvas>
    <nav
      class="section-nav"
      :class="{ 'is-open': isNavOpen }"
      aria-label="Section navigation"
      @mouseenter="openNav"
      @mouseleave="closeNav"
      @focusin="openNav"
      @focusout="handleNavFocusOut"
      @keydown.esc="closeNav"
    >
      <div class="nav-bars">
        <a
          v-for="item in sectionLinks"
          :key="`bar-${item.id}`"
          class="nav-bar-link"
          :class="{ 'is-active': activeSection === item.id }"
          :href="`#${item.id}`"
          :aria-label="`Go to ${item.label}`"
          :aria-current="activeSection === item.id ? 'location' : undefined"
          @click="closeNav"
        ></a>
      </div>

      <div
        class="nav-menu"
        :aria-hidden="!isNavOpen"
        :inert="isNavOpen ? undefined : ''"
      >
        <div class="nav-menu-surface">
          <a
            v-for="item in sectionLinks"
            :key="`menu-${item.id}`"
            class="nav-menu-item"
            :class="{ 'is-active': activeSection === item.id }"
            :href="`#${item.id}`"
            :aria-current="activeSection === item.id ? 'location' : undefined"
            @click="closeNav"
          >
            <span>{{ item.label }}</span>
          </a>
        </div>
      </div>
    </nav>

    <div class="home-container">
      <div
        class="theme-switch"
        :class="{ 'is-dark': theme === 'dark' }"
        role="group"
        aria-label="Choose website appearance"
      >
        <span class="theme-switch-indicator" aria-hidden="true"></span>
        <button
          type="button"
          class="theme-option"
          :class="{ 'is-active': theme === 'light' }"
          :aria-pressed="theme === 'light'"
          aria-label="Use light mode"
          title="Light mode"
          @click="setTheme('light')"
        >
          <span class="material-symbols-rounded theme-icon" aria-hidden="true">light_mode</span>
        </button>
        <button
          type="button"
          class="theme-option"
          :class="{ 'is-active': theme === 'dark' }"
          :aria-pressed="theme === 'dark'"
          aria-label="Use dark mode"
          title="Dark mode"
          @click="setTheme('dark')"
        >
          <span class="material-symbols-rounded theme-icon" aria-hidden="true">dark_mode</span>
        </button>
      </div>
      <h1 class="page-title">Eloan Tourtelier</h1>
      <p class="subtitle">Engineering Student</p>

      <div id="about" class="section">
        <p class="intro-typewriter">{{ introText }}</p>
      </div>

      <div class="divider"></div>

      <div id="projects" class="section">
        <h2>Projects</h2>

        <div class="card">
          <img
            src="/icons/karacter.png"
            alt="Karacter app icon"
            class="card-logo"
            loading="lazy"
          />
          <div class="card-title">Karacter — define Chinese</div>
          <div class="card-meta">iOS • 25k+ LOC • Live on the App Store</div>
          <div class="card-desc">
            An offline Chinese learning helper with character drawing recognition, HSK 3.0 labeling, AI-powered sentence
            analysis. You can search for any Chinese word, expression, pinyin, English term — or hand-draw any character
            you want to learn more about. Pronunciations are available, as well as the correct stroke order. No internet
            connection nor VPN required.
          </div>
          <div class="tags-row">
            <div class="tags">
              <span class="tag">Swift</span>
              <span class="tag">SQLite</span>
              <span class="tag">XCode</span>
              <span class="tag">Coffee</span>
            </div>
            <a
              class="card-button"
              href="https://karacter.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              website
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-title">Radar Points Cloud ML Classification</div>
          <div class="card-meta">Deep Learning • School semester project</div>
          <div class="card-desc">
            Reproduced, tweaked, and benchmarked several architectures for classifying 3D radar point clouds into human-activity
            classes (sitting, boxing, etc...). Focused primarily on PointNet and DGCNN (graph-based) variants. 
            Experimented with Attention layers, muon optimizer, weight decay, BN momentum, and hyperparameters space search.
          </div>
          <div class="tags-row">
            <div class="tags">
              <span class="tag">PyTorch</span>
              <span class="tag">PointNet</span>
              <span class="tag">DGCNN</span>
            </div>
            <a
              class="card-button"
              href="https://github.com/El-oan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div class="card">
          <img
            src="/icons/focustrain.png"
            alt="Focus Train app icon"
            class="card-logo"
            loading="lazy"
          />
          <div class="card-title">Focus Train: study timer</div>
          <div class="card-meta">cross platform • Live on the App Store</div>
          <div class="card-desc">
            A minimalist focus app built to help you stay consistent with deep work sessions. Set your study timer, train focus habits, and keep progress simple and distraction-free.
          </div>
          <div class="tags-row">
            <div class="tags">
              <span class="tag">React Native</span>
              <span class="tag">iOS</span>
              <span class="tag">Android</span>
            </div>
            <a
              class="card-button"
              href="https://apps.apple.com/fr/app/focus-train-study-timer/id6759213973?l=en-GB"
              target="_blank"
              rel="noopener noreferrer"
            >
              download
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-title">Attention Network</div>
          <div class="card-meta">Deep Learning • Personal experimentation</div>
          <div class="card-desc">
            An implementation of the Transformer architecture, following the 
            <em>Attention Is All You Need</em> paper, with some newer architectures. 
            Uses multi-head attention, Deepseek's 
            mHC connections, RMS normalization, Engram with multi-head hashing. Trained on Kaggle's GPUs.
            Work in progress.
          </div>
          <div class="tags-row">
            <div class="tags">
              <span class="tag">PyTorch</span>
              <span class="tag">NLP</span>
            </div>
            <a class="card-button" href="/notebook">notebook</a>
          </div>
        </div>

        <div class="card">
        <div class="card-title">Mistral Hackathon</div>
        <div class="card-meta">Weekend Competition • September 2025 • 1500+ LOC</div>
        <div class="card-desc">
          Competed in a Mistral AI hackathon. Explored and developed Model Context
          Protocol (MCP) connectors enabling LLMs to call external tools and pipelines. Built a demo using Spotify,
          Genius, and Wikipedia APIs to add music tooling to "Le Chat" AI model.
        </div>
        <div class="tags-row">
          <div class="tags">
            <span class="tag">MCP</span>
            <span class="tag">LLM Tooling</span>
          </div>
        </div>
        </div>
        
      </div>


      <div class="divider"></div>

      <div id="experiences" class="section">
        <h2 data-section-title="experiences">
          {{ typedSectionTitles.experiences }}
        </h2>

        <div class="card">
          <img
            src="/icons/magen.jpeg"
            alt="Magen Financial logo"
            class="card-logo"
            loading="lazy"
          />
          <div class="card-title">Machine Learning Engineer</div>
          <div class="card-meta">Magen Financial • New York • Sep 2026 - Feb 2027</div>
          <div class="card-desc">
            Joining Magen Financial in New York for a six-month internship, applying my machine-learning and
            data-processing experience in a financial-services environment.
          </div>
        </div>

        <div class="card">
          <img
            src="/icons/forvismazars.jpg"
            alt="Forvis Mazars logo"
            class="card-logo"
            loading="lazy"
          />
          <div class="card-title">Data Internship</div>
          <div class="card-meta">Forvis Mazars • Paris • Sep 2025 - Feb 2026</div>
          <div class="card-desc">
            Worked as a Data Engineer and Full-Stack Developer on mutiple client and internal projects.
            Experimented with local LLM agents (Docker model) and RAG, an online heavy data
            visualization web app, the migration of a SAS pipeline (100+ step) to Dataiku, an HR PowerPoint
            app, and more.
          </div>
        </div>

        <div class="card">
          <div class="card-title">Communication Lead, Mountain Club</div>
          <div class="card-meta">CentraleSupélec • 2024 - 2025</div>
          <div class="card-desc">
            Managed the club's external communications and brand identity, producing visual assets for outdoors
            events and communication channels throughout the year.
          </div>
        </div>

        <div class="card">
          <div class="card-title">Sponsorship Lead, Bouldering Club</div>
          <div class="card-meta">CentraleSupélec • 2024 - 2025</div>
          <div class="card-desc">
            Developed corporate partnerships for France's largest student climbing competition, securing 9 sponsors
            including Petzl to fund the event and provide prizes.
          </div>
        </div>

        <div class="card">
          <div class="card-title">English Debating Club Member</div>
          <div class="card-meta">CentraleSupélec • 2024 - 2025</div>
          <div class="card-desc">
            Trained weekly with a professional debating coach and competed in 5v5 English debates, both internally and
            against other schools.
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div id="education" class="section">
        <h2 data-section-title="education">
          {{ typedSectionTitles.education }}
        </h2>

        <div class="card">
          <img
            src="/icons/centralesupelec.png"
            alt="CentraleSupélec logo"
            class="card-logo card-logo--white-bg"
            loading="lazy"
          />
          <div class="card-title">CentraleSupélec</div>
          <div class="card-meta">sep 2023 - apr 2027 • Paris-Saclay University</div>
          <div class="card-desc">
            MEng at CentraleSupélec, 1st European Engineering School (Shanghai ranking). Ranked 100th/6000+ in national
            entrance exam. Advanced Mathematics, Machine Learning, Time Series Econometrics, Quantum Physics, etc.
          </div>
        </div>

        <div class="card">
          <div class="card-title">Tongji University</div>
          <div class="card-meta">feb 2025 - Jun 2025 • Shanghai</div>
          <div class="card-desc">
            Completed a six-month Civil Engineering exchange in Shanghai ; first contact with Chinese culture and 
            language.
          </div>
        </div>

        <div class="card">
          <div class="card-title">Lycée Louis-le-Grand</div>
          <div class="card-meta">sep 2022 - Jun 2023 • Paris</div>
          <div class="card-desc">
            Third year of intensive cram school for France's Grandes Écoles, ranking fifth in class while studying
            advanced mathematics, physics, and chemistry.
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div id="connect" class="section">
        <h2 data-section-title="connect">
          {{ typedSectionTitles.connect }}
        </h2>
        <p>Feel free to reach out :)</p>
        <div class="links">
          <a href="https://www.linkedin.com/in/eloantourtelier/" target="_blank" class="link-button" @click="trackConnect('LinkedIn')"> LinkedIn </a>
          <a href="https://github.com/El-oan" target="_blank" class="link-button" @click="trackConnect('GitHub')"> GitHub </a>
          <a href="https://x.com/eeloannn" target="_blank" class="link-button" @click="trackConnect('Twitter')"> Twitter </a>
          <a href="/homepage/resume.pdf" class="link-button" download @click="trackConnect('Resume')"> Resume (PDF) </a>
          <a href="https://www.kaggle.com/eloantourtelier" target="_blank" class="link-button" @click="trackConnect('Kaggle')"> Kaggle </a>
          <a href="https://apps.apple.com/us/app/%E6%96%87-character/id6747664971" target="_blank" class="link-button" @click="trackConnect('Karacter Download')">
            Download Karacter
          </a>

        </div>
      </div>

      <div class="footer">
        <p>
          Favicon designed by <a href="https://readymag.website/u1139024403/5218555/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn_c3mcIRik0vZ08Jpc-bp6XNRk47TOwt_ZzAqnGqCemrG5qnD6XUge_j3lsc_aem__m7zC50WEINizWnxMA-ShA" target="_blank" rel="noopener noreferrer">my sister</a>
        </p>
        <img src="/homepage/favicon.jpeg" alt="Favicon" class="footer-icon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onBeforeUnmount, onMounted } from 'vue';
import posthog from 'posthog-js';

const trackConnect = (platform) => {
  posthog.capture('connect_click', { platform });
};

let cleanup;
let colorSchemeMediaQuery = null;
let handleColorSchemeChange = null;

const THEME_STORAGE_KEY = 'portfolio-theme';

function getStoredTheme() {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : null;
  } catch {
    return null;
  }
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

const storedTheme = getStoredTheme();
const theme = ref(storedTheme || getSystemTheme());
let hasThemeOverride = storedTheme !== null;

function applyThemeToDocument() {
  document.body.style.backgroundColor = theme.value === 'light' ? '#fcfcfd' : '#000000';
  document.documentElement.style.colorScheme = theme.value;
}

function setTheme(nextTheme) {
  if (nextTheme !== 'light' && nextTheme !== 'dark') return;

  theme.value = nextTheme;
  hasThemeOverride = true;

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  } catch {
    // The selected theme still applies for this visit when storage is unavailable.
  }

  applyThemeToDocument();
}

const bgCanvas = ref(null);
const isNavOpen = ref(false);
const activeSection = ref('about');
const sectionLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experiences', label: 'Experiences' },
  { id: 'education', label: 'Education' },
  { id: 'connect', label: 'Reach Out' }
];
const typedSectionTitles = reactive({
  experiences: '',
  education: '',
  connect: ''
});

const introText = [
  "Hi! I'm a 23-year-old engineering student at CentraleSupélec Paris-Saclay, graduating in 2027. I studied a semester in Shanghai and I am currently based in Paris.",
  "I love machine learning, languages and design. I speak English and French, and I'm learning Chinese (Russian too, but if I start a Russian sentence I end up speaking Chinese).",
  "I spent most of my life in the west of France, and 6 months in China. I love to travel around. Do not hesitate to reach out!"
].join('\n\n');
const sectionTitleText = {
  experiences: 'Experiences',
  education: 'Education',
  connect: 'Connect'
};
const SECTION_TITLE_TYPE_INTERVAL_MS = 48;
const GRID_LAYER_COUNT = 10;

let sectionTitleObserver = null;
const sectionTitleIntervals = new Map();
const animatedSectionTitles = new Set();

function animateSectionTitle(key) {
  if (animatedSectionTitles.has(key)) return;

  animatedSectionTitles.add(key);
  typedSectionTitles[key] = '';

  let index = 0;
  const fullText = sectionTitleText[key];
  const intervalId = window.setInterval(() => {
    index += 1;
    typedSectionTitles[key] = fullText.slice(0, index);

    if (index >= fullText.length) {
      window.clearInterval(intervalId);
      sectionTitleIntervals.delete(key);
    }
  }, SECTION_TITLE_TYPE_INTERVAL_MS);

  sectionTitleIntervals.set(key, intervalId);
}

function setupSectionTitleTypewriters() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const keys = Object.keys(sectionTitleText);

  if (prefersReducedMotion) {
    keys.forEach((key) => {
      typedSectionTitles[key] = sectionTitleText[key];
    });
    return;
  }

  sectionTitleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const key = entry.target.getAttribute('data-section-title');
      if (!key || !(key in sectionTitleText)) return;

      animateSectionTitle(key);
      sectionTitleObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.4,
    rootMargin: '0px 0px -10% 0px'
  });

  document.querySelectorAll('[data-section-title]').forEach((el) => {
    sectionTitleObserver.observe(el);
  });
}

function openNav() {
  isNavOpen.value = true;
}

function closeNav() {
  isNavOpen.value = false;
}

function handleNavFocusOut(event) {
  const nextTarget = event.relatedTarget;
  if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
    closeNav();
  }
}

onMounted(() => {
  colorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
  handleColorSchemeChange = (event) => {
    if (hasThemeOverride) return;

    theme.value = event.matches ? 'light' : 'dark';
    applyThemeToDocument();
  };
  applyThemeToDocument();
  colorSchemeMediaQuery.addEventListener('change', handleColorSchemeChange);
  setupSectionTitleTypewriters();

  const canvas = bgCanvas.value;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let animationFrame;

  const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  };
  
  window.addEventListener('resize', resize);
  resize();

  const spacing = 30; // Distance between dots
  const pixelSize = 5;
  const gridLayers = Array.from({ length: GRID_LAYER_COUNT }, (_, layerIndex) => {
    const usesPrimaryPalette = layerIndex % 2 === 0;
    const baseRed = usesPrimaryPalette ? 84 : 65;
    const baseGreen = usesPrimaryPalette ? 104 : 80;
    const baseBlue = usesPrimaryPalette ? 255 : 210;

    return {
      offset: layerIndex * pixelSize,
      threshold: 0.58 + (layerIndex % 4) * 0.02,
      phase: layerIndex * 0.35,
      speedA: 0.45 + layerIndex * 0.08,
      speedB: 0.8 + layerIndex * 0.06,
      speedC: 0.3 + layerIndex * 0.04,
      speedD: 0.5 + layerIndex * 0.05,
      freqX: 0.1 + layerIndex * 0.007,
      freqY: 0.15 + layerIndex * 0.006,
      freqXY: 0.05 + layerIndex * 0.003,
      freqXMinusY: 0.03 + layerIndex * 0.002,
      antiSpeedA: 0.65 + layerIndex * 0.07,
      antiSpeedB: 0.45 + layerIndex * 0.06,
      antiSpeedC: 0.85 + layerIndex * 0.05,
      antiFreqX: 0.075 + layerIndex * 0.004,
      antiFreqY: 0.06 + layerIndex * 0.003,
      antiFreqDiag: 0.045 + layerIndex * 0.002,
      antiPeakCenter: 0.93 - (layerIndex % 3) * 0.015,
      antiPeakWidth: 0.055 + (layerIndex % 2) * 0.008,
      fill: `rgba(${Math.max(38, baseRed - layerIndex * 2)}, ${Math.max(48, baseGreen - layerIndex * 2)}, ${Math.max(150, baseBlue - layerIndex * 5)}, ${Math.max(0.1, 0.36 - layerIndex * 0.022)})`
    };
  });
  
  const render = (time) => {
    ctx.clearRect(0, 0, width, height);
    
    const t = time * 0.001;
    
    const rows = Math.ceil(height / spacing);
    const cols = Math.ceil(width / spacing);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        for (const layer of gridLayers) {
          const px = x * spacing + (y % 2 === 0 ? 0 : spacing / 2) + layer.offset;
          const py = y * spacing + layer.offset;

          const val =
            Math.sin((x + layer.phase) * layer.freqX + t * layer.speedA) * 0.5 +
            Math.sin((y - layer.phase) * layer.freqY + t * layer.speedB) * 0.5 +
            Math.cos((x + y) * layer.freqXY + t * layer.speedC) * 0.3 +
            Math.sin((x - y * (1.2 + layer.phase * 0.1)) * layer.freqXMinusY + t * layer.speedD) * 0.2;

          const norm = (val + 1.5) / 3;
          const antiVal =
            Math.sin((x + layer.phase * 2) * layer.antiFreqX - (y - layer.phase) * layer.antiFreqY + t * layer.antiSpeedA) * 0.55 +
            Math.cos((x - y * 0.85) * layer.antiFreqDiag - t * layer.antiSpeedB) * 0.45 +
            Math.sin((x + y * 1.1) * layer.antiFreqDiag + t * layer.antiSpeedC) * 0.3;
          const antiNorm = (antiVal + 1.3) / 2.6;
          const isInAntiWave = Math.abs(antiNorm - layer.antiPeakCenter) < layer.antiPeakWidth;

          if (norm > layer.threshold && !isInAntiWave) {
            ctx.fillStyle = layer.fill;
            ctx.fillRect(px, py, pixelSize, pixelSize);
          }
        }
      }
    }
    
    animationFrame = requestAnimationFrame(render);
  };

  animationFrame = requestAnimationFrame(render);

  // Store for cleanup
  canvas._cleanup = () => {
    window.removeEventListener('resize', resize);
    cancelAnimationFrame(animationFrame);
  };

  const sections = sectionLinks
    .map(({ id }) => document.getElementById(id))
    .filter(Boolean);

  function activate(id) {
    activeSection.value = id;
  }

  const pickActive = () => {
    // If we're at the bottom of the page, forcefully select the last section
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.documentElement.scrollHeight) {
      if (sections.length > 0) {
        const last = sections[sections.length - 1];
        if (last?.id) {
          activate(last.id);
          return;
        }
      }
    }

    const y = 120; 
    let best = sections[0];
    for (const s of sections) {
      const top = s.getBoundingClientRect().top;
      if (top <= y) best = s;
      else break;
    }
    if (best?.id) activate(best.id);
  };

  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = window.requestAnimationFrame(() => {
      raf = 0;
      pickActive();
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  pickActive();

  cleanup = () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    if (raf) window.cancelAnimationFrame(raf);
  };
});

onBeforeUnmount(() => {
  document.body.style.backgroundColor = '';
  document.documentElement.style.colorScheme = '';
  if (colorSchemeMediaQuery && handleColorSchemeChange) {
    colorSchemeMediaQuery.removeEventListener('change', handleColorSchemeChange);
  }
  colorSchemeMediaQuery = null;
  handleColorSchemeChange = null;

  if (sectionTitleObserver) {
    sectionTitleObserver.disconnect();
    sectionTitleObserver = null;
  }
  sectionTitleIntervals.forEach((intervalId) => window.clearInterval(intervalId));
  sectionTitleIntervals.clear();
  
  if (bgCanvas.value && bgCanvas.value._cleanup) {
    bgCanvas.value._cleanup();
  }
  
  if (cleanup) cleanup();
});
</script>
