import './index.css'
import {Link, Route, Router, Switch, BrowserRouter} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ForumPost from "./screens/ForumPost"
import Routes from "./Routes";


function App() {
    return(
        <div>
            <Routes/>
        </div>

    )
}

export default App;
