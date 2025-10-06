// THEME TOGGLE
    const toggleButton = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");

    if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("light-mode");
      icon.classList.replace("fa-moon", "fa-sun");
    }

    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      if (document.body.classList.contains("light-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "light");
      } else {
        icon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "dark");
      }
    });

    // AUTH LOGIC
    let users = [];

    function switchTab(tab) {
      const tabs = document.querySelectorAll(".tab");
      tabs.forEach((t) => t.classList.remove("active"));
      document
        .querySelector(`.tab[onclick="switchTab('${tab}')"]`)
        .classList.add("active");
      document.getElementById("signUpForm").style.display =
        tab === "signUp" ? "block" : "none";
      document.getElementById("signInForm").style.display =
        tab === "signIn" ? "block" : "none";
    }

    function validateEmail(email) {
      const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      return re.test(email);
    }

    function signUp() {
      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirmPassword").value.trim();

      let valid = true;
      document.querySelectorAll(".error").forEach((e) => (e.style.display = "none"));

      if (!fullName) {
        document.getElementById("fullNameError").style.display = "block";
        valid = false;
      }
      if (!validateEmail(email)) {
        document.getElementById("emailError").style.display = "block";
        valid = false;
      }
      if (password.length < 6) {
        document.getElementById("passwordError").style.display = "block";
        valid = false;
      }
      if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").style.display = "block";
        valid = false;
      }

      if (valid) {
        users.push({ email, password, fullName });
        document.getElementById("signUpSuccess").style.display = "block";
        setTimeout(() => {
          document.getElementById("signUpSuccess").style.display = "none";
          switchTab("signIn");
        }, 2000);
      }
    }

    function signIn() {
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value.trim();

      document.querySelectorAll(".error").forEach((e) => (e.style.display = "none"));

      if (!validateEmail(email)) {
        document.getElementById("loginEmailError").style.display = "block";
        return;
      }

      const user = users.find((u) => u.email === email && u.password === password);
      if (user) {
        document.getElementById("signInSuccess").style.display = "block";
        setTimeout(() => {
          alert(`Welcome, ${user.fullName}!`);
          document.getElementById("signInSuccess").style.display = "none";
        }, 1500);
      } else {
        document.getElementById("loginPasswordError").style.display = "block";
      }
    }