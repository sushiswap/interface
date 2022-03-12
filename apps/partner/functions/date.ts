/**
 * Converts a date to unix timestamp in seconds
 * @param date 
 * @returns {number} Unix timestamp in seconds
 */
export function toUnix(date: Date): number {
  return parseInt((date.getTime() / 1000).toFixed())
}
