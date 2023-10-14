# Episode 01 - Inception
>Rule1: Make your own notes
>Rule2: Use Laptop. Pause video, try things out
>Rule3: Maintain own Github Repo

# Part 1
 - Use Google chrome & Dev console. To be inline with Akshay
 - Use VS Code
 - Created a new folder called namaste-react
> Task: Write a plain html with hello world

 - Emmet => Generate some boilerplate code for you
 - html:5 -> Boilerplate for html
```html
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Vanakkam React</title>

</head>

<body>

    <div id="root">

        <h1>Hello World!</h1>

    </div>

</body>

</html>
```

__Output__:
<img width="363" alt="Pasted image 20231013192230" src="https://github.com/sriram23/vanakkam-react/assets/18396996/01a46d35-583b-4f00-8f1b-734c3edaf620">

> Task: Create Hello World, but this time use js to build it

- Will use js to inject html
- Will use `<script>` tag for js.
- Using document for creating h1 with hello world

```html
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Vanakkam React</title>

</head>

<body>

    <div id="root"></div>

    <script>

        const heading = document.createElement("h1");

        heading.innerHTML = "Hello world from JavaScript!";

        // We have created the heading using js. Now need to put it inside the html.

        const root = document.getElementById("root");

        // The heading will go into the root element as a child of it.

        root.appendChild(heading);

    </script>

</body>

</html>
```

__Output__:
<img width="460" alt="Pasted image 20231013200719" src="https://github.com/sriram23/vanakkam-react/assets/18396996/35bdea62-f2fa-40e4-bfb0-7331f0c175ff">


> How to do the same thing with __React__?

> How does the project understands, what is `document`, `createElement`, `getElementById`, etc?
> How does browser understands these?

 - These are nothing but the super powers the browser have in it.
 - But the browser can't understand `React` code.
 - Let's pull React to our project.
	 - We can add react to our project via CDN (Content Delivery Network / Content Distribution Network). These are place where React is hosted and we are pulling it from there.
	 - Link: https://legacy.reactjs.org/docs/cdn-links.html
	 - Read more about it if needed
	 - Let's copy react cdn to the code
	 - What's there in the CDN?
		 - What's crossorigin? -> _TODO_
		 - What does the link contain?
			 - Huge amount of code.
			 - It's the React code! Plain JS code!
			 - The "SOURCE CODE" of React
			 - React is nothing but a JS lib..!
			 - Written by FB devs.
	 - Post adding the cdn, open browser and type `React` in the console. Means we've successfully imported react and it's available for us to use.
	 - Explore what all there inside it in the console -> _TODO_
	 - 2nd link? What's it? Why 2 files?
		 - `react.development.js` -> Core React
		 - `react-dom.development.js` -> Lib useful for Dom ops.
		 - Why different file?
			 - React not only works on browsers, but also works on mobile phones as well (`React Native`). And there's something called `React 3d`
			 - We won't be having DOM over there in mobiles ( -> _Needs Confirmation_)
	 - Execute ReactDOM in browser console and explore ->_TODO_
 - Let's use the Super Powers

# Part 2

> Use React and create `Hello World` App

 - We can write React code in `<script>` tag
 - Let's create `<h1>` tag with React
 - We will use `React.createElement()`
 - But the API will be little different then JS
 - Takes 3 args
	 - tag
	 - object ->_TODO:_ Check what it is.
	 - what to put inside tag
- How to put it inside HTML?
	- We need to tell react, where to render stuffs
	- Create a root for react, where it will do all DOM manipulations
	- `ReactDOM.createRoot()`
	- Arg would be the `id` where we need to inject (div with id `root`)
	- Then `root.render()`
	- Arg would be the element which needs to be rendered (heading, that we created using `React.createElement`)
- All the things would be rendered inside this `root`.
```html
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Vanakkam React</title>

</head>

<body>

    <div id="root"></div>

  

    <!-- CDN of React -->

    <!-- Now we have React in our project! -->

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  

    <!-- Let's inject React -->

    <script>

        // Creating a React element

        const heading = React.createElement("h1", {}, "Hello World From React!")

        // Creating the DOM ROOT element

        const root = ReactDOM.createRoot(document.getElementById("root"));

        // Rendering the created element in the DOM

        root.render(heading);

    </script>

</body>

</html>
```
__Output__:
<img width="396" alt="Pasted image 20231013211935" src="https://github.com/sriram23/vanakkam-react/assets/18396996/2c127d86-7198-48b5-b0ca-4461a4e22ab1">


