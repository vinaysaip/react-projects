const dom = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child 1" },
    React.createElement("h1", null, "Hello World")
  ),
  React.createElement(
    "div",
    { id: "child 2" },
    React.createElement("h1", null, "Hello World2")
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(dom);
