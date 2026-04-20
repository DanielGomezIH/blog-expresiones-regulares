// Scroll reveal
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1 },
      );

      document
        .querySelectorAll(".reveal")
        .forEach((el) => observer.observe(el));

      // Back to top
      const backBtn = document.getElementById("backToTop");
      window.addEventListener(
        "scroll",
        () => {
          if (window.scrollY > 400) backBtn.classList.add("visible");
          else backBtn.classList.remove("visible");
        },
        { passive: true },
      );

      backBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      // Lightbox
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightboxImg");
      const lightboxClose = document.getElementById("lightboxClose");

      const openLightbox = (src, alt) => {
        lightboxImg.src = src;
        lightboxImg.alt = alt || "";
        lightbox.classList.add("open");
        document.body.classList.add("lb-open");
      };

      const closeLightbox = () => {
        lightbox.classList.remove("open");
        document.body.classList.remove("lb-open");
      };

      document.querySelectorAll(".regex-proof img").forEach((img) => {
        img.addEventListener("click", () => openLightbox(img.src, img.alt));
      });

      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox || e.target === lightboxClose)
          closeLightbox();
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("open"))
          closeLightbox();
      });

      // Hamburger sheet
      const hamburger = document.getElementById("navHamburger");
      const navSheet = document.getElementById("navSheet");
      const navOverlay = document.getElementById("navOverlay");
      const navSheetClose = document.getElementById("navSheetClose");

      const openSheet = () => {
        hamburger.classList.add("open");
        hamburger.setAttribute("aria-expanded", "true");
        navSheet.classList.add("open");
        navSheet.setAttribute("aria-hidden", "false");
        navOverlay.classList.add("open");
        document.body.classList.add("sheet-open");
        navSheetClose.focus();
      };

      const closeSheet = (restoreFocus = true) => {
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        navSheet.classList.remove("open");
        navSheet.setAttribute("aria-hidden", "true");
        navOverlay.classList.remove("open");
        document.body.classList.remove("sheet-open");
        if (restoreFocus) hamburger.focus();
      };

      hamburger.addEventListener("click", () => {
        navSheet.classList.contains("open") ? closeSheet() : openSheet();
      });

      navSheetClose.addEventListener("click", closeSheet);
      navOverlay.addEventListener("click", closeSheet);

      navSheet.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", closeSheet);
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navSheet.classList.contains("open"))
          closeSheet();
      });

      const tabletOrMobile = window.matchMedia("(max-width: 1024px)");
      tabletOrMobile.addEventListener("change", (e) => {
        if (!e.matches && navSheet.classList.contains("open")) {
          closeSheet(false);
        }
      });
