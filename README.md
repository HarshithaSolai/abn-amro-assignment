# ABN AMRO Assignment for Medior Front-End Developer 

## Objective : 
  - The purpose of this assignment is to showcase my familiarity with frontend technologies, programming patterns, my ability to write clean and reusable code and my basic knowledge on design. 

  - Create a Single Page Web Application which allows users to view the TV shows and their details.

## Table of contents:
- [Requirement Analysis](#requirement-analysis)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Programming patterns](#programming-patterns)
- [Design](#design)
- [API Endpoints](#api-endpoints)
- [Live Demo](#live-demo)
- [Running Scripts](#running-scripts)

## Requirement Analysis : 
### Functional Requirments : 
- Display all the TV shows (by default descending order of their rating)
- Search for a TV show by name
- Filter TV shows by genre 
- Sort TV shows by rating 
- Show Details of TV Show through Search suggestion
- Show Details of TV Show by clicking on the Show Card display in Dashboard
- Display BasicInfo of the TV show 
- Display the Seasons & Episodes List for a given show

Additional Features that I implemented : 
- Autosuggestion feature for search 
- Display the Seasons & Episodes List for a given show
- Toggle Show/Hide of Seasons details using Accordion 
- Toggle Show/Hide of Episodes details using Accordion 
### Non-Functional Requirements : 
- Responsive & Mobile friendly 
- Performance Optimization
- Maintainability & Reusable code 
- User-friendly Design 
- User Engagement during API data fetch (Shimmer or Loading Indicator)

## Tech Stack :
- **UI Framework** : React (I chose React because I have experience and strong fundamental understanding of React and in technical point of view its easy to develop, component-based architecture so we can create modular and reusable code, its virtual DOM minimizes unnecessary DOM manipulations. All these points apply to Vue as well, I am newbie learning Vue, So I thought of completing the assignment in React first and then try to map the conceptual knowledge to Vue to see how these frameworks eventually work in similar fashion. For example : Lifting up state in React is similar to emitting events in vue, context API is similar to project/inject in vue, lifecycle hooks of react vs vue. I know Vue is the framework that I would be working in ABN AMRO, so mind mapping the programming patterns will make it easy to pick up any framwork. This might be a good topic of discussion in the interview)
- **Routing** : React Router DOM (Commonly used client-side routing library for react)
- **CSS Framework** : Tailwind CSS (Tailwind automatically removes all unused CSS when building for production, responsive design with breakpoints, don't have to spend time on writing long css in css files, reusable classes)
- **Testing Framework** : Jest 
- **Hosting** : Netlify (I thought it will be easy for reviewers to see live demo of the app without having to run scripts)

I would have used **Redux** as state management library for complex application. Since this app does not have any complex data to be globally stored, I did not use any framework for state management. Just using props drilling and lifting up state mechanisms to pass props between components.

## Architecture  
Based on the requirements, I am planning to use Client-Side Rendering Architecture. I am just using React library without any framework like next.js as it is not required.

### Programming patterns
- API Performance (Used Debouncing technique to limit the number of API calls to search the TV show)
- Reusable code (Created components based on single responsibility principle)
- Clean code (Created utilities for custom hooks and helper functions )
- Rendering Optimization (Memoized some functions to avoid unnnecessary re-renders)
- Error handling 
- User engagement during API data fetch (Used Shimmer component to provide a visual cue)
- User Friendly Design (Consistent UI Look)

## Design
### UX
- Used ABN AMRO Brand Colors and Fonts
- Simple UI with only required info 

### UI Hierarchy
  
  ```
  App
      Header 
      Dashboard
        SearchShows 
        GenreFilter
        RatingSorter
        [ShowCard]
      ShowInfo 
        ShowDetails
        [Seasons]
          Season
            [Episodes]
              Episode
      Footer
  ```
      

## API Endpoints 
Maintaining all dynamic data (API urls, constant values) in a separate file so that changes can be easily made in future.

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

