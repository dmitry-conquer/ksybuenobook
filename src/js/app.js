import { initSpoiler } from "./modules/spoilers.js";
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import fslightbox from "fslightbox";
import AOS from "aos";
// import MicroModal from 'micromodal';

import "./modules/header.js";
import "./modules/scroll.js";
function app() {
  useDynamicAdapt("max");
  initSpoiler();
  AOS.init({
    duration: 600,
    once: true,
  });
}

document.addEventListener("DOMContentLoaded", app);
