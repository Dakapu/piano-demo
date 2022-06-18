import NavBar from "./common/navbar";
import "./scss/App.scss";

function App() {
  return (
    <div className="w-full">
      <NavBar />
      <div className="h-screen ml-48 container ">
        <h1 className="font-bold text-3xl text-white text-center uppercase pt-10">
          This is a Test for Fontawesome
        </h1>
      </div>
    </div>
  );
}

export default App;
