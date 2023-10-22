# Part 1
 - Push the code to GitHub repository.
 - `git init` -> Will make our project to git repo, with master branch.
 - `git branch -M main` -> Will make `main` as the main branch.
 - `git add .` -> Stages the changes in the current directory.
 - `git commit -m "Episode One"` -> Committing the code.
 - _TODO:_ Learn the difference between `git` and `github`.
 - `git add remote` -> Copy paste from github (__Akshay__ recommends not to just copy paste, do it manually).
 - `git push origin main` -> Push the code to remote.
 - Keeping pushing code to Git

> Let's Ignite our app

 - Is the code written so far is ready to push to prd?
 - What's the issue in this code?
 - It's not an optimized code.
 - No comments, no logs.
 - We need to bundle / Compress files
 - Need to optimize images.
 - Need to do lot of processing before pushing code to production.

 - Will react itself do a fast production ready app?
	 - No
	 - There are lot of other packages there to make our app production ready
	 - React is not the only thing which makes our app fast
	 - How to get those apps to the project
 - NPM
	 - Not "Node Package Manager"
	 - But is it just a Package Manager
	 - NPM does not have a full form
	 - NPM just manages packages
	 - Standard repository for all packages
	 - create react app has the npm ready with it
- npm init
	- Don't use -y 
	- It will ask few questions
	- Provide details
		- package name: namaste-react
		- version: 1.0.0
		- description: This is Namaste React by Akshay Saini
		- entry point: App.js
		- test command: jest
		- git repository: `<url>`
		- keyword: react, namaste react, akshay saini
		- author: Akshay Saini
		- license: (ISC)
	- It will show the json and ask whether the details are fine
- Now we will see pacakge.json
	- A config for our npm
	- Nothing but a json file
	- Why do we need?
		- It manages all the packages that are installed
		- These packages are also called dependencies
		- Takes care of version of dependencies
- Let's get the packages into our project
- Start installing the dependencies
- Most important package -> Bundler
	- Whole code needs to be cached, bundles, cleaned
	- Bundler takes care of it
- Webpack, Parcel, Vite are some eg of bundler.
- Packages the project, so that it can be pushed to production
- Create React App behind the scene uses webpack and bable.
- In our app, we are going to use Parcel.
- But, why Parcel? Why not Webpack?
	- End of the day it's our choice
	- Every bundler does the same job, but in a different way.
	- And it's easy to configure Parcer (Akshay says..)
- Parcel will ignite our app.
- If our app is a skeleton, parcel will give muscle to our app.
- How to get it?
	- It comes as node package
	- Using npm, we can install easily
	- `npm install <dep name>`
	- In our case `npm install -D parcel`
	- What is `-D` here?
		- There are 2 types of dependencies
			- Dev dependencies
				- Required during the development phase
			- Normal dependencies
				- Used in production also
		- The bundling process is not done in production, hence it is a dev dependency
		- The `-D` indicates dev dependency
- Parcel is a "Beast".. (Akshay says)
- Once installed, we will get the parcel in the `package.json` as a dev dependency
```json
"devDependencies": {

    "parcel": "^2.10.0"

  }
```
- What is `^` sign over here?
	- Known as `caret`
	- Not related to React
	- Could see `~` (`tilde`)as well in some cases
	- Today it's `2.10.0`. Tomorrow a new version may come
	- If 2.10.2 is released, the parcel will be automatically upgraded to 2.10.2. That's the use of caret symbol
	- But it only upgrades minor version. For example, if it 3.10.2, it won't upgrade, but in case of 2.11.0 it will upgrade
	- In case of `~` (Tilde), it will upgrade major version as well(Like 2.10.0 -> 3.10.0)
	- It's always safe to go with caret (^).
	- When we have a major update, lot of things would break.

- When we install parcel, we could see one more file called `package-lock.json` got created.
- What is it?
	- Are both package and package-lock same?
	- Are these both required?
	- It keeps track of exact version that is installed.(The `^` and `~` scenario)
	- It locks the version and keeps a record of dependencies.
	- But what's the lengthy thing?
