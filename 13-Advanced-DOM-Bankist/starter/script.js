'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const nav = document.querySelector('.nav');

///////////////////
//Modal
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////
//Btn scrolling

//Smooth scrolling to section 1, when clicking on learn more
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); //Provides information about the size of this particular DOM

  //Scrolling - Different options to Scroll

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //Latest functionality for scrolling, above two are old school
  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////
//Page Navigation.

// //Regular way - Since we have multiple .nav__link this is not a efficient way of handling it, we are creating same copy of function multiple times
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Event Delegation way - This efficient than regular one, since put the eventListener on parent and handle all the child elements with it
//1. add event listener to parent
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //2. determine what element originated the event
  // console.log(e.target);
  //Matching strategy //Ignoring the clicks which did not happen on 'nav__link' class
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////
//Tabbed component
tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab'); //wjem clicking on the numbers it usually throws the span, since the number is given in a span in this html. so to get the button selected, using the closest method.
  // console.log(clicked);

  //Guard clause, when clicking outside and returning null, avoiding the error
  if (!clicked) return;
  //bringing all the tabs down
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  //closing all the content
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  //setting the active tab
  clicked.classList.add('operations__tab--active');

  //Activate content area
  // console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////////////////
//Menu fade animation: passing argument to event hadnlers
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

//Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

/////////////////////////
// //Sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', e => {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

////////////////////////
//Sticky Navigation: Inteserction observer
// const obsCallback = (entries, observer) => {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: 0,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const stickyNav = entries => {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///////////////////////////////
//Revealing elements on scroll: Intersection observer
//Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = (entries, observer) => {
  const [entry] = entries;
  // console.log(entries);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); //Stopping that section from getting observed if it is already observed on first time
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////
//Lazy loading images: Intersection observer
const imgTargets = document.querySelectorAll('img[data-src]');

const revealImg = (entries, observe) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  //Replacing src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(revealImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(function (img) {
  imgObserver.observe(img);
});

/////////////////////////////////////////////////////////////
//LECTURE/////////////LECTURE//////////////LECTURE//////////
///////////////////////////////////////////////////////////

// // selecting
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');

// const allSection = document.querySelectorAll('.section');
// console.log(allSection);

// document.getElementById('#section--1');
// const allButton = document.getElementsByTagName('button'); // returns HTML collection
// console.log(allButton);

// console.log(document.getElementsByClassName('btn')); // returns HTML collection

// //Creating and inserting elements
// // .insertAdjacentHTML

// const message = document.createElement('div'); //create element(dom object)
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies to improve your user experience';
// message.innerHTML =
//   'We use cookies to improve your user experience.<button class = "btn btn--close-cookie">Got it!</button>';

// header.append(message);
// // header.prepend(message); //same thing can't be at two places
// // header.prepend(message.cloneNode(true)); // can make it exist in second place by cloning the message.

// // header.after(message);
// // header.before(message);

// //Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// //STYLES, ATTRIBUTES AND CLASSES
// //Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.backgroundColor); //can only access inline styles, not the ones given in css file

// console.log(getComputedStyle(message).height); //use computed style to find styles gives in css file

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// // document.documentElement.style.setProperty('--color-primary', 'Orange');

// //Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href); //absolute URL
// console.log(link.getAttribute('href')); //relative URL

// //Classes
// logo.classList.add('ja');
// logo.classList.remove('j');
// logo.classList.remove('b');
// logo.classList.contains('a');

// //Don't USE
// // logo.className='Jay'//It removes all the existing classes,so not recommended

// console.log(s1coords);
// console.log(e.target.getBoundingClientRect());
// console.log('current scroll(x/y)', window.pageXOffset, pageYOffset);
// console.log(
//   'height/width viewport',
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );

//Events
// const alertH1 = function (e) {
//   alert('addEventLister: Reading heading');
//   h1.removeEventListener('mouseenter', alertH1);
// };

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function (e) {
//   alert('addEventLister: Reading heading');
// };

//BUBBLING: EVENT PROPAGATION
//rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target, e.currentTarget);

//   //stop propagation
//   e.stopPropagation(); // used to stop bubbling
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('container', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Nav', e.target, e.currentTarget);
// });

// ///////////////
// //Dom traversing
// const h1 = document.querySelector('h1');

// //Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'Orange';

// //Going upwards
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5';
//   }
// });
