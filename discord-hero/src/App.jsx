import ditto1 from "./assets/discord-logo-white.png";
import ditto2 from "./assets/menu-icon.png";
import ditto3 from "./assets/discord-background.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <ul className="nav-bar-ul">
          <li>
            <img src={ditto1} className="logo" alt="Discord Logo" />
          </li>
          <li>
            <img src={ditto2} className="menu-icon" alt="Menu Icon" />
          </li>
        </ul>
      </nav>
      <div className="headings-container">
        <div className="headings">IMAGINE A PLACE...</div>
        <p className="p"> ... where you can belong to a school club, a gaming group, or a worldwide art community. 
          Where just you and a handful of friends can spend time together.
          A place that makes it easy to talk every day and hang out more often.
        </p>
        <button className="mac"> Download for Mac</button>
        <button className="browser"> Open Discord in your browser</button>
      </div>
      <img src={ditto3} className="discord-bck" alt="Discord background" />
    </div>
  );
}

export default App;
