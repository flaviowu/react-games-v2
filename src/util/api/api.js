import { JwtHandler } from "../JwtHandler/JwtHandler";

export const api = {
  baseUrl: "http://localhost:3001",

  // Endpoint - Login

  loginUrl: () => api.baseUrl + "/login",

  //endpoint ref games
  readAllGamesUrl: () => `${api.baseUrl}/game/`,

  readGameByIdUrl: (id) => `${api.baseUrl}/game/${id}`,

  createGameUrl: () => `${api.baseUrl}/game/`,

  updateGameUrl: (id) => `${api.baseUrl}/game/${id}`,

  deleteGameUrl: (id) => `${api.baseUrl}/game/${id}`,

  // endpoint ref Contas de Usuário
  readAccountByIdUrl: (id) => `${api.baseUrl}/account/${id}`,

  createAccountUrl: () => `${api.baseUrl}/account/`,

  updateAccountUrl: (id) => `${api.baseUrl}/account/${id}`,

  deleteAccountUrl: (id) => `${api.baseUrl}/account/${id}`,

  //endpoint ref generos de jogos

  readAllGenresUrl: () => `${api.baseUrl}/genre/`,

  // readGenreByIdUrl: (id) => `${api.baseUrl}/genre/${id}`,

  // Auth Header

  authHeader: () => ({
    Authorization: "Bearer " + JwtHandler.getJwt(),
  }),

  //GET
  buildApiGetRequest: (url, auth) =>
    fetch(url, {
      method: "GET",
      headers: auth ? new Headers(api.authHeader()) : undefined,
    }),

  //POST
  buildApiPostRequest: (url, body, auth) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        ...(auth ? api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  //PATCH
  buildApiPatchRequest: (url, body, auth) =>
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json",
        ...(auth ? api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  //DELETE
  buildApiDeleteRequest: (url, auth) =>
    fetch(url, {
      method: "DELETE",
      headers: auth ? new Headers(api.authHeader()) : undefined,
    }),
};
