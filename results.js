const moodData = {
    Happy: {
      title: "You're Feeling Happy! 🌞",
      description: "We recommend uplifting novels and feel-good movies like 'The Pursuit of Happyness'!",
      image: "happy.jpg"
    },
    Sad: {
      title: "You're Feeling Sad 😢",
      description: "We recommend comforting stories and soulful movies like 'The Perks of Being a Wallflower'.",
      image: "sad.jpg"
    },
    Adventurous: {
      title: "You're Feeling Adventurous! 🧭",
      description: "We recommend thrilling books and epic movies like 'The Hobbit'.",
      image: "adventure.jpg"
    },
    Relaxed: {
      title: "You're Feeling Relaxed 🧘‍♀️",
      description: "We recommend soothing tales and calm movies like 'Eat Pray Love'.",
      image: "relaxed.jpg"
    }
  };
  
  function displayResult() {
    const selectedMood = localStorage.getItem('selectedMood');
    const moodInfo = moodData[selectedMood];
  
    const moodTitle = document.getElementById('mood-title');
    const moodDesc = document.getElementById('mood-description');
    const moodImage = document.getElementById('mood-image');
    const resultCard = document.querySelector('.result-card');
  
    if (moodInfo) {
      moodTitle.innerText = moodInfo.title;
      moodDesc.innerText = moodInfo.description;
      moodImage.src = moodInfo.image;
    } else {
      moodTitle.innerText = "Oops!";
      moodDesc.innerText = "We couldn't detect your mood. Please try again.";
      moodImage.src = "default.jpg";
    }
  
    // Fancy Fade-in Animation
    resultCard.style.opacity = 0;
    setTimeout(() => {
      resultCard.style.transition = "opacity 1s ease";
      resultCard.style.opacity = 1;
    }, 200);
  }
  
  function retakeQuiz() {
    window.location.href = "quiz.html";
  }
  
  // Run when page loads
  displayResult();
  