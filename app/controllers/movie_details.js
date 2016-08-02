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