```json
"parcel": {

      "version": "2.10.0",

      "resolved": "https://registry.npmjs.org/parcel/-/parcel-2.10.0.tgz",

      "integrity": "sha512-YJmWEsiv1ClpPcJiWkr3gFj40sRvfeK89GGGwJjpzQMQsBmN6h6OHrSkByx0jrsPIvdsOIccU702upYpRAypuw==",

      "dev": true,

      "requires": {

        "@parcel/config-default": "2.10.0",

        "@parcel/core": "2.10.0",

        "@parcel/diagnostic": "2.10.0",

        "@parcel/events": "2.10.0",

        "@parcel/fs": "2.10.0",

        "@parcel/logger": "2.10.0",

        "@parcel/package-manager": "2.10.0",

        "@parcel/reporter-cli": "2.10.0",

        "@parcel/reporter-dev-server": "2.10.0",

        "@parcel/reporter-tracer": "2.10.0",

        "@parcel/utils": "2.10.0",

        "chalk": "^4.1.0",

        "commander": "^7.0.0",

        "get-port": "^4.2.0"

      }

    },
```

- Integrity?
	- It's a hash
	- Why is it present?
	- Scenario.. Working on local, but breaking on production..
	- To avoid that scenario, package-lock uses hash to verify, whatever is there in my machine is there on the prd server and is of same version.
- It's very very very important file.
- It's different from package.json

- One more folder created `NodeModules`
- So many folders out there..
- What are these?
	- Contains all the code we fetched from npm.
	- We could see the parcel code as well here.
	- Actual data of the dependencies
	- It's very huge.
	- Lot of memes around Node Modules.. ;-)
	- It fetches all the code of dependencies.
- Along with Parcel, there are lot of things?
	- Parcel as a package has it's own dependencies, that Parcel requires to run.
	- Recursively there will be dependencies.
	- This is called "Transitive dependencies".
- How would npm know Parcel has these dependencies?
- How many package.json will be there in the project?
	- Every dependencies has it's own package.json
	- Which means, our project has a package.json, where we have Parcel as dev dependency.
	- Parcel has it's own package.json, that has it's own dependencies. Like this it goes recursively to pull all the dependencies.


- The size of node module is huge....
- Should we put this node modules to github / production
	- No
	- Best practice is to put in `gitignore`
	- This will ignore the changes in node modules.
- Then how will we run app in prod?
- But why we ignore node modules?
- Package and Package-lock need to be there in the github / production, as it maintain all info about the deps. ! It's important to have !
- If we have both the files, we can re-create the node modules.
- All we need to do is `npm install`
- This will pull all the dependencies and create the node modules.
- Whatever we can regenerate, we should not put on Git.

# Part 2
- We are going to ignite our app
- `npx parcel index.html`
- Syntax -> `npx parcel <source file>`
- In the console, we will get a message `Server running at http://localhost:1234`
- Open the `localhost:1234` in browser, we will see our app running.
- What is npx?
	- Just like we have npm, we have something known as npx
	- npx is executing a package, whereas npm is for installing
	- That means we are executing parcel.
- Parcel goes to our source file, which is nothing but our index.html and will build a development build for our app.
- And hosts that build to localhost:1234

- Earlier, we brought in the React via the CDN. But we can bring in React using npm also!
- CDN links is __not a preferred way__ to bring in React & React dom into our project.
- Fetching from CDN is a costly op, as it fetching from internet.
- In case of npm, it will be available in node modules and we need not want to rely on internet for everytime.
- If there is a new upgrade is available, then we have to keep changing the CDN url.
- In case of npm, it's easy to manage (Remeber the `^` and `~`.

- Now let's install react via npm.
- `npm install react`
- We are not using `-D` here, because we need React as a normal dependency and not as a dev dependency (We need react in the prod server).
- Now after installing react, we will see the react listed in dependencies in `package.json`
```json
"dependencies": {

    "react": "^18.2.0"

  }
```
- React will be there inside the package-lock and node module as well.
- Let's install react-dom as well.
- `npm i react-dom`
- Here `i` is nothing but a shorthand of `install`.
- Now in the package.json dependencies, we will have react and react-dom
```json
"dependencies": {

    "react": "^18.2.0",

    "react-dom": "^18.2.0"

  }
```
- Now, we no longer need the CDN.
- Will this work now?
- Start our server `npx parcel index.html`
- We will get an error, `React is not defined`.
- Reason is we just installed react, but our code does not understand, where the React is coming from.
- How to use react from node_modules?
	- We use import
	- `import React from "react"`
	- This means `React` is coming from `react` package in the node module
	- Similarly for React Dom: `import ReactDOM from "react-dom"`
- Will this work?
	- Now we will get `Browser scripts cannot have imports or exports` error.
	- One new thing now is we are getting a nice well formatted error.
	- What does `Browser scripts cannot have imports or exports` mean?
	- In html, we inject the App.js in script tag. It treats the script as a browser script, which is nothing but plain js.
	- It cannot understand what is `import`. It's not a normal js.
	- Now we need to tell the browser that it is not a normal browser script, it's a __module__.
	- Need to add `type=module` in the script tag
