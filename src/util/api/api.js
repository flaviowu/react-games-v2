export const api = {
    baseUrl: "http://localhost:3001",

    //endpoint ref games
    readAllGamesUrl: () => `${api.baseUrl}/game/`,

    readGameByIdUrl: (id) => `${api.baseUrl}/game/${id}`,

    // endpoint ref Contas de Usuário
    readAccountByIdUrl: (id) => `${api.baseUrl}/account/${id}`,

    //endpoint ref generos de jogos
    
    readAllGenresUrl: () => `${api.baseUrl}/genre/`,

    // readGenreByIdUrl: (id) => `${api.baseUrl}/game/${id}`,

    //GET
    buildApiGetRequest: url => fetch(url, {
        method: "GET",
    })
}