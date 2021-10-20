//React
import React, { useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import { Switch, Route } from "react-router-dom";
import GuardedRoute from "./components/GuardedRoute/GuardedRoute";
import { api } from "./util/api/api";
import { JwtHandler } from "./util/JwtHandler/JwtHandler";

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

//CSS
import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid());
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();

  useEffect(() => {
    const handleOnJwtChange = () => {
      setIsLogged(JwtHandler.isJwtValid());
    };

    window.addEventListener("onJwtChange", handleOnJwtChange);

    // Função de limpeza
    return () => {
      window.removeEventListener("onJwtChange", handleOnJwtChange);
    };
  }, []);

  useEffect(() => {
    if (isLogged) {
      const userId = JwtHandler.getJwtPayload(JwtHandler.getJwt()).sub;
      const loadUser = async () => {
        const response = await api.buildApiGetRequest(
          api.readAccountByIdUrl(userId),
          true
        );
        const body = await response.body;
        setUser(body);
      };
      loadUser();
    }
  }, [isLogged]);

  return (
    <UserContext.Provider
      value={{ user, setUser, profile, setProfile, isLogged, setIsLogged }}
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
              path="/AccountEdit/:id"
              component={AccountForm}
            />
            <GuardedRoute exact path="/AddGame" component={GameForm} />
            <GuardedRoute exact path="/GameEdit/:id" component={GameFormEdit} />
            <GuardedRoute exact path="/Games" component={GameList} />
            <GuardedRoute exact path="/Games/:id" component={GameView} />
          </Switch>
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
