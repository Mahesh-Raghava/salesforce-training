// security-test.js - A file full of vulnerabilities for CodeSenseiAI to find

// Issue 1: Hardcoded secret
const API_KEY = "sk-abc123xyz789";
const DB_PASSWORD = "admin123";

// Issue 2: SQL Injection vulnerability
function getUserById(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.query(query);
}

// Issue 3: Sensitive data logging
function loginUser(username, password) {
  console.log("User login attempt: " + username);
  console.log("Password entered: " + password);
  
  if (username === "admin" && password === "admin123") {
    return true;
  }
  return false;
}

// Issue 4: Dangerous eval() usage
function calculateExpression(expression) {
  return eval(expression);
}

// Issue 5: Division by zero - returns string instead of throwing error
function divideNumbers(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// Issue 6: Missing error handling
async function fetchUserData(userId) {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  const data = await response.json();
  return data;
}

// Issue 7: No newline at end of file
console.log("App started");
