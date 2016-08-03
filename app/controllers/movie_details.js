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
	//$.loadingView.removeAllChildren();
	Ti.API.info("Args 0- ");
	Ti.API.info(args);
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
	Ti.API.info(items);
	$.fg.addGridItems(items);
}

function get_movies(searchTerm){
	var client = Ti.Network.createHTTPClient({
	    // function called when the response data is available
		onload : function(e) {
		    Ti.API.info("Received text: " + this.responseText);
		    var respArgs = JSON.parse(this.responseText);
		    addGrid(respArgs['Search']);
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
		    Ti.API.debug(e.error);
		    alert('error');
		},
		// in milliseconds
		timeout : 5000
	});
	
	// Prepare the connection.
	var url = "https://www.omdbapi.com/?type=movie&y=yes&r=json&s=" + searchTerm;
	client.open("GET", url);
	
	// Send the request.
	client.send();
}

(function(){
	var args = $.args;
	initFgLib();
	searchTerm = "police";
	get_movies(searchTerm);
})();