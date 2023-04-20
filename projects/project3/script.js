// Get references to the clickable sentence and the hidden sentence
const clickMe = document.getElementById("click-me");
const hiddenSentence = document.getElementById("hidden-sentence");

// Add an event listener to the clickable sentence
clickMe.addEventListener("click", function() {
  // Update the content of the hidden sentence and show it
  hiddenSentence.textContent = "This is the hidden sentence that will appear when you click the first sentence.";
  hiddenSentence.style.display = "block";
});

 