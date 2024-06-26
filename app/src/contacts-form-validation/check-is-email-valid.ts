export const checkIsEmailValid = (value: string) => {
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return value.match(emailPattern) ? true : false;
};
