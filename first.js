const questionButton = document.querySelector("#questionButton");
const questionAnswer = document.querySelector("#questionAnswer");

const prompts = [
  "What is one person or idea you are grateful exists?",
  "What activity makes an ordinary day feel worth remembering?",
  "What small kindness could you offer someone today?",
  "Which unfinished curiosity would you like to follow?",
  "Where do you feel most like yourself?",
];

let promptIndex = 0;

questionButton.addEventListener("click", () => {
  questionAnswer.textContent = prompts[promptIndex];
  promptIndex = (promptIndex + 1) % prompts.length;
});