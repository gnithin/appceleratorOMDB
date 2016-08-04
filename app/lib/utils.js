exports.doGetRequest = function(url, dataDict, successCb, errorCb, timeout){
	if (typeof(dataDict) === "object"){
		var paramStr = serializeGetParams(dataDict);
		if(paramStr !== null && paramStr !== ""){
			url = url + "?" + paramStr;
		}
	}
	
	if (typeof(successCb) !== "function"){
		successCb = function(resp){
			Ti.API.log("Success Response obtained!");
			Ti.API.log(resp);
		};
	}
	
	if (typeof(successCb) !== "function"){
		errorCb = function(e){
			Ti.API.log("Error Response :(");
			Ti.API.log(resp);
		};
	}
	
	if(typeof(timeout) === "undefined"){
		timeout = 5000;
	}
	
	var client = Ti.Network.createHTTPClient({
	    // function called when the response data is available
		onload : successCb,
		// function called when an error occurs, including a timeout
		onerror : errorCb,
		// in milliseconds
		timeout : timeout
	});
	
	Ti.API.debug("Sending GET request- " + url);
	client.open("GET", url);
	
	// Send the request.
	client.send();
};

// Helper method to serialize params in get request.
function serializeGetParams(d){
	if(typeof(d) !== "undefined"){
		var paramEntries = [];
		
		try{
			for(var key in d){
				paramEntries.push(key + "=" + encodeURIComponent(d[key]));
			}
		}catch(err){
			// Resetting it back to empty
			paramEntries = [];
			Ti.API.error("Error in serializeGetParams - " + err);
		}finally{
			if(paramEntries.length > 0){
				return paramEntries.join("&");	
			}
		}
	}
	
	return null;
}