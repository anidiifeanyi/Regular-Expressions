# Example usage

console.log(validateCreditCard("4111111111111111")); // Visa
console.log(validateCreditCard("5105105105105100")); // MasterCard
console.log(validateCreditCard("371449635398431")); // Amex
console.log(validateCreditCard("6011111111111117")); // Discover
console.log(validateCreditCard("1234567890123456")); // Invalid

#####

# Regex Explanation:

-   Visa: Starts with '4', followed by 12 digits, optionally followed by 3 more digits (13 or 16 digits total).
-   MasterCard: Starts with '51' to '55', followed by 14 digits (total 16 digits).
-   Amex: Starts with '34' or '37', followed by 13 digits (total 15 digits).
-   Discover: Starts with '6011' or '65', followed by 12 digits (total 16 digits).
