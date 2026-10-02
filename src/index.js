function generatePoem(event) {
  event.preventDefault();

  
  new Typewriter("#poem", {
    strings: "Bright star, would I were stedfast as thou art—",
    autoStart: true,
    delay: 3,
    cursor:"",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
