import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../../style/theme";
import {Router} from "../Router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../reducers";
import { routerMiddleware } from "connected-react-router";

import Header from "../Header"
import {ContentWrapper} from "./style"

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

export const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <ContentWrapper>
        <Header/>
        <Router history={history} />
      </ContentWrapper>

    </MuiThemeProvider>
  </Provider>
);

export default App;


//heady-actor.surge.sh
// usuario para testes={
// 	"email": "ricardo-hamilton@labenu.com.br",
// 	"password": "123456"
// }
