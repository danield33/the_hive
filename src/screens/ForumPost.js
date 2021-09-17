import React, {Component} from 'react';
import '../index.css'
import {RTEditor} from "../components/RTEditor";

export class ForumPost extends Component{

    render(){
        return(
            <div className={'display flex'}>

                <RTEditor/>

            </div>
        )
    }

}