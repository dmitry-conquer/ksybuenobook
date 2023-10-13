// import { initSpoiler, initDdropdown } from './modules/spoilers.js';
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import fslightbox from "fslightbox";
// import AOS from 'aos';
// import fslightbox from 'fslightbox';
// import MicroModal from 'micromodal';

import "./modules/header.js";
import "./modules/scroll.js";
function app() {
  useDynamicAdapt("max");
}

document.addEventListener("DOMContentLoaded", app);
