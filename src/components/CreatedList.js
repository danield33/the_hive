import '../index.css'
import {ForumPostCell} from "./ForumPostCell";
import useWindowDimensions from "./hooks/useWindowDimensions";
import {BrowserRouter, Link, Route, Router, Switch} from "react-router-dom";
import ForumPost from "../screens/ForumPost";
import React from "react";

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
        <BrowserRouter>
            <div className={'forumList'}>

                <div style={{
                    border: "black 2px solid",
                    height: useWindowDimensions().height * .8,
                }}>


                    {
                        data.map(i => renderPost(i))
                    }
                </div>

                <Link to={'/forumPost'}>
                    <div className={'triangle'} style={{alignSelf: 'flex-end'}} >
                        <p style={{
                            transform: 'rotate(310deg)',
                            position: 'absolute',
                            marginLeft: -60,
                            marginTop: 45,
                            textAlign: 'center'
                        }}>Publish Idea</p>
                    </div>
                </Link>

                        <Switch>
                            <Route path={'/forumPost'}>
                                <div>
                                    <ForumPost/>
                                </div>
                            </Route>
                        </Switch>

            </div>
        </BrowserRouter>

    );
};