# Part 3
 - Let's move all the js things to a js file called `App.js`
 - Expensive ops in web page is DOM manipulation (Putting some node to DOM and removing some from DOM)
 - All popular libs/frameworks tries to optimize it.
 - From now on, we will do everything inside JS, not on html

- What's the obj in the `React.createElement` (Second param)(See previous section)
	- Place where we will give attributes to the element.
	- For example, if we have to provide `id` to the element, it would be like `React.createElement("h1", {id:"heading"}, "Hello World From React!");`
__App.js__
```js
// Creating a React element

const heading = React.createElement("h1", {id: "heading"}, "Hello World From React!")

// Creating the DOM ROOT element

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the created element in the DOM

root.render(heading);
```
__Output__:
<img width="405" alt="Pasted image 20231014133335" src="https://github.com/sriram23/vanakkam-react/assets/18396996/5c942df0-e862-410d-9918-cfca58b4d2ed">


 - Let's create `index.css`
 - import the index.css in our html
 - Let's add some style to our heading
 - What will be consoled, if we console the `const heading` that we've created?
	 - We will get an object over the console..!
	 - It's not a tag, but a js object..!
	 - Nothing but a react element, which in turn is a normal js object.
	 - It has something known as props..
	 - Props = Children + the attributes that we pass in
	 - 2nd and 3rd params of the `createElement`.
__index.html__:
```html
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./index.css"/>

    <title>Vanakkam React</title>

</head>

<body>

    <div id="root"></div>

  

    <!-- CDN of React -->

    <!-- Now we have React in our project! -->

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  

    <!-- Let's inject React -->

    <script src="./App.js"></script>

</body>

</html>
```
__App.js__
```js
// Creating a React element

const heading = React.createElement("h1", {id: "heading"}, "Hello World From React!")

  

// Consoling the heading to see what's there.

console.log(heading)

// Creating the DOM ROOT element

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the created element in the DOM

root.render(heading);
```
__index.css__:
```css
#heading {

    color: red;

}
```
__Output__:
<img width="415" alt="Pasted image 20231014135108" src="https://github.com/sriram23/vanakkam-react/assets/18396996/bf6c403f-c74f-404e-a274-6ac724c2c911">


- The `root.render`'s job is nothing but taking the react element object, create the h1 tag which browser can understand and inject it inside the root element.
- Read more about `React Element`, `render`, `createRoot`, `createElement` -> _TODO_

# Part 4
 - Html is all about complex structure
 - Not all the time it would be a single tag
 - Lots of nesting needs to be done
 - Like div -> div -> h1, span, p -> div -> etc.. (_Left most is the parent and right most is the last children_)
 - How to create this type of structures in React?
 - And if each element has some id/class?
 - Like this:
```js
const parent = React.createElement("div", {id: "parent"}, 
								  React.createElement("div", {id: "child"},
								  React.createElement("h1", {}, "I'm a h1 tag")))
```
 - Render the `parent` instead of `heading`
__App.js__
```js
// Creating a React element

const heading = React.createElement("h1", {id: "heading"}, "Hello World From React!")

  

// Consoling the heading to see what's there.

console.log(heading)

  

// Creating a complex html structure

const parent = React.createElement("div", {id: "parent"},

                                  React.createElement("div", {id: "child"},

                                  React.createElement("h1", {}, "I'm a h1 tag")))

// Consoling the parent to see what's there.

console.log(parent)

  

// Creating the DOM ROOT element

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the created element in the DOM

root.render(parent);
```
__Output__:
<img width="400" alt="Pasted image 20231014140809" src="https://github.com/sriram23/vanakkam-react/assets/18396996/30cff5e8-8019-4dd1-bcf5-93cdc0b1b862">

<img width="414" alt="Pasted image 20231014141001" src="https://github.com/sriram23/vanakkam-react/assets/18396996/1691edaa-4fe0-4285-910a-5605be52ddd1">

 - The react object is transformed to html, which the browser understands well and is been injected to the root element. React takes care of it behind the scenes.
- How to create sibilings?
	- Like div -> div -> __h1,h2__?
	- 3rd arg of `React.createElement` convert to an array
	- It could be a single child or an array of children
	- Like this:
