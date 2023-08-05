function displayInputs(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const aboutYourself = document.getElementById('about-yourself').value;
    const achievements = document.getElementById('achievements').value;
    const grade = document.getElementById('grade').value;
    const notifications = document.querySelector('input[name="notifications"]:checked').value;

    const displayMessage = `
      Name: ${name}
      Email: ${email}
      Date of Birth: ${dob}
      About Yourself: ${aboutYourself}
      Achievements: ${achievements}
      Grade: ${grade}
      Receive Notifications: ${notifications}
    `;

    alert(displayMessage);
  }
