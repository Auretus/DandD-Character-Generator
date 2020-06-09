import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import Footer from "./components/layout/Footer";
import Create from "./components/layout/Create";
import Roster from "./components/layout/Roster";
import CharacterSheet from "./components/characters/CharacterSheet";
import HowTo from "./components/reference/HowTo";
import Races from "./components/reference/Races";
import Themes from "./components/reference/Themes";
import Classes from "./components/reference/Classes";
import Skills from "./components/reference/Skills";
import Equipment from "./components/reference/Equipment";
import Spells from "./components/reference/Spells";

if(localStorage.jwtToken){
    const token = localStorage.jwtToken;
    setAuthToken(token);

    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime){
        store.dispatch(logoutUser());
        window.location.href = "./login";
    }
}

class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/howtoplay" component={HowTo} />
                        <Route exact path="/races" component={Races} />
                        <Route exact path="/themes" component={Themes} />
                        <Route exact path="/classes" component={Classes} />
                        <Route exact path="/skills" component={Skills} />
                        <Route exact path="/equipment" component={Equipment} />
                        <Route exact path="/spells" component={Spells} />
                        <Switch>
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                            <PrivateRoute exact path="/create" component={Create} />
                            <PrivateRoute exact path="/roster" component={Roster} />
                            <PrivateRoute exact path="/charactersheet" component={CharacterSheet} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
