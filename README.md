# mern-shop

## frontend:

#### 1. Created React App:

`npx create-react-app frontend `

##### A) Used preconfigured React Bootstrap theme from:

https://bootswatch.com/

1. Choose theme
2. download bootstrap.min.css file from website
3. place file into frontend/src folder
4. import min.css file in index.js file unter React DOM imports: `import "./bootstrap.min.css";`
5. Style of Website should be changed now!

#### 2. React Bootstrap Components:

https://react-bootstrap.github.io/getting-started/introduction
Install React Bootstrap in folder frontend:
`npm install react-bootstrap`

##### A) Navbar:

https://react-bootstrap.github.io/components/navbar/

#### 3. Logos: Cart & Sign In:

https://cdnjs.com/libraries/font-awesome

1. Copy link tag in public/index.html
2. Now icon classes can be used in our components: `<i className=""> </i>`

#### 4. Install React Router DOM:

1. `npm install react-router-dom@latest`
2. `npm install react-router-bootstrap@latest`

## Init a backend

#### Go to root:

1. Create a folder: `backend`
2. create a package.json file `npm init`
3. Install backend framework: Express `npm i express`
4. Install CORS: `npm i cors`

#### Go to backend folder:

4. create a `server.js` file in backend folder
5. create a folder: `data` and add `products.js` file
6. Import products.js to server.js: `const products = require("./data/products");`
7. implement REST requests to `server.js`

## Connect backend and frontend

#### HTTP requests

Go to frontend folder:

1. Install axios http library: `npm i axios`

## Imporve build and run configs:

Go to root:

1. install nodemon and concurrently as dev dependency: `npm i -D nodemon concurrently`
2. add run scripts in `package.json`

## Environment variable manager

Go to root:

1. Install dotenv (https://www.npmjs.com/package/dotenv): `npm i dotenv`
2. Create a `.env` file in root and note all variables

## Introduce a MongoDB Database

### What is a MongoDB database?

A MongoDB database is a non relational database which is document based.

- A document is a JSON Object, which can represent a Shop item for example.
- The database assignes every document an individual id (`_id`).
- Collections are the buckets for documents

#### MongoDB Atlas (Online Cluster Service):

1. Go to mongodb.com and create a Cluster and a database with a collection
2. Set a user: user_name and password and set access from anywhere
3. Connect the database with your application

#### MongoDB Compass (DB Browser app):

1. Download and install MongoDB Compoass from mongodb.com
2. Connect the database from Atlas to Compass in MongoDB Atlas -> Now we can use the cloud DB via Compass

#### Mongoose connects the database. A powerful object data mapper:

Go to root:

1. install mogoose for Node.js (https://mongoosejs.com/) : `npm i mongoose`
2. Create a folder in the backend folder: `config`
3. Create a `db.js` file

### Colors in the console:

Go to root:

1. install colors for Node.js: `npm i colors`
2. set the log strings to colors example: `'codexyz'.cyan.bolt`

### Use encryption for user passwords:

Go to root:

1. Install bcryptjs: `npm i bcryptjs`

### Using express-async-handler:

Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers. Go to root:

1. install express-async-handler (https://www.npmjs.com/package/express-async-handler): `npm i express-async-handler`

## Introducing REDUX global state management

Got to frontend!

1. Install: `npm i redux react-redux redux-thunk redux-devtools-extension`
