// @flow
/**
 * Helper functions
 * @module Helpers
 */
export function generatePages(num: Number): Array<Number> {
  const roundNum = Math.ceil(num);
  return Array.from(Array(roundNum).keys(), n => n + 1);
}

export function convertStatus(num: Number): Array<Number> {
  if (num === 1) return 'New';
  if (num === 2) return 'In-use';
  if (num === 3) return 'Stopped';
  return 'Unknown';
}
