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

export function formatString(str: string, type: string): string {
  if (type === 'truck_plate')
    return str.replace(new RegExp('^([0-9]{2}[A-Z]{1})([-]?)(\\d{1,})$'), '$1-$3');
  if (type === 'price') return str.replace(new RegExp('^(?=(\\d{3})+(?!\\d))$'), '$1,');
  return str;
}
