# Sea Otter App
This is an app to search for GitHub projects with search options.

## Features

- React App
- Ultilize Redux to store state and event management
- Implemented Redux Saga to streamline requests to GitHub API for a dynamic search.
- Search is updated for each change in the search params
- Implemented error catching.
- Used Enzyme to test for rendering of all react components

## Important Notes

- GitHub API limits the number of calls within a minute to only 10, therefore excessive searching can cause a 403 request error.
- GitHub API limits the search to only the first 1000 search results, therefore if the search total is over 1000, we only have access to the first 1000.

# How to Run locally
## Step 1: First fork the repository and clone it onto your local computer
```sh
git clone https://github.com/toopham/seaotter.git
```
## Step 2: go into directory and install dependencies
```sh
cd seaotter
npm install
```

## Step 3: To run the app, run the command:
```sh
npm run dev
```

## To run test
```sh
npm run test
```
