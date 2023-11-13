const heading = React.createElement("h1", { id: "heading" }, [
  React.createElement("h2", {}, "Hello world"),
  React.createElement("p", {}, "This is a paragraph"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
