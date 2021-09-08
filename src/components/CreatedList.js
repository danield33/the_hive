import '../index.css'
import {ForumPostCell} from "./ForumPostCell";
import useWindowDimensions from "./hooks/useWindowDimensions";

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

    const navigateToPost = () => {
        alert(1)
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

            <div className={'triangle'} style={{alignSelf: 'flex-end'}} >
                <p style={{
                    transform: 'rotate(310deg)',
                    position: 'absolute',
                    marginLeft: -60,
                    marginTop: 45,
                    textAlign: 'center'
                }}>Publish Idea</p>
            </div>

        </div>
    );
};