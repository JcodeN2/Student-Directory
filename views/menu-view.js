



//  _   _  ___  _  _  _ _   _ _  _  ___  _ _ _ 
// | \_/ || __|| \| || | | | | || || __|| | | |
// | \_/ || _| | \\ || U | | V || || _| | V V |
// |_| |_||___||_|\_||___|  \_/ |_||___| \_n_/ 
                                            

// Define Menu View Constructor
MenuView = Backbone.View.extend({

  // Wrap the view in a div w/ class menu-view
  tagName: 'div',
  className: 'menu-view',


  // Listen for a click on view buttons
  events: {
    'click .table-button': 'table',
    'click .thumbnail-button': 'thumbnail',
    'click .add-button': 'add'    
  },



  initialize: function(){
    //define templates for each view    
    menuTemplate = _.template($('#menu-template').html())
    thumbnailTemplate = _.template($('#thumbnail-template').html())
    tableTemplate = _.template($('#table-template').html())
    studentTemplate = _.template($('#student-template').html())
    updateTemplate = _.template($('#update-template').html())
    addTemplate = _.template($('#add-template').html())


    // Render & Append the view when it is instantiated
    this.render();
    $('.menu').append(this.$el);

    // make a new table view for each student
    aprClass.each(function(student){  
      new TableView ({
        model: student
      });
    });
  },


 // When rendering, Pass in the Student Template
  render: function(){
    this.$el.html(menuTemplate());
  },


// Clear page and instatiate table view when table is clicked
  table: function() {
    $('.class-th').html('')

    //loop through class collection, make view for each model
    aprClass.each(function(student){  
      new TableView ({
        model: student
      });
    });
  },


// Clear page and instatiate thumbnail view when thumbnail is clicked
  thumbnail: function(){
    $('.table-view').html('')
    $('.class-th').html('')

    //loop through class collection, make view for each model
    aprClass.each(function(student){  
      new ThumbnailView ({
        model: student
      });
    });
  },


  add: function(){
    $('.add-button').hide()
    $('.thumbnail-button').hide()
    $('.table-button').hide()
    $('.table-view').html('')
    $('.class-th').html('')


    new AddView()
  }

});


//Instatiate Menu View on page load
$(document).ready(function(){
  new MenuView();
});


