function listPosts(data) {
  var output = '<form class="ui-filterable"><input id="searchposts" data-type="search"></form>';

  output += '<ul data-role="listview" data-filter="true" data-input="#searchposts">';
  $.each(data.posts, function(key, val) {

    var tempDiv = document.createElement("tempDiv");
    tempDiv.innerHTML = val.excerpt;
    $("a", tempDiv).remove();
    var excerpt = tempDiv.innerHTML;

    output += '<li>';
    output += '<a href="#Newspost" onclick = "showPost(' + val.id + ')">';
    output += (val.thumbnail) ?
      '<img src="' + val.thumbnail + '" alt="' + val.title + '">':
      '<img src="images/CDM.png" alt="CDM Logo">';
    output += '<h3>' + val.title + "</h3>";
    output += '<p>' + excerpt + "</p>";
    output += '</a>';
    output += '</li>';
  }); //go through each post
  output += "</ul>";
  $('#postlist').html(output);
} //listPosts

function showPost(id) {
  $.getJSON('http://www.creativedigitalmedia.ie?json=get_post&post_id=' + id + '&callback=?', function(data) {
    var output = '<h3>' + data.post.title + '</h3>';
    output += data.post.content;
    output +='<p>'+data.post.author.name+'</p>'
    output +='<p>'+data.post.date+'</p>'
    $('#mypost').html(output);
  });
}


//Events

function listEvents(data) {
  var output = '<form class="ui-filterable"><input id="searchposts" data-type="search"></form>';

  output += '<ul data-role="listview" data-filter="true" data-input="#searchposts">';
  $.each(data.posts, function(key, val) {

    var tempDiv = document.createElement("tempDiv");
    tempDiv.innerHTML = val.excerpt;
    $("a", tempDiv).remove();
    var excerpt = tempDiv.innerHTML;

    output += '<li>';
    output += '<a href="#Eventpost" onclick = "showEvents(' + val.id + ')">';
    output += (val.thumbnail) ?
      '<img src="' + val.thumbnail + '" alt="' + val.title + '">':
      '<img src="images/CDM.png" alt="CDM Logo">';
    output += '<h3>' + val.title + "</h3>";
    output += '<p>' + excerpt + "</p>";
    output += '</a>';
    output += '</li>';
  }); //go through each post
  output += "</ul>";
  $('#Eventlist').html(output);
} //listPosts

function showEvents(id) {
  $.getJSON('http://www.creativedigitalmedia.ie/index.php/category/events/?json=get_post&post_id=' + id + '&callback=?', function(data) {
    var output = '<h3>' + data.post.title + '</h3>';
    output += data.post.content;
    output +='<p>'+data.post.author.name+'</p>'
    output +='<p>'+data.post.date+'</p>'
    $('#myevent').html(output);
  });
}

//active
$(function(){
    $('#navbar a').click(function () {
        $('#navbar a').removeClass('active');
        $(this).addClass('active');
     });
 });
