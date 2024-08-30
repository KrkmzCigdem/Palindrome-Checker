document.getElementById('check-btn').addEventListener('click', function () {
    const input = document.getElementById('text-input').value;
    const result = document.getElementById('result');

    if (!input) {
        alert('Please input a value');
        return;
    }

    // Clean the input by removing non-alphanumeric characters and converting to lower case
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Check if the cleaned input is a palindrome
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');

    // Display the result
    if (isPalindrome) {
        result.textContent = `${input} is a palindrome`;
    } else {
        result.textContent = `${input} is not a palindrome`;
    }
});
