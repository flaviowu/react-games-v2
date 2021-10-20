import React, { useEffect, useState } from "react";
import { api } from "../../../util/api/api";

function GameForm() {

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const loadGenres = async () => {
      const response = await api.buildApiGetRequest(api.readAllGenresUrl(), true);
      const results = await response.json();
      setGenres(results);
    };

    loadGenres();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const cover = e.target.cover.value;
    const year = e.target.year.value;
    const trailer = e.target.trailer.value;
    const gameplay = e.target.gameplay.value;
    const description = e.target.description.value;

    const payload = {
      title,
      cover,
      year,
      trailer,
      gameplay,
      description,
    };

    const response = await api.buildApiPostRequest(
      api.createGameUrl(),
      payload
    );

    const body = await response.json();
    console.log(body);
    
    return;
  }

  return (
    <div className="GameForm">
      <form name="GameForm" onSubmit={handleSubmit}>
        <div className="input-section">
          <label htmlFor="title">Título do Jogo</label>
          <input type="text" name="title" />
        </div>
        <div className="input-section">
          <label htmlFor="cover">Capa</label>
          <input type="text" name="cover" />
        </div>
        <div className="input-section">
          <label htmlFor="year">Ano de Lançamento:</label>
          <input type="text" name="year" />
        </div>
        <div className="input-section">
          <label htmlFor="trailer">Trailer</label>
          <input type="text" name="trailer" />
        </div>
        <div className="input-section">
          <label htmlFor="gameplay">Gameplay</label>
          <input type="text" name="gameplay" />
        </div>
        <div className="input-section">
          <label htmlFor="description">Descrição</label>
          <textarea name="description" rows="10" cols="25"></textarea>
        </div>
        <div className="addGame-Form-Genres">
          {genres.map((genre) => {
            return (
              <div key={genre.id} className={`genre_${genre.id}`}>
                <input
                  type="checkbox"
                  id={genre.id}
                  name={genre.name}
                  value={genre.id}
                />
                <label htmlFor={genre.name}>{genre.name}</label>
              </div>
            );
          })}
        </div>
        <input type="submit" value="Salvar" />
        <input type="reset" value="Limpar" />
      </form>
    </div>
  );
}

export default GameForm;
