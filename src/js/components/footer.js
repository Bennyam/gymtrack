function createFooter() {
  const footerElement = document.createElement("footer");
  footerElement.className = "footer";

  const containerElement = document.createElement("div");
  containerElement.className = "footer-container";

  const brandGroupElement = document.createElement("div");
  brandGroupElement.className = "footer__brand-group";

  const brandElement = document.createElement("h2");
  brandElement.className = "footer__brand";
  brandElement.innerText = "GymTrack";

  const textElement = document.createElement("p");
  textElement.className = "footer__text";
  textElement.innerText =
    "Track sessions, keep momentum, and turn consistency into progress.";

  brandGroupElement.appendChild(brandElement);
  brandGroupElement.appendChild(textElement);

  const linksElement = document.createElement("div");
  linksElement.className = "footer__links";

  [
    { name: "Workouts", href: "#workouts" },
    { name: "Contact", href: "#contact" },
    { name: "Top", href: "#root" },
  ].forEach((link) => {
    const linkElement = document.createElement("a");
    linkElement.className = "footer__link";
    linkElement.href = link.href;
    linkElement.innerText = link.name;

    linksElement.appendChild(linkElement);
  });

  const metaElement = document.createElement("p");
  metaElement.className = "footer__meta";
  metaElement.innerText = `Copyright ${new Date().getFullYear()} GymTrack. Built for better reps.`;

  containerElement.appendChild(brandGroupElement);
  containerElement.appendChild(linksElement);
  containerElement.appendChild(metaElement);
  footerElement.appendChild(containerElement);

  return footerElement;
}

export default createFooter;
