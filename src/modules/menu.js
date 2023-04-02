export function createMenu() {
  const main = document.createElement("main");
  main.setAttribute("id", "menu-main")
  main.classList.add("main");
  /*---------------------------------------------*/
  const flexWrapper = document.createElement("div");
  flexWrapper.classList.add("flex-wrapper");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content-div");

  const headerSpan = document.createElement("span");
  headerSpan.classList.add("headerSpan");

  const headline = document.createElement("h1");
  headline.textContent = "Menu";
  headerSpan.appendChild(headline);

  const para = document.createElement("p");
  para.textContent =
    "Placeholder Menu";

  flexWrapper.appendChild(headerSpan);
  contentDiv.appendChild(para);
  container.appendChild(main);
  main.appendChild(flexWrapper);
  flexWrapper.appendChild(contentDiv);
}
