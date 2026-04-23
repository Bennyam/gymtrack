import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "./services/persistense.js";
import { renderApp, renderWorkouts } from "./services/ui.js";

export let workouts = getFromLocalStorage() || [];

function updateUi() {
  saveToLocalStorage(workouts);
  renderWorkouts(workouts);
}

function handleAddWorkout(data) {
  const parsedData = {
    ...data,
    id: data.id ? Number(data.id) : null,
    duration: Number(data.duration),
  };

  if (parsedData.id) {
    workouts = workouts.map((workout) =>
      workout.id === parsedData.id ? parsedData : workout,
    );
  } else {
    workouts.push({
      ...data,
      id: Date.now(),
    });
  }
  updateUi();
}

function handleDeleteWorkout(id) {
  workouts = workouts.filter((workout) => workout.id !== id);
  updateUi();
}

function handleUpdateWorkout(workout) {
  const id = document.getElementById("id");
  const name = document.getElementById("name");
  const type = document.getElementById("type");
  const duration = document.getElementById("duration");

  id.value = workout.id;
  name.value = workout.name;
  type.value = workout.type;
  duration.value = workout.duration;

  document.querySelector(".add-workout").scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

renderApp();

export { handleAddWorkout, handleDeleteWorkout, handleUpdateWorkout };
