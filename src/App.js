// import logo from './logo.svg';
import "./App.css";
import SignIn from "./Components/Signin";
import Users from "./Components/Users";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">  
        </header> */}
        <Routes>
        <Route
        path="/signin"
        element={ <SignIn />}
      />
        <Route
        path="/users"
        element={ <Users />}
      />
        </Routes>
    </div>
  );
}

export default App;
