import React from "react"
import ReactDOM from "react-dom/client";
const heading1 = React.createElement("h1",{},"Learning Parcel!!");
const heading2 = React.createElement("h2",{},"Namaste React!! h2");
const container = React.createElement("div",{},[heading1,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container)