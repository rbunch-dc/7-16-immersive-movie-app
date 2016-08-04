$(document).ready(function(){
	//This is the base URL for all our API calls
	var apiBaseUrl = 'http://api.themoviedb.org/3/';
	// This is teh base URL for all images
	// After the / comes the width. E.g., imageBaseUrl + 'w300' + poster_path
	var imageBaseUrl = 'http://image.tmdb.org/t/p/';
	// The query string, including the API key
	var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';
	var npUrl  = apiBaseUrl + 'movie/now_playing' + apiKey;

	$.getJSON(npUrl, function(nowPlayingData){
		console.log(nowPlayingData);
		var npHTML = '';
		for(var i = 0; i< nowPlayingData.results.length; i++){
			npHTML += '<div class="col">';
				npHTML += nowPlayingData.results[i].title;
				var posterUrl = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path
				npHTML += '<img src="' + posterUrl + '">';
			npHTML += '</div>';
		}
		$('.poster-grid').html(npHTML);
	});
});