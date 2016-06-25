# eventDelay
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/kinda-sfw.svg)](http://forthebadge.com)
> A small jQuery plugin that allows you to create a delay between input events and their intended functionalty.

## Dependencies
This javacsript plugin requires jQuery 1.12 or greater, which can be downloaded [here](http://jquery.com/download/ "jQuery official download page") or loaded into
your web page via a content delivery network:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
```

## Installation
Once you have jQuery included in your project, getting eventDelay set up and running is very simple. Start by including the eventDelay.js Javascript in your project after jQuery. You can include eventDelay.js in your project by adding the following to your HTML:

```html
<script src="YOUR/PATH/eventDelay.js">
```

**Note:** You'll have to replace "YOUR/PATH" with the actual path to the file in your project.

Once you've included eventDelay.js into your project, you can start using it to delay input events! Below is an example of eventDelay being used to delay keypress events on an input field:

```javascript
$('input').eventDelay('keyup paste', 1000, function(element, event) {

  console.log(element.val());

});
```
