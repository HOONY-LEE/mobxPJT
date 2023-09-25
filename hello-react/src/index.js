import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const title = React.createElement("h1", null, "JSX Test");
const text = React.createElement("p", null, "Paragraph Text~");
const container = React.createElement("div", null, [title, text]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

reportWebVitals();
