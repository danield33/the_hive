import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import history from './History.js';
import {ForumPost, Groups, Account, Home, wallpapers} from "./screens";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Post" component={ForumPost} />
                    <Route path="/Account" component={Account} />
                    <Route path="/Account" component={Groups} />
                    <Route path="/Wallpapers" component={wallpapers} />

                </Switch>
            </Router>
        )
    }
}