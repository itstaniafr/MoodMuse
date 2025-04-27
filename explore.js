const exploreData = {
    Happy: [
      {
        title: "The Pursuit of Happyness",
        description: "Heartwarming story of hope and determination.",
        image: "happy.jpg"
      },
      {
        title: "Little Miss Sunshine",
        description: "A feel-good movie about family and dreams.",
        image: "little-miss-sunshine.jpg"
      }
    ],
    Sad: [
      {
        title: "The Perks of Being a Wallflower",
        description: "Coming-of-age drama about finding your place.",
        image: "sad.jpg"
      },
      {
        title: "The Fault in Our Stars",
        description: "A moving story about love and loss.",
        image: "fault-in-our-stars.jpg"
      }
    ],
    Adventurous: [
      {
        title: "The Hobbit",
        description: "An epic quest through Middle Earth.",
        image: "adventure.jpg"
      },
      {
        title: "Jumanji",
        description: "Adventure and excitement in a magical board game.",
        image: "jumanji.jpg"
      }
    ],
    Relaxed: [
      {
        title: "Eat Pray Love",
        description: "Journey of self-discovery across the world.",
        image: "relaxed.jpg"
      },
      {
        title: "Call Me by Your Name",
        description: "A gentle, beautiful story set in the Italian summer.",
        image: "call-me-by-your-name.jpg"
      }
    ]
  };
  
  function loadExploreContent() {
    const exploreSection = document.querySelector('.explore-section');
  
    for (const mood in exploreData) {
      const moodCategory = document.createElement('div');
      moodCategory.className = 'mood-category';
  
      const moodTitle = document.createElement('h2');
      moodTitle.innerText = `${mood} ${getMoodEmoji(mood)}`;
      moodCategory.appendChild(moodTitle);
  
      const cardGrid = document.createElement('div');
      cardGrid.className = 'card-grid';
  
      exploreData[mood].forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
  
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
  
        const title = document.createElement('h3');
        title.innerText = item.title;
  
        const desc = document.createElement('p');
        desc.innerText = item.description;
  
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(desc);
  
        cardGrid.appendChild(card);
      });
  
      moodCategory.appendChild(cardGrid);
      exploreSection.appendChild(moodCategory);
    }
  }
  
  function getMoodEmoji(mood) {
    switch(mood) {
      case 'Happy': return "🌞";
      case 'Sad': return "😢";
      case 'Adventurous': return "🧭";
      case 'Relaxed': return "🧘‍♀️";
      default: return "🎭";
    }
  }
  
  // Call the function on page load
  window.onload = loadExploreContent;
  