function generateCaptcha() {
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return `${num1} ${operator} ${num2}`;
  }
  
  
  document.addEventListener("DOMContentLoaded", function() {
    generateCaptcha();
  
    document.getElementById("check-btn").addEventListener("click", function() {
      const userInput = document.getElementById("user-input").value;
      const captchaText = document.getElementById("captcha-text").innerText;
  
      if (userInput === captchaText) {
        alert("CAPTCHA is correct!");
        generateCaptcha();
      } else {
        alert("CAPTCHA is incorrect. Please try again.");
        generateCaptcha();
      }
    });
  });
  
  function generateCaptcha() {
    const captchaText = generateRandomText(5); // Change the length as needed
    document.getElementById("captcha-text").innerText = captchaText;
  }
  
  function generateRandomText(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
