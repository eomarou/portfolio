console.log("JavaScript loaded!"); // Log to confirm script is loaded
console.log("Event listener attached!"); // Log to confirm listener is attached

document.getElementById('betting-form').addEventListener('submit', function(event) {
    console.log("Button clicked!"); // Log to confirm button click

    console.log("Button clicked!"); // Log to confirm button click

    console.log("Form submitted!"); // Log to confirm submission
    event.preventDefault(); // Prevent the form from submitting normally
    const betAmount = document.getElementById('betAmount').value;
    document.getElementById('result').innerText = `You have placed a bet of $${betAmount}. Good luck!`;
});