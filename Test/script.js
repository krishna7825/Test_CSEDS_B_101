document.getElementById("getJokeButton").addEventListener("click", fetchJoke);
document.getElementById("clearJokeButton").addEventListener("click", clear);
async function fetchJoke() {
    const jokeTextEle = document.getElementById("jokeText");
    const characterCountEle = document.getElementById("characterCount");

    try {
        const response = await fetch("https//v2.jokeapi.dev/joke/Any");
        
        if (!response.ok) {
            throw new Error("Failed to fetch the joke. Please try again.");
        }

        const data = await response.json();
        const joke = ${data.setup} ${data.punchline};
        jokeTextEle.textContent = joke;
        characterCountEle.textContent = Character Count: ${joke.length};
    } catch (error) {
        jokeTextEle.textContent = error.message;
        characterCountEle.textContent = "Character Count: 0";
    }
}
function clear() {
    const jokeTextEle = document.getElementById("jokeText");
    const characterCountEle = document.getElementById("characterCount");

    jokeTextEle.textContent = "Get more Joke!!!";
    characterCountEle.textContent = "Character Count: 0";
}