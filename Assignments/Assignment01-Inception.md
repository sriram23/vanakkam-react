# Episode 01: Inception

## Theory
> What is Emmet?
- Emmet is a toolkit, that generates a boilerplate code for us.
- In our case, we have used `html:5` emmet to generate a html boilerplate code.
- The moment when we hit `html:5` in our editor, a very basic html code is generated.

> Difference between a Library and a Framework?
#### Framework
 - A set of tools and conventions, provides complete solution for building applications.
 - Consists of a variety of features
    - E.g. Routing, templating, data binding, etc.
 - There will be a prescribed way of doing things.
 - Low flexibility
 - Easy to use.
 - Popular frameworks:
    - CreateReactApp
    - Angular
    - Next.js

#### Library
 - Collection of code for a specific functionality.
 - Solves a specific problem.
    - E.g. Building components, constructing routes, etc.
 - No prescribed way to do things
 - High flexibility
 - Low ease of use
 - Popular libraries:
    - React
    - React router
    - Moment.js
    - lodash

> What is CDN> Why do we use it?
 #### CDN
 - CDN -> Content Delivery Network / Content Distribution Network
 - CDN is nothing but a network of servers.
 - It delivers the content, that the user requested for.
 - These network of servers are located around the world
 - When user queries for a specific content, it will be delivered to the user from the nearest server to the user.
 #### Why CDN?
 - __Improved performance__: Quick loading as it is not from origin server and is from the server near to it.
 - __Increased availability__: Multiple server holds the content, so in case of one server failure, others can still serve.
 - __Improved security__: Protection against DDoS attacks (Attempt to overload a server and making it unavailable).

 > Why is React known as React?
 Here are a few reasons:
  - The library is very reactive to changes.
  - Ability to react or respond to dynamically changing data.
  - React came from the concept of `Reactive Programming`, which is a paradigm that emphasize the declarative description of the behavior of a system in response to changes in its input. 

> What is cross-origin in the script tag?
 - It's an attribute in script tag used to specify how browser should handle cross-origin requests.
 - Cross-origin requests are requests for resources that are located on a different domain than the domain where the application is making request.
 - It can have the following values:
  - __anonymous__: Send requests without any credentials, such as cookies or HTTP authentication credentials.
  - __use-credentials__: Send requests with credentials.
  - __null__: Same as anonymous.
 - The default value is `anonymous`
 - By default the browser will not send credentials with cross-origin requests, to prevent sensitive info from being leaked to other websites.
 - One more advantage: By setting the `crossorigin` to `anoymous`, we can prevent the browser from sending cookies with the request, which in turn save bandwidth and improve performance.

 > What is difference between React and ReactDOM?
 #### React
  - It's the core library that provides the basic building blocks for creating React components.
  - React is responsible for defining how React components work.
 #### ReactDOM
  - It's the library that provides DOM-specific methods that can be used to render React components to the DOM.
  - ReactDOM is responsible for rendering the React components to the DOM.

> What is the difference between react.development.js and react.production.js files via CDN?
#### react.development.js
 - Includes additional files for debugging and error reporting. Not minified.
 - Helpful when developing and testing React applications.
 - Not very performant, slower than the prod.
 - Bundle size is larger that prod.

#### react.production.js
 - Code is minified, does not contain debugging or error reporting code.
 - Used for the actual final production application.
 - Very performant, faster that the dev.
 - Bundle size is smaller that dev.

> What is async and defer?
 - Boolean attributes used in the script tag to load external scripts efficiently into our web page.
 - There are three possibilities:
    - __Normal__: During the html parsing, when the script tag is encountered, the html parsing is paused the script is fetched and executed, then the html parsing will be resumed.
        - `<script src="..." />`
    - __async__: The script is fetched in parallel and when the html parsing encounters the script tag, it html parsing will be paused, the script will be executed, and once done execution of the script, the html parsing will be resumed.
        - `<script async src="..."/>`
    - __Deferred__: The script is fetched in parallel and executed only after the html parsing has finished.
        - `<script defer src="..."/>`
     
   Reference Image from Akshay's video:
   
   <img width="635" alt="image" src="https://github.com/sriram23/vanakkam-react/assets/18396996/9868feb5-d3d5-46f8-bdde-9f452dd107e7">

 - When to use what?
    - Async doesn't guarantee the order of execution of script. Shouldn't be used if the scripts are dependencies on each other. In that case, defer should be used.
    - If the scripts are independent, then go with defer.
    - Mostly wise to use defer, as it maintains the order of execution of the scripts.

## Coding
> Set up all the tools on your laptop
>  - VS Code
>  - Chrome
>  - Extensions of Chrome

Done!

>Create a new Git repo
 - [https://github.com/sriram23/vanakkam-react](https://github.com/sriram23/vanakkam-react)

> Build your first Hello World program using:
 - Using just HTML: [https://github.com/sriram23/vanakkam-react/commit/62f2bffa3c2e6c3ea796b477078f8fe17ad4c081](https://github.com/sriram23/vanakkam-react/commit/62f2bffa3c2e6c3ea796b477078f8fe17ad4c081)

 - Using JS to manipulate the DOM: [https://github.com/sriram23/vanakkam-react/commit/ad3fde43ec281c07af581546d23604bc97cb4131](https://github.com/sriram23/vanakkam-react/commit/ad3fde43ec281c07af581546d23604bc97cb4131)

 - Using React: [https://github.com/sriram23/vanakkam-react/commit/94ce2b3a9586a542bc16a77d6d57cbfd352c5f07](https://github.com/sriram23/vanakkam-react/commit/94ce2b3a9586a542bc16a77d6d57cbfd352c5f07)

> Use CDN Links
 - [https://github.com/sriram23/vanakkam-react/commit/39b128fb269225de2691a7c1124d6bb421fc996c](https://github.com/sriram23/vanakkam-react/commit/39b128fb269225de2691a7c1124d6bb421fc996c)

> Create an Element
 - [https://github.com/sriram23/vanakkam-react/commit/70e60c66d1c3fea5425108a55fc34f5a9454d225](https://github.com/sriram23/vanakkam-react/commit/70e60c66d1c3fea5425108a55fc34f5a9454d225)

> Create nested React Elements
 - [https://github.com/sriram23/vanakkam-react/commit/5538cd64eb79db7ae89853849d58e6c990704a7b](https://github.com/sriram23/vanakkam-react/commit/5538cd64eb79db7ae89853849d58e6c990704a7b)

> Use root.render()
 - [https://github.com/sriram23/vanakkam-react/commit/70e60c66d1c3fea5425108a55fc34f5a9454d225](https://github.com/sriram23/vanakkam-react/commit/70e60c66d1c3fea5425108a55fc34f5a9454d225)

> Push code to Github
 - [https://github.com/sriram23/vanakkam-react/tree/ec92dd50ab746f3ecb54748137cc18aed575d2ff](https://github.com/sriram23/vanakkam-react/tree/ec92dd50ab746f3ecb54748137cc18aed575d2ff)

> Arrow Functions
 - Also known as Lambda functions
 - A concise way of writing anonymous functions
 - Introduced in ES6
 Example: 
 ```js
 const add = (num1, num2) => return num1 + num2;
 ```
