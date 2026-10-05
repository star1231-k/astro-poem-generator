function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 17,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "8b4a811b27o737dffc69tc402aef9873";
  let context =
    "You are a archetypal astrological romantic Poem expert and love to write short poems. Your mission is to generate a four-line poem using basic HTML tags (like <br /> or <p>). Do NOT wrap the response in markdown, code blocks, backticks, or write the word 'html'. Provide ONLY the raw HTML tags and poem text. Sign the Poem with <strong>'Keena T's RA-AI'</strong>";
  let prompt = `User Instructions: Generate an astrology poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
