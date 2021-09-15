import '../index.css'
import useWindowDimensions from "./hooks/useWindowDimensions";
import React from "react";
import {Nav} from 'react-bootstrap';

export function CreatedList({data = []}) {

    const renderPost = (item) => {

        return (
            <div className={'formPostCellContainer'}>
                <p style={{
                    fontSize: 25,
                    paddingLeft: 20,
                    paddingRight: 20
                }}>{item.name}</p>
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
                        <p style={{
                            transform: 'rotate(310deg)',
                            position: 'absolute',
                            marginLeft: -60,
                            marginTop: 45,
                            textAlign: 'center'
                        }}>Publish Idea</p>
                    </div>
                </Nav.Link>

            </div>

    );
};