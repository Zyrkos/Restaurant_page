/* import { createHome } from "./modules/home";
import { createMenu } from "./modules/menu";
import { createContact } from "./modules/contact"; */

const website = () => {
  const createHeader = () => {
    const container = document.getElementById("container");
    const header = document.createElement("div");
    header.classList.add("header");

    container.appendChild("header");
  };

  /* const createNavbar = () => {
    const navbar = document.createElement("nav");
    nav.className = "navbar";
    nav.id = "navbar";

    const linkData = [
      { id: "link-home", text: "Home" },
      { id: "link-menu", text: "Menu" },
      { id: "link-contact", text: "Contact" },
    ];

    const links = linkData.map(({ id, text }) => {
      const link = document.createElement("a");
      link.id = id;
      link.href = "#";
      link.textContent = text;
      return link;
    });

    const ul = document.createElement("ul");
    ul.className = "nav-list";
    ul.id = "tabs";
    ul.append(...links);

    return navbar;
  }; */

  createHeader();

  return { createHeader };
};

website(git )

/* const createMain = () => {
      const main = document.createElement("main");
      main.className = "main";
      main.id = "main";
      return main;
    }; */
