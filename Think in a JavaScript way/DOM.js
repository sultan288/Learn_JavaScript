// Get Element By ID--------------------------
// const headerElement = document.getElementById('header');
// console.log(headerElement.textContent);
// console.log(headerElement.innerText);
// console.log(headerElement.innerHTML);

// console.dir(headerElement);
// headerElement.style.background = 'red';
// headerElement.style.borderBottom = '3px solid green'

//getElementsByClassName('header')[0];----------
// let itemUL = document.getElementById('items')
// let items = itemUL.getElementsByClassName('item');
// for(let i = 0; i < items.length; i++){
//     items[i].style.color = 'red';
// }

//GET ELEMENT BY TAGNAME---------------------------------
// let items = document.getElementsByTagName('h1');
// console.log(items);

// QUERY SELECTOR---------------------------------------------
// let header = document.querySelector('#header');
// console.log(header);

// let lastItem = document.querySelector('.ulstyle:last-child');
// lastItem.style.color = 'red';

// const grandparent = document.querySelector('.items');
// // const parent = document.querySelector('#ulParent');
// const parent = grandparent.children;
// const children = parent[1].children;
// console.log(children);

//grandparent to children
// const grandparent = document.querySelector('.items');
// const children = grandparent.querySelectorAll('.ulstyle');
// console.log(children);

// children to parent
// const children = document.querySelector('.ulstyle');
// const parent = children.parentElement;
// console.log(parent);

//to go to children to grandparent
// const children = document.querySelector('.ulstyle');
// const grandparent = children.closest('.items');
// console.log(grandparent);

// sibling or beside element
// const childrenOne = document.querySelector('.ulstyle');
// const childrenTwo = childrenOne.nextElementSibling;
// childrenTwo.style.color = 'blue';

// const children = document.querySelector('.ulstyle');
// const childrenTwo = children.nextElementSibling;
// console.log(childrenTwo);
// childrenTwo.style.color = 'red'
// const childrenOne = childrenTwo.previousElementSibling;
// childrenOne.style.color = 'blue';

// MANIPULATE THE  DOM
//========================================
// const divElement = document.createElement('div');
// divElement.className = 'red';
// divElement.setAttribute('id', 'red');
// divElement.setAttribute('title', 'Red Div');

// const container = document.querySelector('.items');
// const h2Element = container.querySelector('h2');
// container.insertBefore(divElement, h2Element);

// const container = document.querySelector('.items');
// //container.appendChild(divElement);
// container.append("HEllo world");

// const container = document.querySelector('.items');
// //const a = container.appendChild(divElement);
//  const b = container.append(divElement, document.createElement('p'), 'hello world');
// console.log(b);


// EVENT LISTENER
//================================
// const headerElement = document.querySelector('#header');
// headerElement.addEventListener('mouseout', (event) => {
//     console.log(event);
// });

// const headerElement = document.querySelector('.mouse');
// headerElement.addEventListener('mouseenter', (event) => {
//     console.log(event);
// });

// const inputElement = document.querySelector('input[type="text"]');
// inputElement.addEventListener('input', (event) => {
//     console.log(event);
// });

// const formELement = document.querySelector('form');
// formELement.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(event.target);
// });

// const inputElement = document.querySelector('input[type="text"]');
// inputElement.addEventListener('keypress', (event) => {
//     console.log(event.target.value);
// })