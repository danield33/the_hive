import React, {Component} from 'react';

import {Route, Switch} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import {RTEditor} from "../components/RTEditor";

export class ForumPost extends Component{

    render(){
        return(
            <div style={{display: 'flex', flex: 1}}>

                <RTEditor/>

            </div>
        )
    }

}