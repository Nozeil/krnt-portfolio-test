import { createContactRequest } from "../services/create-contact-request";
import { checkIsFormValid } from "./check-is-form-valid";
import { ids } from "./constants";
import { validateOnEntry } from "./validate-on-entry";
import { validateOnSubmit } from "./validate-on-submit";

export const createContactsFormValidation = () => {
  const form = document.querySelector<HTMLFormElement>(".contacts__form");
  const submitButton = document.querySelector<HTMLButtonElement>(
    ".contacts__submit-button"
  );

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(e.target as HTMLFormElement);

      const [name, email, message] = Object.values(ids).map(
        (value) => formData.get(value) as string
      );

      const isValid = checkIsFormValid(name, email, message);

      if (isValid) {
        try {
          await createContactRequest(name, email, message);
        } catch (e) {
          console.error(e);
        } finally {
          form.reset();
        }
      }
    });

    form.addEventListener("input", (e) => {
      const { id } = e.target as HTMLElement;
      validateOnEntry(id);
    });
  }

  if (submitButton) {
    submitButton.addEventListener("click", validateOnSubmit);
  }
};
