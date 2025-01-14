document.addEventListener("DOMContentLoaded", () => {
    // Array containing a collection of motivational quotes
    const quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
        "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
        "Opportunities don't happen, you create them. – Chris Grosser",
        "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis"
    ];

    // Get references to the DOM elements
    const quoteText = document.getElementById("quoteText"); // Element where the quote will be displayed
    const newQuoteButton = document.getElementById("newQuoteButton"); // Button to trigger a new quote

    // Function to display a random quote
    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length); // Generate a random index
        quoteText.textContent = quotes[randomIndex]; // Update the text content of the quote element
    }

    // Display a random quote when the page loads
    displayRandomQuote();

    // Add an event listener to the button to change the quote when clicked
    newQuoteButton.addEventListener("click", displayRandomQuote);
});
