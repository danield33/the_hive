import React, {Component} from 'react';
import {ForumList} from "../components/ForumList";
import {CreatedList} from "../components/CreatedList";


export class HomeScreen extends Component {
    render() {
        return (
            <div>

                <div style={{padding: 20}}>
                    <input type='text'
                           placeholder={'Search'}
                           className={'searchBar'}/>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>

                        <ForumList data={data}/>
                        <div style={{
                            marginLeft: 20
                        }}>
                            <CreatedList/>
                        </div>

                    </div>

                </div>

            </div>

        );
    }
}

HomeScreen.propTypes = {};

const data = [
    {
        username: "Daniel",
        postName: 'Covid 19 Disaster Relief'
    },
    {
        username: "Jayden",
        postName: 'World Peace'
    },
    {
        username: "Courtney",
        postName: 'World Hunger'
    },
    {
        username: "Daniel",
        postName: 'Covid 19 Disaster Relief'
    },
    {
        username: "Jayden",
        postName: 'World Peace'
    },
    {
        username: "Courtney",
        postName: 'World Hunger'
    },
    {
        username: "Daniel",
        postName: 'Covid 19 Disaster Relief'
    },
    {
        username: "Jayden",
        postName: 'World Peace'
    },
    {
        username: "Courtney",
        postName: 'World Hunger'
    },
]
