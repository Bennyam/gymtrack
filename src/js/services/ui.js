import createForm from "../components/form.js";
import createContactSection from "../components/contact.section.js";
import createFooter from "../components/footer.js";
import createHero from "../components/hero.js";
import createNavbar from "../components/navbar.js";
import { handleAddWorkout, workouts } from "../app.js";
import createWorkoutList from "../components/workout.list.js";
import createTitleBlock from "../components/title.block.js";

const appElement = document.getElementById("root");

const navbar = createNavbar({
  brand: "GymTrack",
  links: [
    {
      name: "Workouts",
      href: "#workouts",
    },
    {
      name: "Contact Coach",
      href: "#contact",
    },
  ],
});

const hero = createHero({
  title: "Track Your Workout",
  subTitle: "Stay consistent, stay strong.",
  actions: [
    {
      btnType: "link",
      href: "#workouts",
      variant: "solid",
      size: "md",
      text: "See Your Plan",
    },
  ],
});

const addWorkoutForm = createForm({
  inputs: [
    {
      name: "name",
      label: "Name",
      placeholder: "Workout Name",
      autocomplete: "off",
    },
    {
      name: "type",
      label: "Type",
      placeholder: "Eg: Cardio",
      autocomplete: "off",
    },
    {
      name: "duration",
      label: "Duration",
      placeholder: "Minutes",
      type: "number",
      min: "1",
      inputMode: "numeric",
    },
  ],
  actions: [
    {
      btnType: "button",
      variant: "solid",
      text: "Add Workout",
      size: "md",
      type: "submit",
    },
  ],
  handlers: {
    onSubmit: handleAddWorkout,
  },
  xtrClass: "add-workout",
});

const workoutsSection = document.createElement("section");
workoutsSection.className = "workouts-section";
workoutsSection.id = "workouts";

const workoutsTitle = createTitleBlock({
  title: "Your Workouts",
});

const workoutsContainer = document.createElement("div");
workoutsContainer.className = "workouts-container";

workoutsSection.appendChild(workoutsTitle);
workoutsSection.appendChild(workoutsContainer);

const contactSection = createContactSection();
const footer = createFooter();

function createEmptyWorkoutState() {
  const emptyElement = document.createElement("div");
  emptyElement.className = "workouts-empty";

  const titleElement = document.createElement("h3");
  titleElement.className = "workouts-empty__title";
  titleElement.innerText = "No workouts yet";

  const textElement = document.createElement("p");
  textElement.className = "workouts-empty__text";
  textElement.innerText =
    "Add your first session above and your progress will appear here.";

  emptyElement.appendChild(titleElement);
  emptyElement.appendChild(textElement);

  return emptyElement;
}

function renderWorkouts(workouts) {
  workoutsContainer.innerHTML = "";
  if (!workouts || workouts.length === 0) {
    workoutsContainer.appendChild(createEmptyWorkoutState());
    return;
  }

  const workoutList = createWorkoutList(workouts);
  workoutsContainer.appendChild(workoutList);
}

function renderApp() {
  appElement.appendChild(navbar);
  appElement.appendChild(hero);
  appElement.appendChild(addWorkoutForm);
  appElement.appendChild(workoutsSection);
  appElement.appendChild(contactSection);
  appElement.appendChild(footer);
  renderWorkouts(workouts);
}

export { renderApp, renderWorkouts };
