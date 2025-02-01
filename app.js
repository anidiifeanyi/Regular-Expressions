// Validate credit card number and type
function validateCreditCard(cardNumber) {
	const cardPatterns = {
		visa: /^4[0-9]{12}(?:[0-9]{3})?$/, // Visa: Starts with 4, length 13 or 16
		mastercard: /^5[1-5][0-9]{14}$/, // MasterCard: Starts with 51-55, length 16
		amex: /^3[47][0-9]{13}$/, // American Express: Starts with 34 or 37, length 15
		discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/ // Discover: Starts with 6011 or 65, length 16
	}

	for (let [cardType, pattern] of Object.entries(cardPatterns)) {
		if (pattern.test(cardNumber)) {
			return `Valid ${cardType.toUpperCase()} card number.`
		}
	}
	return 'Invalid card number.'
}
