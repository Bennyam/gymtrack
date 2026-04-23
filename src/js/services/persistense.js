function saveToLocalStorage(data) {
  localStorage.setItem("workouts", JSON.stringify(data));
}

function getFromLocalStorage() {
  try {
    const data = localStorage.getItem("workouts");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export { saveToLocalStorage, getFromLocalStorage };
