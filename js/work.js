$(document).ready(function() {
    var id = get_id(),
        cont = $("#main-container"),
        images = $('#ani');

    // remove previous images and such
    cont.empty();

    // add the images
    for (var i = 0; i < ids[id].images.length; i++) {
        cont.append(ids[id].images[i])
    }
    // add the tiny description
    cont.append(ids[id].description);

    //add the title
    $('.work_title').html(ids[id].title);
    $('.nextStory').attr("href", ids[id].next_link);
    $('.prevStory').attr("href", ids[id].prev_link);

    $('#main-container').waitForImages({
        finished: function() {
            // ...
        },
        each: function() {
            // ...
            $(this).addClass('scene_element150 fadeIn');
            $(this).css('visibility', 'visible');
        },
        waitForAll: false

    }).progress(function(loaded, count, success) {

    });
})

function get_id() {

    var url = window.location.href,
        id = window.location.hash;
    return id;
}