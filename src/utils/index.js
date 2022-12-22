/** @format */

export const isDifferent = (objA, objB) => {
  return JSON.stringify(objA) !== JSON.stringify(objB);
};
