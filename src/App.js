import "./App.css"
import Navigationbar from "./components/Navigationbar"
import Intro from "./components/Intro";
import Buah from "./components/Buah";
import Sayur from "./components/sayur"

import "./style/landingpage.css"

function App() {
  return (
    <div>
    {/*intro section*/}
      <div className="myBG">
        <Navigationbar />
        <Intro />
      </div>
      <div className="buah">
        <Buah/>
      </div>
      <div className="sayur">
        <Sayur />
      </div>
    </div>
  ); 
}

export default App