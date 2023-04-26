import React from "react"
import ReactDOM from "react-dom/client";
// const heading1 = React.createElement("h1",{
//     id:"title",
//     key:"h1"
// },"Learning Parcel!!");
// const heading2 = React.createElement("h2",{
//     id:"title2",
//     key:"h2"
// },"Namaste React!! h2");
// const container = React.createElement("div",{},[heading1,heading2]);
//React Element
const header=(
    <div className="title">
        <h1>Welcome to Namaste React!!</h1>
        <h2>Today we will learn about JSX</h2>
        <h3>We will also learn about React Functional Component</h3>
    </div>
)
const Header3=()=>(
    <div>
        This Time I will learn it fully!!!
    </div>
)
//Creating React Functional Component
//react Element inside a component
const Header2=()=>(
    <div className="title2">
        {header}
        <Header3/>
        <h1>Learning React:)</h1>
        <h2>Learning Functional Component</h2>
        <h3>Its fun to learn!!!!</h3>
    </div>
)

const Header=()=>(
    <div className="container">
        <div className="logo">Logo</div>
        <div className="search-bar">
            <input type="text" placeholder="Write..."/>
        </div>
        <div className="user-icon">Icon</div>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Header())