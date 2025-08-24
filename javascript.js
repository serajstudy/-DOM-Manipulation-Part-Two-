// Part 1
let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = `var(--main-bg)`;
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl.classList.add('flex-ctr');

// Part 2
let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = `100%`;
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.classList.add('flex-around');

// Part 3
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '#', subLinks: [
    { text: 'all', href: '/catalog/all' },
    { text: 'top selling', href: '/catalog/top' },
    { text: 'search', href: '/catalog/search' },
  ]},
  { text: 'orders', href: '#', subLinks: [
    { text: 'new', href: '/orders/new' },
    { text: 'pending', href: '/orders/pending' },
    { text: 'history', href: '/orders/history' },
  ]},
  { text: 'account', href: '#', subLinks: [
    { text: 'profile', href: '/account/profile' },
    { text: 'sign out', href: '/account/signout' },
  ]},
];

// Iterate over the entire menuLinks array and for each "link" object:
for (let link of menuLinks) {
  // Create an <a> element.
  let menuButton = document.createElement('a');
  
  // On the new element, add an href attribute 
  menuButton.setAttribute("href", link.href);
  menuButton.textContent = link.text;
  topMenuEl.appendChild(menuButton);
}