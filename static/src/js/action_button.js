
odoo.define('pos_perso.ActionButton',function(require){
"use strict";

// require pos screen
var pos_screens = require('point_of_sale.screens');

 

var DashBoardButton = pos_screens.ActionButtonWidget.extend({
    
     template:'DashBoardButton',
     button_click: function (){
      var modal = document.getElementById('id02');
      console.log(modal);

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
    
             },
});

 pos_screens.define_action_button({
    'name':'Dashboard',
    'widget':DashBoardButton,
    'condition':function(){return this.pos;},
 });

 });

