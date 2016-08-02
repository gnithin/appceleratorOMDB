function fetchMovieData(args){
	var id = args.imdbID;
	
	// Make an xhr request and add the movie details in the
	var url = "https://www.omdbapi.com/?i=" + id + "&type=movie&tomatoes=true&plot=full&r=json";
	var client = Ti.Network.createHTTPClient({
	    // function called when the response data is available
		onload : function(e) {
		    Ti.API.info("Received text: " + this.responseText);
			alert('success');
			var jsonResponse = JSON.parse(this.responseText);
			moviePlot = jsonResponse["Plot"];
			
			createDetailView(moviePlot);
			$.movieContent.text = moviePlot;
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
		    Ti.API.debug(e.error);
		    alert('error');
		},
		timeout : 5000  // in milliseconds
	});
	// Prepare the connection.
	client.open("GET", url);
	// Send the request.
	client.send();
}

function createDetailView(moviePlot){
}

(function(){
	var args = $.args;
	
	var args = $.args;
	$.title.text = args.Title;
	$.releaseYear.text = args.Year;
	// $.movieContent.text = args.imdbID;
	// $.movieContent.text = "as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas the end";	
	
	$.movieContent.text = "Fetching...";
	$.poster.image = args.Poster;
	// Fallback
	$.poster.defaultImage = '/images/Default.png';
	
	// Make a http request to fetch the movie
	fetchMovieData(args);
})();