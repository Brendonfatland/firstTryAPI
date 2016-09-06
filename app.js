// Same thing as $(document).ready(function(){}); just less code.
$(document).ready(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
alert("something");
  });
});

function getRequest(searchTerm){
  var params = {
    s: searchTerm,
    r: 'json'
  };
  url = 'http://www.omdbapi.com';

  $.getJSON(url, params, function(data){
console.log(data);

    showResults(data.Search);
  });
}

function showResults(results) {
  var html = "";
  $.each(results, function(index, value){
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
  });
  $('.search-results').html(html);
}
