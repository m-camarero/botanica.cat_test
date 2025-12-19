document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".search-form");
  const searchInput = form.querySelector("input");
  const searchButton = form.querySelector("button");

  // Add search icon to button
  searchButton.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
          stroke="white" stroke-width="2" stroke-linecap="round"/>
  </svg> Cerca`;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();

    if (query.length < 2) {
      // Animated error feedback
      searchInput.style.animation = "shake 0.5s";
      searchInput.style.border = "2px solid #ef4444";
      searchInput.focus();
      
      setTimeout(() => {
        searchInput.style.animation = "";
        searchInput.style.border = "";
      }, 500);
      
      // Create floating error message
      const errorMsg = document.createElement("div");
      errorMsg.textContent = "Escriu almenys 2 caràcters per cercar.";
      errorMsg.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ef4444;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      `;
      
      document.body.appendChild(errorMsg);
      setTimeout(() => errorMsg.remove(), 3000);
      return;
    }

    // Add loading animation
    searchButton.innerHTML = `<div class="spinner"></div> Cercant...`;
    searchButton.disabled = true;
    
    // Add spinner styles
    const style = document.createElement("style");
    style.textContent = `
      .spinner {
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255,255,255,0.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 1s linear infinite;
        display: inline-block;
        margin-right: 8px;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
      
      @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    // Simulate API call before redirecting
    setTimeout(() => {
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }, 1000);
  });

  // Add focus effect to search input
  searchInput.addEventListener("focus", () => {
    form.classList.add("focused");
  });
  
  searchInput.addEventListener("blur", () => {
    form.classList.remove("focused");
  });

  // Add card hover animations
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
    });
    
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });
});