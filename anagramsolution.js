function isAnagram(str1, str2) {
    // Helper function to normalize and sort the string
    const normalizeAndSort = (str) => {
        return str.toLowerCase()
                  .replace(/[^a-z0-9]/g, '') // Remove non-alphanumeric characters
                  .split('') // Convert string to array
                  .sort() // Sort the array
                  .join(''); // Join back to string
    };

    // Normalize and sort both strings
    const normalizedStr1 = normalizeAndSort(str1);
    const normalizedStr2 = normalizeAndSort(str2);

    // Compare the normalized and sorted strings
    return normalizedStr1 === normalizedStr2;
}

// Test cases
console.log(isAnagram('spar', 'rasp')); // true
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
console.log(isAnagram('dormitory', 'dirty room')); // true (with spaces)
console.log(isAnagram('The eyes', 'They see')); // true (with spaces and different cases)
