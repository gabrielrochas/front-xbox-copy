import { JwtHandler } from '../jwt-handler/JwtHandler';
export const Api = {
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080',

  // Endpoint - Login
  loginUrl: () => Api.baseURL + "/login",

  // Endpoint - User
  readUserByIdUrl: (id) => Api.baseURL + "/user/" + id,
  createUserUrl: () => Api.baseURL + "/user/",

  //Endpoint - Games
  readAllGamesUrl: () => Api.baseURL + "/games",
  readGameByIdUrl: (id) => Api.baseURL + "/games/" + id,
  updateGameUrl: (id) => Api.baseURL + "/games/" + id,
  createGameUrl: () => Api.baseURL + "/games",

  // Auth header
  authHeader: () => ({
    Authorization: "Bearer " + JwtHandler.getJwt(),
  }),

  // GET
  buildApiGetRequest: (url, auth) =>
    fetch(url, {
      method: "GET",
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),

  // POST
  buildApiPostRequest: (url, body, auth) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  // PATCH
  buildApiPatchRequest: (url, body, auth) =>
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),
};
