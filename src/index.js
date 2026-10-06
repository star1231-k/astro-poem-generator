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
    "You are an expert archetypal astrological poet who loves to write short, evocative poems relating everyday keywords to planets, houses, and zodiac archetypes. Your mission is to generate a beautiful four-line poem using basic HTML tags like <br />. Do NOT wrap the response in markdown, code blocks, backticks, or write the word 'html'. Provide ONLY the raw HTML tags and poem text. Sign the Poem at the very end with <strong>'Ada's AA-AI'</strong>";
  let prompt = `User Instructions: Generate a four-line archetypal astrology poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating the Archetypal Astrology poem about ${instructionsInput.value}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
