/* import { createHome } from "./modules/home";
import { createMenu } from "./modules/menu";
import { createContact } from "./modules/contact"; */

const website = () => {
  const createHeader = () => {
    const container = document.getElementById("container");
    const header = document.createElement("div");
    header.classList.add("header");

    const navbar = createNavbar(); // Call createNavbar function to get the navbar element

    header.appendChild(navbar); // Append navbar to header
    container.appendChild(header);
  };

  const createNavbar = () => {
    const nav = document.createElement("nav"); // fixed variable name
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
      return link; // Return link element
    });

    const ul = document.createElement("ul");
    ul.className = "nav-list";
    ul.id = "tabs";
    ul.append(...links);

    nav.appendChild(ul); // Append ul element to nav
    return nav; // Return nav element
  };

  createHeader();
};

website(); // Call the website function to create the header and navbar

/* const createMain = () => {
      const main = document.createElement("main");
      main.className = "main";
      main.id = "main";
      return main;
    }; */
