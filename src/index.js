/* import { createHome } from "./modules/home";
import { createMenu } from "./modules/menu";
import { createContact } from "./modules/contact"; */

const website = () => {
  const container = document.getElementById("container");
  const createHeader = () => {
    const header = document.createElement("div");
    header.classList.add("header");

    const navbar = createNavbar(); // Call createNavbar function to get the navbar element

    header.appendChild(navbar); // Append navbar to header
    container.appendChild(header);
  };

  const createNavbar = () => {
    const nav = document.createElement("nav"); // fixed variable name
    nav.classList.add("navbar");
    nav.id = "navbar";
  
    const linkData = [
      { id: "link-home", text: "Home", href: "#" },
      { id: "link-menu", text: "Menu", href: "#" },
      { id: "link-contact", text: "Contact", href: "#" },
    ];
  
    const links = linkData.map(({ id, text, href }) => {
      const link = document.createElement("a");
      link.id = id;
      link.href = href;
      link.textContent = text;
  
      const listItem = document.createElement("li");
      listItem.appendChild(link);
  
      return listItem; // Return li element
    });
  
    const ul = document.createElement("ul");
    ul.className = "nav-list";
    ul.id = "tabs";
    ul.append(...links);
  
    nav.appendChild(ul); // Append ul element to nav
    return nav; // Return nav element
  };

  const createMain = () => {
    const main = document.createElement("main");
    main.classList.add("main");

    const flexWrapper = document.createElement("div");
    flexWrapper.classList.add("flex-wrapper");

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content-div");

    container.appendChild(main);
    main.appendChild(flexWrapper);
    flexWrapper.appendChild(contentDiv);
  };

  
  createHeader();
  createMain();
};

website(); // Call the website function to create the header and navbar
