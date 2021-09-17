import {ForumPostCell} from "./ForumPostCell";

import '../index.css'

export function ForumList({data = []}) {

    return (

        <div
            className={'forumList'}
            style={{
                height:'100%',
                overflowY: 'scroll',
            }}>
            {
                data.map((i, j) => <ForumPostCell key={j} item={{...i, index: j}}/>)
            }

        </div>

    );
}
