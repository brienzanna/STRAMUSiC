const questions = [
    {
        question: "In quale saga viene descritta una scena in cui si esibiscono dei suonatori di sega? ",
        answers: [
            { text: "«Il Signore degli Anelli» J.R.R. Tolkien", correct: false },
            { text: "«Le Cronache di Narnia» di C.S. Lewis", correct: false },
            { text: "«Cronache del ghiaccio e del fuoco» di George R.R. Martin (meglio conosciuta come «Game Of Thrones»", correct: false },
            { text: "«Harry Potter» di J.K. Rowling", correct: true },
        ]
    },
    {
        question: "A che periodo risale l’invenzione del salterio? ",
        answers: [
            { text: "Ai tempi di re David (circa 1000 a.C) ", correct: true },
            { text: "Ai tempi di re Dario I di Persia (circa 500 a.C) ", correct: false },
            { text: "Ai tempi di Papa Bonifacio VIII (circa 1300 d.C) ", correct: false },
            { text: "Ai tempi di re Luigi XIV (circa 1600 d.C)", correct: false },
        ]
    },
    {
        question: "Come si presenta l’organo marino situato a Zara, Croazia, a chi guarda?",
        answers: [
            { text: "È un organo di chiesa sostenuto da due statue di sirene e una di Poseidone, realizzate dall’architetto e scultore Nikola Bašić", correct: false },
            { text: "È un complesso di canne intrecciate a forma di onda, la cui estremità è immersa in mare", correct: false },
            { text: "Si presenta come un’enorme scalinata al di sotto della quale sono posizionate le canne dell’organo", correct: true },
            { text: "Si presenta come un enorme flauto di pan che si estende per tutto l’angolo nord-occidentale della banchina che circonda il centro storico", correct: false },
        ]
    },
    {
        question: "Quale dei seguenti strumenti è parte della Marble machine?",
        answers: [
            { text: "Un basso elettrico", correct: true },
            { text: "Una tastiera", correct: false },
            { text: "Un tamburello", correct: false },
            { text: "Un bongo", correct: false },
        ]
    },
    {
        question: "Quale dei seguenti gruppi musicali adottò lo stilofono?",
         answers: [
            { text: "I Giganti in « Noi non abbiamo paura della bomba (1966)»", correct: false },
            { text: "Lady Gaga in «Poker Face»I Kraftwerk nell’album «ComputerWorld» (1981); ", correct: false },
            { text: "I Queen in «Play The Game»", correct: false },
            { text: "I Kraftwerk nell’album «ComputerWorld» (1981)", correct: true },
        ]
    },
    {
        question: "La marimba ha origine in...",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: true },
            { text: "Nord America", correct: false },
            { text: "Australia", correct: false },  
        ]
    },
    {
        question: "Che forma ha l'otomatone?",
        answers: [
            { text: "Di una tartaruga col guscio rigato", correct: false },
            { text: "Di una «lanterna» con delle corde dentro", correct: false },
            { text: "Di una nota con uno «smile» sopra", correct: true },
            { text: "Di una tazza", correct: false },
        ]
    },
    {
        question: "Secondo la leggenda, come avvenne l’“estinzione” di uno dei tre prototipi di telarmonio? ",
        answers: [
            { text: "A causa di un corto circuito, la stanza in cui era situato il telharmonium prese fuoco", correct: false },
            { text: "venne sfasciato da un uomo d’affari di New York, stanco delle interferenze che creava", correct: true },
            { text: "A causa del carico di una gru, che si abbattè erroneamente sulla stanza in cui si trovava il telharmonium", correct: false },
            { text: "A causa del figlio del suo inventore, che si arrampicò sullo strumento fino a ribaltarlo e farlo andare in mille pezzi", correct: false },
        ]
    },
    {
        question: "9.	In quale di questi film compare e viene usato uno zeusaphone?",
        answers: [
            { text: "«Blade Runner» (1982)", correct: false },
            { text: "«The sorcerer's apprentice» («L’apprendista stregone», (2010)", correct: true },
            { text: "«Frankenstein » (1931)", correct: false},
            { text: "«Transcendence » (2014)", correct: false },
        ]
    },
    {
        question: "10.	Quale di questi oggetti è stato utilizzato in passato per fungere da cassa di risonanza della marimba?",
        answers: [
            { text: "Gusci d’uovo per i toni più flebili ", correct: false },
            { text: "Conchiglie marine ", correct: false},
            { text: "Cucuzza, una particolare zucchina dalla forma allungata ", correct: false },
            { text: "Zucche vuote", correct: true},
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
  
  