var itemList=document.querySelector('#items');
//parent node

// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentNode.parentNode.parent)

//parent element
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentElement.parentElement) 

//childNodes
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor='yellow'
// console.log(itemList.firstChild)
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1'

// console.log(itemList.lastChild)
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 1'

//console.log(itemList.previousSibling)

// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color='green';

//create element
//create a div
var newDiv=document.createElement('div')
//add class 
newDiv.className='hello'
//add id 
newDiv.id='hello1'
//add attribute
newDiv.setAttribute('title','Hello Div')
//create text node
var newDivText=document.createTextNode('Hello World')
//add text to div
newDiv.appendChild(newDivText)
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1')
console.log(newDiv)
newDiv.style.fontSize='30px'
container.insertBefore(newDiv,h1);
