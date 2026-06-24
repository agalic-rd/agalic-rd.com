(function () {
  const section = document.querySelector(".art-preview-section");

  if (!section) {
    return;
  }

  const galleryHref = section.dataset.galleryHref;

  if (!galleryHref) {
    return;
  }

  function openGallery() {
    window.location.href = galleryHref;
  }

  section.addEventListener("click", function (event) {
    const target = event.target instanceof Element ? event.target : event.target.parentElement;

    if (target && target.closest(".pg-item img")) {
      return;
    }

    event.preventDefault();
    openGallery();
  });

  section.addEventListener("keydown", function (event) {
    if (event.target !== section || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    openGallery();
  });
})();
