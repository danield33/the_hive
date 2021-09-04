import {ForumPostCell} from "./ForumPostCell";


export function ForumList({data}) {

    return (
        <div style={{
            display: "flex",
            flex:1,
            backgroundColor: 'white'
        }}>

            <ForumPostCell/>

        </div>
    );
};