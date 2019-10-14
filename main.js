////////// ---  FUNCTION TO STICK THE NAVBAR WHEN SCROLLED TO A CERTAIN POINT


window.onscroll = function() { navbarScroll() };
const navbar = document.getElementById("navMain");

function navbarScroll() {
  if (document.documentElement.scrollTop > 750 || window.innerWidth < 701) {
    navbar.classList.add("stickyNav")
  } else {
    navbar.classList.remove("stickyNav");
  }
}


////////// ---  FUNCTIONS TO TRIGGER THE 'ABOUT SLIDE' ANIMATION WHEN SCROLLED INTO VIEW


document.addEventListener('scroll', aboutAnimate);
var aboutElement = document.getElementById('aboutHeader');
var aboutElementHeight = aboutElement.clientHeight;

function aboutInView() {
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  var scrollPosition = scrollY + windowHeight;
  var elementPosition = aboutElement.getBoundingClientRect().top + scrollY + aboutElementHeight;
  
  if (scrollPosition > elementPosition) {
    return true;
  }
  return false;
}

function aboutAnimate() {
  if (aboutInView()) {
    aboutElement.classList.add('slideLeft');
  }
}


////////// ---  FUNCTIONS TO TRIGGER THE 'SKILL SLIDE' ANIMATION WHEN SCROLLED INTO VIEW


document.addEventListener('scroll', skillAnimate);
var skillElement = document.getElementById('skillHeader');
var skillElementHeight = skillElement.clientHeight;

function skillInView() {
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  var scrollPosition = scrollY + windowHeight;
  var elementPosition = skillElement.getBoundingClientRect().top + scrollY + skillElementHeight;
  
  if (scrollPosition > elementPosition) {
    return true;
  }
  return false;
}

function skillAnimate() {
  if (skillInView()) {
    skillElement.classList.add('slideLeft');
  }
}


////////// ---  FUNCTIONS TO TRIGGER THE 'PROJECTS SLIDE' ANIMATION WHEN SCROLLED INTO VIEW


document.addEventListener('scroll', projectsAnimate);
var projectsElement = document.getElementById('projectsHeader');
var projectsElementHeight = projectsElement.clientHeight;

function projectsInView() {
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  var scrollPosition = scrollY + windowHeight;
  var elementPosition = projectsElement.getBoundingClientRect().top + scrollY + projectsElementHeight;
  
  if (scrollPosition > elementPosition) {
    return true;
  }
  return false;
}

function projectsAnimate() {
  if (projectsInView()) {
    projectsElement.classList.add('slideLeft');
  }
}