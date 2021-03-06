import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import NewPart from './pages/newPart';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CreatePieceCommerciale from './pages/createPieceCommerciale';
import CreatePieceExterieure from './pages/createPieceExterieure';
import CreatePieceIntermediaire from './pages/createPieceIntermediaire';
import PieceCommerciale from './pages/pieceCommerciale';
import Header from './components/header/header';
import Piece from './pages/piece';
import Atelier from './pages/atelier';
import Commande from './pages/commande';
import Register from './pages/register';
import Login from './pages/login';
import CustomerManager from './pages/customerManager';
import ProjectManager from './pages/projectManager';
import Logout from './pages/logout';
import User from './pages/user';
import UserEdit from './pages/userEdit';
import CustomerManagerEdit from './pages/customerManagerEdit';

function App() {

  return (
    <>
      <Router>
        <Header />
        <main className="container">
          <Switch>
            {/*<Route path="/newpart/piece commerciale" component={CreatePieceCommerciale}/>*/}
            {/*<Route path="/newpart/piece exterieure" component={CreatePieceExterieure}/>*/}
            {/*<Route path="/newpart/piece intermediaire" component={CreatePieceIntermediaire}/>*/}
            {/*<Route path="/pieceCommerciale" component={PieceCommerciale}/>*/}
            {/*<Route path="/newpart" component={NewPart}/>*/}
            {/*<Route path="/pieces" component={Piece}/>*/}
            {/*<Route path="/atelier" component={Atelier}/>*/}
            {/*<Route path="/commande" component={Commande}/>*/}
            <Route path="/customerManager/edit" component={CustomerManagerEdit}/>
            <Route path="/user/edit" component={UserEdit}/>
            <Route path="/login" component={Login}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/register" component={Register}/>
            <Route path="/user" component={User}/>
            <Route path="/customerManager" component={CustomerManager}/>
            <Route path="/projectManager" component={ProjectManager}/>
            <Route path="/" component={Home}/>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
