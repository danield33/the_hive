import './index.css'
import {Link, Route, Router, Switch, BrowserRouter} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ForumPost from "./screens/ForumPost"


function App() {
    return(
        <div>
            <BrowserRouter>

                <div>

                    <Switch>
                        <Route path={'/'}>
                            <HomeScreen/>
                        </Route>

                    </Switch>

                </div>
            </BrowserRouter>
        </div>

    )
}

export default App;
