import {ForumPostCell} from "./ForumPostCell";


export function ForumList({data = []}) {

    return (
        <div style={{
            display: "flex",
            flex: 1,
            backgroundColor: 'white',
            marginTop: 50,
            flexDirection: 'column'
        }}>

            <div style={{
                height: '500',
                overflowY: 'scroll',
            }}>
                {
                    data.map((i, j) => <ForumPostCell key={j} item={{...i, index: j}}/>)
                }

            </div>

        </div>
    );
}
