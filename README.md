## CODED - React State - Code Task

### TASK 1 - The Forbidden Task!

We have discussed how changing `state` directly is not permitted. Let us start by experimenting what happens to our code if we change state directly through an assginemnt operator. This often referred to as `mutating state directly`.

1 - On line 30 in the click handler - remove `this.setState` method and replace it with a direct assignment operator in this form `this.state.pushups`.

2 - Save your changes and reload the the App. What do you notice happens as you click the button below the pushup picture `1 set completed`. Does the number of pushups sets displayed change?

3 - Is state being modified or not? To check this - add a `console.log` statement and log `this.state.pushups` to the console. Does it appear to be updating when the button is clicked or not? Analyze what's happening in the App and describe in your words what is happening (this is a good time to do some reasearch and view documenation).

### TASK 2 - Adding the Lunges excercise.

The current workout tracker App has 2 excercise, pushup and lunges. Let's add a new excercise, lunges and begin to track it!

1 - Note that the lunges image is already imported on line 5 as `lungesImg`

2 - Add a `lunges` variable to the `state` object and set its value to `5`.

3 - Add your own code block, which should be similar to the code block for `pushups` and `situps` excerices.

4 - Make sure to modify state using a callback function as this is the recommended way by React.

5 - Test your code and make sure it works like the pushups and situps excercises.
