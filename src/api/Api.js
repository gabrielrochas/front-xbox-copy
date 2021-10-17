import { JwtHandler } from '../jwt-handler/JwtHandler';
export const Api = {
  baseURL: 'http://localhost:8008',

  authHeader: () => ({
    Authorization: 'Bearer ' + JwtHandler.getJwt(),
  }),

  // Endpoint - Login
  loginUrl: () => Api.baseURL + '/login',

  //Endpoint - Games
  readAllUrl: () => Api.baseURL + '/games',
  readByIdUrl: (id) => Api.baseURL + '/games/' + id,
  createGameUrl: () => Api.baseURL + '/games',

  // GET
  buildApiGetRequest: (url) =>
    fetch(url, {
      method: 'GET',
    }),

  // POST
  buildApiPostRequest: (url, body) =>
    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    }),
};
