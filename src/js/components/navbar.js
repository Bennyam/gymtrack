function createNavbar({ brand, links }) {
  const navbarElement = document.createElement("nav");
  navbarElement.className = "navbar";

  const containerElement = document.createElement("div");
  containerElement.className = "navbar-container";

  const linksElement = document.createElement("div");
  linksElement.className = "navbar__links";

  const brandElement = document.createElement("h1");
  brandElement.className = "navbar__brand";
  brandElement.innerText = brand;

  links.forEach((link) => {
    const linkElement = document.createElement("a");
    linkElement.className = "navbar__link";
    linkElement.href = link.href;
    linkElement.innerText = link.name;

    linksElement.appendChild(linkElement);
  });

  containerElement.appendChild(brandElement);
  containerElement.appendChild(linksElement);
  navbarElement.appendChild(containerElement);

  return navbarElement;
}

export default createNavbar;
