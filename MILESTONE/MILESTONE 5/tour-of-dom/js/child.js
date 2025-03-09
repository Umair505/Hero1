// document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode

// 1. create element and set innerText or innerHTML
const newChild = document.createElement('li');
newChild.innerText = 'New born footballer here';

// 2. find the parent where you will add the child
const playersList = document.getElementById('player-list');

// 3. append the child to the parent
playersList.appendChild(newChild);