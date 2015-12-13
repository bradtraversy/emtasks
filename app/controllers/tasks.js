import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		deleteTask: function(id){
			this.store.findRecord('task', id).then(function(task){
				task.deleteRecord();

				task.save();
			});
		}
	}
});
