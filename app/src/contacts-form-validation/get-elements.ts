import { classNames } from "./constants";
import type { GetElements } from "./types";

export const getElements: GetElements = () => {
  const nameInput = document.querySelector<HTMLInputElement>(
    classNames.nameInput
  );
  const nameLabel = document.querySelector<HTMLLabelElement>(
    classNames.nameLabel
  );
  const nameError = document.querySelector<HTMLSpanElement>(
    classNames.nameError
  );
  const emailInput = document.querySelector<HTMLInputElement>(
    classNames.emailInput
  );
  const emailLabel = document.querySelector<HTMLLabelElement>(
    classNames.emailLabel
  );
  const emailError = document.querySelector<HTMLSpanElement>(
    classNames.emailError
  );
  const textarea = document.querySelector<HTMLTextAreaElement>(
    classNames.textarea
  );
  const textareaLabel = document.querySelector<HTMLLabelElement>(
    classNames.textareaLabel
  );
  const textareaError = document.querySelector<HTMLSpanElement>(
    classNames.textareaError
  );

  const areElements =
    nameInput &&
    emailInput &&
    textarea &&
    nameLabel &&
    emailLabel &&
    textareaLabel &&
    nameError &&
    emailError &&
    textareaError;

  return areElements ? [
    nameInput,
    nameLabel,
    nameError,
    emailInput,
    emailLabel,
    emailError,
    textarea,
    textareaLabel,
    textareaError,
  ] : null;
};
