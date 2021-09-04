import './index.css'
import {NavigationBar} from "./components/NavigationBar";

function App() {
  return (
      <body>
          <NavigationBar items={["Your Account", "Your Groups", "The Hive"]}/>
      </body>

  );
}

export default App;