```js
// Creating a complex html structure

const parent = React.createElement("div", {id: "parent"},

                                  React.createElement("div", {id: "child"},

                                  [

                                    React.createElement("h1", {}, "I'm a h1 tag"),

                                    React.createElement("h2", {}, "I'm a h2 tag")

                                  ]))
```
<img width="420" alt="Pasted image 20231014142231" src="https://github.com/sriram23/vanakkam-react/assets/18396996/101aa933-6286-422d-b968-7801b1356797">

- But here React will throw an error, that something we need like a unique "key" prop
<img width="421" alt="Pasted image 20231014142356" src="https://github.com/sriram23/vanakkam-react/assets/18396996/ed13831c-b1ee-4a2c-88fe-f67eef2eaea8">

- We will see in detail about this in future episodes
- Now, what if we need to create a child 2 in the same structure?
	- Like div -> div->h1->h2, div ->h1->h2
```js
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
```
<img width="573" alt="Pasted image 20231014142932" src="https://github.com/sriram23/vanakkam-react/assets/18396996/69bb156a-b2f5-4b74-993c-f57d3a8e5295">

- But looks so messy...!
- It makes life harder...!
- The more complex the structure grows, the code goes even more complex..
- In order to resolve this we have something called __JSX__...
- We will learn it in the next episode..
- It's a myth that React can only be written inside JSX.. So far, we've been writing it in JS! (WOW!)
- JSX makes our life easy, while creating tags and any complex structures..
- All these are React18 stuffs.. (Things we've done so far..)

# Part 5
- Towards end of episode...
- Order of things in html file matter? (Sequence of file like html->head->rel, body->div -> ... , script..)
- It's important, and if we change the order, we might end-up in error.
- If we change the order, we will get `React is not defined` error
- What is `crossorigin` all about?
- What is the `root.render()`?
	- It renders the element to the root.
	- What if we already have something in the html of the root element?
	- Something like `<div id="root">Sriram</div>`... What will happen?
	- __The content will be replaced__.. and it is not going to append to existing (Sriram will disappear as soon as the elements are rendered).
- What if we have something other than the div with id root?
	- Rest of the content will stay as it is.
	- Something like this:
```html
<h1>Hello</h1>

<div id="root"></div>

<h1>Thank you!</h1>
```
- `The `Hello` and `Thank you` will stay..

#### Library vs Framework
 - The react will only work on the `root` id in the html which we specified in the `ReactDOM.createRoot()`.
 - Rest of the html can contain anything other than React, it can be plain html as well.
 - This is the reason, why React is called as __Library__.
 - It can independently work in a small portion of your app as well.
 - It's not a full fledged framework.
 - Framework is something which comes with all loads of things.
 - React is a bare minimum JS library.
 - Not the case with other frameworks.
 - All other frameworks will require you to create an new app, but react will work with existing app as well. ->_Need to check_
#### Is React library or Framework - Google Bard
>React is a library, not a framework.
>
>A framework is a set of tools and conventions that provide a complete solution for building applications. Frameworks typically include a variety of features, such as routing, templating, and data binding.
>
  A library, on the other hand, is a collection of code that provides specific functionality. Libraries are typically used to solve a specific problem, such as building UI components or managing state.
 >
  React is a library because it only provides the functionality for building UI components. It does not provide any other features, such as routing or data binding.
>
  This makes React more flexible than a framework, but it also means that you need to choose and use other libraries to build a complete application.
>
>Some popular libraries that are used with React include:
>
>- React Router for routing
>- Redux for state management
>- Webpack for bundling and transpiling code
>
 React is also very popular because it can be used with other frameworks, such as Next.js and Gatsby. These frameworks provide additional functionality, such as server-side rendering and static site generation.
>
 Overall, React is a powerful and flexible UI library that can be used to build a wide variety of applications. It is important to be aware of the difference between libraries and frameworks, so that you can choose the right tools for your needs.

That's All Folks! for Episode 1

Recap: 
 - How to write a HTML program with Hello World! text?
 - How to do the same with JS?
 - How to bring React into our code?
 - Making use of the CDN links.
 - Wrote the script for React version of Hello World.
 - Moved the JS code to a separate file.
 - Started with creating an element.
 - Explored the React object (For each elements).
 - `React.createElement` & `ReactDOM.createRoot`
 - Created a more complex structure using React.
 - Things replaced in the root element, when we have some static content.
 - We can have any other content other than the root element in the html.
 - React is a library and not a framework.
 - We can use React in existing applications.
 - We can make large scale application with React. -> _Upcoming Episodes_


>End of Episode 1
