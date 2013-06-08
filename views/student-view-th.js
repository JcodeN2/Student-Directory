//  __  ___  _ _  __  ___  _  _  ___   _ _  _  ___  _ _ _ 
// / _||_ _|| | ||  \| __|| \| ||_ _| | | || || __|| | | |
// \_ \ | | | U || o ) _| | \\ | | |  | V || || _| | V V |
// |__/ |_| |___||__/|___||_|\_| |_|   \_/ |_||___| \_n_/ 
                                                       
// (From Thumbnail View)


// Make a View Constructor
StudentViewTh = Backbone.View.extend({
  

  // Wrap the view in a div called studentview
  tagName: 'div',
  className: 'student-view',


  // Listen for a click on the back button
  events: {
    'click .back': 'back',
    'click .edit': 'edit',
  },


  // Render & Append the view when it is instantiated
  initialize: function(){

    console.log('im initializing', this.model.attributes)
    this.render();
    $('.student').append(this.$el)
  },


  // Pass in the Student Template
  render: function(){
    this.$el.html(studentTemplate(this.model.attributes));
    console.log('im rendering', this.model.attributes)
  },


  // If Back is Clicked, clear Student View 
  back: function () {
    $('.student').html('')
    $('.menu').html('')

    // Instantiate Menu View, call Thumbnail function to Instatiate View
    var backMenu = new MenuView();
    backMenu.thumbnail()
  },

  edit: function() {
    console.log('im editing', this.model.attributes)
    this.$el.html(updateTemplate(this.model.attributes));
  },

  cancel: function() {
    this.$el.html(studentTemplate(this.model.attributes));
  },

  save: function(){

    if (this.$el.find('.photo-input').val() == ''){
      this.model.set({
      photo: this.$el.find('.photo-input').val('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQdUtHnZ2NbfZBQI6RGcaA6LZDEJ-VQ0cJoropCetw9JlZ2PyKS')
      })
    }

    if (this.$el.find('.first-input').val() == ''){
      this.model.set({
      first: this.$el.find('.first-input').val('Unknown')
      })
    }

    this.model.set({
      first: this.$el.find('.first-input').val(),
      last: this.$el.find('.last-input').val(),
      github: this.$el.find('.github-input').val(),
      email: this.$el.find('.email-input').val(),
      photo: this.$el.find('.photo-input').val(),
    })

    
    this.$el.html(studentTemplate(this.model.attributes));


  }
  
});