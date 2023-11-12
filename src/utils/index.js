const STORAGE_KEY = "todo-items";

/**
 * Checks if an array has all of the values of another array.
 * @param {array} toHave - values to have
 * @param {array} mightHave - values that might have all to have values
 * @returns {boolean}
 */
export const hasAll = (toHave, mightHave) => {
  if (toHave.length > mightHave.length) return false;
  return (
    mightHave.filter((val) => toHave.includes(val)).length === toHave.length
  );
};

/**
 * Checks if two objects are different.
 * @param {object} objA
 * @param {object} objB
 * @returns {boolean}
 */
export const isDifferent = (objA, objB) => {
  return JSON.stringify(objA) !== JSON.stringify(objB);
};

export const readStorage = () => {
  const fromStorage = localStorage.getItem(STORAGE_KEY);
  if (fromStorage) return JSON.parse(fromStorage);
};

export const writeStorage = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};
