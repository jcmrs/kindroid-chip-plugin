/**
 * AI-Chip Plugin Shared JavaScript Framework
 * Common functionality and utilities used across all pages
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
  toast.className = `toast toast-${type} show`;
  
  const icon = {
    success: '✅',
    warning: '⚠️',
    error: '❌',
    info: 'ℹ️'
  }[type] || '✅';
  
  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-icon">${icon}</span>
      <span class="toast-message">${message}</span>
    </div>
  `;
  
  // Add toast styles if not already present
  if (!document.querySelector('#toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      .toast {
        position: fixed;
        top: 1rem;
        right: 1rem;
        background: white;
        border: 1px solid var(--gray-200);
        border-radius: var(--radius-lg);
        padding: 1rem 1.25rem;
        box-shadow: var(--shadow-xl);
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        min-width: 300px;
      }
      
      .toast.show {
        transform: translateX(0);
      }
      
      .toast-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      
      .toast-success {
        border-left: 4px solid var(--success);
      }
      
      .toast-warning {
        border-left: 4px solid var(--warning);
      }
      
      .toast-error {
        border-left: 4px solid var(--error);
      }
      
      .toast-info {
        border-left: 4px solid var(--info);
      }
      
      .toast-message {
        font-weight: 500;
        color: var(--gray-700);
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
      showToast(successMessage);
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
      showToast(successMessage);
    }
  } catch (error) {
    showToast('Failed to copy to clipboard', 'error');
    console.error('Copy failed:', error);
  }
}

/**
 * Set active navigation link based on current page
 */
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (currentPath.includes(href) || (href === '../' && currentPath === '/'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Initialize all shared functionality
 */
function initSharedFramework() {
  // Core functionality
  setActiveNavLink();
  
  console.log('🚀 AI-Chip Plugin Shared Framework initialized');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSharedFramework);
} else {
  initSharedFramework();
}

// Export utilities for use in other scripts
window.AIChipFramework = {
  showToast,
  copyToClipboard
};