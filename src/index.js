import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormspreeProvider } from "@formspree/react";
import AuthContext from "./Context";
ReactDOM.render(
  <React.StrictMode>
    <FormspreeProvider project="1659968672212451063">
      <AuthContext>
        <App />
      </AuthContext>
    </FormspreeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
