// const toTopButton = document.getElementById("to-top-btn");
const offset = 900;
const offsetHeader = 90;
const header = document.getElementById('main-header')

function scroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > offsetHeader && !header.classList.contains("scroll")) {
   header.classList.add("scroll");
  } else if (scrollTop < offsetHeader && header.classList.contains("scroll")) {
   header.classList.remove("scroll");
  }
}
scroll();

// function toTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }

// toTopButton.addEventListener("click", toTop);
window.addEventListener("scroll", scroll);


