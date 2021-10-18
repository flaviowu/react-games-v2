export const api = {
    baseUrl: "http://localhost:3001",

    //endpoint ref games
    readAllGamesUrl: () => `${api.baseUrl}/game/`,

    readGameByIdUrl: (id) => `${api.baseUrl}/game/${id}`,

    //GET
    buildApiGetRequest: url => fetch(url, {
        method: "GET",
    })
}