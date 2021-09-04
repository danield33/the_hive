import {ForumPostCell} from "./ForumPostCell";


export function ForumList({data}) {

    return (
        <div style={{
            display: "flex",
            flex:1,
            backgroundColor: 'white',
            marginTop: 50,
            flexDirection: 'column'
        }}>

            <ForumPostCell/>
            <ForumPostCell/>

        </div>
    );
};