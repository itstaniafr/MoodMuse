const quizData = [
  {
    question: "How are you feeling right now?",
    options: [
      { text: "Happy", mood: "Happy" },
      { text: "Sad", mood: "Sad" },
      { text: "Adventurous", mood: "Adventurous" },
      { text: "Relaxed", mood: "Relaxed" }
    ]
  },
  {
    question: "What sounds most appealing?",
    options: [
      { text: "A heartwarming story", mood: "Happy" },
      { text: "An emotional drama", mood: "Sad" },
      { text: "A thrilling adventure", mood: "Adventurous" },
      { text: "A peaceful journey", mood: "Relaxed" }
    ]
  },
  {
    question: "Pick your ideal setting:",
    options: [
      { text: "A sunny beach", mood: "Happy" },
      { text: "An ancient forest", mood: "Adventurous" },
      { text: "A cozy rainy day", mood: "Sad" },
      { text: "A calm countryside", mood: "Relaxed" }
    ]
  }
];

let currentQuestion = 0;
let moodScores = {
  Happy: 0,
  Sad: 0,
  Adventurous: 0,
  Relaxed: 0
};

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  document.getElementById('question').innerText = currentQuiz.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  currentQuiz.options.forEach(option => {
    const btn = document.createElement('button');
    btn.innerText = option.text;
    btn.classList.add('option-btn');
    btn.onclick = () => selectOption(btn, option.mood);
    optionsDiv.appendChild(btn);
  });

  const nextBtn = document.querySelector('.next-btn');
  nextBtn.classList.remove('active');
  nextBtn.disabled = true;
}

function selectOption(button, mood) {
  // Add a point to selected mood
  moodScores[mood]++;

  // Remove selected class from all buttons
  const allOptions = document.querySelectorAll('.option-btn');
  allOptions.forEach(btn => btn.classList.remove('selected'));

  button.classList.add('selected');

  const nextBtn = document.querySelector('.next-btn');
  nextBtn.classList.add('active');
  nextBtn.disabled = false;
}

function nextQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  // Find the mood with the highest score
  let bestMood = null;
  let highestScore = -1;

  for (const mood in moodScores) {
    if (moodScores[mood] > highestScore) {
      bestMood = mood;
      highestScore = moodScores[mood];
    }
  }

  localStorage.setItem('selectedMood', bestMood);
  window.location.href = "results.html";
}

loadQuestion();
