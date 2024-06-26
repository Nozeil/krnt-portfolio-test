export const createContactRequest = async (
  name: string,
  email: string,
  message: string
) => {
  const randomUrl = "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch(randomUrl, {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });

  const data = await res.json();

  return data;
};
