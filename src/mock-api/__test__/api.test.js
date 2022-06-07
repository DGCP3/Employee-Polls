import fetchMock from "jest-fetch-mock";
import {
  __getQuestion,
  __getQuestions,
  __getUser,
  __getUsers,
  __patchQuestion,
  __patchUser,
  __postQuestion,
} from "../api";

const mockUser = {
  id: "zoshikanlu",
  password: "pass246",
  name: "Zenobia Oshikanlu",
  avatarURL: null,
  answers: {
    xj352vofupe1dqz9emx13r: "optionTwo",
    "8xf0y6ziyjabvozdd253nd": "optionTwo",
    "6ni6ok3ym7mf1p33lnez": "optionOne",
    am8ehyc8byjqgar0jgpub9: "optionTwo",
    loxhs1bqm25b708cmbf3g: "optionTwo",
    vthrdm985a262al8qx3do: "optionOne",
    SwamY4D: "optionOne",
    Ikq_diI: "optionOne",
    "hqbYr-3": "optionTwo",
    ksK1_gb: "optionOne",
    _Ig01si: "optionOne",
  },
  questions: ["hqbYr-3", "_Ig01si", "Ir2bImW"],
};
const mockQuestion = {
  id: "8xf0y6ziyjabvozdd253nd",
  author: "sarahedo",
  timestamp: 1467166872634,
  optionOne: {
    votes: ["sarahedo"],
    text: "Build our new application with Javascript",
  },
  optionTwo: {
    votes: ["zoshikanlu"],
    text: "Build our new application with Typescript",
  },
};

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});
afterAll(() => {
  fetchMock.disableMocks();
});

describe("MOCK-API Tests", () => {
  describe("getUsers", () => {
    it("should return an array of users", async () => {
      fetchMock.mockResponseOnce(JSON.stringify([].fill(mockUser, 0, 10)));
      const users = await __getUsers();
      expect(users).toEqual([].fill(mockUser, 0, 10));
    });
  });

  describe("getUser", () => {
    it("should return one user or throw", async () => {
      fetchMock.mockResponseOnce(() =>
        Promise.resolve(JSON.stringify(mockUser))
      );
      await expect(__getUser()).rejects.toThrow();
      await expect(__getUser("zoshikanlu")).resolves.toEqual(mockUser);
    });
  });

  describe("getQuestions", () => {
    it("should return an array of questions", async () => {
      fetchMock.mockResponseOnce(JSON.stringify([].fill(mockQuestion, 0, 10)));
      await expect(__getQuestions()).resolves.toEqual(
        [].fill(mockQuestion, 0, 10)
      );
    });
  });
  describe("getQuestion", () => {
    it("should return one question or reject", async () => {
      fetchMock.mockResponseOnce(() =>
        Promise.resolve(JSON.stringify(mockQuestion))
      );
      await expect(__getQuestion()).rejects.toThrow();
      await expect(__getQuestion("8xf0y6ziyjabvozdd253nd")).resolves.toEqual(
        mockQuestion
      );
    });
  });
  describe("post questions", () => {
    it("should created question", async () => {
      fetchMock.mockResponseOnce(() =>
        Promise.resolve(JSON.stringify(mockQuestion))
      );
      await expect(__postQuestion()).rejects.toThrow();
      await expect(__postQuestion(mockQuestion)).resolves.toEqual(mockQuestion);
    });
  });

  describe("patch questions", () => {
    it("should reject if called without user id", async () => {
      await expect(__patchQuestion()).rejects.toThrow();
    });
  });
  describe("patch user", () => {
    it("should reject if called without user id", async () => {
      await expect(__patchUser()).rejects.toThrow();
    });
  });
});
