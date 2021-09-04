import './index.css'
import {NavigationBar} from "./components/NavigationBar";
import {ForumList} from "./components/ForumList";

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

                <ForumList/>

            </div>

        </div>


        </body>

    );
}

export default App;
