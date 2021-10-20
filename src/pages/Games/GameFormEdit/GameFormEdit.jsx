import React, { useEffect, useState } from "react";
import { api } from "../../../util/api/api";

function GameForm(props) {
  const id = props.match.params.id;

  const [genres, setGenres] = useState([]);
  const [game, setGame] = useState(undefined);
  const [checkedGenres, setCheckedGenres] = useState()

  useEffect(() => {
    const loadGenres = async () => {
      const response = await api.buildApiGetRequest(api.readAllGenresUrl(), true);
      const results = await response.json();
      setGenres(results);
    };

    loadGenres();
  }, []);

  useEffect(() => {
    const loadGame = async () => {
      const response = await api.buildApiGetRequest(api.readGameByIdUrl(id), true);
      const results = await response.json();
      console.log(results);
      setGame(results);
      const temp = results.genres.map((genre) => genre.id)
      setCheckedGenres(temp)
    };

    loadGame();
    
  }, [id]);

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
      genreIds: checkedGenres
    };

    const response = await api.buildApiPatchRequest(
      api.updateGameUrl(id),
      payload, true
    );

    const body = await response.json();
    console.log(body);
    
  }

  function checkIfChecked(genreId) {
    return checkedGenres.includes(genreId)
  }

  function handleCheckChange(genreId) {
    const checkedGenresAux = checkedGenres;
    if (checkIfChecked(genreId)) {
      checkedGenresAux.splice(checkedGenresAux.indexOf(genreId), 1)
      
    } else {
      checkedGenresAux.push(genreId)
    }
    setCheckedGenres(checkedGenresAux)
    console.log(checkedGenres)

  }

  if (!game || !checkedGenres) {
    return (
      <div>
        <h2>Carregando...</h2>
      </div>
    );
  }

  return (
    <div className="GameForm">
      <h1>{game.title}</h1>
      <form name="GameForm" onSubmit={handleSubmit}>
        <div className="input-section">
          <label htmlFor="title">Título do Jogo</label>
          <input type="text" name="title" defaultValue={game.title}/>
        </div>
        <div className="input-section">
          <label htmlFor="cover" >Capa</label>
          <input type="text" name="cover" defaultValue={game.cover}/>
        </div>
        <div className="input-section">
          <label htmlFor="year">Ano de Lançamento:</label>
          <input type="text" name="year" defaultValue={game.year}/>
        </div>
        <div className="input-section">
          <label htmlFor="trailer">Trailer</label>
          <input type="text" name="trailer" defaultValue={game.trailer}/>
        </div>
        <div className="input-section">
          <label htmlFor="gameplay">Gameplay</label>
          <input type="text" name="gameplay" defaultValue={game.gameplay}/>
        </div>
        <div className="input-section">
          <label htmlFor="description">Descrição</label>
          <textarea name="description" rows="10" cols="25" defaultValue={game.description}></textarea>
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
                  defaultChecked={checkIfChecked(genre.id)}
                  onChange={()=>handleCheckChange(genre.id)}
                />
                <label htmlFor={genre.name}>{genre.name}</label>
              </div>
            );
          })}
        </div>
        <input type="submit" value="Salvar" />
        <input type="reset" value="Reset" />
      </form>
    </div>
  );
}

export default GameForm;
