/* General Page Styles */
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #eef2fb;
  margin: 0;
  padding: 20px;
  text-align: center;
  color: #333;
}

h1, h2, h3 {
  color: #1f3c88;
  margin-bottom: 20px;
}

p, li {
  font-size: 18px;
  line-height: 1.5;
}

ul {
  text-align: left;
  display: inline-block;
  margin-bottom: 30px;
}

/* Buttons */
button {
  display: inline-block;
  margin: 10px 5px;
  padding: 12px 22px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  background-color: #4c8bf5;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s, transform 0.1s;
}

button:hover {
  background-color: #3467c1;
  transform: translateY(-2px);
}

button:active {
  transform: translateY(1px);
}

/* Problems and Inputs */
.problem {
  margin: 12px 0;
  font-size: 18px;
}

input[type="number"] {
  width: 120px;
  padding: 6px;
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 5px;
  text-align: center;
}

#score {
  font-size: 20px;
  font-weight: bold;
  color: #1f3c88;
  margin-top: 15px;
}

/* Navigation Buttons Container */
.nav-buttons {
  margin: 25px 0;
}
