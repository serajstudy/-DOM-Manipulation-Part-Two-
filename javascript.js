<!-- // // Part 1 -------------------------------------------------|
// // 1.) ✅ Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");


// // 2.) ✅ Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// // // Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = `var(--main-bg)`;

// // 3.) Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
// let title = document.createElement('h1');
// title.textContent = `DOM Manipulation`;
// mainEL.appendChild(title);

// // 4.) Add a class of flex-ctr to mainEl.
// // //  Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr");


// // Part 2 -------------------------------------------------|
// // 1.) ✅ Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById('top-menu');

// // 2.) ✅ Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;

// // 3.) ✅ Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

// // 4.) Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");


// // Part 3 -------------------------------------------------|


// //  Menu data structure


var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// // Iterate over the entire menuLinks array and for each "link" object:
for(let link of menuLinks){
    //  // Create an <a> element.
    let menuButton = document.createElement('a');

    //  // On the new element, add an href attribute with its value set to the href property of the "link" object.
    menuButton.setAttribute("href", link.href);
    
    //  // Set the new element's content to the value of the text property of the "link" object.
    menuButton.textContent = link.text;
    // console.log(menuButton);

    //  // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(menuButton);
}


// // Part 3: Creating the Submenu


// // Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let  subMenuEl = document.getElementById('sub-menu');

// // 2.) Set the height subMenuEl element to be "100%".
subMenuEl.style.height = `100%`;

// // 3.) Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;

// // 4.)Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

//   // // and Set the CSS position property of subMenuEl to the value of absolute.

  subMenuEl.style.position = `absolute`;

//   // // Set the CSS top property of subMenuEl to the value of 0.
  subMenuEl.style.top ='0px';




//   // Part 4: Adding Menu Interaction

//   // Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

  let topMenuLinks = topMenuEl.querySelectorAll('a');


//   // // Attach a delegated 'click' event listener to topMenuEl.

//   // The first line of code of the event listener function should call the event object's preventDefault() method.
// // The second line of code of the function should immediately return if the element clicked was not an <a> element.
// // Log the content of the <a> to verify the handler is working.

// // // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
// // The event listener should remove the active class from each other <a> element in topmenulinks  - whether the active class exists or not.
// // Hint: Removing a non-existent class from an element does not cause an error!

  topMenuEl.addEventListener('click', e => {
    e.preventDefault();

    if(e.target.tagName !== 'A') return;
    console.log (e.target.textContent);
    e.target.classList.toggle('active');

    e.target.classList.toggle('active');
    topMenuLinks.forEach(link=> {if (link !== e.target)link.classList.remove('active')} )


}) 



