var utils = require("utils");

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

function addGrid(args, searchTerm){
	$.loadingView.removeAllChildren();
	
	$.fgWin.title = searchTerm; 
	
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
	var searchArgs = {
		type: "movie",
		y: "yes",
		r: "json",
		s: searchTerm
	};
	
	var errorCb = function(e){
		var alertStr = 'Sorry, we encountered an error, You may want to go back and try again!';
		if(typeof(e) !== "undefined"){
			Ti.API.error(e.error);
			if(e.hasOwnProperty("errorId")){
				Ti.API.error(e.errorId);
				// This means that it's our custom error
				if(e["errorId"] == -1){
					alertStr = "Sorry, No Movies found for " + searchTerm + "!";
				}else{
					alertStr = 'Sorry, OMDB seems to have messed up :P You may want to go back and try again!';		
				}
			}
		}
		alert(alertStr);
		$.loadingLabel.text = "No Results Found :(";
	};
	
	utils.doGetRequest(
		"https://www.omdbapi.com/",
		searchArgs,
		function(resp) {
		    Ti.API.info("Received text: " + this.responseText);
		    var respArgs = null;
		    try{
		    	respArgs = JSON.parse(this.responseText);	
		    }catch(err){
		    	Ti.API.error("Error! - " + err);
		    	errorCb({error : "Custom error - " + err});
		    	return;
		    }
		    
		    // Error handling
		    if(respArgs!== null && respArgs.hasOwnProperty("Search")){
		    	// Perform the search only if there's a key
			    addGrid(respArgs['Search'], searchTerm);
		    }else{
		    	// This is defined by omdb
		    	if(respArgs.hasOwnProperty("Response") && respArgs["Response"] === "False"){
		    		errorCb({error : "Movie not found!", errorId: -1});
		    	}else{
		    		errorCb({error : "Invalid Response from OMDB", errorId: -2});
		    	}
		    }
		},
		errorCb
	);
}

(function(){
	var args = $.args;
	initFgLib();
	// searchTerm = "dragon";
	var searchTerm = args.searchTerm;
	Ti.API.debug("Got the search Term - " + searchTerm);
	get_movies(searchTerm);
})();