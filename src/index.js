import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import App from "./components/App";
import Boards from "./components/boards/Boards";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Signout from "./components/auth/Signout";
import NewBoard from "./components/boards/NewBoard";
import Board from "./components/boards/Board";
import NewThread from "./components/boards/NewThread";

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") }
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Boards} />
          <Route path="/new-board" component={NewBoard} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={Signout} />
          <Route path="/:board/new-thread" component={NewThread} />
          <Route path="/:board" component={Board} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
