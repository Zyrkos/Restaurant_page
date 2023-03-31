export function createMenu() {
  const main = document.createElement("main");
  main.setAttribute("id", "menu-main")
  main.classList.add("main");
  const flexWrapper = document.createElement("div");
  flexWrapper.classList.add("flex-wrapper");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content-div");

  const headline = document.createElement("h1");
  headline.textContent = "MENU";
  contentDiv.appendChild(headline);

  container.appendChild(main);
  main.appendChild(flexWrapper);
  flexWrapper.appendChild(contentDiv);
}
