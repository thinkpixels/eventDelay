/**
 * eventDelay - Delay default input events
 * This file is part of the eventDelay package.
 *
 * @version 1.0
 * @copyright Copyright © 2016 Sebastian Inman (http://sebastianinman.com)
 * @author Sebastian Inman <sebastian.inman.design@gmail.com>
 * @license MIT License (http://www.opensource.org/licenses/mit-license.php)
 */

;(function($, undefined) {

  'use strict';

  /**
   * Create the eventDelay event listener function
   *
   * @param (string)   event    // array of desired meta tags. fallback fetches all available meta data
   * @param (integer)  delay    // array of websites to be scraped by the meta fetcher
   * @param (function) callback // function fires after all requested data is returned
   */

   $.fn.eventDelay = function(event, delay, callback) {

     // Save the element as a variable for later use.

     var element = $(this);

     // Create the initial event handler.

     return element.off(event).on(event, function(e) {

       // Reset the delay timer on each iteration of the event.
       // The event will only fire if the time between events is
       // greater than the set delay interval.

       clearTimeout($.data(this, 'eventDelay'));

       // Create a new instance of the delay timer after each
       // iteration of the event handler.

       var delayTimer = setTimeout(function() {

         // Make sure the callback function exists and is
         // in fact passed as a function.

         if(callback && typeof callback === 'function') {

           // The callback function exists and is a function.
           // Call the function and pass in the element and original event.

           callback(element, e);

         }

       }, delay);

       // Apply the delay timer to the element on each iteration
       // of the original event.
       
       element.data('eventDelay', delayTimer);

     });

   };

})(jQuery);
