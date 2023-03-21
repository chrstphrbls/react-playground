// Define a function that calculates the Damerau-Levenshtein distance between two words
function damerauLevenshteinDistance(source, target) {
  // Create a matrix to store the distance values
  const matrix = [];

  // Initialize the first row and column of the matrix
  for (let i = 0; i <= source.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= target.length; j++) {
    matrix[0][j] = j;
  }

  // Iterate over the characters in the source and target words, and compute the distance
  // values for each cell in the matrix
  for (let i = 1; i <= source.length; i++) {
    for (let j = 1; j <= target.length; j++) {
      let cost = source[i - 1] === target[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
      if (
        i > 1 &&
        j > 1 &&
        source[i - 1] === target[j - 2] &&
        source[i - 2] === target[j - 1]
      ) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + cost); // transposition
      }
    }
  }

  // Return the final distance value in the bottom-right cell of the matrix
  return matrix[source.length][target.length];
}

// Define a function that finds the most similar word to a given input word in a list of words
// using the Damerau-Levenshtein distance
export function findMostSimilarWord(input, words) {
  // Initialize the most similar word to be the first word in the list
  let mostSimilarWord = words[0];
  let minDistance = damerauLevenshteinDistance(input, mostSimilarWord);

  // Iterate over the remaining words in the list, and update the most similar word
  // if a closer match is found
  for (let i = 1; i < words.length; i++) {
    let distance = damerauLevenshteinDistance(input, words[i]);
    if (distance < minDistance) {
      mostSimilarWord = words[i];
      minDistance = distance;
    }
  }

  // Return the most similar word that was found
  return mostSimilarWord;
}

// Example usage: find the most similar word to "dog" in the list of words
// const words = ["cat", "cog", "fog", "log", "rat"];
// console.log(findMostSimilarWord("dog", words)); // Output: "cog"
