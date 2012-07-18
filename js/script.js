
(function($) {
  
  var updateCarouselSelection = function() {
    var index = $('#lightbox .item.active').index('#lightbox .item');
    
    $('#photo-description').html(window.photos[index].description);
  };
    
  var loadPhotos = function() {
    $.getJSON("photos/photos.json", function(data) {
      $(data).each(function(idx) {
        var photo = this;
        photo.id = idx;
        window.photos.push(photo);
      });
      buildSidebar();
      buildCarousel();
    });
  };
  
  var setupLinks = function() {
    $('#photo-list a').click(function(evt) {
      evt.preventDefault();      
      $('#lightbox').carousel($(this).data('photo-index'));
    });
  };
  
  var buildSidebar = function() {    
    $(photos).each(function() {
      var listItem = ich.photoListItem(this);
      $('#photo-list').append(listItem);
    });
    setupLinks();
  };
    
  var buildCarousel = function() {
    $(window.photos).each(function(idx) {
      var photo = this;
      photo.cssclass = (idx == 0 ? 'active' : '');
      var carouselItem = ich.carouselItem(photo);
      $('#lightbox .carousel-inner').append(carouselItem);
    });    

    $('#lightbox')
      .carousel({interval: 1000})
      .on('slid', updateCarouselSelection);

    updateCarouselSelection();    
  };
  
  $(function() {
    window.photos = [];
    loadPhotos();
    
  });
  
})(jQuery);