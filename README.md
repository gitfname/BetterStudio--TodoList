# React + TypeScript + TailwindCSS + Vite


# Project Name

BetterStudi--TodoList

## Description

This project is a simple TodoList application with the capability of d&d ( drag and drop )

## Prerequisites

Make sure you have the following prerequisites installed on your machine:

- Node.js (Recommended version: 14+)

## Installation

1. Clone this repository.
   
   ```bash
   $ git clone https://github.com/gitfname/BetterStudio--TodoList.git
   ```

2. Navigate to the project directory.

   ```bash
   $ cd BetterStudio--TodoList
   ```

3. Install the dependencies.

   ```bash
   $ npm install
   ```

## Development Server

To start the development server and run the application in development mode, follow these steps:

1. Open a terminal in the project directory.

2. Run the following command:

   ```bash
   $ npm run dev
   ```

3. The development server will start running at `http://127.0.0.1:5173`. ( usualy it runs on port 5173. but in case of you get the <span style="color:'red';">port is busy</span> error. then read the **Changing Port Number** section below ) Open your web browser and navigate to this URL to access the application.

## Build

To build the application for production, follow these steps:

1. Open a terminal in the project directory.

2. Run the following command:

   ```bash
   $ npm run build
   ```

3. The build process will generate a production-ready version of the application in the `dist` directory.

## Changing Port Number

By default, the development server runs on port 5173. However, if the targeted port is already in use or you want to use a different port, you can change it by following these steps:

1. Open the project directory in a text editor.

2. Locate the `vite.config.js` file.

3. Inside the file, find the `server` configuration object.

4. Within the `server` object, there is a property called `port` which specifies the port number.

5. Update the value of `port` to the desired port number.

   ```javascript
   // vite.config.js
   
   export default defineConfig({
     // ...
   
     server: {
       port: XXXX, // Replace XXXX with the desired port number
     },
   
     // ...
   });
   ```

6. Save the changes to the file.

7. Restart the development server by running the following command:

   ```bash
   $ npm run dev
   ```

   The development server will now start running on the new port you've specified.

Remember to use a port number that is not already in use by another application on your system.

## Conclusion

After following these instructions, you should be able to run the development server and build the application for production using Vite, TypeScript, and Tailwind CSS. Happy_Clean_Coding!