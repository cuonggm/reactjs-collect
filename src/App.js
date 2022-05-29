import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import Form from "./components/Form/Form";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  // Need Provider with store to use Redux Store
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}

export default App;
