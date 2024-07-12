$(document).ready(function() {
    // Filter images
    $('#filters button').click(function() {
        var filter = $(this).data('filter');
        if (filter === 'all') {
            $('.photo').fadeIn();
        } else {
            $('.photo').fadeOut();
            $('.' + filter).fadeIn();
        }
    });

    // Open lightbox
    $('.photo img').click(function() {
        var src = $(this).attr('src');
        $('#lightbox-img').attr('src', src);
        $('#lightbox').fadeIn();
    });

    // Close lightbox
    $('#close, #lightbox').click(function(event) {
        if (event.target.id === 'close' || event.target.id === 'lightbox') {
            $('#lightbox').fadeOut();
        }
    });
});
