export const toggleErrorClassName = (
  elements: { el: HTMLElement; className: string }[],
  isValid: boolean
) => {
  if (isValid) {
    elements.forEach(({ el, className }) => el.classList.remove(className));
  } else {
    elements.forEach(({ el, className }) => el.classList.add(className));
  }
};