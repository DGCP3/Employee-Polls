export const url = "http://localhost:3001";

const fetcher = async (url, method = "GET", data) => {
  return await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const __getUsers = async () => {
  return await fetcher(`${url}/users`);
};

export const __getUser = async (id) => {
  return await fetcher(`${url}/users/${id}`);
};

export const __getQuestions = async () => {
  return await fetcher(`${url}/questions`);
};

export const __getQuestion = async (id) => {
  return await fetcher(`${url}/questions/${id}`);
};

export const __postQuestion = async (question) => {
  return await fetcher(`${url}/questions`, "POST", question);
};

export const __patchUser = async (id, data) => {
  return await fetcher(`${url}/users/${id}`, "PATCH", data);
};
export const __patchQuestion = async (id, data) => {
  return await fetcher(`${url}/questions/${id}`, "PATCH", data);
};
