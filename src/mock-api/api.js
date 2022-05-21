export const url = "http://localhost:3001";

export const __getUsers = async () => {
  return await fetch(`${url}/users`).then((res) => res.json());
};

export const __getUser = async (id) => {
  return await fetch(`${url}/users/${id}`).then((res) => res.json());
};

export const __getQuestions = async () => {
  return await fetch(`${url}/questions`).then((res) => res.json());
};

export const __getQuestion = async (id) => {
  return await fetch(`${url}/questions/${id}`).then((res) => res.json());
};

export const __postQuestion = async (question) => {
  return await fetch(`${url}/questions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(question),
  }).then((res) => res.json());
};

export const __postAnswer = async (answer) => {
  return await fetch(`${url}/answers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(answer),
  }).then((res) => res.json());
};

export const __patchUser = async (id, data) => {
  return await fetch(`${url}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
export const __patchQuestion = async (id, data) => {
  return await fetch(`${url}/questions/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const __patchAnswer = async (id, data) => {
  return await fetch(`${url}/answers/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
