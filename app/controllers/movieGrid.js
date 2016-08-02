// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var poster_url = args.Poster || '';
var movie_title = args.Title || 'Default Title';
var movie_year = args.Year || "";

$.thumb.image = poster_url;
$.thumb.defaultImage = '/images/Default.png';
if(movie_year !== ""){
	$.releaseYear.text = "Released on : " + movie_year;	
}

$.thumbTitle.text = movie_title;