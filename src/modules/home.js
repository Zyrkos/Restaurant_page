export function createHome() {
  const main = document.createElement("main");
  main.setAttribute("id", "home-main");
  main.classList.add("main");
  /*--------------------------------------------*/
  const headerSpan = document.createElement("span");
  headerSpan.classList.add("header-span");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Plant-Based Sintra";
  headerSpan.appendChild(headline);

  const footer = document.createElement("footer");

  container.appendChild(main);
  headerSpan.appendChild(headline);
  main.appendChild(headerSpan);
  main.appendChild(footer);
}
