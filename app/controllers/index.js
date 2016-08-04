function createSearchBar(){
	// Maybe put a wrapper here to flesh out the padding and stuff.
	var searchBar;
	var orangeColor = "#f5ab35";
	// Not using search bar, cause styling it is really crappy
	
	// Using a textfield right now, rather than a searchView.
	// Searchview is pretty hacky when it comes to styling it.
	// TextView is more straight-forward.
	searchBar = Ti.UI.createTextField({
		height: Ti.UI.SIZE,
		width: "80%",
		backgroundColor: orangeColor,
		tintColor: orangeColor,
		borderWidth: 0,
		borderColor: "#ffffff",
		color: "#ffffff",
		hintText: "SEARCH",
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		hintTextColor : "#ffffff",
		// For cursor
		tintColor: "#ffffff",
		top: 10,
		bottom: 10
	});
	
	searchBar.addEventListener(
		'return',
		function(e){
			var searchTerm = e.value;
			Ti.API.debug(searchTerm);
			// Opening the new view with the args.
			Alloy.Globals.homeNavBar.openWindow(Alloy.createController('movie_details', {"searchTerm" : searchTerm}).getView());
		}
	);
	
	// maybe different key combos or for the return key
	$.movieButtonView.add(searchBar);
}

// Initialization script
(function(){
	// Making the navigation bar global
	Alloy.Globals.homeNavBar = $.homeNavBar;
	
	createSearchBar();
	Alloy.Globals.homeNavBar.open();
})();

/*
 * The following functions are not supposed to be used.
 * They are kept for educational purposes only.
 */
function __deprecated_functions(){
	function getMoviesData(){
		// Sample data
		var movies_data =  [
		    {
		      "Title": "Boricua's Bond",
		      "Year": "2000",
		      "imdbID": "tt0217287",
		      "Type": "movie",
		      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjA5MDA4NTQyNF5BMl5BanBnXkFtZTYwNDk0Mjk5._V1_SX300.jpg"
		    }
	    ];
	  	return movies_data;
	}

	function searchMovies(e){
		// Open the new screen
		var args = getMoviesData();
		var movieDetailsView = Alloy.createController("movie_details", args).getView();
		
		// This is the opening the window in the navigation bar. 
		Alloy.Globals.homeNavBar.openWindow(movieDetailsView);
	}
	
	function createSearchButton(){
		// Creating an image and a label
		var paddingVertical = 10;
		var paddingHorizontal = 10;
		var distanceBetweenElements = 20;
		
		var imageSearchWrapper = Ti.UI.createView({
			height: Ti.UI.SIZE,
			width: Ti.UI.SIZE,
			top: paddingVertical,
			bottom: paddingVertical,
			layout: "horizontal"
		});	
		
		var paddingLeft = Ti.UI.createView({
			height: Ti.UI.SIZE,
			width: paddingHorizontal,
			left: 0
		});
		
		var paddingRight = Ti.UI.createView({
			height: Ti.UI.SIZE,
			width: paddingHorizontal,
			left: 0
		});
	
		var imageSearchButton = Ti.UI.createImageView({
			image : "/images/search-icon.png",
			width: "15%",
			left: 0
		});
		
		var imageSearchLabel = Ti.UI.createLabel({
			text: "SEARCH",
			width: Ti.UI.SIZE,
			left: distanceBetweenElements,
			color: "#ffffff"
		});
		
		imageSearchWrapper.add(paddingLeft);
		imageSearchWrapper.add(imageSearchButton);
		imageSearchWrapper.add(imageSearchLabel);
		imageSearchWrapper.add(paddingRight);
		
		$.movieButtonView.add(imageSearchWrapper);
		
		$.movieButtonView.addEventListener("click", searchMovies);
	}
}