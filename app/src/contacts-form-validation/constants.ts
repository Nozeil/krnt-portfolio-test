export const classNames = {
  nameInput: ".contact-name-input",
  nameLabel: ".name-label",
  nameError: ".name-error",
  emailInput: ".email-input",
  emailLabel: ".email-label",
  emailError: ".email-error",
  textarea: ".textarea",
  textareaLabel: ".message-label",
  textareaError: ".message-error",
} as const;

export const errorClassNames = {
  inputErrorName: "text-input_error",
  labelErrorName: "contacts__label_error",
  spanErrorName: "contacts__input-error_visible",
  textareaErrorName: "textarea_error",
} as const;

export const ids = {
  nameInput: "contact-name",
  emailInput: "email",
  textarea: "message",
} as const;

export const minLength = {
  nameInput: 2,
  textarea: 1,
}
