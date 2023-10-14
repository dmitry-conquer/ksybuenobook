import { initSpoiler } from "./modules/spoilers.js";
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import { payPaperBook } from "./modules/payPaperBook.js";
import { initSliders } from "./modules/sliders.js";
import fslightbox from "fslightbox";
import AOS from "aos";

import "./modules/header.js";
import "./modules/scroll.js";
import "./modules/modals.js";
function app() {
  useDynamicAdapt("max");
  initSliders();
  initSpoiler();
  AOS.init({
    duration: 600,
    once: true,
  });
  payPaperBook();
}

document.addEventListener("DOMContentLoaded", app);
