export function createMenu() {
  const main = document.createElement("main");
  main.setAttribute("id", "menu-main");
  main.classList.add("menu-main");

  /*---------------------------------------------*/

  const leftSidePage = document.createElement("div");
  leftSidePage.setAttribute("class", "left-side-page");

  const rightSidePage = document.createElement("div");
  rightSidePage.setAttribute("class", "right-side-page");

  const menuHeader = document.createElement("span");
  menuHeader.setAttribute("class", "menu-header");

  const h1 = document.createElement("h1");
  h1.textContent = "All days";

  menuHeader.appendChild(h1);

  const menuGridWrapper = document.createElement("div");
  menuGridWrapper.classList.add("menu-grid-wrapper");

  const menu = [
    {
      category: "Entrees",
      items: [
        {
          name: "Vegan Sushi Rolls",
          description: "Tofu, avocado, and vegetables",
        },
        { name: "Jackfruit BBQ", description: "Served with whole grain bread" },
        {
          name: "Stuffed Bell Peppers",
          description: "Filled with quinoa, black beans, and vegetables",
        },
        {
          name: "Vegan Pho Noodle Soup",
          description:
            "Made with vegetable broth, tofu, and a variety of vegetables",
        },
      ],
    },
    {
      category: "Main Course",
      items: [
        {
          name: "Lentil Shepherd's Pie",
          description: "Made with red lentils, basil and tomato sauce",
        },
        {
          name: "Vegan Lasagna",
          description:
            "Made with layers of tofu, cashew cream, and vegetable sauce",
        },
        {
          name: "Chickpea Curry",
          description:
            "Made with a variety of vegetables and served with naan bread",
        },
        {
          name: "Beyond Burger",
          description:
            "Served in whole grain bun, with tomato slices and lettuce",
        },
      ],
    },
    {
      category: "Drinks",
      items: [
        {
          name: "Mango Lassi",
          description: "Made with coconut yogurt and cardamom",
        },
        {
          name: "Coconut and Pineapple Smoothie",
          description: "Made with coconut milk and vanilla extract",
        },
        {
          name: "Vegan Matcha Latte",
          description: "Made with almond milk and sweetened with maple syrup",
        },
        {
          name: "Raspberry and Rosewater Spritzer",
          description: "Made with sparkling water and agave nectar",
        },
      ],
    },
  ];

  // Loop through each category and create the corresponding HTML elements
  menu.forEach((category) => {
    // Create a new grid item for the category
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    // Add the category title to the grid item
    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = category.category;
    gridItem.appendChild(categoryTitle);

    // Loop through each item in the category and create the corresponding HTML elements
    category.items.forEach((item) => {
      // Create a new item element
      const itemElement = document.createElement("div");

      // Add the item name to the item element
      const itemName = document.createElement("h4");
      itemName.textContent = item.name;
      itemElement.appendChild(itemName);

      // Add the item description to the item element
      const itemDescription = document.createElement("p");
      itemDescription.classList.add("description");
      itemDescription.textContent = item.description;
      itemElement.appendChild(itemDescription);

      // Add a horizontal line separator after the item element
      const line = document.createElement("span");
      line.classList.add("line");
      itemElement.appendChild(line);

      // Add the item element to the grid item
      gridItem.appendChild(itemElement);
    });

    // Add the grid item to the menu grid container
    menuGridWrapper.appendChild(gridItem);
  });

  const footer = document.createElement("footer");

  const creditSpan = document.createElement("span");
  creditSpan.classList.add("credit-span");
  const imgCredit = document.createElement("a");
  imgCredit.textContent = "Photo by Chris Liverani";
  imgCredit.href = "https://unsplash.com/@chrisliverani";

  const licenseSpan = document.createElement("span");
  licenseSpan.classList.add("license-span");
  const copywright = document.createElement("p");
  copywright.textContent = "© Pedro Castro 2023";

  licenseSpan.appendChild(copywright);
  creditSpan.appendChild(imgCredit);

  footer.appendChild(creditSpan);
  footer.appendChild(licenseSpan);

  rightSidePage.appendChild(menuHeader);
  rightSidePage.appendChild(menuGridWrapper);

  main.appendChild(leftSidePage);
  main.appendChild(rightSidePage);
  main.appendChild(footer);

  container.appendChild(main);
}
