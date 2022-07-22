// import logo from './logo.svg';
import "./App.css";
import SignIn from "./Components/Signin";
import SignUp from "./Components/Signup";
import Users from "./Components/Users";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


function App() {
  const { userAuth } = useSelector(({ authReducer }) => authReducer);

  console.log("rrrr", userAuth);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
