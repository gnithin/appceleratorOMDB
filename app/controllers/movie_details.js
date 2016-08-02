$.fg.init({
    columns:3,
    space:5,
    gridBackgroundColor:'#fff',
    itemHeightDelta: 0,
    itemBackgroundColor:'#eee',
    itemBorderColor:'transparent',
    itemBorderWidth:0,
    itemBorderRadius:0
});

function addGrid(){
	var items = [];
	var image_url="";
	var sample_data = [
	        {title:'sample 1', image:'http://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg'},
	        {title:'sample 2', image:'http://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg'},
	        {title:'sample 3', image:'http://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg'},
	        {title:'sample 4', image:'http://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg'},
	        {title:'sample 5', image:'http://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg'},
	        {title:'sample 6', image:'http://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg'},
	        {title:'sample 7', image:'http://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg'},
	        {title:'sample 8', image:'http://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg'},
	        {title:'sample 9', image:'http://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg'},
	        {title:'sample 10', image:'http://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg'},
	        {title:'sample 11', image:'http://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg'},
	        {title:'sample 12', image:'http://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg'},
	        {title:'sample 13', image:'http://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg'},
	        {title:'sample 14', image:'http://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg'},
	        {title:'sample 15', image:'http://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg'}
	    ];
	
	for (var x=0; x < sample_data.length; x++){
	
	    //CREATES A VIEW WITH OUR CUSTOM LAYOUT
	    var view = Alloy.createController('movieGrid').getView();
	
	    //THIS IS THE DATA THAT WE WANT AVAILABLE FOR THIS ITEM WHEN onItemClick OCCURS
	    var values = {
	        title: sample_data[x].title,
	        image: sample_data[x].image
	    };
	
	    //NOW WE PUSH TO THE ARRAY THE VIEW AND THE DATA
	    items.push({
	        view: view,
	        data: values
	    });
	};
	
	//ADD ALL THE ITEMS TO THE GRID
	$.fg.addGridItems(items);
}



(function(){
	// Arguments passed into this controller can be accessed via the `$.args` object directly or:
	var args = $.args;
	//buildTableView(args);
	alert("Hello there mate!");
	addGrid();
})();

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
