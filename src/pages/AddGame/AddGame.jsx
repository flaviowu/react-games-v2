import React, { useEffect, useState } from "react";
import { api } from "../../util/api/api";

function AddGame() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const loadGenres = async () => {
      const response = await api.buildApiGetRequest(api.readAllGenresUrl());
      const results = await response.json();
      setGenres(results);
    };

    loadGenres();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="addGame">
      <form name="addGame" onSubmit={handleSubmit}>
        <div className="input">
          <div classname="input-section">
            <label htmlFor="title">Título do Jogo</label>
            <input type="text" name="title" />
          </div>
          <div classname="input-section">
            <label htmlFor="cover">Capa</label>
            <input type="text" name="cover" />
          </div>
          <div classname="input-section">
            <label htmlFor="year">Ano de Lançamento:</label>
            <input type="text" name="year" />
          </div>
          <div classname="input-section">
            <label htmlFor="trailer">Trailer</label>
            <input type="text" name="trailer" />
          </div>
          <div classname="input-section">
            <label htmlFor="gameplay">Gameplay</label>
            <input type="text" name="gameplay" />
          </div>
          <div classname="input-section">
            <label htmlFor="description">Descrição</label>
            <textarea name="description" rows="10" cols="25"></textarea>
          </div>
        </div>
        <div className="addGame-Form-Genres">
          {genres.map((genre) => {
            return (
              <>
                <input
                  type="checkbox"
                  id={genre.id}
                  name={genre.name}
                  value={genre.id}
                />
                <label htmlFor={genre.name}>{genre.name}</label>
              </>
            );
          })}
        </div>
        <input type="submit" value="Salvar" />
        <input type="reset" value="Limpar" />
      </form>
    </div>
  );
}

export default AddGame;
