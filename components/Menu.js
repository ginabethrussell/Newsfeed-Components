// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(arr){
  const div = document.createElement('div');
  div.classList.add('menu');
  const unorderedList = document.createElement('ul');
  unorderedList.classList.add('menu-list');
  arr.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listItem.classList.add('menu-choice');
    unorderedList.appendChild(listItem);
  });
  div.appendChild(unorderedList);
  console.log(div);
  const menuButton = document.querySelector('.menu-button');

  // menu slides in and out from the side using greensock animations
  menuButton.addEventListener('click', (e) => {
    if (div.classList.contains('menu--open')){
      gsap.to(div,{duration: 1, x: 0, ease:'power4' } );
    }else{
      gsap.to(div,{duration: 1, x: 350, ease:'power4' } );
    }
    div.classList.toggle('menu--open');
    e.stopPropagation();
  });

  // menu slides out if user clicks anwhere other than the menu on the document and the menu is open
  document.addEventListener('click', (e)=> {
    console.log(e);
    console.log(e.target.classList);
 
    if(div.classList.contains('menu--open')){
      console.log(e.path[0])
      if (!e.target.classList.contains('menu-choice')&& !e.target.classList.contains('menu-list') && !e.target.classList.contains('menu')){
        gsap.to(div,{duration: 1, x: 0, ease:'power4' } );
        div.classList.remove('menu--open');
      }
    }  
  })
  return div;
}

const navMenu = menuMaker(menuItems);
const header = document.querySelector('.header');
header.appendChild(navMenu);