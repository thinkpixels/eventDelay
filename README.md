# eventDelay
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/kinda-sfw.svg)](http://forthebadge.com)
> A small jQuery plugin that allows you to create a delay between input events and their intended functionalty.

### Dependencies
This javacsript plugin requires jQuery 1.12 or greater, which can be downloaded [here](http://jquery.com/download/ "jQuery official download page") or loaded into
your web page via a content delivery network:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
```

### Installation
Once you have jQuery included in your project, getting eventDelay set up and running is very simple. Start by including the eventDelay.js Javascript in your project after jQuery. You can include eventDelay.js in your project by adding the following to your HTML:

```html
<script src="YOUR/PATH/eventDelay.js">
```

**Note:** You'll have to replace "YOUR/PATH" with the actual path to the file in your project.


### Using eventDelay.js
Once you've included eventDelay.js into your project, you can start using it to delay input events! Below is an example of eventDelay being used to delay keypress events on an input field:

```javascript
$('input').eventDelay('keyup paste', 1000, function(element, event) {

  console.log(element.val());

});
```

The previous code snippet shows the basic usage of the function. The eventDelay function accepts three parameters:
+ the events you want to listen for
+ how long you want to delay the events for (in milliseconds)
+ a callback function that returns the element the function was called on, and the event that was delayed
+ 

#### Event Parameter
The events variable can be any default browser event accepted by the element the function is being called on.
Here are some of the events that will most likely come in handy when using this plugin:
+ keyup
+ keydown
+ keypress
+ change
+ select
+ focus
+ blur
+ click
+ mouseup
+ mousedown

#### Delay Parameter
The delay paramter can be set to any time interval in milliseconds. The delay can be as long or short as you want, but should be appropriate for the input the function is being called on. After playing around with these numbers myself, I found that a delay of between 400 and 1000 milliseconds works best with text inputs. Of course you should play around with these numbers yourself to find a delay that works best for your application!

#### Callback Parameter
The callback parameter is where your logic post-event will go. This is the code that will run once the event delay has completed. This parameter should always be passed as a function, and will itself return data relative to the element the original function was called on. The callback function will return two parameters - element and event.

The element parameter just returns the element selector which allows you to select the original element.
The event parameter returns the actual event that was triggered and used to perform the delay.
