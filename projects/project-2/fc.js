
fetch('data.json')
.then(response => response.json())
.then(data => {
  console.log(data);
  processMorse(data);
})
.catch(error => console.log(error));





// Store the flashcard data in an array of objects
const flashcards = [    { question: "A", answer: ".-" },    { question: "B", answer: "Blue whale" },    { question: "C", answer: "Vatican City" },    { question: "D", answer: "Mount Everest" }, { question: "E", answer: "Yen" },{ question: "E", answer: "Yen" },{ question: "E", answer: "Yen" },{ question: "E", answer: "Yen" },{ question: "E", answer: "Yen" },{ question: "E", answer: "Yen" },{ question: "E", answer: "Yen" },{ question: "E", answer: "Ywden" },{ question: "E", answer: "Yennc" },{ question: "E", answer: "Ysxen" },{ question: "E", answer: "Yesn" },{ question: "E", answer: "Ysen" },{ question: "E", answer: "c" },{ question: "E", answer: "Yecn" }          ];

// Get the HTML elements
const flashcardElement = document.getElementById("flashcard");
const shuffleButton = document.getElementById("shuffle");

// Add an event listener to the shuffle button
shuffleButton.addEventListener("click", shuffleFlashcard);

// Shuffle the flashcards and display the first card
shuffleFlashcard();

// Function to shuffle the flashcards and display a new card
function shuffleFlashcard() {
    // Shuffle the flashcards using the Fisher-Yates shuffle algorithm
    for (let i = flashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
    }

    // Display the first flashcard
    const currentFlashcard = flashcards[0];
    flashcardElement.innerText = currentFlashcard.question;

    // Add a click event listener to the flashcard to display the answer
    flashcardElement.addEventListener("click", function showAnswer() {
        flashcardElement.innerText = currentFlashcard.answer;
        flashcardElement.removeEventListener("click", showAnswer);
    });
}
