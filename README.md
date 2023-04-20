# Intro to React

_This project is a fork of [She Codes Now's Intro to React](https://github.com/She-Codes-Now/Intro-to-React)._

## Getting started

Welcome! This codebase was developed to serve as the working code for an intro to React class for Philly Tech Sistas. If you found yourself here and want to follow along on your own, check out the [slides for the class](https://docs.google.com/presentation/d/1Wf_RYiWEEyooNDyZXP6uA8v2BORfmeL2xXavHAALb4E/edit#slide=id.g524bca57f8_1_140)!

To get started exposing the app on your localhost to be rendered on your browser, follow these steps:

1. Verify that you have npm installed, this command should print the version of `npm`:

```bash
npm -v
```

If you see any errors, you might need to install npm (if you're using a Mac, try `brew install npm`).

2. Once you have `npm` good to go, run the following commands to get the server code up and running:

```bash
npm install
npm start
```

3. You'll notice that the output of the console shows you the URL that you can use to view your website in the browser. In my case, that is `http://localhost:3000/`, but check your console output to make sure you get the correct port!

## Exploring the codebase

You'll notice that we have three main folders from the root: `node_modules`, `public`, and `src`. Let's talk about each one of them:

- The `node_modules` folder managed by `npm`, so when you run things like `npm install`, this folder will get updated with the corresponding libraries needed to run the web server that is in charge of serving your website to client browsers.
- The `public` folder is where the website skeleton is defined. This begins with `index.html`, which is the starting point (aka file) of your website. Notice that in line 28, we have the `<div id="root"></div>` element. Remember this! We will see how to inject the React components into this `div` element in the next folder.
- The `src` folder is where the React components live. If you start exploring `index.js` you'll see that we create the `App` component there, which itself is composed by other React components from the `components` folder. If you open the `App.js` file, you'll see how the other components are used.

Now that we know what we can find in the project folder and what some of the most important parts do, we can start adding our own spin to this website!

## Making some changes and seeing them live

Before we get into the details of React, let's make a small change and see it in the website. This will ensure that our development environment is working correctly.

1. Load the website on your browser. You'll notice that the title of the page says "Welcome to React", but that is kind of boring, so let's add some personalization to this title.
2. To find out where this title is defined, we can start reading the App.js file and seeing if the text is defined there. The other option is to do it from the browser, by loading the Chrome Dev Tools. If you right click over the title, and click Inspect, you'll notice that the Chrome Dev Tools opens up with the Elements tab selected (this should work for any browser you're using). If you look closely, the highlighted element contains the HTML code that contains the text we are interested in. In our case, it's an `h1` element with the `class=App-title`. Now that we know what this looks like, we can search through the codebase for `class=App-title` and find the component that has the title. You may be thinking... why not just search for the title? Well, in this case the text is unique, but you may not be so lucky next time!
3. Now that we have found the component, let's change the text to "Welcome to the online to-do list!".

Once you see the new title, we are ready to start adding a new component!

## Adding new functionality

Before we add a new component, let's play a bit with the current UI. Go to your website and try adding a few items to the list via the form on the right using the `Add to list` button. The current UI has a button to add items, but we can't delete them! Let's fix this. To make the UI better, let's add a button to clear the current text entered (for a faster user experience) and button to delete the entire list.

### Adding the clear button

0. First, let's find the Add to list button in the codebase. Follow the example in the previous section!
1. Let's add a new `button` component. Under the `Add to list` button, before the closing `form` is, add a new button element like this `<button>Clear</button>`.
2. Let's add the id to this new element, it should look something like this `<button id="clear-btn">Clear</button>`.
3. Now, let's add the `onClick` handler, which will be executed when the button is clicked on. For this, let's pass a function called `handleClear` which we will define in the next step. Your button should now look like this: `<button id="clear-btn" onClick={this.handleClear}>Clear</button>`.
4. Before we add this new function, let's take a moment to understand how component state works in React. Take a look at the `state` variable (starts in line 5). You can see that our component state is composed of the `newItem` object that is initialized to `''` (empty string). If you take a look at the `handleChange` function, you'll see that to change the state of `newItem`, we use the `this.setState` function. When `setState` is called, the `state` variable will be updated with the new content passed on to it, and every element that depends on `this.state` like the `input` component, will update itself and render the new value. And that's how the `input` component React-ed to the user's input!
5. Now that we know a bit more about how component state works, let's define the `handleClear` function that will get executed when the clear button is clicked on. In this case, we want the input that we typed in the `input` box to be cleared. Since the value that we type in the `input` component is stored in `newItem` (check out how the `handleChange` works again), we need to reset that `newItem` so the `input` component re-renders itself. Right below the `handleChange` function, add your new `handleClear` like this:

```js
handleClear = (e) => {
  this.setState({
    newItem: "",
  });
};
```

6. Let's test this to make sure it works! Go to your website and make sure that the Clear button is present. Now, start typing something in the input element, and then clear it by clicking on the Clear button. Is the input gone? Good! Mission accomplished.

Now that we completed the first component, let's

### Adding the delete all items button

WIP

## Exercise

Taking the learnings so far, let's make this list even better! What if I want to only delete one item? Can you improve the current `Item` so that we can delete items individually?

## Accessibility Testing

We need to make sure that our site is accessible for everyone, after all, who doesn't love a list? Try out these steps below to make sure the basic accessibility requirements are successfully implemented:

1. Click on the address bar and hit enter. Then, once it loaded, hit TAB. You should have landed on the very first clickable element in the page, which in this case it's likely to still be the `Add to list` button.

2. Now, try to perform all 3 tasks (add input, clear the input, submit an item to the list, delete an item from the list, and delete all items from the list) ONLY using your keyboard. Remember, some users cannot use a mouse and rely on keyboards only. Let's make sure all of our cool features work for them too.

3. Last, but not least, increase the zoom to 200% on the page. Are you still able to do everything you could before?

Great job!

## Next steps

Now that you know the basics of how React works, you can start learning about testing your React components. Check out the `App.test.js` file as an example, and add tests for other components like `Form`, `Item`, and `List`.
