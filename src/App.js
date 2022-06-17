import NavBar from "./common/navbar";
import "./scss/App.scss";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="h-screen ml-48 container ">
        <h1 className="font-medium text-5xl text-white text-center pt-40">
          This is a Test for Fontawesome
        </h1>
      </div>
    </div>
  );
}

export default App;
