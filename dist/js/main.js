/**
 * Mime Tech-Collective (MTC) - Main JavaScript
 * The Theatre of Resistance
 * 
 * Handles all interactive functionality across the three main pages:
 * - Resistance Archive (index.html)
 * - Virtual Impresario (impresario.html)
 * - Living Academy (academy.html)
 */

(function() {
  'use strict';

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

  // ==========================================
  // Navigation Functionality
  // ==========================================

  function initNavigation() {
    const nav = document.querySelector('.nav');
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
      anchor.addEventListener('click', function(e) {
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
        btn.addEventListener('click', function() {
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
      loadMoreBtn.addEventListener('click', function() {
        this.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg> Loading...';
        
        // Simulate loading more content
        setTimeout(() => {
          this.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg> Load More Documents';
          
          // In production, this would fetch more cards from an API
          // For now, show an alert with demo behavior
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

    // Card click functionality
    cards.forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function(e) {
        // Don't trigger if clicking buttons
        if (e.target.closest('button')) return;
        
        const title = this.querySelector('.archive-title').textContent;
        const doi = this.querySelector('.archive-doi').textContent;
        
        alert(`Archive Document Viewer\n\n${title}\n\n${doi}\n\n[Full video viewer and document details would open here in production]`);
      });
    });
  }

  // ==========================================
  // Accordion Functionality (academy.html)
  // ==========================================

  function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      
      if (header) {
        header.addEventListener('click', function() {
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
    // Any profile-specific interactions
    const profileImage = document.querySelector('.profile-image');
    
    if (profileImage) {
      profileImage.addEventListener('click', function() {
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
    modalOverlay.addEventListener('click', function(e) {
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
          
          if (!isNaN(number) && number > 0) {
            animateNumber(element, number);
            observer.unobserve(element);
          }
        }
      });
    }, observerOptions);
    
    stats.forEach(stat => observer.observe(stat));
  }

  // ==========================================
  // Form Validation (if needed)
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
    const animatedElements = document.querySelectorAll('.card, .profile-content > section, .accordion-item');
    
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
      }
    });
  }

  // ==========================================
  // Initialize Everything
  // ==========================================

  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initNavigation();
        initArchive();
        initAccordion();
        initProfile();
        initStatsAnimation();
        initScrollAnimations();
        initKeyboardNavigation();
      });
    } else {
      initNavigation();
      initArchive();
      initAccordion();
      initProfile();
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

})();
