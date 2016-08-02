function addGrid(args){
	var items = [];
	
	for (var x=0; x < args.length; x++){
		//THIS IS THE DATA THAT WE WANT AVAILABLE FOR THIS ITEM WHEN onItemClick OCCURS
	    var values = args[x];
	
	    //CREATES A VIEW WITH OUR CUSTOM LAYOUT
	    var view = Alloy.createController('movieGrid', values).getView();
	
	    //NOW WE PUSH TO THE ARRAY THE VIEW AND THE DATA
	    items.push({
	        view: view,
	        data: values
	    });
	};
	
	//ADD ALL THE ITEMS TO THE GRID
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
	    itemHeightDelta: 0,
	    itemBackgroundColor:'#eee',
	    itemBorderColor:'transparent',
	    itemBorderWidth:0,
	    itemBorderRadius:0
	});
	
	addGrid(args);
})();