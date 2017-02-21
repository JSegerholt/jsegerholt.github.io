


$( document ).ready( function() {
    var $item = $( '.imgs' );
    var $vids = $( '.vids' );
	$item.push($vids);
	console.log($vids);
	console.log($item);


    $('#gallery' ).waitForImages({ 
        finished: function() {
            // ...
        },
        each: function() {
            // ...
            $( this ).addClass( 'scene_element150 fadeIn' );
        },
        waitForAll: false

    }).progress( function( loaded, count, success ) {
        //        alert(loaded + ' of ' + count + ' images has ' + (success ? 'loaded' : 'failed to load') +  '.');
        //alert( "gottem")
    });


    $item.on( 'click', function() {
        console.log( $( this ).attr( 'id' ) ); 
        var id = $( this ).attr( 'id' ); 
        //        $( "body" ).fadeTo( 1000, 0 ); 
        // change later!
        //        setTimeout( function() {
        window.location.href = 'http://resinprojects.com/work.html#' + id ; 
        //                window.location.href = 'file:///Volumes/WorkHD/Users/derin_akintilo/Developer/Personal/Resin_jsegerholt/work.html#' + id ; 
        //        window.location.href = 'http://jsegerholt.github.io/work.html#' + id ; 


        // window.location.href = 'file:///Volumes/WorkHD/Users/derin_akintilo/Developer/Personal/jsegerholt.github.com/work.html#' + id ; 
        //        }, 1010 )

    }); 
})
