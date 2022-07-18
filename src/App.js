// import logo from './logo.svg';
import "./App.css";
import SignIn from "./Components/Signin";
import { store } from "./Redux/configStore";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <SignIn />
        </header>
      </Provider>
    </div>
  );
}

export default App;
