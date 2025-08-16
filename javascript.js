



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


/////////////* Part 1 : Getting Started ////////////////////

var thisStyle = 'var(--main-bg)'

const mainEl = document.querySelector("main")
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'

//console.log(mainEl.textContent)
mainEl.style.backgroundColor = thisStyle

mainEl.classList.add("flex-ctr")


/////////////** Part 2 : Creating a Menu Bar ////////////////////
var thisStyle2 = 'var(--top-menu-bg)'
const topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = `100%`
topMenuEl.style.backgroundColor = thisStyle2

/////////////*** Part 3: Adding Menu Buttons ////////////////////

let a = "";
menuLinks.forEach(link => {
    a = document.createElement("a")
    a.setAttribute("href", link.href)
    a.textContent = link.text
    topMenuEl.append(a)
});


/////////////////////////////////////////////////// DOME Manipulation part 2 /////////////////////////////////////////////

/////////////////*** Part 3 : Crating the Submenu/////////////////

const subMenuEl = document.getElementById("sub-menu")
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
subMenuEl.classList.add("flex-around")
subMenuEl.style.position = "absolute";
// subMenuEl.style.top = "0px"
// subMenuEl.style.display = "none";

/////////////////**** Part 4 : Crating the Submenu/////////////////

const topMenuLinks = topMenuEl.querySelectorAll("a");

// topMenuEl.addEventListener('click', e=>{
//     e.preventDefault();
//     if(e.target.tagName !== "A") return;
//     console.log(e.target.textContent)

//     topMenuLinks.forEach(link => {
//         if (link !== e.target) link.classList.remove("active");
//     });

//     e.target.classList.toggle("active"); //Bascule la classe active sur le <a> cliqué
    
// })

/////////////////***** Part 5: Adding Submenu Interaction/////////////
 function buildSubmenu(subLinks) {
    // Clear existing submenu
    subMenuEl.innerHTML = "";

    // Loop through each sublink object
    subLinks.forEach(link => {
        // Create <a> element
        const a = document.createElement("a");
        
        // Set href
        a.setAttribute("href", link.href);
        
        // Set visible text
        a.textContent = link.text;
        
        // Append to submenu container
        subMenuEl.appendChild(a);
    });

    console.log(subLinks);
}

////////////////////// Adding the event listener
topMenuEl.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.tagName !== "A") return;

//   // Remove active from all, add to clicked
//   topMenuLinks.forEach(link => link.classList.remove("active"));
//   e.target.classList.add("active");

//   // Find link object
//   const linkObj = menuLinks.find(link => link.text === e.target.textContent);

//   if (linkObj && linkObj.subLinks) {
//     buildSubmenu(linkObj.subLinks);
//     subMenuEl.style.display = "flex"; // show submenu
//   } else {
//     subMenuEl.style.display = "none"; // hide submenu
//   }
console.log("Submenu clicked:", e.target.textContent);

  // hide the submenu
  subMenuEl.style.top = "0";

  // remove "active" class from all top menu links
  topMenuLinks.forEach(link => link.classList.remove("active"));

  // update <main> contents
  if (e.target.textContent.toLowerCase() === "about") {
    mainEl.innerHTML = "<h1>About</h1>";
  } else {
    mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;
  }

  
});

