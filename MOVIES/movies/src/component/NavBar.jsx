import React, { Component } from 'react'
import { Link } from "react-router-dom";
import MoviesPage from './MoviesPage';
import New from './New';
import { Switch, Route } from "react-router-dom";
// import NavBar from './component/NavBar';
import Login from './Login';
 export default class NavBar extends Component {
    render() {
        return (
            <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Movies</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/login">Login</Link>
                    </div>
                </div>
                {/* <Switch>
          <Route path="/new" component={New}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={MoviesPage}></Route>
        </Switch> */}
            </nav>
</>

        )
    }
}