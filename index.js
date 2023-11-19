import questionsList from "./questions.js";

const questionTxt = document.getElementById("questionTxt");
const optionsList = document.getElementById("optionsList").children;
const aBtn = document.getElementById("A");
const bBtn = document.getElementById("B");
const cBtn = document.getElementById("C");
const dBtn = document.getElementById("D");
const answerTxt = document.getElementById("answerTxt");
const nextBtn = document.getElementById("nextBtn");

function doQuiz(questionsList) {
  var item = questionsList[Math.floor(Math.random() * questionsList.length)];
  questionTxt.textContent = item["question"];
  aBtn.textContent = item["A"];
  bBtn.textContent = item["B"];
  cBtn.textContent = item["C"];
  dBtn.textContent = item["D"];

  for (let option of optionsList) {
    option.addEventListener("click", (event) => {
      for (let option of optionsList) {
        option.setAttribute("disabled", "disabled");
      }

      if (item["answer"] === event.target.id) {
        answerTxt.textContent = "Correct Answer";
        option.style.backgroundColor = "lightgreen";
        answerTxt.style.color = "lightgreen";
      } else {
        answerTxt.textContent = "Correct answer was " + item[item["answer"]];
        option.style.backgroundColor = "lightpink";
        answerTxt.style.color = "lightpink";
      }
    });
  }
}

doQuiz(questionsList);

nextBtn.addEventListener("click", (event) => {
  for (let option of optionsList) {
    option.removeAttribute("disabled");
    option.style.backgroundColor = "lightseagreen";
  }
  answerTxt.textContent = "";
  doQuiz(questionsList);
});
