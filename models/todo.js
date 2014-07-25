var app = app || {};

	// Todo Model
  // ----------
  // Our basic **Todo** model has `title` and `completed` attributes.
  
app.Todo = Backbone.Model.extend({
  
	defaults: {
	  title: '',
	  completed: false
	},

	url: '',
  // Toggle the `completed` state of this todo item.
	toggle: function() { 
		this.save({
			completed: !this.get('completed') 
		});
	} 
	
});