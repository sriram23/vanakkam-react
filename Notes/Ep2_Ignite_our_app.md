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