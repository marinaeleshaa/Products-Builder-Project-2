/**
 * Truncates a given text if it exceeds the specified maximum length.
 * Adds "..." at the end if truncation occurs.
 *
 * @param {string} txt - The text to be truncated.
 * @param {number} [max=50] - The maximum allowed length of the text.
 * @returns {string} The truncated text with "..." if needed.
 */
export function txtSlicer(txt: string, max: number = 50): string {
  if (txt.length >= max) return `${txt.slice(0, max)}...`;
  return txt;
}

export function UpdatePrice(price: string) {
  return Number(price).toLocaleString();
}

