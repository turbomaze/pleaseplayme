/******************\
|  Please Play Me  |
| @author Anthony  |
| @version 0.1     |
| @date 2015/11/06 |
| @edit 2015/11/06 |
\******************/

var PleasePlayMe = (function() {
    'use strict';

    /**********
     * config */
    var DIMS = [0, 0]; //canvas dimensions

    /*************
     * constants */

    /*********************
     * working variables */
    var canvas, ctx;

    /******************
     * work functions */
    function initPleasePlayMe() {
      canvas = $s('#canvas');
      canvas.width = DIMS[0];
      canvas.height = DIMS[1];
      ctx = canvas.getContext('2d');
      ctx.fillStyle = '#fbefe3';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 300, 300, img.width, img.height)
      }
      //img.src = 'images/sad.jpg'
      
    }

    /********************
     * helper functions */
    function $s(id) { //for convenience
        if (id.charAt(0) !== '#') return false;
        return document.getElementById(id.substring(1));
    }

    return {
        init: initPleasePlayMe
    };
})();

//window.addEventListener('load', PleasePlayMe.init);