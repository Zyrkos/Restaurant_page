export function createHome() {
  const main = document.createElement("main");
  main.setAttribute("id", "home-main");
  main.classList.add("main");
  /*--------------------------------------------*/
  const flexWrapper = document.createElement("div");
  flexWrapper.classList.add("flex-wrapper");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content-div-home");

  const headerSpan = document.createElement("span");
  headerSpan.classList.add("headerSpan");

  const headline = document.createElement("h1");
  headline.textContent = "Home";
  headerSpan.appendChild(headline);

  const para = document.createElement("p");
  para.textContent =
    "Welcome to Plant Based Sintra, your favourite vegan restaurant";

  flexWrapper.appendChild(headerSpan);
  contentDiv.appendChild(para);
  container.appendChild(main);
  main.appendChild(flexWrapper);
  flexWrapper.appendChild(contentDiv);
}
