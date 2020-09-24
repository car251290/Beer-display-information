## Web Beer 
Get a display of information of beers an using and API, get a web page for the use of showing the information.
making an esasy display of the information of some beer where the people can get some amazing beer with the history of the beers



# Use this Api to display the information
Pagination making a requests that return multiple items will be limited to 25 results by default. You can access other pages using the ?page paramater, you can also increase the amount of beers returned in each request by changing the ?per_page paramater.

https://punkapi.com/documentation/v2

# Get a beer 
Gets beers from the api, you can apply several filters using url paramaters, the available options are listed below.
to display it in the App with the information of the beer!

# The React
Using the plataform of react I build some backgorund and Front-End to show information about beers, using an API.
The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.

# React Native 
Using this example for getting the card and get information, in a best way I read it and code a better display information.
Note: If you are using react-native version 0.60 or higher you don't need to link react-native-vector-icons.

Wrap your root component in Provider from react-native-paper. If you have a vanilla React Native project, it's a good idea to add it in the component which is passed to AppRegistry.registerComponent. 

If you don't want to install vector icons, you can use babel-plugin-optional-require to opt-out.

If you use Expo, you don't need to install vector icons. But if you have a babel.config.js or .babelrc file, make sure that it includes babel-preset-expo.
https://callstack.github.io/react-native-paper/card.html

## Hooks for get the Data of the API that display the beer

To solve this, Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local state with a reducer to make it more predictable.
We’ll discuss this more in Using the Effect Hook.

## Effect Hooks
Hooks let us split the code based on what it is doing rather than a lifecycle method name. React will apply every effect used by the component, in the order they were specified.

This requirement is common enough that it is built into the useEffect Hook API. You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to useEffect:
EXAMPLE
In the example above, we pass [count] as the second argument. What does this mean? If the count is 5, and then our component re-renders with count still equal to 5, React will compare [5] from the previous render and [5] from the next render. Because all items in the array are the same (5 === 5), React would skip the effect. That’s our optimization.

When we render with count updated to 6, React will compare the items in the [5] array from the previous render to items in the [6] array from the next render. This time, React will re-apply the effect because 5 !== 6. If there are multiple items in the array, React will re-run the effect even if just one of them is different.
