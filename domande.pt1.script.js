const questions = [
    {
        question: "Quale dei seguenti strumenti può essere suonato senza dover essere toccato?",
        answers: [
            { text: "Glass harmonica", correct: false },
            { text: "Theremin", correct: true },
            { text: "Ocarina", correct: false },
            { text: "Sintetizzatore", correct: false },
        ],
        infoId: "theremin"

    },
    {
        question: "Chi ebbe il merito di riportare in auge la sega musicale un centinaio di anni fa?",
        answers: [
            { text: "Preti privi di strumenti musicali ma muniti di seghe per costruire le proprie chiese", correct: true },
            { text: "La regina Victoria d'Inghilterra, appassionata musicista, che scoprì la sega musicale durante una visita a una fiera e la pubblicizzò", correct: false },
            { text: "Un famoso gruppo di musicisti circensi, noti come <i> The Harmonic Saw Troupe </i>, che si esibivano in spettacoli di acrobazie musicali con la sega come strumento principale", correct: false },
            { text: "Un gruppo di missionari provenienti dal Tibet, che ha diffuso l'uso della sega musicale nel resto del mondo, combinando la loro tradizione musicale con la tecnica occidentale della sega musicale", correct: false },
        ],
        infoId: "sega.musicale"
    },
    {
        question: "Quanti strumenti contiene ed emula la Marble machine? ",
        answers: [
            { text: "Quattro", correct: false },
            { text: "Cinque", correct: false },
            { text: "Sei", correct: true },
            { text: "Otto", correct: false },
        ]
    },
    {
        question: "Quale di questi strumenti è stato utilizzato in modo specifico come dispositivo di esplorazione sensoriale per individui ipovedenti?",
        answers: [
            { text: "Marimba", correct: false },
            { text: "Theremin", correct: false },
            { text: "Marble Machine", correct: false },
            { text: "Idraulofono", correct: true },
        ]
    },
    {
        question: "Il nome di ocarina deriva dal dialetto",
         answers: [
            { text: "milanese", correct: false },
            { text: "fiorentino", correct: false },
            { text: "siciliano", correct: false },
            { text: "bolognese", correct: true },
        ]
    },
    {
        question: "In quale dei seguenti film la colonna sonora è stata realizzata anche grazie alla sega musicale? ",
        answers: [
            { text: "Apocalypse Now (1979", correct: false },
            { text: "Qualcuno volò sul nido del cuculo (1975)", correct: true },
            { text: "L'uomo senza sonno (2004)", correct: false },
            { text: "Amadeus (1984)", correct: false },
        ],


    },
    {
        question: "Quante corde ha una Chitarra Pikasso? ",
        answers: [
            { text: "37", correct: false },
            { text: "54", correct: false },
            { text: "47", correct: false },
            { text: "42", correct: true },
        ]
    },
    
    {
        question: "Le controversie a cui fu soggetta la Glass harmonica vertevano sul fatto che...",
        answers: [
            { text: "il mercurio contenuto nelle vernici che coloravano le coppe dei bemolle e dei diesis fosse dannoso per la salute", correct: false },
            { text: "la Glass harmonica potesse essere utilizzata come strumento di controllo mentale per via del suono penetrante", correct: false },
            { text: "il piombo contenuto delle miscele di vetro dell’epoca fosse dannoso per la salute dell’esecutore", correct: true },
            { text: "l’oggetto fosse troppo costoso e ingombrante", correct: false },
        ]
    },
    {
        question: "Come si presenta l’organo marino situato a Zara, in Croazia, a chi guarda?",
        answers: [
            { text: "Si presenta come un’enorme scalinata al di sotto della quale sono posizionate le canne dell’organo.", correct: true },
            { text: "Si presenta come un enorme flauto di pan che si estende per tutto l’angolo nord-occidentale della banchina che circonda il centro storico. ", correct: false },
            { text: "È un organo di chiesa sostenuto da due statue di sirene e una di Poseidone, realizzate dall’architetto e scultore Nikola Bašić.", correct:  false},
            { text: "È un complesso di canne intrecciate a forma di onda, la cui estremità è immersa in mare.", correct: false },
        ]
    },
    {
        question: "Lo hang è uno strumento...",
        answers: [
            { text: "aerofono", correct: false },
            { text: "membranofono", correct: false },
            { text: "elettrofono", correct: false },
            { text: "idiofono", correct: true },
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const moreInfoElement = document.getElementById('more-info');
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

