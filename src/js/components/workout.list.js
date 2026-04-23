import createWorkout from "./workout.js";

function createStat({ label, value }) {
  const statElement = document.createElement("div");
  statElement.className = "workout-stat";

  const valueElement = document.createElement("strong");
  valueElement.className = "workout-stat__value";
  valueElement.innerText = value;

  const labelElement = document.createElement("span");
  labelElement.className = "workout-stat__label";
  labelElement.innerText = label;

  statElement.appendChild(valueElement);
  statElement.appendChild(labelElement);

  return statElement;
}

function createWorkoutList(workouts) {
  const wrapperElement = document.createElement("div");
  wrapperElement.className = "workout-list-wrapper";

  const totalDuration = workouts.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0,
  );
  const workoutTypes = new Set(workouts.map((workout) => workout.type));

  const summaryElement = document.createElement("div");
  summaryElement.className = "workout-list__summary";
  summaryElement.appendChild(
    createStat({
      label: workouts.length === 1 ? "session" : "sessions",
      value: workouts.length,
    }),
  );
  summaryElement.appendChild(
    createStat({
      label: "total minutes",
      value: totalDuration,
    }),
  );
  summaryElement.appendChild(
    createStat({
      label: workoutTypes.size === 1 ? "training type" : "training types",
      value: workoutTypes.size,
    }),
  );

  const listElement = document.createElement("div");
  listElement.className = "workout-list";

  workouts.forEach((workout) => {
    const workoutElement = createWorkout(workout);

    listElement.appendChild(workoutElement);
  });

  wrapperElement.appendChild(summaryElement);
  wrapperElement.appendChild(listElement);

  return wrapperElement;
}

export default createWorkoutList;
