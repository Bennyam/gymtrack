function createTitleBlock({ title, subTitle }) {
  const titleBlockElement = document.createElement("div");
  titleBlockElement.className = "title-block";

  const titleElement = document.createElement("h2");
  titleElement.className = "title-block__title";
  titleElement.innerText = title;

  const subTitleElement = document.createElement("p");
  subTitleElement.className = "title-block__subtitle";
  subTitleElement.innerText = subTitle;

  titleBlockElement.appendChild(titleElement);
  subTitle && titleBlockElement.appendChild(subTitleElement);

  return titleBlockElement;
}

export default createTitleBlock;
