var UserListView = function () {
	 
	 var users;

 	 this.initialize = function () {
	 	 this.$el = $('<div/>');
	 	 this.render();
	 } 

	 this.setUsers = function (list) {
	 	 users = list;
	 	 this.render();
	 }

	 this.render = function () {
	
	 	if (users) {
		 	const userDigest = { credentials: users[0].credentials + "s", users: users};
	 	} else {
	 		const userDigest = { credentials: "", users: []};
	 	} ;

	 	 this.$el.html(this.template(userDigest));
		 	$('.collapsible').collapsible({
		      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
		    });
	 	 return this ;
	 }

	 this.initialize(); 
}