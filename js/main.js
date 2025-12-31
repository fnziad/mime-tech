/**
 * Mime Tech-Collective (MTC) - Main JavaScript
 * The Theatre of Resistance
 * 
 * Handles all interactive functionality across all pages:
 * - Resistance Archive (index.html)
 * - Virtual Impresario (impresario.html)
 * - Living Academy (academy.html)
 * - Artists Directory (artists.html)
 * - Organizations Directory (organizations.html)
 * - Artist Profile (artist-profile.html)
 * - Organization Profile (organization-profile.html)
 */

(function () {
  'use strict';

  // ==========================================
  // Developer Credit Configuration
  // ==========================================

  const DEVELOPER_CREDIT = {
    name: 'Fahad Nadim Ziad',
    github: 'https://github.com/fnziad',
    linkedin: 'https://www.linkedin.com/in/fahadnadimziad/'
  };

  // ==========================================
  // Artist Data (for dynamic profile loading)
  // ==========================================

  const ARTISTS_DATABASE = {
    'julian-parse': {
      name: 'Julian Parse',
      title: 'Senior Choreographic Technologist',
      tagline: 'Decoding the silence between gestures',
      bio: 'Julian Parse is a pioneering figure in the intersection of mime technology and digital performance. With over 15 years of experience, they have developed proprietary frameworks for translating invisible movement into visible data streams. Their work challenges the fundamental assumptions of embodied knowledge production in contemporary performance.',
      specialties: ['Gesture Recognition', 'Movement Analysis', 'Digital Choreography'],
      location: 'Berlin, Germany',
      email: 'julian.parse@mtc.archive',
      website: 'https://jparse.mimecollective.org',
      experience: '15+ years',
      projects: 47,
      performances: 234,
      youtubeChannel: 'UCParseGestures',
      videoIds: ['dQw4w9WgXcQ', 'abc123def456', 'xyz789ghi012'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      portfolio: [
        { type: 'video', title: 'The Invisible Spectrum', thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=225&fit=crop' },
        { type: 'video', title: 'Digital Silence', thumbnail: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=400&h=225&fit=crop' },
        { type: 'image', title: 'Gesture Maps', thumbnail: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&h=225&fit=crop' }
      ]
    },
    'maren-void': {
      name: 'Maren Void',
      title: 'Archivist of the Unseen',
      tagline: 'Preserving what cannot be spoken',
      bio: 'Maren Void operates at the intersection of performance art and archival theory. Their practice focuses on the documentation and preservation of ephemeral performances that exist outside traditional institutional frameworks. They have developed innovative methodologies for capturing and cataloging invisible theatre.',
      specialties: ['Performance Documentation', 'Archival Theory', 'Ephemeral Media'],
      location: 'Copenhagen, Denmark',
      email: 'maren.void@mtc.archive',
      website: 'https://voidarchives.net',
      experience: '12 years',
      projects: 63,
      performances: 189,
      youtubeChannel: 'UCVoidArchives',
      videoIds: ['def456abc123', 'ghi012xyz789'],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      portfolio: [
        { type: 'video', title: 'The Archive of Shadows', thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e63?w=400&h=225&fit=crop' },
        { type: 'video', title: 'Silent Catalog', thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=225&fit=crop' }
      ]
    },
    'cipher-klein': {
      name: 'Cipher Klein',
      title: 'Non-Verbal Communication Specialist',
      tagline: 'Speaking the language of absence',
      bio: 'Cipher Klein has devoted their career to understanding and teaching the intricate language of mime and non-verbal communication. Their pedagogical approach combines classical training with contemporary technological tools, creating a unique methodology for teaching invisible performance.',
      specialties: ['Mime Pedagogy', 'Non-Verbal Communication', 'Embodied Learning'],
      location: 'Paris, France',
      email: 'cipher.klein@mtc.archive',
      website: 'https://cipherklein.eu',
      experience: '20 years',
      projects: 89,
      performances: 412,
      youtubeChannel: 'UCKleinMime',
      videoIds: ['ghi789jkl012', 'mno345pqr678'],
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
      portfolio: [
        { type: 'video', title: 'The Language of Hands', thumbnail: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=400&h=225&fit=crop' },
        { type: 'video', title: 'Teaching the Invisible', thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=225&fit=crop' },
        { type: 'image', title: 'Workshop Documentation', thumbnail: 'https://images.unsplash.com/photo-1544531696-934845326297?w=400&h=225&fit=crop' }
      ]
    },
    'echo-nadal': {
      name: 'Echo Nadal',
      title: 'Movement Data Analyst',
      tagline: 'Quantifying the intangible',
      bio: 'Echo Nadal brings a scientific approach to the study of mime performance. Using advanced motion capture and machine learning algorithms, they analyze the precise movements that create the illusion of invisible objects and barriers in traditional mime performance.',
      specialties: ['Motion Capture', 'Data Analysis', 'Performance Metrics'],
      location: 'Tokyo, Japan',
      email: 'echo.nadal@mtc.archive',
      website: 'https://echonadal.research',
      experience: '8 years',
      projects: 34,
      performances: 156,
      youtubeChannel: 'UCEchoAnalysis',
      videoIds: ['stu901vwx234'],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      portfolio: [
        { type: 'video', title: 'Quantifying the Air Wall', thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop' },
        { type: 'image', title: 'Movement Patterns', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop' }
      ]
    },
    'void-sartre': {
      name: 'Void Sartre',
      title: 'Existential Performance Researcher',
      tagline: 'Performing existence through absence',
      bio: 'Void Sartre explores the philosophical dimensions of mime performance, examining how the absence of speech and the presence of exaggerated gesture create meaning. Their research bridges performance practice with existential philosophy and phenomenology of embodiment.',
      specialties: ['Performance Philosophy', 'Embodied Phenomenology', 'Existential Performance'],
      location: 'Lyon, France',
      email: 'void.sartre@mtc.archive',
      website: 'https://sartrevoid.philosophy',
      experience: '10 years',
      projects: 28,
      performances: 98,
      youtubeChannel: 'UCSartrePhilosophy',
      videoIds: ['vwx567yza891'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      portfolio: [
        { type: 'video', title: 'The Phenomenology of Air', thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop' },
        { type: 'video', title: 'Being and Nothingness in Performance', thumbnail: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=225&fit=crop' }
      ]
    },
    'null-weiss': {
      name: 'Null Weiss',
      title: 'Soundless Audio Designer',
      tagline: 'Composing the spaces between',
      bio: 'Null Weiss specializes in creating soundscapes for silent performance. Their work explores how environmental sound design can enhance the impact of mime and physical theatre, creating immersive experiences that amplify the absence of spoken word.',
      specialties: ['Soundscape Design', 'Ambient Audio', 'Theatre Technology'],
      location: 'Vienna, Austria',
      email: 'null.weiss@mtc.archive',
      website: 'https://nullweiss.audio',
      experience: '14 years',
      projects: 56,
      performances: 201,
      youtubeChannel: 'UCWeissAudio',
      videoIds: ['yza234bcd567'],
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop',
      portfolio: [
        { type: 'video', title: 'The Sound of Silence', thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=225&fit=crop' },
        { type: 'video', title: 'Ambient Theatre', thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=225&fit=crop' },
        { type: 'image', title: 'Sound Design Workshop', thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=225&fit=crop' }
      ]
    }
  };

  // ==========================================
  // Organization Data
  // ==========================================

  const ORGANIZATIONS_DATABASE = {
    'theatre-of-resistance': {
      name: 'Theatre of Resistance',
      type: 'Collective',
      tagline: 'Speaking through silence since 1968',
      description: 'The Theatre of Resistance is the foundational collective from which the Mime Tech-Collective emerged. Dedicated to radical physical theatre and mime performance that challenges social norms.',
      location: 'Paris, France',
      founded: 1968,
      members: 45,
      projects: 320,
      website: 'https://theatreofresistance.org',
      email: 'contact@theatreofresistance.org',
      focus: ['Physical Theatre', 'Political Performance', 'Community Engagement'],
      image: 'https://images.unsplash.com/photo-1503095392237-fc5594291f25?w=400&h=300&fit=crop'
    },
    'invisible-studies': {
      name: 'Invisible Studies Institute',
      type: 'Research Institution',
      tagline: 'Academic inquiry into the unseen',
      description: 'A research institution dedicated to the academic study of invisible theatre, mime traditions, and non-verbal performance modalities across cultures.',
      location: 'Berlin, Germany',
      founded: 1994,
      members: 28,
      projects: 156,
      website: 'https://invisiblestudies.org',
      email: 'info@invisiblestudies.org',
      focus: ['Academic Research', 'Publications', 'Conferences'],
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop'
    },
    'digital-mime-lab': {
      name: 'Digital Mime Laboratory',
      type: 'Technology Lab',
      tagline: 'Where tradition meets innovation',
      description: 'A cutting-edge laboratory exploring the intersection of traditional mime performance with emerging digital technologies including VR, AR, and motion capture systems.',
      location: 'Tokyo, Japan',
      founded: 2015,
      members: 18,
      projects: 87,
      website: 'https://digitalmimelab.jp',
      email: 'hello@digitalmimelab.jp',
      focus: ['Technology Development', 'VR Performance', 'Motion Capture'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop'
    },
    'silent-pedagogy-foundation': {
      name: 'Silent Pedagogy Foundation',
      type: 'Educational Nonprofit',
      tagline: 'Teaching through silence',
      description: 'An educational nonprofit organization focused on bringing mime and non-verbal communication training to underserved communities and educational institutions worldwide.',
      location: 'Barcelona, Spain',
      founded: 2008,
      members: 32,
      projects: 203,
      website: 'https://silentpedagogy.org',
      email: 'learn@silentpedagogy.org',
      focus: ['Education', 'Community Outreach', 'Training Programs'],
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop'
    },
    'gesture-archive': {
      name: 'The Gesture Archive',
      type: 'Archive',
      tagline: 'Preserving movement for generations',
      description: 'A comprehensive digital archive dedicated to preserving historical and contemporary mime performances, gestures, and movement notation systems from around the world.',
      location: 'London, UK',
      founded: 1987,
      members: 15,
      projects: 92,
      website: 'https://gesturearchive.org',
      email: 'archive@gesturearchive.org',
      focus: ['Archival', 'Preservation', 'Digitization'],
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop'
    },
    'mime-tech-collective': {
      name: 'Mime Tech-Collective (MTC)',
      type: 'Technology Collective',
      tagline: 'Institutional resistance through digital mime',
      description: 'The Mime Tech-Collective is our parent organization, dedicated to using mime and physical theatre as tools for institutional resistance and epistemic reclamation in the digital age.',
      location: 'Global',
      founded: 2023,
      members: 12,
      projects: 28,
      website: 'https://mimecollective.org',
      email: 'hello@mimecollective.org',
      focus: ['Digital Resistance', 'Community Building', 'Knowledge Production'],
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop'
    }
  };

  // ==========================================
  // Utility Functions
  // ==========================================

  /**
   * Debounce function for search input
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Fade in elements with animation
   */
  function fadeIn(element, duration = 300) {
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease`;
    requestAnimationFrame(() => {
      element.style.opacity = '1';
    });
  }

  /**
   * Fade out and remove element
   */
  function fadeOutRemove(element, duration = 300) {
    element.style.transition = `opacity ${duration}ms ease`;
    element.style.opacity = '0';
    setTimeout(() => {
      element.remove();
    }, duration);
  }

  /**
   * Animate number counting
   */
  function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 16);
  }

  /**
   * Get URL parameters
   */
  function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  /**
   * Add developer credit to footer
   */
  function addDeveloperCredit() {
    const footer = document.querySelector('.footer-bottom');
    if (!footer) return;

    // Check if credit already exists
    if (footer.querySelector('.developer-credit')) return;

    const creditDiv = document.createElement('div');
    creditDiv.className = 'developer-credit';
    creditDiv.innerHTML = `
      <span style="color: #71717a; font-size: 0.875rem;">Developed by </span>
      <a href="${DEVELOPER_CREDIT.github}" target="_blank" rel="noopener noreferrer" 
         style="color: #f8f9fa; text-decoration: none; font-weight: 500; transition: color 0.2s;"
         onmouseover="this.style.color='#dc2626'" 
         onmouseout="this.style.color='#f8f9fa'">
        ${DEVELOPER_CREDIT.name}
      </a>
      <span style="color: #71717a; font-size: 0.875rem;"> | </span>
      <a href="${DEVELOPER_CREDIT.linkedin}" target="_blank" rel="noopener noreferrer"
         style="color: #a1a1aa; text-decoration: none; font-size: 0.875rem; transition: color 0.2s;"
         onmouseover="this.style.color='#dc2626'" 
         onmouseout="this.style.color='#a1a1aa'">
        LinkedIn
      </a>
    `;

    // Insert at the beginning of footer-bottom
    footer.insertBefore(creditDiv, footer.firstChild);
  }

  // ==========================================
  // Navigation Functionality
  // ==========================================

  function initNavigation() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    const navHeight = nav.offsetHeight;

    // Scroll effect for navigation
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        nav.style.background = 'rgba(9, 9, 11, 0.95)';
        nav.style.backdropFilter = 'blur(20px)';
      } else {
        nav.style.background = 'rgba(255, 255, 255, 0.03)';
        nav.style.backdropFilter = 'blur(12px)';
      }

      lastScrollY = currentScrollY;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const offsetTop = target.offsetTop - navHeight - 20;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  // ==========================================
  // YouTube Video Modal Functionality
  // ==========================================

  function initVideoModals() {
    const videoCards = document.querySelectorAll('.video-card[data-youtube]');

    videoCards.forEach(card => {
      card.addEventListener('click', function (e) {
        // Don't trigger if clicking buttons
        if (e.target.closest('button')) return;

        const videoId = this.dataset.youtube;
        const videoTitle = this.querySelector('.video-title')?.textContent || 'Video Player';
        if (videoId) {
          openYouTubeModal(videoId, videoTitle);
        }
      });
    });
  }

  function openYouTubeModal(videoId, title) {
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'video-modal-overlay';
    modalOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      opacity: 0;
      transition: opacity 300ms ease;
    `;

    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.style.cssText = `
      width: 90%;
      max-width: 900px;
      background: #121214;
      border: 1px solid #27272a;
      border-radius: 12px;
      overflow: hidden;
      transform: scale(0.95);
      transition: transform 300ms ease;
    `;

    // Create header
    const header = document.createElement('div');
    header.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      border-bottom: 1px solid #27272a;
      background: rgba(255, 255, 255, 0.02);
    `;
    header.innerHTML = `
      <h3 style="font-family: 'Playfair Display', serif; font-size: 1.25rem; color: #f8f9fa; margin: 0;">
        ${title}
      </h3>
      <button class="close-modal-btn" style="
        background: none;
        border: none;
        color: #a1a1aa;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        transition: all 0.2s;
      ">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `;

    // Create video container
    const videoContainer = document.createElement('div');
    videoContainer.style.cssText = `
      position: relative;
      padding-bottom: 56.25%; /* 16:9 aspect ratio */
      height: 0;
      overflow: hidden;
    `;

    const iframe = document.createElement('iframe');
    iframe.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    `;
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    videoContainer.appendChild(iframe);
    modal.appendChild(header);
    modal.appendChild(videoContainer);
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);

    // Disable body scroll
    document.body.style.overflow = 'hidden';

    // Animate in
    requestAnimationFrame(() => {
      modalOverlay.style.opacity = '1';
      modal.style.transform = 'scale(1)';
    });

    // Close function
    const closeModal = () => {
      modalOverlay.style.opacity = '0';
      modal.style.transform = 'scale(0.95)';
      document.body.style.overflow = '';
      setTimeout(() => {
        modalOverlay.remove();
        // Stop the video by removing the iframe
        iframe.src = '';
      }, 300);
    };

    // Event listeners for closing
    header.querySelector('.close-modal-btn').addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    // ESC key to close
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  }

  // ==========================================
  // Archive Page Functionality (index.html)
  // ==========================================

  function initArchive() {
    const searchInput = document.getElementById('searchInput');
    const filterGroup = document.getElementById('filterGroup');
    const archiveGrid = document.getElementById('archiveGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (!archiveGrid) return;

    const cards = archiveGrid.querySelectorAll('.archive-card');

    // Search functionality
    if (searchInput) {
      searchInput.addEventListener('input', debounce((e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        cards.forEach(card => {
          const title = card.querySelector('.archive-title').textContent.toLowerCase();
          const context = card.querySelector('.archive-context').textContent.toLowerCase();
          const meta = card.querySelector('.archive-meta').textContent.toLowerCase();

          if (title.includes(searchTerm) || context.includes(searchTerm) || meta.includes(searchTerm)) {
            card.style.display = '';
            fadeIn(card);
          } else {
            card.style.display = 'none';
          }
        });
      }, 300));
    }

    // Filter functionality
    if (filterGroup) {
      const filterBtns = filterGroup.querySelectorAll('.filter-btn');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
          // Update active state
          filterBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');

          const filter = this.dataset.filter;

          cards.forEach(card => {
            const categories = card.dataset.categories || '';

            if (filter === 'all' || categories.includes(filter)) {
              card.style.display = '';
              setTimeout(() => fadeIn(card), 50);
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    }

    // Load more functionality
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', function () {
        this.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg> Loading...';

        // Simulate loading more content
        setTimeout(() => {
          this.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg> Load More Documents';

          // In production, this would fetch more cards from an API
          alert('More documents would load here in production.\n\nThis connects to the Zenodo repository API to fetch additional archived materials.');
        }, 1500);
      });
    }

    // Add staggered animation to cards on load
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity 400ms ease ${index * 100}ms, transform 400ms ease ${index * 100}ms`;

      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100);
    });
  }

  // ==========================================
  // Directory Search Functionality
  // ==========================================

  function initDirectorySearch() {
    const searchInput = document.getElementById('directorySearch');
    const filterGroup = document.getElementById('directoryFilters');
    const directoryGrid = document.getElementById('directoryGrid');
    const noResults = document.getElementById('noResults');

    if (!directoryGrid) return;

    const items = directoryGrid.querySelectorAll('.directory-item');

    // Search functionality
    if (searchInput) {
      searchInput.addEventListener('input', debounce((e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        let visibleCount = 0;

        items.forEach(item => {
          const name = item.querySelector('.directory-name').textContent.toLowerCase();
          const title = item.querySelector('.directory-title').textContent.toLowerCase();
          const tagline = item.querySelector('.directory-tagline').textContent.toLowerCase();
          const location = item.querySelector('.directory-location').textContent.toLowerCase();

          const searchContent = `${name} ${title} ${tagline} ${location}`;

          if (searchTerm === '' || searchContent.includes(searchTerm)) {
            item.style.display = '';
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 50);
            visibleCount++;
          } else {
            item.style.display = 'none';
          }
        });

        // Show/hide no results message
        if (noResults) {
          noResults.style.display = visibleCount === 0 ? 'flex' : 'none';
        }
      }, 300));
    }

    // Filter functionality
    if (filterGroup) {
      const filterBtns = filterGroup.querySelectorAll('.filter-btn');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
          // Update active state
          filterBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');

          const filter = this.dataset.filter;
          let visibleCount = 0;

          items.forEach(item => {
            const type = item.dataset.type || '';
            const categories = item.dataset.categories || '';

            let showItem = false;

            if (filter === 'all') {
              showItem = true;
            } else if (filter === 'collective' && type === 'Collective') {
              showItem = true;
            } else if (filter === 'research' && (type === 'Research Institution' || type === 'Archive')) {
              showItem = true;
            } else if (filter === 'tech' && type === 'Technology Lab') {
              showItem = true;
            } else if (filter === 'education' && (type === 'Educational Nonprofit' || type === 'Research Institution')) {
              showItem = true;
            } else if (categories.includes(filter)) {
              showItem = true;
            }

            if (showItem) {
              item.style.display = '';
              item.style.opacity = '0';
              item.style.transform = 'translateY(20px)';
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, 50);
              visibleCount++;
            } else {
              item.style.display = 'none';
            }
          });

          // Show/hide no results message
          if (noResults) {
            noResults.style.display = visibleCount === 0 ? 'flex' : 'none';
          }
        });
      });
    }

    // Add staggered animation to items on load
    items.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = `opacity 400ms ease ${index * 100}ms, transform 400ms ease ${index * 100}ms`;

      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 100);
    });
  }

  // ==========================================
  // Dynamic Profile Loading
  // ==========================================

  function initArtistProfile() {
    const artistId = getUrlParam('id');
    if (!artistId) return;

    const artist = ARTISTS_DATABASE[artistId];
    if (!artist) {
      // Handle artist not found
      showErrorPage('Artist not found', 'The requested artist profile could not be found in our archive.');
      return;
    }

    // Populate profile data
    populateArtistProfile(artist);
  }

  function populateArtistProfile(artist) {
    // Update page title
    document.title = `${artist.name} - ${artist.title} | Mime Tech-Collective`;

    // Profile image
    const profileImage = document.querySelector('.profile-image img');
    if (profileImage) {
      profileImage.src = artist.image;
      profileImage.alt = artist.name;
    }

    // Name and title
    const nameElement = document.querySelector('.profile-name');
    if (nameElement) nameElement.textContent = artist.name;

    const titleElement = document.querySelector('.profile-title');
    if (titleElement) titleElement.textContent = artist.title;

    const taglineElement = document.querySelector('.profile-tagline');
    if (taglineElement) taglineElement.textContent = artist.tagline;

    // Bio
    const bioElement = document.querySelector('.profile-bio');
    if (bioElement) bioElement.textContent = artist.bio;

    // Specialties
    const specialtiesContainer = document.querySelector('.specialties-list');
    if (specialtiesContainer) {
      specialtiesContainer.innerHTML = artist.specialties
        .map(s => `<span class="specialty-tag">${s}</span>`)
        .join('');
    }

    // Stats
    const expElement = document.querySelector('.stat-exp .stat-value');
    if (expElement) expElement.textContent = artist.experience;

    const projElement = document.querySelector('.stat-projects .stat-value');
    if (projElement) {
      animateNumber(projElement, artist.projects);
    }

    const perfElement = document.querySelector('.stat-performances .stat-value');
    if (perfElement) {
      animateNumber(perfElement, artist.performances);
    }

    // Contact info
    const locationElement = document.querySelector('.contact-info .location');
    if (locationElement) locationElement.textContent = artist.location;

    const emailElement = document.querySelector('.contact-info .email');
    if (emailElement) {
      emailElement.textContent = artist.email;
      emailElement.href = `mailto:${artist.email}`;
    }

    const websiteElement = document.querySelector('.contact-info .website');
    if (websiteElement) {
      websiteElement.textContent = artist.website;
      websiteElement.href = artist.website;
    }

    // Portfolio
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
      portfolioGrid.innerHTML = artist.portfolio
        .map(item => `
          <div class="portfolio-item" data-type="${item.type}">
            <img src="${item.thumbnail}" alt="${item.title}">
            <div class="portfolio-overlay">
              <span class="portfolio-title">${item.title}</span>
            </div>
          </div>
        `)
        .join('');
    }

    // YouTube videos section
    const videosSection = document.querySelector('.youtube-section');
    if (videosSection && artist.videoIds && artist.videoIds.length > 0) {
      const videosGrid = videosSection.querySelector('.videos-grid');
      if (videosGrid) {
        videosGrid.innerHTML = artist.videoIds
          .map((videoId, index) => `
            <div class="video-thumbnail" data-video-id="${videoId}">
              <img src="https://img.youtube.com/vi/${videoId}/mqdefault.jpg" alt="Video ${index + 1}">
              <div class="play-button">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
          `)
          .join('');

        // Add click handlers for video thumbnails
        videosSection.querySelectorAll('.video-thumbnail').forEach(thumb => {
          thumb.addEventListener('click', function () {
            const videoId = this.dataset.videoId;
            openYouTubeModal(videoId, `${artist.name} - Performance Video`);
          });
        });
      }
    }
  }

  function initOrganizationProfile() {
    const orgId = getUrlParam('id');
    if (!orgId) return;

    const org = ORGANIZATIONS_DATABASE[orgId];
    if (!org) {
      showErrorPage('Organization not found', 'The requested organization profile could not be found in our archive.');
      return;
    }

    populateOrganizationProfile(org);
  }

  function populateOrganizationProfile(org) {
    // Update page title
    document.title = `${org.name} | Mime Tech-Collective`;

    // Cover image
    const coverImage = document.querySelector('.org-cover-image');
    if (coverImage) {
      coverImage.style.backgroundImage = `url(${org.image})`;
    }

    // Name and type
    const nameElement = document.querySelector('.org-name');
    if (nameElement) nameElement.textContent = org.name;

    const typeElement = document.querySelector('.org-type');
    if (typeElement) typeElement.textContent = org.type;

    const taglineElement = document.querySelector('.org-tagline');
    if (taglineElement) taglineElement.textContent = org.tagline;

    // Description
    const descElement = document.querySelector('.org-description');
    if (descElement) descElement.textContent = org.description;

    // Focus areas
    const focusContainer = document.querySelector('.focus-list');
    if (focusContainer) {
      focusContainer.innerHTML = org.focus
        .map(f => `<span class="focus-tag">${f}</span>`)
        .join('');
    }

    // Stats
    const foundedElement = document.querySelector('.stat-founded .stat-value');
    if (foundedElement) foundedElement.textContent = org.founded;

    const membersElement = document.querySelector('.stat-members .stat-value');
    if (membersElement) {
      animateNumber(membersElement, org.members);
    }

    const projectsElement = document.querySelector('.stat-org-projects .stat-value');
    if (projectsElement) {
      animateNumber(projectsElement, org.projects);
    }

    // Contact info
    const locationElement = document.querySelector('.org-location');
    if (locationElement) locationElement.textContent = org.location;

    const websiteElement = document.querySelector('.org-website');
    if (websiteElement) {
      websiteElement.textContent = org.website;
      websiteElement.href = org.website;
    }

    const emailElement = document.querySelector('.org-email');
    if (emailElement) {
      emailElement.textContent = org.email;
      emailElement.href = `mailto:${org.email}`;
    }
  }

  function showErrorPage(title, message) {
    const mainContent = document.querySelector('.main-content') || document.querySelector('main');
    if (!mainContent) return;

    mainContent.innerHTML = `
      <div style="min-height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 20px;">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="1.5" style="margin-bottom: 24px;">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <h1 style="font-family: 'Playfair Display', serif; font-size: 2rem; color: #f8f9fa; margin-bottom: 16px;">${title}</h1>
        <p style="color: #a1a1aa; max-width: 400px; line-height: 1.7;">${message}</p>
        <a href="artists.html" style="display: inline-block; margin-top: 32px; padding: 12px 24px; background: #dc2626; color: #fff; text-decoration: none; border-radius: 6px; transition: background 0.2s;">Back to Directory</a>
      </div>
    `;
  }

  // ==========================================
  // Accordion Functionality (academy.html)
  // ==========================================

  function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');

      if (header) {
        header.addEventListener('click', function () {
          const isActive = item.classList.contains('active');

          // Close all other items
          accordionItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
              otherItem.classList.remove('active');
              const otherHeader = otherItem.querySelector('.accordion-header');
              if (otherHeader) {
                otherHeader.setAttribute('aria-expanded', 'false');
              }
            }
          });

          // Toggle current item
          item.classList.toggle('active');
          this.setAttribute('aria-expanded', !isActive);
        });
      }
    });
  }

  // ==========================================
  // Profile Interactions (impresario.html)
  // ==========================================

  function initProfile() {
    const profileImage = document.querySelector('.profile-image');

    if (profileImage) {
      profileImage.addEventListener('click', function () {
        alert('Full Resolution Portrait\n\n[High-resolution image would open in modal here in production]\n\nImage credits: MTC Documentation Team, 2024');
      });
    }
  }

  // ==========================================
  // Modal/Alert Functions
  // ==========================================

  function showModal(title, content) {
    // Create modal elements
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      opacity: 0;
      transition: opacity 300ms ease;
    `;

    const modal = document.createElement('div');
    modal.className = 'modal-content';
    modal.style.cssText = `
      background: #121214;
      border: 1px solid #27272a;
      border-radius: 8px;
      padding: 24px;
      max-width: 500px;
      width: 90%;
      margin: 20px;
      transform: scale(0.95);
      transition: transform 300ms ease;
    `;

    modal.innerHTML = `
      <h3 style="font-family: 'Playfair Display', serif; font-size: 1.5rem; margin-bottom: 16px; color: #f8f9fa;">${title}</h3>
      <div style="color: #a1a1aa; line-height: 1.7;">${content}</div>
      <button class="btn btn-secondary" style="margin-top: 20px; width: 100%;" onclick="this.closest('.modal-overlay').remove()">Close</button>
    `;

    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);

    // Animate in
    requestAnimationFrame(() => {
      modalOverlay.style.opacity = '1';
      modal.style.transform = 'scale(1)';
    });

    // Close on click outside
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        modalOverlay.style.opacity = '0';
        modal.style.transform = 'scale(0.95)';
        setTimeout(() => modalOverlay.remove(), 300);
      }
    });
  }

  // ==========================================
  // Stats Animation
  // ==========================================

  function initStatsAnimation() {
    const stats = document.querySelectorAll('.stat-value');

    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const text = element.textContent;
          const number = parseInt(text.replace(/[^0-9]/g, ''));

          if (!isNaN(number) && number > 0 && !element.dataset.animated) {
            element.dataset.animated = 'true';
            animateNumber(element, number);
            observer.unobserve(element);
          }
        }
      });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));
  }

  // ==========================================
  // Form Validation
  // ==========================================

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // ==========================================
  // Copy to Clipboard
  // ==========================================

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      return false;
    }
  }

  // ==========================================
  // Intersection Observer for Animations
  // ==========================================

  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.card, .profile-content > section, .accordion-item, .directory-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 500ms ease ${index * 50}ms, transform 500ms ease ${index * 50}ms`;
      observer.observe(el);
    });
  }

  // ==========================================
  // Keyboard Navigation
  // ==========================================

  function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // ESC closes any open modals
      if (e.key === 'Escape') {
        const modalOverlay = document.querySelector('.modal-overlay');
        if (modalOverlay) {
          modalOverlay.style.opacity = '0';
          modalOverlay.querySelector('.modal-content').style.transform = 'scale(0.95)';
          setTimeout(() => modalOverlay.remove(), 300);
        }

        // Close video modal
        const videoModal = document.querySelector('.video-modal-overlay');
        if (videoModal) {
          videoModal.querySelector('iframe').src = '';
          videoModal.style.opacity = '0';
          videoModal.querySelector('.video-modal').style.transform = 'scale(0.95)';
          document.body.style.overflow = '';
          setTimeout(() => videoModal.remove(), 300);
        }
      }
    });
  }

  // ==========================================
  // Booking Form Functionality
  // ==========================================

  function initBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    if (!bookingForm) return;

    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const type = formData.get('type');

      // Basic validation
      if (!name || !email || !validateEmail(email)) {
        alert('Please fill in all required fields with a valid email address.');
        return;
      }

      // Simulate form submission
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = 'Request Sent!';
        submitBtn.style.background = '#16a34a';

        alert(`Thank you, ${name}!\n\nYour ${type} inquiry has been received. Our team will review your request and respond within 2-3 business days.\n\nConfirmation sent to: ${email}`);

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
          this.reset();
        }, 2000);
      }, 1500);
    });
  }

  // ==========================================
  // Initialize Everything
  // ==========================================

  function init() {
    // Add developer credit to all pages
    addDeveloperCredit();

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initNavigation();
        initArchive();
        initDirectorySearch();
        initArtistProfile();
        initOrganizationProfile();
        initVideoModals();
        initAccordion();
        initProfile();
        initBookingForm();
        initStatsAnimation();
        initScrollAnimations();
        initKeyboardNavigation();
      });
    } else {
      initNavigation();
      initArchive();
      initDirectorySearch();
      initArtistProfile();
      initOrganizationProfile();
      initVideoModals();
      initAccordion();
      initProfile();
      initBookingForm();
      initStatsAnimation();
      initScrollAnimations();
      initKeyboardNavigation();
    }
  }

  // Start the application
  init();

  // ==========================================
  // Global Functions (for onclick handlers)
  // ==========================================

  window.showModal = showModal;
  window.copyToClipboard = copyToClipboard;
  window.openYouTubeModal = openYouTubeModal;
  window.openVideoModal = openYouTubeModal; // Alias for HTML onclick handlers

})();
