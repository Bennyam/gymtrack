function createButton({
  btnType,
  variant,
  btnText,
  size,
  href,
  onClick,
  type,
  xtrClass,
  ariaLabel,
  title,
}) {
  if (btnType === "link") {
    const buttonElement = document.createElement("a");
    buttonElement.className =
      `btn ${variant ? `btn-${variant}` : ""} ${size ? `btn-${size}` : ""} ${xtrClass || ""}`.trim();
    buttonElement.innerText = btnText;
    buttonElement.href = href;
    if (ariaLabel) buttonElement.setAttribute("aria-label", ariaLabel);
    if (title) buttonElement.title = title;
    return buttonElement;
  } else {
    const buttonElement = document.createElement("button");
    buttonElement.className =
      `btn ${variant ? `btn-${variant}` : ""} ${size ? `btn-${size}` : ""} ${xtrClass || ""}`.trim();
    buttonElement.innerText = btnText;
    if (ariaLabel) buttonElement.setAttribute("aria-label", ariaLabel);
    if (title) buttonElement.title = title;
    if (type === "submit") {
      buttonElement.type = "submit";
    } else {
      buttonElement.type = "button";
      if (onClick) {
        buttonElement.addEventListener("click", onClick);
      }
    }
    return buttonElement;
  }
}

export default createButton;
