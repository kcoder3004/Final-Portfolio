// Password logic
document.getElementById("submit-password").addEventListener("click", function () {
    const input = document.getElementById("password-input").value;
    if (input.toLowerCase() === "portfolio") {
      document.getElementById("password-screen").style.display = "none";
      document.getElementById("welcome-screen").style.display = "block";
      setTimeout(() => {
        document.getElementById("welcome-screen").style.display = "none";
      }, 2000);
    } else {
      document.getElementById("error-message").style.display = "block";
    }
  });
  
  
  // Matrix Animation
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas.getContext("2d");
  
  
  function setupMatrixCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
  
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);
  
  
    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";
  
  
      for (let i = 0; i < drops.length; i++) {
        const char = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
  
  
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
  
  
    setInterval(draw, 33);
  }
  
  
  window.addEventListener("resize", setupMatrixCanvas);
  setupMatrixCanvas();
