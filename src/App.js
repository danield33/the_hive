import './index.css'
import {Link, Route, Router, Switch, BrowserRouter} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ForumPost from "./screens/ForumPost"
import Routes from "./Routes";
import {NavigationBar} from "./components/NavigationBar";
import React from "react";


function App() {
    return (
        <div>
            <NavigationBar items={[{
                text: "Your Account",
            }, {
                text: "Your Groups"
            }, {
                text: "The Hive",
                linkTo: "/"
            }]}/>
            <Routes/>
        </div>

    )
}

export default App;
