// import logo from './logo.svg';
import "./App.css";
import SignIn from "./Components/Signin";
import Users from "./Components/Users";
import { Route, Routes } from "react-router-dom";
// -- Component Styles
// import "./Styles/app.scss";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
