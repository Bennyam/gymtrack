import createButton from "./button.js";

function createForm({ inputs, actions, handlers, xtrClass = "" }) {
  const formElement = document.createElement("form");
  formElement.className = `form ${xtrClass}`.trim();

  const ctaElement = document.createElement("div");
  ctaElement.className = "form__cta";

  const idInput = document.createElement("input");
  idInput.name = "id";
  idInput.id = "id";
  idInput.style.display = "none";

  formElement.appendChild(idInput);

  inputs.forEach((input) => {
    const inputGroupElement = document.createElement("div");
    inputGroupElement.className = "form__input-group";

    const labelElement = document.createElement("label");
    labelElement.className = "form__label";
    labelElement.htmlFor = input.name;
    labelElement.innerText = input.label || input.name;

    const inputElement = document.createElement("input");
    inputElement.className = "form__input";
    inputElement.name = input.name;
    inputElement.id = input.name;
    inputElement.type = input.type || "text";
    inputElement.placeholder = input.placeholder;
    inputElement.required = true;

    if (input.min) inputElement.min = input.min;
    if (input.inputMode) inputElement.inputMode = input.inputMode;
    if (input.autocomplete) inputElement.autocomplete = input.autocomplete;

    inputGroupElement.appendChild(labelElement);
    inputGroupElement.appendChild(inputElement);

    formElement.appendChild(inputGroupElement);
  });

  actions?.forEach((action) => {
    const button = createButton({
      btnType: action.btnType,
      variant: action.variant,
      href: action.href || null,
      btnText: action.text,
      size: action.size || null,
      onClick: action.onClick || null,
      type: action.type || null,
      xtrClass: action.xtrClass || null,
      ariaLabel: action.ariaLabel || null,
      title: action.title || null,
    });
    ctaElement.appendChild(button);
  });

  formElement.appendChild(ctaElement);

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());
    handlers.onSubmit(data);
    formElement.reset();
  });

  return formElement;
}

export default createForm;
