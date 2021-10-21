import React, { useState, useEffect } from "react";
import { api } from "../../../util/api/api";
import "./ProfileView.css";

function ProfileView(props) {
  const id = props.match.params.id;
  const [profile, setProfile] = useState({});
  const [editMode, setEditMode] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      const response = await api.buildApiGetRequest(
        api.readProfileByIdUrl(id),
        true
      );
      const result = await response.json();
      setProfile(result);
      console.log(response);
      console.log(result);
    };
    loadProfile();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;

    const payload = {
      title,
      image,
    };

    const uploadPatchRequest = async (payload, id) => {
      const response = await api.buildApiPatchRequest(
        api.updateProfileUrl(id),
        payload,
        true
      );
    };

    uploadPatchRequest(payload, id);
    props.history.push(`/AccountView/${profile.accountId}`);
  };

  const handleDelete = () => {
    const removeProfile = async (id) => {
      const response = await api.buildApiDeleteRequest(api.deleteProfileUrl(id), true);
    };
    removeProfile(id);
    props.history.push(`/AccountView/${profile.accountId}`);
  };

  return (
    <div className="profile-data">
      <h3>Dados do Perfil</h3>
      <form name="profile-form" onSubmit={handleSubmit}>
        <img src={profile.image} alt="foto do profile" />
        <label htmlFor="title">Nome do Perfil:</label>
        <input
          type="text"
          name="title"
          defaultValue={profile.title}
          disabled={editMode}
        />
        <label htmlFor="title">URL da Imagem:</label>
        <input
          type="url"
          name="image"
          defaultValue={profile.image}
          disabled={editMode}
        />
        <button type="submit" disabled={editMode}>
          Salvar
        </button>
        <button type="button" onClick={handleDelete} disabled={editMode}>Deletar</button>
        <button type="button" onClick={() => setEditMode(!editMode)}>
          Editar {editMode ? "Off" : "On"}
        </button>
      </form>
    </div>
  );
}

export default ProfileView;
