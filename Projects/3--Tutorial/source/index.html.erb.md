---
title: Synthesizing Speech with p5.speech
---

# Synthesizing Speech with p5.speech
<h2 class="author">Devin Halladay</h2>

> [p5.speech](http://ability.nyu.edu/p5.js-speech/) is a JavaScript library that provides simple, clear access to the Web Speech and Speech Recognition APIs, allowing for the easy creation of sketches that can talk and listen.

In this short introduction, you'll learn about R. Luke DuBois' `p5.speech` JavaScript library — in particular, you'll learn how to use this library to *synthesize* speech using `p5.js`.

## What You'll Make
Click in the sketch below to see what you'll be making in this tutorial.

<iframe src="/sketch"></iframe>

## Prep Work
To get started, you'll need a basic p5.js setup. You can download the setup files [here](/sketch/p5-speech-setup.zip), or create a directory with the following files:

### `index.html`
```html  

<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.dom.js"></script>
    <script src="p5.speech.js"></script>
    <script src="sketch.js"></script>
  </head>
  <body>
    <!-- Nothing here -->
  </body>
</html>

```

### `sketch.js`
```js

function setup() {
  // The Basics
  createCanvas(500, 500);
  background('#171C20');
  colorMode(HSB);
}

function draw() {
  // Nothing here yet
}

```

### `p5.speech.js`
Also download the latest `p5.speech` library [here](http://ability.nyu.edu/p5.js-speech/), unzip it, and drop `lib/p5.speech.js` into your directory.

---

## Synthesizing Speech

In order to synthesize speech, we'll need to instantiate the p5.speech library in `sketch.js`.

```js

var myVoice = new p5.Speech(); // Instantiate p5.Speech

function setup() { … }

```

This instantiates a new `p5.speech` object that will allow us to interface with the library via a variable, in this case `myVoice`.

Now we'll synthesize some basic speech in our p5 `setup()` function to make sure everything is working.

```js

function setup() {
  // The Basics
  createCanvas(500, 500);
  background('#171C20');
  colorMode(HSB);

  // Access p5.speech's `speak` function via `myVoice`
  myVoice.speak('It works!');
}

```

Reload your `index.html` with your sound turned up and you should hear some speech!

## Adding Circles on Click

Awesome, now it's time to start adding circles to the canvas on mouse press.

Let's add a `mousePressed()` function to our `sketch.js`.

```js

…

function mousePressed() {
  fill(random(360), 255, 255); // Generate a random HSB hue;
  ellipse(mouseX, mouseY, 40); // Place an ellipse at (mouseX, mouseY).
}

```

## Making Our Circles Speak

Now let's make our circles speak when we click on the canvas.

To start, let's see if we can get some basic speech working on click.

In the `mousePressed()` function, add one line after the code you added in the last step:

```js

function mousePressed() {
  fill(random(360), 255, 255); // Generate a random HSB hue;
  ellipse(mouseX, mouseY, 40); // Place an ellipse at (mouseX, mouseY).
  myVoice.speak('Test!'); // Speak "Test!"
}

```

Now when you click on the canvas of your sketch, you should see a circle and hear the word "Test!" repeatedly. But we want our sketch to say an entire sentence and loop through the sentence with every click. How can we do this?

## Arrays and Counters
To do this, we'll need to add an array and incrementally go through it every click. We'll use a counter for this.

Add the following code to the beginning of your `sketch.js`:

```js

var words = ["p", "five", "is", "awesome"]; // A list of words
var counter = 0; // A counter for the words

…

```

Line 1 adds an array called `words` — an array is basically just a list of things (it could be strings, integers, floats, or any other JavaScript data type). Line 2 adds a new variable called `counter` and sets it to `0`. We'll use this variable to keep track of where we are in the `words` array.

Now let's count through the array we just created on `mousePressed`.

In `sketch.js`, replace `myVoice.speak('Test!')` with the following:

```js

myVoice.speak(words[counter]);
counter = (counter + 1) % words.length;

```

Line 1 uses [bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#Bracket_notation) to access the word in position `counter` in our `words` array. For example, if `counter` has the value `0`, the value of `words[0]` will be `"p"`. If it has the value `3`, `words[3]` will return `awesome`.

Line 2 takes our counter and increments it by one until it reaches `words.length`, which in this case is 4.

Reload your sketch and everything should have come together into the final version!

<iframe src="/sketch"></iframe>
