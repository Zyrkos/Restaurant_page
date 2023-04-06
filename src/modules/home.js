export function createHome() {
  const main = document.createElement("main");
  main.setAttribute("id", "home-main");
  main.classList.add("main");
  /*--------------------------------------------*/
  const headerSpan = document.createElement("span");
  headerSpan.classList.add("header-span");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Plant-Based Sintra";

  const footer = document.createElement("footer");

  const creditSpan = document.createElement("span");
  creditSpan.classList.add("credit-span");
  const imgCredit = document.createElement("a");
  imgCredit.textContent = "Photo by Anna Pelzer";
  imgCredit.href = "https://unsplash.com/@annapelzer";

  const licenseSpan = document.createElement("span");
  licenseSpan.classList.add("license-span");
  const copywright = document.createElement("p");
  copywright.textContent = "© Pedro Castro 2023";

  licenseSpan.appendChild(copywright);
  creditSpan.appendChild(imgCredit);

  footer.appendChild(creditSpan);
  footer.appendChild(licenseSpan);

  container.appendChild(main);
  headerSpan.appendChild(headline);
  main.appendChild(headerSpan);
  main.appendChild(footer);
}
