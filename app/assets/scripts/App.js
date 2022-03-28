import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

// let revealOnScroll = new RevealOnScroll(); -- remove var for recyclability of module
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 65);

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
