import React from "react";
import ReactDOM from "react-dom";
import Desktop from "./desktop/Desktop";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

/*
 *  This file was left unmodified
 */

ReactDOM.render(<Desktop />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
