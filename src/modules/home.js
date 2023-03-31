export function createHome() {
  const main = document.createElement("main");
  main.setAttribute("id", "home-main")
  main.classList.add("main");
  const flexWrapper = document.createElement("div");
  flexWrapper.classList.add("flex-wrapper");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content-div");

  const headline = document.createElement("h1");
  headline.textContent = "HOME";
  contentDiv.appendChild(headline);

  container.appendChild(main);
  main.appendChild(flexWrapper);
  flexWrapper.appendChild(contentDiv);
}
