function getMoviesData(){
	// TODO: These must be replaced by something else
	var movies_data =  [
	    {
	      "Title": "Bond of Love",
	      "Year": "2001",
	      "imdbID": "tt0284083",
	      "Type": "movie",
	      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTY1NDk5MjYxM15BMl5BanBnXkFtZTcwMzAzNzUxMQ@@._V1_SX300.jpg"
	    },
	    {
	      "Title": "Bond of Silence",
	      "Year": "2010",
	      "imdbID": "tt1659192",
	      "Type": "movie",
	      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTM4NTI2MjY0M15BMl5BanBnXkFtZTcwNTkwMDMzNQ@@._V1_SX300.jpg"
	    },
	    {
	      "Title": "The Bond",
	      "Year": "1918",
	      "imdbID": "tt0008907",
	      "Type": "movie",
	      "Poster": "N/A"
	    },
	    {
	      "Title": "Mad Mission 3: Our Man from Bond Street",
	      "Year": "1984",
	      "imdbID": "tt0088457",
	      "Type": "movie",
	      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQxMjI2NzMzM15BMl5BanBnXkFtZTcwODgxOTUxMQ@@._V1_SX300.jpg"
	    },
	    {
	      "Title": "Bond Girls Are Forever",
	      "Year": "2002",
	      "imdbID": "tt0353252",
	      "Type": "movie",
	      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjMwNTMzNjM5OF5BMl5BanBnXkFtZTgwOTY4OTk1MDE@._V1_SX300.jpg"
	    },
	    {
	      "Title": "The James Bond Story",
	      "Year": "1999",
	      "imdbID": "tt0239074",
	      "Type": "movie",
	      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTg1ODc0MjkzMF5BMl5BanBnXkFtZTcwMDY2NzEyMQ@@._V1_SX300.jpg"
	    },
	    {
	      "Title": "Jatt James Bond",
	      "Year": "2014",
	      "imdbID": "tt3732110",
	      "Type": "movie",
	      "Poster": "http://ia.media-imdb.com/images/M/MV5BYmI3NzFhNDYtMDA1Zi00NWIwLWJhMmUtNmZhNWRlMzJiNjA3XkEyXkFqcGdeQXVyNjE4MTE3MDY@._V1_SX300.jpg"
	    },
	    {
	      "Title": "Mr. Bond",
	      "Year": "1992",
	      "imdbID": "tt0104927",
	      "Type": "movie",
	      "Poster": "http://ia.media-imdb.com/images/M/MV5BOTJkZGRhOTUtNmZmZC00OTRlLTgyM2YtYmU3ZTZjMDE0YjgzXkEyXkFqcGdeQXVyMjU4NDY1ODA@._V1_SX300.jpg"
	    },
	    {
	      "Title": "James Bond Supports International Women's Day",
	      "Year": "2011",
	      "imdbID": "tt1858469",
	      "Type": "movie",
	      "Poster": "N/A"
	    },
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

function createSearchBar(){
	// Maybe put a wrapper here to flesh out the padding and stuff.
	var searchBar;
	var orangeColor = "#f5ab35";
	searchBar = Ti.UI.createSearchBar({
		showCancel : false,
		height: Ti.UI.SIZE,
		width: "80%",
		backgroundColor: orangeColor,
		tintColor: orangeColor,
		borderWidth: 0,
		borderColor: orangeColor,
		color: "#ffffff",
		hintText: "SEARCH",
		style: Ti.UI.iOS.SEARCH_BAR_STYLE_MINIMAL
	});
	
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
	
	// TODO: Add the event listener for
	// maybe different key combos or for the return key
	
	$.movieButtonView.add(searchBar);
}

// Initialization script
(function(){
	//createSearchButton();
	createSearchBar();
	
	// Making the navigation bar global
	Alloy.Globals.homeNavBar = $.homeNavBar;
	
	// $.index.open();
	Alloy.Globals.homeNavBar.open();
})();