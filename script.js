function calculateResult() {
  const answers = [
    document.querySelector('input[name="q1"]:checked'),
    document.querySelector('input[name="q2"]:checked'),
    document.querySelector('input[name="q3"]:checked')
  ];

  const resultDiv = document.getElementById("result");

  if (answers.includes(null)) {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "<p>Please answer all questions 😊</p>";
    return;
  }

  const score = {};

  answers.forEach(ans => {
    score[ans.value] = (score[ans.value] || 0) + 1;
  });

  const personality = Object.keys(score).reduce((a, b) =>
    score[a] > score[b] ? a : b
  );

  const recommendations = {
    brave: {
      anime: ["Naruto", "Attack on Titan"],
      movie: ["Avengers"],
      drama: ["Money Heist"]
    },
    loyal: {
      anime: ["Demon Slayer"],
      movie: ["Titanic"],
      drama: ["Crash Landing on You"]
    },
    wise: {
      anime: ["Death Note"],
      movie: ["Inception"],
      drama: ["Sherlock"]
    },
    chill: {
      anime: ["Spirited Away"],
      movie: ["Forrest Gump"],
      drama: ["Friends"]
    }
  };

  const rec = recommendations[personality];

  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <h3>Your Personality: ${personality.toUpperCase()}</h3>
    <p><strong>Anime:</strong> ${rec.anime.join(", ")}</p>
    <p><strong>Movie:</strong> ${rec.movie.join(", ")}</p>
    <p><strong>Drama:</strong> ${rec.drama.join(", ")}</p>
  `;
}
