//React
import React, { useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import { Switch, Route } from "react-router-dom";
import GuardedRoute from "./components/GuardedRoute/GuardedRoute";

import { JwtHandler } from "./util/JwtHandler/JwtHandler";
import { api } from "./util/api/api";

//Pages
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import GameList from "./pages/Games/GameList/GameList";
import Login from "./pages/Login/login";
import GameForm from "./pages/Games/GameForm/GameForm";
import GameFormEdit from "./pages/Games/GameFormEdit/GameFormEdit";
import AccountView from "./pages/Account/AccountView/AccountView";
import AccountForm from "./pages/Account/AccountForm/AccountForm";
import GameView from "./pages/Games/GameView/GameView";
import FavoriteGamesList from "./pages/Games/FavoriteGamesList/FavoriteGamesList";

//CSS
import "./App.css";
import ProfileView from "./pages/Profiles/ProfileView/ProfileView";

function App() {
  const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid() || false);
  const [account, setAccount] = useState();
  const [profile, setProfile] = useState();

  useEffect(() => {
    if (isLogged) {
      const loadAccount = async (id) => {
        const response = await api.buildApiGetRequest(api.readAccountByIdUrl(id), true);
        const accountData = await response.json();
        setAccount(accountData);
        console.log(accountData)
      };
      loadAccount(localStorage.getItem("userId"));
    }

  }, [isLogged]);

  return (
    <UserContext.Provider
      value={{ account, setAccount, profile, setProfile, isLogged, setIsLogged }}
    >
      <div className="App">
        <div className="navbar">
          <Header />
        </div>
        <div className="body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/AccountCreate" component={AccountForm} />
            <Route exact path="/Login" component={Login} />

            <GuardedRoute
              exact
              path="/AccountView/:id"
              component={AccountView}
            />
            <GuardedRoute
              exact
              path="/AccountEdit/"
              component={AccountForm}
            />
            <GuardedRoute exact path="/AddGame" component={GameForm} />
            <GuardedRoute exact path="/GameEdit/:id" component={GameFormEdit} />
            <GuardedRoute exact path="/Games" component={GameList} />
            <GuardedRoute exact path="/FavoriteGames" component={FavoriteGamesList} />
            <GuardedRoute exact path="/Games/:id" component={GameView} />
            <GuardedRoute exact path="/Profile/:id" component={ProfileView} />
          </Switch>
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
