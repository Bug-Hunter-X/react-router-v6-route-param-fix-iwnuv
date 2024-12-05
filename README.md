# React Router v6 Route Parameter Handling Issue

This repository demonstrates a common issue encountered in React Router v6 concerning the handling of route parameters. When a route requires parameters but is accessed without them, unexpected behavior or errors might occur.

## Problem

The `IncorrectRouteParams.js` file showcases the problem.  The `User` component expects a `userId` parameter, but if the route is accessed as `/users` (without a userId), the component will likely attempt to access `params.userId`, which will be undefined. This could lead to errors or incorrect rendering of the component.

## Solution

The `CorrectRouteParams.js` file presents a solution. It utilizes the `useParams` hook correctly and includes a check for the existence of the `userId` parameter before attempting to access it. This robust approach handles cases where the parameter is missing or undefined, preventing errors and rendering a fallback state.

## Setup

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm start`. 
