import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addTask: function(){
			var title = this.get('title');
			var dueDate = this.get('date');
			var description = this.get('description');

			//Create New Task
			var newTask = this.store.createRecord();
		}
	}
});
