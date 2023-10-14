import { initSpoiler } from "./modules/spoilers.js";
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import fslightbox from "fslightbox";
import AOS from "aos";

import "./modules/header.js";
import "./modules/scroll.js";
import "./modules/pay.js";
import "./modules/modals.js";
function app() {
  useDynamicAdapt("max");
  initSpoiler();
  AOS.init({
    duration: 600,
    once: true,
  });
}

document.addEventListener("DOMContentLoaded", app);
