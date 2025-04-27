// profile.js

function loadProfile() {
    const username = localStorage.getItem('username') || "Guest User";
    const lastMood = localStorage.getItem('selectedMood') || "Unknown";
    const history = JSON.parse(localStorage.getItem('moodHistory')) || [];
  
    document.getElementById('username').innerText = username;
    document.getElementById('last-mood').innerText = lastMood;
  
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
  
    if (history.length === 0) {
      historyList.innerHTML = '<li>No history yet. Take a quiz to start!</li>';
    } else {
      history.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.mood} - ${entry.date}`;
        historyList.appendChild(li);
      });
    }
  }
  
  function retakeQuiz() {
    window.location.href = 'quiz.html';
  }
  
  // Call this function when the page loads
  loadProfile();
  