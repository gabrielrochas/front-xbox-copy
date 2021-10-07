export const Api = {
  baseURL: "http://localhost:8008",

  readAllUrl: () => Api.baseURL + "/games",
  createGameUrl: () => Api.baseURL + "/games",

  //Get all games
  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),

  // Create a new game
  buildApiPostRequest: (url, body) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(body),
    }),
};
