import "./App.css";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import GameList from "./pages/Games/GameList/GameList";
import { UserContext } from "./context/UserContext";
import Login from "./pages/Login/login";
import GameForm from "./pages/Games/GameForm/GameForm";
import GameFormEdit from "./pages/Games/GameFormEdit/GameFormEdit";
import AccountView from "./pages/Account/AccountView/AccountView";
import AccountForm from "./pages/Account/AccountForm/AccountForm";
import GameView from "./pages/Games/GameView/GameView";

function App() {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();

  return (
    <UserContext.Provider value={{ user, setUser, profile, setProfile }}>
      <div className="App">
        <div className="navbar">
          <Header />
        </div>
        <div className="body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/AccountView/:id" component={AccountView} />
            <Route exact path="/AccountEdit" component={AccountForm} />
            <Route exact path="/AddGame" component={GameForm} />
            <Route exact path="/GameEdit/:id" component={GameFormEdit} />
            <Route exact path="/Games" component={GameList} />
            <Route exact path="/Games/:id" component={GameView} />
            <Route exact path="/Login" component={Login} />
          </Switch>
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
