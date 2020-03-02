
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
console.log(myHeading);

function setUserName() {
    let myName = prompt('Please enter your name. ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }