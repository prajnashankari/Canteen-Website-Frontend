function goToGmail() {
    const email = 'email@gmail.com';
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(mailtoLink, '_blank');
}

// function goToGmail() {
//     window.location.href = "mailto:feedback@example.com";
// } 