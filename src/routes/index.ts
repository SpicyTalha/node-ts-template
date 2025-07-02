// File: src/routes/index.ts EXAMPLE ROUTES
// This file is an example of how to set up routes in an Express application.
// Uncomment and modify the import statements and the routes array as needed.
// You can add your own routes by importing them and adding them to the `_routes` array
// in the `routes` function below. Each route should be an array with the first element
// being the URL path and the second element being the Express Router instance.
// Make sure to import the necessary modules from Express and your route files.
// If you have any specific routes to add, you can uncomment the import statement
// and modify the `_routes` array accordingly. This will allow you to organize your routes
// in a modular way, making it easier to maintain and scale your application.

import type { Application, Router } from "express";
const _routes: Array<[string, Router]> = [];

export const routes = (app: Application): void => {
  _routes.map((route) => {
    const [url, router] = route;
    return app.use("/api" + url, router);
  });
};
