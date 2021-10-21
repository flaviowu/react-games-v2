import React, { useEffect, useState } from "react";
import ProfileCard from "../../../components/ProfileCard/ProfileCard";
import { api } from "../../../util/api/api";
import { Link } from "react-router-dom";
import "./AccountView.css";
import CircularProgress from "@material-ui/core/CircularProgress"

function AccountView(props) {
  const id = props.match.params.id;
  const [account, setAccount] = useState();

  useEffect(() => {
    const loadAccount = async () => {
      const response = await api.buildApiGetRequest(api.readAccountByIdUrl(id),true);
      const result = await response.json();
      setAccount(result);
      console.log(result);
    };
    loadAccount();
  },[id]);

  if (account) {
    return (
      <div>
        <h3>
          {account.name} {account.lastname}
        </h3>
        <h4>E-mail: {account.email}</h4>
        <h4>Perfis Cadastrados:</h4>
        <div className="account-profiles">
          {account.profiles.map((profile) => (
            <div key={profile.id}>
            <Link to={`/Profile/${profile.id}`}><ProfileCard  profile={profile} /></Link>
            
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <CircularProgress/>
      </div>
    );
  }
}

export default AccountView;
