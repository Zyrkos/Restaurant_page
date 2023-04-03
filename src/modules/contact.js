export function createContact() {
  const main = document.createElement("main");
  main.setAttribute("id", "contact-main");

  /*--------------------------------------------*/
  const headerSpan = document.createElement("span");
  headerSpan.classList.add("header-span");

  const headline = document.createElement("h1");
  headline.textContent = "Contacts";
  headerSpan.appendChild(headline);

  const footer = document.createElement("footer");

  const licenseSpan = document.createElement("span");
  licenseSpan.classList.add("license-span");
  const copywright = document.createElement("p");
  copywright.textContent = "© Pedro Castro 2023";

  licenseSpan.appendChild(copywright);
  footer.appendChild(licenseSpan);

  container.appendChild(main);
  headerSpan.appendChild(headline);
  main.appendChild(headerSpan);
  main.appendChild(footer);
}
