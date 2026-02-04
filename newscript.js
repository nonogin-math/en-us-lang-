// ---------- Auto Navigation Buttons for Grades ----------
document.addEventListener("DOMContentLoaded", function() {

  const gradePages = [
    "grade1/grade1-all.html",
    "grade2/grade2-all.html",
    "grade3/grade3-all.html",
    "grade4/grade4-all.html",
    "grade5/grade5-all.html",
    "grade6/grade6-all.html",
    "grade7/grade7-all.html",
    "grade8/grade8-all.html",
    "grade9/grade9-all.html"
  ];

  // Detect if current page is a grade page
  const path = window.location.pathname;
  const currentFile = path.substring(path.lastIndexOf('/') + 1);
  const currentIndex = gradePages.findIndex(p => p.endsWith(currentFile));

  if (currentIndex !== -1) { // Only for grade pages
    const navDiv = document.createElement("div");
    navDiv.style.margin = "20px 0";
    
    // Back to Home Button
    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Back to Home";
    homeBtn.onclick = () => window.location.href = "../index.html";
    navDiv.appendChild(homeBtn);

    // Previous Grade Button
    if (currentIndex > 0) {
      const prevBtn = document.createElement("button");
      prevBtn.textContent = "Previous Grade";
      prevBtn.style.marginLeft = "10px";
      prevBtn.onclick = () => window.location.href = "../" + gradePages[currentIndex - 1];
      navDiv.appendChild(prevBtn);
    }

    // Next Grade Button
    if (currentIndex < gradePages.length - 1) {
      const nextBtn = document.createElement("button");
      nextBtn.textContent = "Next Grade";
      nextBtn.style.marginLeft = "10px";
      nextBtn.onclick = () => window.location.href = "../" + gradePages[currentIndex + 1];
      navDiv.appendChild(nextBtn);
    }

    // Insert navDiv before or after content
    const content = document.getElementById("content");
    if (content) {
      content.parentNode.insertBefore(navDiv, content);
    }
  }

});
