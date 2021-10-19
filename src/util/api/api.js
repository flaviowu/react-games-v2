export const api = {
  baseUrl: "http://localhost:3001",

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

  //GET
  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),

  //POST
  buildApiPostRequest: (url, body) =>
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }),
  //PATCH
  buildApiPatchRequest: (url, body) =>
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }),

  buildApiDeleteRequest: (url) =>
    fetch(url, {
      method: "DELETE",
    }),
};
