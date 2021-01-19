export function selectRandomElementFromArray(array) {
    var elementsCount = array.length;
    var randomKey = Math.floor(Math.random() * elementsCount);
    var randomElement = array[randomKey];
    return randomElement;
  }