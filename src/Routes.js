import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ForumPost from "./screens/ForumPost";
import history from './History.js';
import Account from "./screens/Account/Account";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomeScreen} />
                    <Route path="/Post" component={ForumPost} />
                    <Route path="/Account" component={Account} />

                </Switch>
            </Router>
        )
    }
}