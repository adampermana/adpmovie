// import logo from './logo.svg';
import "./App.css";
import NavigationBar from "./components/Navigation";
import Intro from "./components/Intro";
import Trending from "./components/Trending"

import "./Style/landingpage.css";

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End Section */}

      {/* Trending */}
      <div className="trending">
        <Trending />
      </div>
      {/* End Trending */}
    </div>
  );
}

export default App;
