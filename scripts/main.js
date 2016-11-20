var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/where-is-my-money.gif'){
		myImage.setAttribute('src', 'images/Where-is-my-money-Where-is-it.jpg');
	} else {
		myImage.setAttribute('src', 'images/where-is-my-money.gif');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Test Site for ' + myName;
}

if (!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Test Site for ' + storedName;
}

myButton.onclick = function(){
setUserName();
}

/*
var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World!";

document.querySelector('img').onclick = function() {
	alert("Where is my money!");
}
*/