/* =====================================
   Bootstrap form validation
   ===================================== */
(() => {
  const form = document.getElementById("contactForm");
  const successAlert = document.getElementById("formSuccess");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    // Trigger Bootstrap validation styles
    if (!form.checkValidity()) {
      successAlert.classList.add("d-none");
      form.classList.add("was-validated");
      return;
    }

    // Demo success behavior
    form.classList.add("was-validated");
    successAlert.classList.remove("d-none");

    // Reset (optional)
    form.reset();
    form.classList.remove("was-validated");
  });
})();

/* =====================================
   Project modal: populate title/desc
   ===================================== */
(() => {
  const projectModal = document.getElementById("projectModal");
  if (!projectModal) return;

  projectModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    if (!button) return;

    const title = button.getAttribute("data-project-title") || "Project Details";
    const desc = button.getAttribute("data-project-desc") || "No description provided.";

    const titleEl = document.getElementById("projectModalLabel");
    const descEl = document.getElementById("projectModalDesc");

    titleEl.textContent = title;
    descEl.textContent = desc;
  });
})();
