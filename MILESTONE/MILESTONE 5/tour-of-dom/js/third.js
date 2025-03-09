console.log('third js')

// get the parent
const thirdList = document.getElementById('third-list');
console.log(thirdList)
// create the child
const li = document.createElement('li');
li.innerText = 'Brand new list item'

thirdList.appendChild(li)