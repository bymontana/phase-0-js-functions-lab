




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax(amount) {
    const taxRate = 0.10; // 10% tax
    if (amount <= 0) return 0; // No tax for non-positive amounts
    return amount * taxRate; // Calculate tax
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum (num1, num2) {
    return Math.max(num1, num2);
}

function isPalindrome(word) {
    let characters = word.split('');
    let reversedCharacters = characters.reverse();
    let reversedWord = reversedCharacters.join('');
    if (word === reversedWord) {
        return true;
    } else {
        return false;
    }
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountAmount = (originalPrice * discountPercentage) / 100;
    let finalPrice = originalPrice - discountAmount;
    return finalPrice < 0 ? 0 : finalPrice; // Ensure final price is not negative
}