```html
<script type="module" src="./App.js"></script>
```
- Now the error would go and app would work.
- Now the react is coming from `node_module` and not from the CDN links!
- We will get a warning in the console, `Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client"`
- Earlier we use to import it from "react-dom" now we need to import it from "react-dom/client"
- `import ReactDOM from "react-dom/client"`

- Let's see a magic now
- Now when we change anything in the component, it will update real-time on the browser, as soon as we save.
- This powerful thing is done by our beast "Parser"  
- This is called `HMR` => `Hot Module Replacement`
- Parcel makes DX (Developer Experience) so smooth
- How parcel using that?
	- Parcel uses a file watching algorithm, written in C++
- As soon as we save any change, the parcel will build once again.
- The build time will reduce on subsequent saves after first run.
	- Reason: Parcel is caching things for us
	- Where things are being cached?
		- `.parcel-cache` folder created, where we have the cache as binaries or unknown format.
- Parcel also does "Image optimization". The most expensive thing in a website is loading the image.
- When making prod build, it will minify our files.
- Will bundle our files (That's why we call it as a bundler and bundling is it's basic job)
- Compress our files.
> Many people think that React App are fast, because React is fast.

- But the reality is when we build a largescale app, there are lot more things we need other than just React.
- React makes app fast, but it is not the only thing that makes the app faster.

- Parcel in turn also not doing everything on it's own, it does has some libraries to perform a specific minification.
- Parcel is like a manager for these supporting libraries.
- Akshay's example: Akshay compares React and Parcel to PM Modi and HM Amit Shah.
- For all these reasons, Akshay says "Parcel is such a beast.."
- Parcel also does "Consistent Hashing" -> _TODO: This itself is a huge topic, read about it_
- Parcel will do code splitting
- It does "Differential Bundling" for our app
	- Means: Cross browser compatibility, and backward compatibility (Ability to run in older browsers as well)
	- It generates different bundles for different browsers for smooth running
- Error handling -> Like how we saw for module error earlier
- Diagnostics
- Tree shaking algorithm:
	- Will remove un-used code for us.
- Different build and bundle for Dev and Production.
- How do we know parcel does these things?
	- Documentation: https://parceljs.org/
	- Explore it!
	- __Read about it!__

- How to make prod build?
	- `npx parcel build index.html`
	- We will end-up in an error for the main file in package.json
	- In package.json, we have App.js as entry point, whereas in the parcel we give index.html as entry point (The npx command). This creates a conflict.
	- Solution is just to remove the "main" in package.json
	- Now it will work
- Once we build the prod app, where does the prod file goes?
	- Inside the `dist` folder.
- Prod build takes longer time compared to dev build.
- 3 main files
	- index.html
	- a css file
	- a js file
- There may be some other map files as well.
- These 3 files contain all the code of our app.
- This will be fast, performant and optimal.

- `.parcel-cache` and `dist` are regeneratable. So don't have to put it in git.
- Add it to `.gitignore`
- We have sufficient info to regenerate.

- Let's make our app compatible for older version browsers
- For that we will use something called `browserslist`
- It will already be there in the node_modules
- But we need to tell which all browsers I need to support my app
- So we'll need to configure something
- Search browserslist on internet or go to: https://browserslist.dev/
- We'll configure it in package.json.
- We'll define "browserslist" in package.json, that takes an array.
```json
"browserslist": [
	"last 2 Chrome version" // this means the app only will work on latestst and second latest chrome browsers
]
```
Similarly,
```json
"browserslist": [
	"last 2 Chrome version" // this means the app only will work on latestst and second latest chrome browsers
	"last 2 Firefox version"
]
```
In the above cases, it will definitely work in browsers that are provided in the configuration list, but may or may not work in other browsers.

- Where we'll get to know about the configurations?
	- https://browserslist.dev/
	- ![image](https://github.com/sriram23/vanakkam-react/assets/18396996/247e05fd-68da-4590-aa11-2ae204bfb81c)
- Why we do these configs?
	- In order to support huge variety of browsers, lot of different bundles would be created. In order to avoid it, we are very specific about browsers.
	- It is up to the scenario. It's all about the end users.
	- Consider a scenario of govt. website (like IRCTC), then we'll have to support all the browsers. It should work on almost all old browsers.
	- In our case of Namaste React, everybody using are the devs, who most probably have the latest version of browsers. We can configure accordingly.
- There is a query composition in the browserslist website (https://github.com/browserslist/browserslist#query-composition).
- We can give country specific configuration also.

- With all these things, we now have created our own version of __create react app__.

> End of Episode 2
