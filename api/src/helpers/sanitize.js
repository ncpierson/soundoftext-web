/**
 * The Rules
 *
 * ~ Newlines are replaced with spaces
 * ~ Duplicate spaces are trimmed to a single space
 */

function sanitize(string) {
  const withoutNewLines = string.replace(/\r?\n|\r/g, ' ');
  const trimmed = withoutNewLines.replace(/\s+/g, ' ');

  return trimmed;
}

module.exports = sanitize;
