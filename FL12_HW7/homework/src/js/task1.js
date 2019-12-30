const MIN_EMAIL_LENGTH = 5;
const MIN_NEW_PASS_LENGTH = 6;
const email = prompt('Type your email:');

if (
  email === '' ||
  email === null) {
  alert('Canceled');
} else if (email.length < MIN_EMAIL_LENGTH) {
  alert('I don’t know any emails having name length less than 5 symbols');
} else if (
  email === 'admin@gmail.com' ||
  email === 'user@gmail.com') {
  const password = prompt('Type the password:');
  if (
    password === '' ||
    password === null) {
    alert('Canceled');
  } else if (
    email === 'user@gmail.com' && password !== 'UserPass' ||
    email === 'admin@gmail.com' && password !== 'AdminPass') {
    alert('Wrong password');
  } else {
    const changePassword = confirm('Do you want to change your password?');
    if (changePassword === false) {
      alert('You have failed the change.');
    } else {
      const confirmPassword = prompt('Type your old password:');
      if (
        confirmPassword === '' ||
        changePassword === null) {
        alert('Canceled');
      } else if (confirmPassword !== password) {
        alert('Wrong password');
      } else {
        const newPassword = prompt('Type your new password:');
        if (
          newPassword === '' ||
          newPassword === null) {
          alert('Canceled');
        } else if (newPassword.length < MIN_NEW_PASS_LENGTH) {
          alert('It’s too short password. Sorry.');
        } else {
          const confirmNewPassword = prompt('Enter your password again:');
          if (
            confirmNewPassword === '' ||
            confirmNewPassword === null) {
            alert('Canceled');
          } else if (confirmNewPassword !== newPassword) {
            alert('You wrote the wrong password');
          } else {
            alert('You have successfully changed your password.');
          }
        }
      }
    }
  }
} else {
  alert('I don’t know you');
}
