document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button") as HTMLButtonElement;
  const skill = document.getElementById("skill") as HTMLDivElement;

  button.addEventListener("click", () => {
    if (skill.style.display === "none") {
      skill.style.display = "block";
      button.textContent = "Hide Skills";
    } else {
      skill.style.display = "none";
      button.textContent = "Show Skills";
    }
  });
});
