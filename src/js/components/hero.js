import createTitleBlock from "./title.block.js";
import createButton from "./button.js";

function createHero({ title, subTitle, actions, xtrClass }) {
  const heroElement = document.createElement("div");
  heroElement.className = "hero";

  const containerElement = document.createElement("div");
  containerElement.className = "hero-container";

  const ctaElement = document.createElement("div");
  ctaElement.className = "hero__cta";

  actions?.forEach((action) => {
    const button = createButton({
      btnType: action.btnType,
      variant: action.variant,
      href: action.href || null,
      btnText: action.text,
      size: action.size || null,
      onClick: action.onClick || null,
      type: action.type || null,
    });

    ctaElement.appendChild(button);
  });

  const titleBlock = createTitleBlock({
    title: title,
    subTitle: subTitle,
  });

  containerElement.appendChild(titleBlock);
  containerElement.appendChild(ctaElement);
  heroElement.appendChild(containerElement);

  return heroElement;
}

export default createHero;
