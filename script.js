const filterButtons = Array.from(
  document.querySelectorAll(".publication-filters button"),
);
const publications = Array.from(
  document.querySelectorAll(".publication-list article"),
);

function applyFilter(filter) {
  filterButtons.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  publications.forEach((publication) => {
    const visible =
      filter === "Selected"
        ? publication.dataset.selected === "true"
        : publication.dataset.type === filter;
    publication.hidden = !visible;
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});

applyFilter("Selected");
