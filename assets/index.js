const signinBtn = document.querySelector('.signinbtn');
const signupBtn = document.querySelector('.signupbtn');
const formBox = document.querySelector('.form-box');
const body = document.body;

if (signinBtn && signupBtn && formBox && body) {
  signupBtn.addEventListener('click', function() {
    formBox.classList.add('active');
    body.classList.add('active');
  });

  signinBtn.addEventListener('click', function() {
    formBox.classList.remove('active');
    body.classList.remove('active');
  });
}
