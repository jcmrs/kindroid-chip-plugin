/**
 * AI-Chip Plugin - Minimal JavaScript Utilities
 * Simple, clean functions for enhanced user experience
 */

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Show toast notification
 * @param {string} message - Message to display
 * @param {string} type - Toast type (success, warning, error, info)
 * @param {number} duration - Display duration in milliseconds
 */
function showToast(message, type = 'success', duration = 3000) {
  // Remove existing toasts
  const existingToasts = document.querySelectorAll('.toast');
  existingToasts.forEach(toast => toast.remove());

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icons = {
    success: '✓',
    warning: '⚠',
    error: '✗',
    info: 'i'
  };
  
  toast.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.75rem;">
      <span style="font-weight: 600;">${icons[type] || '✓'}</span>
      <span>${message}</span>
    </div>
  `;
  
  // Add toast styles if not already present
  if (!document.querySelector('#toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      .toast {
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        padding: 1rem 1.25rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        min-width: 300px;
        font-size: 0.9rem;
      }
      
      .toast.show {
        transform: translateX(0);
      }
      
      .toast-success {
        border-left: 4px solid #10b981;
        background: #f0fdf4;
      }
      
      .toast-warning {
        border-left: 4px solid #f59e0b;
        background: #fffbeb;
      }
      
      .toast-error {
        border-left: 4px solid #ef4444;
        background: #fef2f2;
      }
      
      .toast-info {
        border-left: 4px solid #3b82f6;
        background: #eff6ff;
      }
      
      @media (max-width: 768px) {
        .toast {
          right: 1rem;
          left: 1rem;
          min-width: auto;
          transform: translateY(-100px);
        }
        
        .toast.show {
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(toast);
  
  // Show toast
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });
  
  // Hide toast after duration
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, duration);
}

/**
 * Copy text to clipboard with fallback
 * @param {string} text - Text to copy
 * @param {string} successMessage - Success message to show
 */
async function copyToClipboard(text, successMessage = 'Copied to clipboard!') {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      showToast(successMessage, 'success');
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      textArea.style.top = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showToast(successMessage, 'success');
    }
  } catch (error) {
    showToast('Failed to copy to clipboard', 'error');
    console.error('Copy failed:', error);
  }
}

/**
 * Smooth scroll to element
 * @param {string} selector - CSS selector for target element
 * @param {number} offset - Offset from top in pixels
 */
function scrollTo(selector, offset = 0) {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Simple fade in animation for elements
 * @param {Element} element - Element to animate
 * @param {number} duration - Animation duration in milliseconds
 */
function fadeIn(element, duration = 300) {
  element.style.opacity = '0';
  element.style.transition = `opacity ${duration}ms ease`;
  
  requestAnimationFrame(() => {
    element.style.opacity = '1';
  });
}

/**
 * Simple fade out animation for elements
 * @param {Element} element - Element to animate
 * @param {number} duration - Animation duration in milliseconds
 * @param {Function} callback - Callback function after animation
 */
function fadeOut(element, duration = 300, callback = null) {
  element.style.transition = `opacity ${duration}ms ease`;
  element.style.opacity = '0';
  
  setTimeout(() => {
    if (callback) callback();
  }, duration);
}

/**
 * Initialize common functionality
 */
function initializeFramework() {
  // Add smooth scrolling to hash links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        scrollTo(this.getAttribute('href'), 80);
      }
    });
  });

  // Add focus indicators for keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
  });

  console.log('🚀 AI-Chip Plugin Framework initialized');
}

// ============================================================================
// AUTO-INITIALIZATION
// ============================================================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeFramework);
} else {
  initializeFramework();
}

// ============================================================================
// EXPORTS
// ============================================================================

// Export utilities for use in other scripts
window.AIChipUtils = {
  showToast,
  copyToClipboard,
  scrollTo,
  fadeIn,
  fadeOut
};