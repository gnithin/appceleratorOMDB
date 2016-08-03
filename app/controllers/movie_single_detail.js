function fetchMovieData(args){
	var id = args.imdbID;
	
	// Make an xhr request and add the movie details in the
	var url = "https://www.omdbapi.com/?i=" + id + "&type=movie&tomatoes=true&plot=full&r=json";
	var client = Ti.Network.createHTTPClient({
	    // function called when the response data is available
		onload : function(e) {
		    Ti.API.info("Received text: " + this.responseText);
			// alert('success');
			var jsonResponse = JSON.parse(this.responseText);
			args.moviePlot = jsonResponse["Plot"];
			
			createDetailView(args); 
			//createDetailView([]);	
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

function createDetailView(args){
	// Remove the loading view
	$.loadingView.removeAllChildren();
	
	var title = args.Title;
	var releaseYearText = args.Year;
	var posterImage = args.Poster;
	var posterDefaultImage = '/images/Default.png';
	var movieContentText;
	movieContentText = "as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas as bas tas the end";
	movieContentText = args.moviePlot;
	
	
	// Need to create stuff here.
	var rootView = $.contentView;
	rootView.height = 500;
	var scrollView = Ti.UI.createScrollView({
		id : "scrollViewWrapper",
		contentWidth: Ti.UI.SIZE,
		width: "100%",
		layout: "vertical"
	});
	
	var baseView = scrollView;
	
	var imageView = Ti.UI.createImageView({
		id:"poster",
		height: 400,
		width: "100%",
		image : posterImage,
		defaultImage: posterDefaultImage
	});
	
	var titleSectionWrapper = Ti.UI.createView({
		id:"titleSectionWrapper",
		layout: "vertical",
		width : "100%",
		height: Ti.UI.SIZE,
		backgroundColor: "#f5ab35",
		top: 10,
		bottom: 10
	});
	
	var titleSection = Ti.UI.createView({
		id:"titleSection",
		layout: "vertical",
		width: "100%",
		height: Titanium.UI.SIZE,
		backgroundColor: "#f5ab35",
	});
	
	var titleLabel = Ti.UI.createLabel({
		id: "title",
		text: title,
		color: "#ffffff",
		font : {
			fontSize : 15
		},
		minimumFontSize: 15,
		// This is necessary for preventing word-wrap
		width: "90%",
		height: 17,
		wordWrap : false
	});
	
	var releaseYearLabel = Ti.UI.createLabel({
		id: releaseYearText,
		text: "Something random",
		color: "#ffffff",
		font : {
			fontSize : 12
		},
		width: "90%",
		minimumFontSize: 12,
		height: 15,
		wordWrap : false,
		top: 1
	});
	
	var movieContentsLabel = Ti.UI.createLabel({
		id: "movieContent",
		text: movieContentText,
		width: "100%",
		height: Ti.UI.SIZE,
		color: "#000000",
		backgroundColor: "#ffffff",
		ellipsize: false,
		clipMode: Titanium.UI.iOS.CLIP_MODE_DISABLED
	});
	
	// All the add calls need to be here ideally
	/*
	 * titleLabel  releaseYearLabel
	 *    | 		    |
	 * 	  | 			|
	 * 	   \		   /
	 *   TitleSectionWrapper
	 * 		    |
	 * 	      TitleSection   ImageView  	MovieContents
	 * 			  \		   	   /				|
	 * 			   \		  /					|
	 * 			     baseView  -----------------|
	 */		
	
	titleSectionWrapper.add(titleLabel);
	titleSectionWrapper.add(releaseYearLabel);
	
	titleSection.add(titleSectionWrapper);
	
	baseView.add(imageView);
	baseView.add(titleSection);
	baseView.add(movieContentsLabel);
	
	rootView.add(baseView);
}

(function(){
	var args = $.args;
	
	// Make a http request to fetch the movie
	fetchMovieData(args);
})();