
(function($) {
    
  var loadPhotos = function() {
    $.getJSON("photos/photos.json", function(data) {
      $(data).each(function(idx) {
        var photo = this;
        photo.id = (idx + 1);
        window.photos.push(photo);
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
    $(window.photos).each(function(idx) {
      var photo = this;
      photo.cssclass = (idx == 0 ? 'active' : '');
      var carouselItem = ich.carouselItem(photo);
      $('#lightbox .carousel-inner').append(carouselItem);
    });    

    $('#lightbox').carousel({
      
    });
  };
  
  $(function() {
    window.photos = [];
    loadPhotos();
  });
  
})(jQuery);