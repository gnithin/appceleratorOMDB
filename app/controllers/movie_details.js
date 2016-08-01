(function(){
	// Arguments passed into this controller can be accessed via the `$.args` object directly or:
	var args = $.args;
	//buildTableView(args);
	alert("Hello there mate!");
})();

// build the ui from here.
function buildTableView(args){
	// Create a tableview and add it to the movie details
	// $.movieDetailsTable
	var row = Titanium.UI.createTableViewRow();
	var view = Titanium.UI.createLabel({
	  backgroundColor:'red',
	  width: 20, height: 20,
	  text:"Testing"
	});
	row.add(view);
	$.movieDetailsTable.push(row);
}
