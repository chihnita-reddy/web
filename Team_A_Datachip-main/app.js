const inputs = document.querySelectorAll(".input");
const scriptURL = 'https://script.google.com/macros/s/AKfycbzg3tllLRp3zCjg2CCgYZ7x0qk-pLR-WUjWEaY0c3j02e6upzZGJNROiOvfB13lPwRM/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        msg.innerHTML = 'Message sent successfully';
        setTimeout(function() {
          msg.innerHTML = '';
        }, 5000);
        form.reset();
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      msg.innerHTML = 'Oops! Something went wrong. Please try again.';
      setTimeout(function() {
        msg.innerHTML = '';
      }, 5000);
    });
});