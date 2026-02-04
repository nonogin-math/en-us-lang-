// Helper functions to generate random numbers
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate 10 random addition problems for lesson
function generateLessonAddition(count = 10, maxSum = 10) {
  const problems = [];
  for (let i = 0; i < count; i++) {
    const a = rand(0, maxSum);
    const b = rand(0, maxSum - a);
    problems.push({ q: `${a} + ${b}`, a: a + b });
  }
  return problems;
}

// Generate 10 random subtraction problems for lesson
function generateLessonSubtraction(count = 10, maxVal = 10) {
  const problems = [];
  for (let i = 0; i < count; i++) {
    const a = rand(0, maxVal);
    const b = rand(0, a); // Ensure result >= 0
    problems.push({ q: `${a} - ${b}`, a: a - b });
  }
  return problems;
}

// Generate mixed problems for lesson
function generateLessonMixed(count = 10, maxVal = 10) {
  const problems = [];
  for (let i = 0; i < count; i++) {
    if (Math.random() < 0.5) {
      problems.push(...generateLessonAddition(1, maxVal));
    } else {
      problems.push(...generateLessonSubtraction(1, maxVal));
    }
  }
  return problems;
}

// Generate 20 random problems for tests
function generateTestProblems(count = 20, maxVal = 10) {
  const problems = [];
  for (let i = 0; i < count; i++) {
    if (Math.random() < 0.5) {
      problems.push(...generateLessonAddition(1, maxVal));
    } else {
      problems.push(...generateLessonSubtraction(1, maxVal));
    }
  }
  return problems;
}

// Render problems on the page
function renderProblems(containerId, problemArray, prefix) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  problemArray.forEach((p, i) => {
    container.innerHTML += `
      <div class="problem">
        ${i + 1}. ${p.q} = <input type="number" id="${prefix}${i}">
      </div>
    `;
  });
}

// Check answers
function checkUserAnswers(problemArray, prefix, scoreId) {
  let score = 0;
  problemArray.forEach((p, i) => {
    const user = document.getElementById(`${prefix}${i}`).value;
    if (parseInt(user) === p.a) score++;
  });
  document.getElementById(scoreId).textContent =
    `Score: ${score} / ${problemArray.length}`;
}
