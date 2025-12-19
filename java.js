document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".search-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = form.querySelector("input").value.trim();

    if (query.length < 2) {
      alert("Escriu almenys 2 caràcters per cercar.");
      return;
    }

    // Simulación de redirección a búsqueda
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  });
});


