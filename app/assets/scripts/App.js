import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import ClientArea from "./modules/ClientArea";

// React Related Code Goes Here
import React from "react";
import ReactDOM from "react-dom/client";

// Import React Components that we created
import MyAmazingComponent from "./modules/MyAmazingComponent";

// Create Root -- No Longer ReactDOM.render
const root = ReactDOM.createRoot(
  // Updated From Render, No Longer <MyAmazingComponent />,
  document.querySelector("#my-react-example")
);

// Render Element to the Root
root.render(<MyAmazingComponent />);

new ClientArea();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 65);
new StickyHeader();
new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ "./modules/Modal")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch(() => console.log("There was a problem"));
    } else {
      modal.openTheModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
