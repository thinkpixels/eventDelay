# eventDelay
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/kinda-sfw.svg)](http://forthebadge.com)
> A small jQuery plugin that allows you to create a delay between input events and their intended functionalty.

This javacsript plugin requires jQuery 1.12 or greater, which can be downloaded [here](http://jquery.com/download/ "jQuery official download page") or loaded into
your web page via a content delivery network:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
```

## codeListener.js
This javascript plugin allows you to easily set a keycode combination and match user input against it.
If the user correctly enters the key combination you set, a callback function is fired in response. You can also call a custom error function in the event the user enteres the code incorrectly. This plugin uses keycode values to determine the key combos in the javascript, which can easily be found [over at CSS-Tricks](https://css-tricks.com/snippets/javascript/javascript-keycodes/). 

**Note:** I will eventually be adding key mapping to this plugin so you can actually type out the full code instead of key values.

Getting started with codeListner.js is as simple as loading in the javascript file and calling the codeListener function:
```html
<script src="codeListener.js"></script>
<script>$.codeListener();</script>
```
By default, the code is set to the "Konami" code, which on the keyboard looks like:  
**up - up - down - down - left - right - left - right - b - a**

You can easily set your own custom code by adding it into the parameters when calling the codeListener function:
```javascript
$.codeListener({
    combo: [10, 11, 12, 13, 14, 15]
});
```
There are two callback functions that can be passed when calling the codeListner function: **error** and **success**.
Both functions are techincally optional, but you will at least want to create a success callback if you want your code to be worth having on your page. To call either function, simply pass each function as a parameter:
```javascript
$.codeListener({
    success: function() {
        // call your success function here
    },
    error: function() {
        // call your error function here
    }
});
```
