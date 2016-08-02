function addGrid(args){
	var items = [];
	
	for (var x=0; x < args.length; x++){
	    var values = args[x];
	    var view = Alloy.createController('movieGrid', values).getView();
	    
	    items.push({
	        view: view,
	        data: values
	    });
	};
	
	// add all the items to the grid
	$.fg.addGridItems(items);
}

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

(function(){
	var args = $.args;
	
	$.fg.init({
	    columns:2,
	    space:0,
	    gridBackgroundColor:'#fff',
	    itemHeightDelta: 50,
	    itemBackgroundColor:'#eee',
	    itemBorderColor:'transparent',
	    itemBorderWidth:0,
	    itemBorderRadius:0
	});
	
	addGrid(args);
})();