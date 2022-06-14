## CODED - React State - Code Task

### TASK 1 - The Forbidden Task!

We have discussed how changing `state` directly is not permitted. Let us start by experimenting what happens to our code if we change state directly through an assginemnt operator. This often referred to as `mutating state directly`.

1. On line 30 in the click handler - remove `this.setState` method and replace it with a direct assignment operator in this form `this.state.pushups`.

2. Save your changes and reload the the App. What do you notice happens as you click the button below the pushup picture `1 set completed`. Does the number of pushups sets displayed change?

3. Is state being modified or not? To check this - add a `console.log` statement and log `this.state.pushups` to the console. Does it appear to be updating when the button is clicked or not? Analyze what's happening in the App and describe in your words what is happening (this is a good time to do some reasearch and view documenation).

### TASK 2 - Adding the Lunges excercise.

The current workout tracker App has 2 excercise, pushup and lunges. Let's add a new excercise, lunges and begin to track it!

1. Note that the lunges image is already imported on line 5 as `lungesImg`

2. Add a `lunges` variable to the `state` object and set its value to `5`.

3. Add your own code block, which should be similar to the code block for `pushups` and `situps` excerices.

4. Make sure to modify state using a callback function as this is the recommended way by React.

5. Test your code and make sure it works like the pushups and situps excercises.

## TASK 3 - Defining state within a constructor.

Although defining `state` as we did in line 15 is valid, there's an alternative way to define state within a class constructor. It is important to know how to define `state` in both ways, as you may work with code that uses class constructors.

1. Create a constructor right after the class declaration.

2. The constructor needs to take `props` as an argument.

3. Within the constructor call `super(props)` passing it the props argument.

4. Declare your state using this keyword `this.state` and set it equal to the state object we had in line 15.

5. Make sure to delete the `state` declaration in line 15 as we are now initializing the `state` in the constructor.

## CHALLENGE - Code Refactoring.

One of the core advantages of React is component reusability. Furthermore, it is considered good programming practice to NOT repeat code that you need. In our code, we currenlty have 3 excercises that repeat the same code with minor difference for excercises. Imagine we had to add anohter 10 excercises. This would get messy really fast. Let's attempt to create a reusable component for each excercise and make our code more scalable.
