# React

## Installation : 

- ### CRA (create-react-app) : 
   - Create a new React App with CRA (create-react-app). The following commands ensures to install the latest version of the react. 
   
   - No need to install CRA globally, it's no longer supported as well, just make sure have node and npm installed.

   ```bash
   npx create-react-app app-name
   cd app-name
   npm start
   ```

   - This will open a new browser window with your React app running. By default, it will be available at `http://localhost:3000/`.

- ### Vite : 

   - Vite is a build tool for modern web development that aims to provide a faster and leaner development experience for React.

   ```bash
   npm create vite@latest app-name -- --template --react
   cd app-name
   npm install
   npm run dev
   ```

   - Your React Vite app will be available at `http://localhost:5173/` by default.