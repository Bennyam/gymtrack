import { handleDeleteWorkout, handleUpdateWorkout } from "../app.js";
import createButton from "./button.js";

function createMetric({ label, value }) {
  const metricElement = document.createElement("div");
  metricElement.className = "workout__metric";

  const labelElement = document.createElement("span");
  labelElement.className = "workout__metric-label";
  labelElement.innerText = label;

  const valueElement = document.createElement("span");
  valueElement.className = "workout__metric-value";
  valueElement.innerText = value;

  metricElement.appendChild(labelElement);
  metricElement.appendChild(valueElement);

  return metricElement;
}

function formatWorkoutDate(id) {
  const date = new Date(Number(id));

  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }

  const day = date.getDate();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

function createWorkout(workout) {
  const workoutElement = document.createElement("article");
  workoutElement.className = "workout";

  const mainElement = document.createElement("div");
  mainElement.className = "workout__main";

  const labelElement = document.createElement("p");
  labelElement.className = "workout__eyebrow";
  labelElement.innerText = "Workout";

  const nameElement = document.createElement("h3");
  nameElement.className = "workout__name";
  nameElement.innerText = workout.name;

  mainElement.appendChild(labelElement);
  mainElement.appendChild(nameElement);

  const detailsElement = document.createElement("div");
  detailsElement.className = "workout__details";

  const typeElement = createMetric({
    label: "Type",
    value: workout.type,
  });

  const durationElement = createMetric({
    label: "Duration",
    value: `${workout.duration} min`,
  });

  const dateElement = createMetric({
    label: "Date",
    value: formatWorkoutDate(workout.id),
  });

  detailsElement.appendChild(typeElement);
  detailsElement.appendChild(durationElement);
  detailsElement.appendChild(dateElement);

  const buttonsElement = document.createElement("div");
  buttonsElement.className = "workout-btns";

  const btnUpdate = createButton({
    btnType: "button",
    variant: "ghost",
    btnText: "Edit",
    xtrClass: "workout__action",
    ariaLabel: `Edit ${workout.name}`,
    title: "Edit workout",
    onClick: () => handleUpdateWorkout(workout),
  });

  const btnDelete = createButton({
    btnType: "button",
    variant: "danger",
    btnText: "Delete",
    xtrClass: "workout__action",
    ariaLabel: `Delete ${workout.name}`,
    title: "Delete workout",
    onClick: () => handleDeleteWorkout(workout.id),
  });

  buttonsElement.appendChild(btnUpdate);
  buttonsElement.appendChild(btnDelete);

  workoutElement.appendChild(mainElement);
  workoutElement.appendChild(detailsElement);
  workoutElement.appendChild(buttonsElement);

  return workoutElement;
}

export default createWorkout;
