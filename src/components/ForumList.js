import {ForumPostCell} from "./ForumPostCell";
import useWindowDimensions from "./hooks/useWindowDimensions";


export function ForumList({data = []}) {


    const {height} = useWindowDimensions();
    console.log(data)
    return (
        <div style={{
            display: "flex",
            flex: 1,
            backgroundColor: 'white',
            marginTop: 50,
            flexDirection: 'column',
        }}>

            <div style={{
                height: height*.8,
                overflowY: 'scroll',
            }}>
                {
                    data.map((i, j) => <ForumPostCell key={j} item={{...i, index: j}}/>)
                }

            </div>

        </div>
    );
}
