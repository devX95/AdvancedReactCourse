import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import reducers from "./reducers";
import thunk from "redux-thunk";
import Feature from "./components/Feature";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";

const store = createStore(
  reducers,
  {
    auth: {
      authenticated: localStorage.getItem("token")
    }
  },
  applyMiddleware(thunk)
);

const jsx = (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" component={Welcome} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Feature} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin}/>
      </App>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(jsx, document.querySelector("#root"));
