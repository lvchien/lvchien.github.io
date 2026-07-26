const buttons = Array.from(document.querySelectorAll("[data-filter]"));
const publications = Array.from(document.querySelectorAll(".publication-list article"));
const summary = document.querySelector("#publication-summary");

function applyFilter(filter) {
  let visibleCount = 0;
  buttons.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  publications.forEach((publication) => {
    const visible = filter === "Selected"
      ? publication.dataset.selected === "true"
      : publication.dataset.type === filter;
    publication.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  if (summary) summary.textContent = `${visibleCount} ${filter.toLowerCase()} publications shown`;
}

buttons.forEach((button) => button.addEventListener("click", () => applyFilter(button.dataset.filter)));
applyFilter("Selected");
