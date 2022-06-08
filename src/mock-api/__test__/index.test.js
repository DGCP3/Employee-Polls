import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();
beforeEach(() => {
  fetchMock.resetMocks();
});
afterAll(() => {
  fetchMock.disableMocks();
});

const mockUser = {
  id: "am8ehyc8byjqgar0jgpub9",
  author: "sarahedo",
  timestamp: 1488579767190,
  optionOne: {
    votes: ["zoshikanlu"],
    text: "conduct a release retrospective 1 week after a release",
  },
  optionTwo: {
    votes: [],
    text: "conduct release retrospectives quarterly",
  },
};

describe("API method test", () => {
  describe("login user", () => {
    it("should let user login", async () => {
      fetchMock.mockResponseOnce(JSON.stringify([].fill(mockUser, 0, 10)));
    });
  });
});
