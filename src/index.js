import { createHome } from "./modules/home";
import { createMenu } from "./modules/menu";
import { createContact } from "./modules/contact";

const website = () => {
  const container = document.getElementById("container");
  const createHeader = () => {
    const header = document.createElement("div");
    header.classList.add("header");

    const navbar = createNavbar();

    header.appendChild(navbar);
    container.appendChild(header);
  };

  const createNavbar = () => {
    const nav = document.createElement("nav");
    nav.classList.add("navbar");
    nav.id = "navbar";

    const linkData = [
      { id: "link-home", text: "Home", href: "#" },
      { id: "link-menu", text: "Menu", href: "#" },
      { id: "link-contact", text: "Contacts", href: "#" },
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

    nav.appendChild(ul);
    return nav;
  };

  const createMain = () => {
    const tabs = document.getElementById("tabs");
    let currentTab;

    createHome();
    currentTab = document.getElementById("home-main");

    tabs.addEventListener("click", function eventHandler(e) {
      if (e.target.id === "link-home") {
        //check if the current link clicked is the same as link-home
        if (currentTab !== document.getElementById("home-main")) {
          //if the link click isn't the currentTab
          if (currentTab) {
            currentTab.remove(); //removes the current tab
          }
          createHome(); //passes the module
          currentTab = document.getElementById("home-main"); //sets the current module as the currentTab
        }
      } else if (e.target.id === "link-menu") {
        if (currentTab !== document.getElementById("menu-main")) {
          if (currentTab) {
            currentTab.remove();
          }
          createMenu();
          currentTab = document.getElementById("menu-main");
        }
      } else if (e.target.id === "link-contact") {
        if (currentTab !== document.getElementById("contact-main")) {
          if (currentTab) {
            currentTab.remove();
          }
          createContact();
          currentTab = document.getElementById("contact-main");
        }
      }
    });
  };

  createHeader();
  createMain();
};

website();
