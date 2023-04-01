# ABN AMRO Assignment for Medior Front-End Developer 

## Objective : 
  - The purpose of this assignment is to showcase my familiarity with frontend technologies, programming patterns, my ability to write clean and reusable code and my basic knowledge on design. 

  - Create a Single Page Web Application which allows users to view the TV shows and their details.

## Table of contents:
- [Requirement Analysis](#requirement-analysis)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Design](#design)
- [API Endpoints](#api-endpoints)
- [Live Demo](#live-demo)
- [Running Scripts](#running-scripts)

## Requirement Analysis : 

### Functional Requirments : 
- Display all the TV shows (by default descending order of Rating)
- Search for a TV show by Name
- Filter TV shows by Genre 
- Sort TV shows by Rating 

### Non-Functional Requirements : 
- Responsive & Mobile friendly 
- Performance Optimization
- Maintainability & Reusable code 
- User-friendly Design 
- User Engagement during API data fetch

## Tech Stack :
- **UI Framework** : React (I chose React because I have experience and strong fundamental understanding of React and in technical point of view its easy to develop, component-based architecture so we can create modular and reusable code, its virtual DOM minimizes unnecessary DOM manipulations. All these points apply to Vue as well, I am newbie learning Vue, So I thought of completing the assignment in React first and then try to map the conceptual knowledge to Vue to see how these frameworks eventually work in similar fashion, this might be a good topic of discussion in the interview)
- **Routing** : React Router DOM (Commonly used client-side routing library)
- **CSS Framework** : Tailwind CSS (Tailwind automatically removes all unused CSS when building for production, responsive design with breakpoints, don't have to spend time on writing long css in css files, reusable classes)
- **Testing Framework** : Jest 
- **Hosting** : Netlify (I thought it will be easy for you to watch live demo of the app without having to run scripts)

I would have used **Redux** as state management library for complex application. Since this app does not have any complex data to be globally stored, I did not use any framework for state management. Just using props drilling mechanism to pass props between components.

## Architecture  
Based on the requirements, I am planning to use Client-Side Rendering Architecture. I am using React library without any framework like next.js as it is not required.

### Programming patterns 
- API Performance (Used Debouncing technique to limit the number of API calls to search the TV show)
- Reusable code (Created components based on single responsibility principle)
- Clean code (Created utilities for custom hooks and helper functions )
- Rendering Optimization (Memoized some functions to avoid unnnecessary renders)
- Error handling (Common Error boundary component)
- User engagement during API data fetch (Used Shimmer component to provide a visual cue)
- User Friendly Design (Consistent UI)

## Design
- Used ABN AMRO Brand Colors and Fonts
- Simple UI with only requirement info 

## API Endpoints 
Maintaining all dynamic data (API urls, constant values) in a separate file so that changes can be easily made in future.
GET_URL_SHOWSLIST   - `https://api.tvmaze.com/shows`
SEARCH_BY_SHOWNAME  - `https://api.tvmaze.com/search/shows?q=${query}`
GET_URL_SHOWINFO    - `https://api.tvmaze.com/shows/${show_id}?embed=cast`

## Live Demo
Please check https://abn-amro-assignment.netlify.app/ for live demo.
If you want to run the app in local, please check next section.

## Running Scripts
In the project directory, you can run:

### `yarn install or npm install`

Installs the required packages.

### `yarn start or npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test or npm test`

Launches the test runner in the interactive watch mode.\

### `yarn build or npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

