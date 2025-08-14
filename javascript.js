// Part 1 -------------------------------------------------|
// 1.) ✅ Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");


// 2.) ✅ Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// // Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = `var(--main-bg)`;

// 3.) Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
// let title = document.createElement('h1');
// title.textContent = `DOM Manipulation`;
// mainEL.appendChild(title);

// 4.) Add a class of flex-ctr to mainEl.
// //  Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr");


// Part 2 -------------------------------------------------|
// 1.) ✅ Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById('top-menu');

// 2.) ✅ Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;

// 3.) ✅ Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

// 4.) Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");


// Part 3 -------------------------------------------------|


//  Menu data structure
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

// Iterate over the entire menuLinks array and for each "link" object:
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




