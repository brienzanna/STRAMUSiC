const questions = [
  {
      question: "Per rinforzare il «tappeto» di suoni di <i>Shine On You Crazy Diamond </i> part 1 - 5, i membri dei Pink Floyd facevano scorrere le dita sul bordo di bicchieri pieni di...",
      answers: [
          { text: "acqua", correct: false },
          { text: "gin", correct: false },
          { text: "vino", correct: true },
          { text: "oli essenziali diluiti in acqua", correct: false },
      ]
  },
  {
      question: "Che origini ha la balalaika?",
      answers: [
          { text: "Lettoni", correct: false },
          { text: "Sudanesi", correct: false },
          { text: "Russe", correct: true },
          { text: "Finlandesi", correct: false },
      ]
  },
  {
      question: "Chi inventò la Glass harmonica?",
      answers: [
          { text: "Benjamin Franklin", correct: true },
          { text: "Wolfgang Amadeus Mozart", correct: false },
          { text: "George Ravenscroft (un rinomato vetraio del XVII secolo)", correct: false },
          { text: "Ludwig van Beethoven", correct: false },
      ]
  },
  {
      question: "L’ocarina viene così chiamata perché...",
      answers: [
          { text: "la sua forma ovoidale allungata ricorda il profilo di un'oca privata della testa", correct: true },
          { text: "il suono che produce ricorda il verso di un’oca", correct: false },
          { text: "era un’esclamazione ricorrente di chi la vedeva piccola e graziosa", correct: false },
          { text: "quando la carena, ossia la chiglia della nave, veniva danneggiata o bucata, produceva un suono simile a quello prodotto dallo strumento", correct: false },
      ]
  },
  {
      question: "Dove si trova la Symphonic House, la casa che risuona?",
       answers: [
          { text: "Ontario", correct: false },
          { text: "Virginia", correct: false },
          { text: "Michigan", correct: true },
          { text: "Minnesota", correct: false },
      ]
  },
  {
      question: "Quale attrice era anche una famosa “Lady Saw” (suonatrice di sega)? ",
      answers: [
          { text: "Emma Stone", correct: false },
          { text: "Marlene Dietrich", correct: true },
          { text: "Doris Day", correct: false },
          { text: "Liza Minelli", correct: false },
      ]
  },
  {
      question: "Tra le varie disposizioni che possono prendere le lamelle metalliche di un glockenspiel vi è:",
      answers: [
          { text: "quella in verticale per l’uso nelle bande militari", correct: true },
          { text: "quella invertita per i mancini", correct: false },
          { text: "quella rovesciata per ottenere un suono più “aspro”", correct: false },
          { text: "quella che segue il sistema microtonale invece che quello tradizionale in ottave", correct: false },
      ]
  },
  {
      question: "Quale dei seguenti strumenti è stato impiegato per suonare l’intro del brano <i> No Surprises </i> dei Radiohead? ",
      answers: [
          { text: "Salterio", correct: false },
          { text: "Chitarra elettrica", correct: false },
          { text: "Pianoforte elettrico", correct: false },
          { text: "Glockenspiel", correct: true },
      ]
  },
  {
      question: "Il suono della sega musicale è prodotto...",
      answers: [
          { text: "dall’attrito tra l’arco e i denti della sega (ogni dente corrisponde a una nota)", correct: false },
          { text: "dal piegamento della sega stessa", correct: false },
          { text: "dall’attrito tra l’arco e la parte smussata della sega", correct:  true},
          { text: "dalla modulazione del flusso d'aria attraverso una fessura creata nella lama", correct: false },
      ]
  },
  {
      question: "Qual è uno dei nomi alternativi dello zeusaphone?",
      answers: [
          { text: "Thunderphone ", correct: false },
          { text: "Thoramin ", correct: true },
          { text: "Galvarin", correct: false },
          { text: "Teslaphone", correct: false },
      ]
  }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next";
showQuestion();
}

function showQuestion() {
resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
  const button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerButtons.appendChild(button);
  if (answer.correct) {
    button.dataset.correct = answer.correct;
  }
  button.addEventListener("click", () => selectAnswer(button, answer.correct));
});

nextButton.style.display = "none";
}

function resetState() {
while (answerButtons.firstChild) {
  answerButtons.removeChild(answerButtons.firstChild);
}
}

function selectAnswer(selectedButton, isCorrect) {
const buttons = answerButtons.querySelectorAll(".btn");
buttons.forEach(button => {
  button.disabled = true;
  if (button === selectedButton) {
    if (isCorrect) {
      button.classList.add("correct");
      score++;
    } else {
      button.classList.add("incorrect");
      const correctButton = answerButtons.querySelector("[data-correct='true']");
      correctButton.classList.add("show-correct");
    }
  }
});

nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
  showQuestion();
} else {
  questionElement.innerHTML = "Quiz completato!";
  answerButtons.innerHTML = "Il tuo punteggio finale è: " + score + " su " + questions.length;
  nextButton.style.display = "none";
}
});

startQuiz();

