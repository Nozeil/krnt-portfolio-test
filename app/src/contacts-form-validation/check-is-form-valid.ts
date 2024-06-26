import { checkIsEmailValid } from "./check-is-email-valid";
import { checkIsLengthValid } from "./check-is-length-valid";
import { minLength } from "./constants";

export const checkIsFormValid = (
  name: string,
  email: string,
  message: string
) =>
  checkIsLengthValid(name, minLength.nameInput) &&
  checkIsEmailValid(email) &&
  checkIsLengthValid(message, minLength.textarea);
