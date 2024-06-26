import { ids } from "./constants";
import { createInputsForToggle } from "./create-inputs-for-toggling";
import { toggleErrorClassName } from "./toggle-error-class-name";

export const validateOnEntry = (id: string) => {
  const inputs = createInputsForToggle();

  if (inputs) {
    const [nameInput, emailInput, textarea] = inputs;

    if (id === ids.nameInput) {
      toggleErrorClassName(nameInput.input, nameInput.isValid);
    }

    if (id === ids.emailInput) {
      toggleErrorClassName(emailInput.input, emailInput.isValid);
    }

    if (id === ids.textarea) {
      toggleErrorClassName(textarea.input, textarea.isValid);
    }
  }
};
