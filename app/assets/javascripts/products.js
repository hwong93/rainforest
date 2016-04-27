# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).on('ready page:load', function(){
  $('#search-form').submit(function(event){
    event.preventDefault();
    var searchValue = $('#search').val();

    // AJAX METHOD
    $.ajax({
      url: '/products?search=' + searchValue,
      type: 'get',
      dataType: 'js',
    }).done(function(data){
      $('#products').html(data);
    });
  )};
});

// GET script method but you need a respond_to in the index of the products controller

// $.getScript('/products?search=' + searchValue);

// GET
// $.get('/products?search=' + searchValue).done(function(data){
//   console.log(data);
//   $('#products').html(data);
// })
