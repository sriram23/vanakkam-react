// Creating a React element
const heading = React.createElement("h1", {id: "heading"}, "Hello World From React!")

// Consoling the heading to see what's there.
console.log(heading)
// Creating the DOM ROOT element
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering the created element in the DOM
root.render(heading);