const questions = [
    {
        question: "Con quale di questi strumenti è eseguita la melodia dell'audio?",
        audio: "audio/Musical saw scie musicale gounod ave maria gregoi.m4a",
        answers: [
            { text: "Otomatone", correct: false },
            { text: "Theremin", correct: false },
            { text: "Sega musicale", correct: true },
            { text: "Stilofono", correct: false },
        ]
    },
    {
        question: "Con quale di questi strumenti è eseguita la melodia dell'audio?",
        audio: "audio/Glass harmonica tchaikovsky sugar plum fairy.m4a",
        answers: [
            { text: "Glass Harmonica", correct: true },
            { text: "Idraulofono", correct: false },
            { text: "Organo marino", correct: false },
            { text: "Telharmonium", correct: false },
        ]
    },
    {
        question: "Con quale di questi strumenti è eseguita la melodia dell'audio?",
        audio: "audio/Salterio suite n.1.m4a",
        answers: [
            { text: "Hang", correct: false },
            { text: "Salterio", correct: true },
            { text: "Arpa", correct: false },
            { text: "Gran Stalacpipe Organ", correct: false },
        ]
    },
    {
        question: "Con quale di questi strumenti è eseguita la melodia dell'audio?",
        audio: "audio/Clavicembalo scarlatti sonata in G Major, Kk.13.m4a",
        answers: [
            { text: "Clavicembalo", correct: true },
            { text: "Salterio", correct: false },
            { text: "Zeusaphone", correct: false },
            { text: "Pianoforte", correct: false },
        ]
    },
    {
        question: "Con quale di questi strumenti è eseguita la melodia dell'audio?",
        audio: "audio/Gran stalacpipe organ In the cave pepe deluxé.m4a",
        answers: [
            { text: "Symphonic House", correct: false },
            { text: "Glass harmonica", correct: false },
            { text: "Gran Stalacpipe Organ", correct: true },
            { text: "Idraulofono", correct: true },
        ]
    },
    {
        question: "Con quale di questi strumenti è eseguita la melodia dell'audio?",
        audio: "audio/Flauto piccolo simil ocarina concerto in c major.m4a",
        answers: [
            { text: "Ocarina", correct: false },
            { text: "Otomatone", correct: false },
            { text: "Flautino", correct: true },
            { text: "Violino", correct: false },
        ]
    },
    {
        question: "Con quale di questi strumenti è eseguita la melodia dell'audio?",
        audio: "audio/Zeusaphone vivaldi estate, op 8 n2 in G minor.m4a",
        answers: [
            { text: "Chitarra elettrica", correct: false },
            { text: "Sintetizzatore", correct: false },
            { text: "Zeusaphone", correct: true },
            { text: "Clavicembalo", correct: false },
        ]
    },
    {
        question: "Con quale di questi strumenti è eseguita la melodia dell'audio?",
        audio: "audio/Hang massive -once again 2011 per riconoscimento.m4a",
        answers: [
            { text: "Glockenspiel", correct: false },
            { text: "Hang", correct: true },
            { text: "Marimba", correct: false },
            { text: "Chitarra Pikasso", correct: false },
        ]
    },
    {
        question: "Con quale di questi strumenti è eseguita la melodia dell'audio?",
        audio: "audio/Theremin, The Swan saint saense, clara rockmore.m4a",
        answers: [
            { text: "Violino", correct: false },
            { text: "Voce soprano", correct: false },
            { text: "Otomatone", correct: true },
            { text: "Theremin", correct: true },
        ]
    },
    {
        question: "Con qual* di questi strumenti è eseguita la melodia dell'audio?",
        audio: "audio/Stilofono, thinderstruck acdc.m4a",
        answers: [
            { text: "Glockenspiel e stilofono", correct: false },
            { text: "Stilofono e grancassa", correct: false },
            { text: "Stilofono", correct: true },
            { text: "Glockenspiel e grancassa", correct: false },
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

  const audioContainer = document.getElementById("audio-container");
  const questionAudio = document.getElementById("question-audio");
  questionAudio.src = currentQuestion.audio;
  audioContainer.style.display = "block";
  

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

       // Aggiungi il link alla pagina "Riconosci lo strumento"
  var linkElement = document.createElement("a");
  linkElement.href = "riconosci lo strumento.html";
  linkElement.textContent = "Rifare il quiz";
  answerButtons.appendChild(linkElement);
}
});
startQuiz();

