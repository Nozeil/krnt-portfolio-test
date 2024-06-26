import { createInputsForToggle } from "./create-inputs-for-toggling";
import { toggleErrorClassName } from "./toggle-error-class-name";

export const validateOnSubmit = () => {
  const inputs = createInputsForToggle();

  if (inputs) {
    inputs.forEach(({ input, isValid }) =>
      toggleErrorClassName(input, isValid)
    );
  }
};
