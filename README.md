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
