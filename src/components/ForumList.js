import {ForumPostCell} from "./ForumPostCell";
import useWindowDimensions from "./hooks/useWindowDimensions";

import '../index.css'

export function ForumList({data = []}) {

    const {height} = useWindowDimensions();
    return (

        <div
            className={'forumList'}
            style={{
                height: '100%',
                overflowY: 'scroll',
            }}>
            {
                data.map((i, j) => <ForumPostCell key={j} item={{...i, index: j}}/>)
            }

        </div>

    );
}
