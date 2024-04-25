export default function sortBy(array, key, descending = false) {
  // Create a shallow copy of the array to avoid modifying the original array.
  const sortedArray = array.slice().sort((itemA, itemB) => {
    // Extract the values corresponding to the sorting key for the two items being compared.
    const valueA = itemA[key];
    const valueB = itemB[key];
    // Determine the sorting order.
    return descending ? valueB - valueA : valueA - valueB;
  });
  return sortedArray;
}
