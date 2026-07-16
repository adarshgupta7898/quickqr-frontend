/**
 * Format an ISO date string into a human-readable form.
 * @param {string|null} iso
 * @returns {string}
 */
export function formatDate(iso) {
  if (!iso) return '—';
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(iso));
}

/**
 * Truncate a string to `max` characters, appending "…" if needed.
 * @param {string} str
 * @param {number} max
 * @returns {string}
 */
export function truncate(str, max = 60) {
  if (!str) return '';
  return str.length > max ? `${str.slice(0, max)}…` : str;
}

/**
 * Create a stable download filename from a title.
 * @param {string|null} title
 * @param {string} fallback
 * @returns {string}
 */
export function buildDownloadFileName(title, fallback = 'qr-code') {
  const base = (title || fallback).trim().toLowerCase().replace(/\s+/g, '-');
  return `${base || fallback}.png`;
}

/**
 * Copy text to the system clipboard with a fallback.
 * @param {string} text
 * @returns {Promise<void>}
 */
export async function copyToClipboard(text) {
  if (!text) return;

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // fall back below
    }
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}
