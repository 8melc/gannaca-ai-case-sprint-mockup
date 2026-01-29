/**
 * GANNACA Toast Notification System
 * Einheitliches Design für alle System-Meldungen
 */

// Toast Container erstellen falls nicht vorhanden
function getToastContainer() {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  return container;
}

/**
 * Zeigt eine Toast-Benachrichtigung
 * @param {string} title - Titel der Nachricht
 * @param {string} message - Nachrichtentext (optional)
 * @param {string} type - 'success', 'error', 'warning', 'info'
 * @param {number} duration - Anzeigedauer in ms (default: 4000)
 */
function showToast(title, message = '', type = 'info', duration = 4000) {
  const container = getToastContainer();
  
  // Icon basierend auf Typ
  const icons = {
    success: 'check-circle',
    error: 'x-circle',
    warning: 'alert-triangle',
    info: 'info'
  };
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon">
      <i data-lucide="${icons[type] || 'info'}"></i>
    </div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      ${message ? `<div class="toast-message">${message}</div>` : ''}
    </div>
    <button class="toast-close" onclick="closeToast(this.parentElement)">
      <i data-lucide="x"></i>
    </button>
  `;
  
  container.appendChild(toast);
  
  // Lucide Icons initialisieren
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Auto-Close nach duration
  if (duration > 0) {
    setTimeout(() => closeToast(toast), duration);
  }
  
  return toast;
}

/**
 * Schließt eine Toast-Benachrichtigung
 * @param {HTMLElement} toast - Das Toast-Element
 */
function closeToast(toast) {
  if (!toast || toast.classList.contains('toast-exit')) return;
  
  toast.classList.add('toast-exit');
  setTimeout(() => {
    toast.remove();
  }, 200);
}

// Shorthand-Funktionen
function toastSuccess(title, message = '', duration = 4000) {
  return showToast(title, message, 'success', duration);
}

function toastError(title, message = '', duration = 5000) {
  return showToast(title, message, 'error', duration);
}

function toastWarning(title, message = '', duration = 4500) {
  return showToast(title, message, 'warning', duration);
}

function toastInfo(title, message = '', duration = 4000) {
  return showToast(title, message, 'info', duration);
}
