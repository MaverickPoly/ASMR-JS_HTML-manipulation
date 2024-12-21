const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why don't eggs tell jokes? They might crack up!",
    "Why did the tomato turn red? It saw the salad dressing!",
    "Why don't hippos play cards? Because they always fold their arms!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "Why don't scientists trust atoms? Because they make up everything!"
];

const jokeElement = document.querySelector("#joke");

function getJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeElement.textContent = jokes[randomIndex];
}

