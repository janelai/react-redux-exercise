# Cadent Front-End React + Redux Apptitude Exercise

## Summary

This exercise is designed to test your understanding of the major concepts of real world JavaScript and the patterns of React and Redux. The project is fully configured for you so you won't have to focus on configuring a build or working out a development instance. Everything has been based upon Vite's Redux-TS template.

This will test your ability to write components, map the redux store and its dispatch to the props of a component, maintain immutability, write and comprehend ES6 and create well formed classes.

This exercise should take anywhere from 1 - 2 hours.

## Concept

You are a freelance developer who has been tasked with the responsibility of writing a grocery list application for a client of yours. You have inherited a bit of code from a previous developer so bits and pieces of the application have been completed. Your job is to finish what they started and complete the grocery list application.

After taking a look at the application, you have assessed that you need to complete the following items that the other developer didn't finish.

#### Tasks

- Finish the **ListTable** component so that the items in the grocery list will display inside of a table
- Add buttons within the table that will remove, select, and deselect and item from the list (you will need to write custom reducers and action creators for each of those actions).
- Finish the **ListSelection** component so that when an item inside the table is clicked, it will display inside of that component.
- Make sure that each component has at least one test written for it, and that it tests functionality of that component. (You may use any testing library you are comfortable with, jest is included).

##### Bonus items

- Implement a hook of your choice in this application.
- Instead of using redux use React context.
- Add search functionality.

#### Helpful Hints & Constraints

- **ListContainer** is already a Container component that is aware of the redux store as well as the dispatch. There is no need to create another container out of the other components that you will need to finish.
- Use the container as your main hub for both data and actions and then see what you can pass to each of the components.
- All of your Redux functionality is inside of the **grocerySlice** file. This file follows a pattern called ducks which groups all of related redux functionality into one file to avoid rework and segmentation.
- **DO NOT** worry yourself with styling the components. If you feel compelled, go ahead, but you will not be assessed your style comprehension.

## Getting started

1. Clone the repo to work locally
2. run `npm i`
3. run `npm start`
4. open to http://localhost:3000/

## Exercise Contraints

Use whatever resources you're most comfortable with to complete the assignment. This is designed to be a real-world exercise so we want you to use the real-world to be able to solve this problem. Nothing is off limits.

## Completing the assignment

When you're finished, be sure to push up the completed code to your github and provide a link to the individual who sent the link to you.

In addition, keep it locally and then bring it into your interview. We'll walk through what you did and how you did it. Again don't be worried if you can't get everything working. Words on a screen aren't too important to us, we care more about the concepts and the ways that you went about solving the problems that you're presented with. Keep a mental note of the resources you used to accomplish these problems as we'll be asking you to talk through how you went about solving for something that you previously didn't understand.

Good luck!


## Resources Used
- https://redux-toolkit.js.org/api/createSlice - helpful for seeing how slices worked.
- https://redux.js.org/usage/usage-with-typescript - info on what PayloadAction is from redux toolkit.
- https://react.dev/reference/react/useEffect - using useEffect hook in ListTable.
- https://testing-library.com/docs/react-testing-library/example-intro - helpful for examples on how to write tests.
- https://medium.com/@voonlihhaur/when-to-describe-it-and-test-ec2aba477b59 - difference between describe and test.
- https://testing-library.com/docs/queries/byrole/ - grabbing items by role.
