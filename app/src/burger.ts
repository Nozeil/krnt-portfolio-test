const getElements = () => {
  const openMenuBtn = document.querySelector<HTMLButtonElement>(".burger");
  const closeMenuBtn = document.querySelector<HTMLButtonElement>(
    ".burger-close-button"
  );
  const nav = document.querySelector<HTMLButtonElement>(".nav");
  const overlay = document.querySelector<HTMLDivElement>(".overlay");

  return [openMenuBtn, closeMenuBtn, nav, overlay];
};

export const createBurgerMenu = () => {
  const [openMenuBtn, closeMenuBtn, nav, overlay] = getElements();

  const areElementsExist = openMenuBtn && closeMenuBtn && nav && overlay;

  if (areElementsExist) {
    const navOpenedClass = "nav_opened";
    const overlayVisibleClass = "overlay_visible";

    const openNav = () => {
      nav.classList.add(navOpenedClass);
      overlay.classList.add(overlayVisibleClass);
    };

    const closeNav = () => {
      nav.classList.remove(navOpenedClass);
      overlay.classList.remove(overlayVisibleClass);
    };

    openMenuBtn.addEventListener("click", openNav);
    closeMenuBtn.addEventListener("click", closeNav);
    overlay.addEventListener("click", closeNav);
    nav.addEventListener("click", (e) => {
      const el = e.target as HTMLElement;

      if (el.tagName === "A") {
        closeNav();
      }
    });
  }
};
