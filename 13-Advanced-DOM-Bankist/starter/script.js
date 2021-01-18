'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('current scroll(x/y)', window.pageXOffset, pageYOffset);
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

//Events
