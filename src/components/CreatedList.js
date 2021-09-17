import '../index.css'
import useWindowDimensions from "./hooks/useWindowDimensions";
import React from "react";
import {Nav} from 'react-bootstrap';

export function CreatedList({data = []}) {

    const renderPost = (item) => {

        return (
            <div className={'formPostCellContainer'}>
                <p>{item.name}</p>
            </div>
        )
    }

    return (

            <div className={'forumList'}>

                <div style={{
                    border: "black 2px solid",
                    height: useWindowDimensions().height * .8,
                }}>


                    {
                        data.map(i => renderPost(i))
                    }
                </div>

                <Nav.Link href={'/Post'}>
                    <div className={'triangle'} style={{alignSelf: 'flex-end'}} >
                        <p>Publish Idea</p>
                    </div>
                </Nav.Link>

            </div>

    );
};