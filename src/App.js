import "./App.css";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";
import { UserContext } from "./context/UserContext";
import Login from "./pages/Login/login";
import AddGame from "./pages/AddGame/AddGame";

function App() {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <div classname="navbar">
          <Header />
        </div>
        <div className="body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/AddGame" component={AddGame} />
            <Route exact path="/Games" component={Games} />
            <Route exact path="/Login" component={Login} />
          </Switch>
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
