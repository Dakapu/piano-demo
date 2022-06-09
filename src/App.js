import "./scss/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

function App() {
  return (
    <div class="container">
      <h1>This is a Test for Fontawesome</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={solid("paw")} />
          Pet
        </li>
        <li>
          <FontAwesomeIcon icon={solid("car")} />
          Car
        </li>
        <li>
          <FontAwesomeIcon icon={regular("map")} />
          House
        </li>
      </ul>
    </div>
  );
}

export default App;
