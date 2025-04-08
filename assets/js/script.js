document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");
  const zoomableImages = document.querySelectorAll(".zoomable");

  zoomableImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-buttons button");
  const cards = document.querySelectorAll(".dino-item");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      cards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
