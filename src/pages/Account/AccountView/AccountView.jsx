import React, { useEffect, useState } from "react";
import ProfileCard from "../../../components/ProfileCard/ProfileCard";
import { api } from "../../../util/api/api";
import "./AccountView.css";

function AccountView(props) {
  const id = props.match.params.id;
  const [user, setUser] = useState();

  useEffect(() => {
    const loadAccount = async () => {
      const response = await api.buildApiGetRequest(api.readAccountByIdUrl(id));
      const result = await response.json();
      setUser(result);
      console.log(result);
    };
    loadAccount();
  }, [id]);

  if (user) {
    return (
      <div>
        <h3>
          {user.name} {user.lastname}
        </h3>
        <h4>E-mail: {user.email}</h4>
        <h4>Perfis Cadastrados:</h4>
        <div className="account-profiles">
          {user.profiles.map((profile) => (
            <ProfileCard profile={profile} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>não há usuário</h3>
      </div>
    );
  }
}

export default AccountView;
