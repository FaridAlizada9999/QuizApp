const questions = [
  {
    question: "Dünyanın en büyük okyanusu hangisidir?",
    answers: [
      { text: "Atlas Okyanusu", dogru: false },
      { text: "Hint Okyanusu", dogru: false },
      { text: "Pasifik Okyanusu", dogru: true },
      { text: "Arktik Okyanusu", dogru: false },
    ],
  },
  {
    question:
      "1. Dünya Savaşı'nın hangi yıl başladığına dair doğru tarihi seçin",
    answers: [
      { text: "1914", dogru: true },
      { text: "1916", dogru: false },
      { text: "1918", dogru: false },
      { text: "1920", dogru: false },
    ],
  },
  {
    question: "Kimyasal elementler periyodik tabloda nasıl sıralanır?",
    answers: [
      { text: "Alfabetik sıraya göre", dogru: false },
      { text: "Atom numarasına göre", dogru: true },
      { text: "Molekül ağırlığına göre", dogru: false },
      { text: "Keşfedilme sırasına göre", dogru: false },
    ],
  },
  {
    question: "Yüzüklerin Efendisi serisinin yazarı kimdir?",
    answers: [
      { text: "J.R.R. Tolkien", dogru: true },
      { text: "Cristopher Nolan", dogru: false },
      { text: "George R.R. Martin", dogru: false },
      { text: "J.K. Rowling", dogru: false },
    ],
  },
];

const sorularElement = document.getElementById("sorular");
const cvbButton = document.querySelector(".cvb-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Sonraki";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  sorularElement.innerHTML = questionNo + ". " + currentQuestion.question;

  cvbButton.innerHTML = ""; // Önceki cevapları temizle

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer));
    cvbButton.appendChild(button);
  });
}

function selectAnswer(answer) {
  if (answer.dogru) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  sorularElement.innerHTML = `Skorunuz: ${score} / ${questions.length}`;
  cvbButton.innerHTML = "";
  nextButton.innerHTML = "Yeniden Başla";
  nextButton.addEventListener("click", startQuiz);
}

startQuiz();
