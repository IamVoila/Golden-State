
(function($) {
  
  var photos = [];
  
  var loadPhotos = function() {
    $.getJSON("photos/photos.json", function(data) {
      $(data).each(function(idx) {
        var photo = this;
        photo.id = (idx + 1);
        photos.push(photo);
      });
      buildSidebar();
      buildCarousel();
    });
  };
  
  var buildSidebar = function() {
    
    $(photos).each(function() {
      var listItem = ich.photoListItem(this);
      $('#photo-list').append(listItem);
    });    
  };
  
  var buildCarousel = function() {
    
    

    $('#lightbox').carousel({
      
    });
  };
  
  $(function() {
    loadPhotos();
  });
  
})(jQuery);