import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
//
import { Provider } from "react-redux";
import { store } from "./redux/store";
//
import "../node_modules/normalize.css/normalize.css";
import './styles/main.scss';
//
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
