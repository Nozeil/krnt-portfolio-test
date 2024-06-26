import { checkIsEmailValid } from "./check-is-email-valid";
import { checkIsLengthValid } from "./check-is-length-valid";
import { errorClassNames, minLength } from "./constants";
import { getElements } from "./get-elements";

export const createInputsForToggle = () => {
  const elements = getElements();

  if (elements) {
    const [
      nameInput,
      nameLabel,
      nameError,
      emailInput,
      emailLabel,
      emailError,
      textarea,
      textareaLabel,
      textareaError,
    ] = elements;

    const { inputErrorName, labelErrorName, spanErrorName, textareaErrorName } =
      errorClassNames;

    const inputs = [
      {
        input: [
          { el: nameInput, className: inputErrorName },
          { el: nameLabel, className: labelErrorName },
          { el: nameError, className: spanErrorName },
        ],
        isValid: checkIsLengthValid(nameInput.value, minLength.nameInput),
      },
      {
        input: [
          { el: emailInput, className: inputErrorName },
          { el: emailLabel, className: labelErrorName },
          { el: emailError, className: spanErrorName },
        ],
        isValid: checkIsEmailValid(emailInput.value),
      },
      {
        input: [
          { el: textarea, className: textareaErrorName },
          { el: textareaLabel, className: labelErrorName },
          { el: textareaError, className: spanErrorName },
        ],
        isValid: checkIsLengthValid(textarea.value, minLength.textarea),
      },
    ];

    return inputs;
  }

  return null;
};
