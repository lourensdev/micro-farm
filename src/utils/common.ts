/**
 * Get a random number from a set of numbers
 * @example getRandomNumber([1, 2, 3]) // 2
 * @param {number[]} numberSet
 * @return {*}
 */
export const getRandomNumber = (numberSet: number[]) => {
  return numberSet[Math.floor(Math.random() * numberSet.length)];
};

/**
 * Get a random number between a min and max
 * @example getRandomNumberBetween(1, 10) // 5
 * @param {number} min
 * @param {number} max
 * @return {*}
 */
export const getRandomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomFromEnum = <T extends Record<string, string>>(
  anEnum: T,
  excludedValue?: T[keyof T],
): T[keyof T] => {
  const values = Object.values(anEnum) as unknown as T[keyof T][];
  const filteredValues = values.filter((value) => value !== excludedValue);
  const randomIndex = Math.floor(Math.random() * filteredValues.length);
  return filteredValues[randomIndex];
};
