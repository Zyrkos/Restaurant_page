export function createContact() {
  const main = document.createElement("main");
  main.setAttribute("id", "contact-main");
  main.classList.add("contact-main");

  /*--------------------------------------------*/

  const contactFlexWrapper = document.createElement("div");
  contactFlexWrapper.classList.add("contact-flex-wrapper");

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-information");

  const infoCard = document.createElement("div");
  infoCard.classList.add("info-card");
  const infoHeader = document.createElement("h4");
  infoHeader.textContent = "Business Hours";

  const infoPara1 = document.createElement("p");
  infoPara1.textContent = "Brunch: Monday through Friday 9:00am - 2:30pm";
  const infoPara2 = document.createElement("p");
  infoPara2.textContent = "Dinner: Monday through Sunday 5:00pm - 9:00pm";
  const infoPara3 = document.createElement("p");
  infoPara3.textContent = "Take out available";

  const contactForm = document.createElement("div");
  contactForm.classList.add("contact-form");

  const formHeader = document.createElement("span");
  formHeader.classList.add("form-header");

  const formTitle = document.createElement("h2");
  formTitle.textContent = "Contact us";

  const form = document.createElement("form");

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.innerText = "Name:";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "name");

  const phoneLabel = document.createElement("label");
  phoneLabel.setAttribute("for", "phone-number");
  phoneLabel.innerText = "Phone Number:";

  const phoneInput = document.createElement("input");
  phoneInput.setAttribute("type", "tel");
  phoneInput.setAttribute("id", "phone-number");
  phoneInput.setAttribute("name", "phone-number");

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.innerText = "Email:";

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email-adress");
  emailInput.setAttribute("name", "email-adress");

  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(phoneLabel);
  form.appendChild(phoneInput);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);

  formHeader.appendChild(formTitle);
  contactForm.appendChild(formHeader);
  contactForm.appendChild(form);

  infoCard.appendChild(infoHeader);
  infoCard.appendChild(infoPara1);
  infoCard.appendChild(infoPara2);
  infoCard.appendChild(infoPara3);

  contactInfo.appendChild(infoCard);
  contactInfo.appendChild(contactForm);
  contactFlexWrapper.appendChild(contactInfo);

  const location = document.createElement("div");
  location.classList.add("location");

  const locationHeader = document.createElement("span");
  locationHeader.classList.add("location-header");

  const locationTitle = document.createElement("h1");
  locationTitle.textContent = "Come find us!";

  const googleMaps = document.createElement("div");
  googleMaps.classList.add("google-maps");

  const map = document.createElement("iframe");
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d549.6890156177313!2d-9.389048555272623!3d38.79785130435298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1eda955b47deb1%3A0x8827fa9513385c76!2sR.%20Guilherme%20Gomes%20Fernandes%2C%202710-631%20Sintra!5e0!3m2!1spt-PT!2spt!4v1680870838504!5m2!1spt-PT!2spt";
  map.width = "500";
  map.height = "400";
  map.style.border = "0";
  map.allowfullscreen = "";
  map.loading = "lazy";
  map.referrerpolicy = "no-referrer-when-downgrade";

  googleMaps.appendChild(map);
  locationHeader.appendChild(locationTitle);
  location.appendChild(locationHeader);
  location.appendChild(googleMaps);

  const footer = document.createElement("footer");

  const licenseSpan = document.createElement("span");
  licenseSpan.classList.add("license-span");
  const copywright = document.createElement("p");
  copywright.textContent = "© Pedro Castro 2023";
  licenseSpan.appendChild(copywright);
  footer.appendChild(licenseSpan);

  main.appendChild(contactFlexWrapper);
  main.appendChild(location);
  main.appendChild(footer);
  container.appendChild(main);
}
