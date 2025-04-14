function validateCreditCard(cardNumber) {
    // Remove hyphens
    const cleaned = cardNumber.replace(/-/g, '');
  
    // Check 1: Length and all numeric
    if (cleaned.length !== 16) {
      return { valid: false, number: cardNumber, error: 'wrong_length' };
    }
    if (!/^\d+$/.test(cleaned)) {
      return { valid: false, number: cardNumber, error: 'invalid_characters' };
    }
  
    // Check 2: At least two different digits
    const uniqueDigits = new Set(cleaned);
    if (uniqueDigits.size < 2) {
      return { valid: false, number: cardNumber, error: 'all_digits_same' };
    }
  
    // Check 3: Final digit must be even
    const lastDigit = parseInt(cleaned[15]);
    if (lastDigit % 2 !== 0) {
      return { valid: false, number: cardNumber, error: 'final_digit_not_even' };
    }
  
    // Check 4: Sum > 16
    const sum = cleaned.split('').reduce((acc, num) => acc + parseInt(num), 0);
    if (sum <= 16) {
      return { valid: false, number: cardNumber, error: 'sum_too_small' };
    }
  
    // All checks passed
    return { valid: true, number: cardNumber };
  }
  
  function checkCard() {
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const resultDiv = document.getElementById("result");
    const result = validateCreditCard(cardNumber);
  
    if (result.valid) {
      resultDiv.textContent = `✅ Valid card number: ${result.number}`;
      resultDiv.className = "output valid";
    } else {
      resultDiv.textContent = `❌ Invalid card: ${result.number} — Reason: ${result.error}`;
      resultDiv.className = "output invalid";
    }
  }
