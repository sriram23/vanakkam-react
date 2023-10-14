// Creating a React element
const heading = React.createElement("h1", {id: "heading"}, "Hello World From React!")

// Consoling the heading to see what's there.
console.log(heading)

// Creating a complex html structure
const parent = React.createElement("div", {id: "parent"},
                                [
								  React.createElement("div", {id: "child"},
								  [
                                    React.createElement("h1", {}, "I'm a h1 tag"),
                                    React.createElement("h2", {}, "I'm a h2 tag")
                                  ]),
                                  React.createElement("div", {id: "child2"},
								  [
                                    React.createElement("h1", {}, "I'm a h1 tag"),
                                    React.createElement("h2", {}, "I'm a h2 tag")
                                  ])
                                ])
// Consoling the parent to see what's there.
console.log(parent)

// Creating the DOM ROOT element
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering the created element in the DOM
root.render(parent);