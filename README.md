## CODED - React State - Code Demo

1 - To get started - navigate to the project directory from your terminal/command line interface and type the following command : `npm start`

2 - Open VS Code or your favorite code editor and then open the entire directory as a project folder

3 - Navigate to the `src` directory and locate the `App.js` file.

4 - Open the `App.js` file and examine and class based component `MyWorkout` which starts on line 14.

5 - Take a look at the state variable declaration on line 15 - and note that state is an OBJECT that contains 2 variables `pushups` and `situps`. These 2 variables have a limited scope within this `class`.

6 - On line 29 notice how the state object is updated using `setState` and a new object is passed with the updated entry. (not this doesn't replace all other variables - it is NOT an assignment operator)

7 - On line 48 `setState` is passed a callback function instead of an object - this is the PREFERRED method for updating state - especially when there are multiple `setState` calls. That is because React may batch `setState` calls all together if they're passed in as object, however, passing in a callback makes sure that it the `setState` call is done and the App is "refreshed" before contintuing.
