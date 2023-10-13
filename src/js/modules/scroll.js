const toTopButton = document.getElementById("to-top-btn");
const toTopButtonOffset = 900;
const offsetHeader = 90;
const header = document.getElementById("main-header");

function scroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > offsetHeader && !header.classList.contains("scroll")) {
    header.classList.add("scroll");
  } else if (scrollTop < offsetHeader && header.classList.contains("scroll")) {
    header.classList.remove("scroll");
  }
  if (scrollTop > toTopButtonOffset && !toTopButton.classList.contains("is-visible")) {
    toTopButton.classList.add("is-visible");
  } else if (scrollTop < toTopButtonOffset && toTopButton.classList.contains("is-visible")) {
    toTopButton.classList.remove("is-visible");
  }
}
scroll();

window.addEventListener("scroll", scroll);
