import './index.css'
import {NavigationBar} from "./components/NavigationBar";
import {ForumList} from "./components/ForumList";

const data = [
    {
        username: "Daniel",
        postName: 'Covid 19 Disaster Relief'
    },
    {
        username: "Jayden",
        postName: 'World Peace'
    },
    {
        username: "Courtney",
        postName: 'World Hunger'
    },
    {
        username: "Daniel",
        postName: 'Covid 19 Disaster Relief'
    },
    {
        username: "Jayden",
        postName: 'World Peace'
    },
    {
        username: "Courtney",
        postName: 'World Hunger'
    },
    {
        username: "Daniel",
        postName: 'Covid 19 Disaster Relief'
    },
    {
        username: "Jayden",
        postName: 'World Peace'
    },
    {
        username: "Courtney",
        postName: 'World Hunger'
    },
]

function App() {
    return (
        <body>
        <NavigationBar items={["Your Account", "Your Groups", "The Hive"]}/>

        <div style={{padding: 20}}>
            <input type='text'
                   placeholder={'Search'}
                   className={'searchBar'}/>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>

                <ForumList data={data}/>

            </div>

        </div>


        </body>

    );
}

export default App;
