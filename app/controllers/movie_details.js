function initFgLib(){
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
	
	$.fg.setOnItemClick(gridOnClickAction);
}

function gridOnClickAction(e){
	// alert('Title is: ' + e.source.data.Title + '. ImdbID : ' + e.source.data.imdbID);
	// Open a new controller using the navigation bar and send the data
	var view = Alloy.createController('movie_single_detail', e.source.data).getView();
	Alloy.Globals.homeNavBar.openWindow(view, {animated: true});
}

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
	initFgLib();
	addGrid(args);
})();