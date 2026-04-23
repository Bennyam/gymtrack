import createButton from "./button.js";
import createTitleBlock from "./title.block.js";

function createField({ label, name, type = "text", placeholder, textarea }) {
  const groupElement = document.createElement("div");
  groupElement.className = "contact-form__group";

  const labelElement = document.createElement("label");
  labelElement.className = "contact-form__label";
  labelElement.htmlFor = name;
  labelElement.innerText = label;

  const fieldElement = document.createElement(textarea ? "textarea" : "input");
  fieldElement.className = "contact-form__field";
  fieldElement.name = name;
  fieldElement.id = name;
  fieldElement.placeholder = placeholder;
  fieldElement.required = true;

  if (textarea) {
    fieldElement.rows = 5;
  } else {
    fieldElement.type = type;
  }

  groupElement.appendChild(labelElement);
  groupElement.appendChild(fieldElement);

  return groupElement;
}

function createContactSection() {
  const sectionElement = document.createElement("section");
  sectionElement.className = "contact-section";
  sectionElement.id = "contact";

  const titleBlock = createTitleBlock({
    title: "Contact Coach",
    subTitle: "Ready for the next level? Let's build your plan.",
  });

  const layoutElement = document.createElement("div");
  layoutElement.className = "contact-section__layout";

  const copyElement = document.createElement("div");
  copyElement.className = "contact-section__copy";

  const eyebrowElement = document.createElement("p");
  eyebrowElement.className = "contact-section__eyebrow";
  eyebrowElement.innerText = "Personal coaching";

  const headingElement = document.createElement("h3");
  headingElement.className = "contact-section__heading";
  headingElement.innerText = "Send your goal and get a sharper training rhythm.";

  const textElement = document.createElement("p");
  textElement.className = "contact-section__text";
  textElement.innerText =
    "Tell us where you are now, what you want to improve, and how often you train.";

  copyElement.appendChild(eyebrowElement);
  copyElement.appendChild(headingElement);
  copyElement.appendChild(textElement);

  const formElement = document.createElement("form");
  formElement.className = "contact-form";

  const nameField = createField({
    label: "Name",
    name: "contact-name",
    placeholder: "Your name",
  });

  const emailField = createField({
    label: "Email",
    name: "contact-email",
    type: "email",
    placeholder: "you@example.com",
  });

  const goalField = createField({
    label: "Goal",
    name: "contact-goal",
    placeholder: "Strength, cardio, mobility...",
  });

  const messageField = createField({
    label: "Message",
    name: "contact-message",
    placeholder: "What should your coach know?",
    textarea: true,
  });

  const statusElement = document.createElement("p");
  statusElement.className = "contact-form__status";
  statusElement.setAttribute("aria-live", "polite");

  const button = createButton({
    btnType: "button",
    variant: "solid",
    btnText: "Send Message",
    type: "submit",
  });

  formElement.appendChild(nameField);
  formElement.appendChild(emailField);
  formElement.appendChild(goalField);
  formElement.appendChild(messageField);
  formElement.appendChild(button);
  formElement.appendChild(statusElement);

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    formElement.reset();
    statusElement.innerText = "Message sent. Your coach will reach out soon.";
  });

  layoutElement.appendChild(copyElement);
  layoutElement.appendChild(formElement);

  sectionElement.appendChild(titleBlock);
  sectionElement.appendChild(layoutElement);

  return sectionElement;
}

export default createContactSection;
