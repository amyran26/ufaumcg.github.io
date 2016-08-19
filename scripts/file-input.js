/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

$(document).ready(function () {

  'use strict';

  // Display a confirmation message
  $("#app").submit(function (event) {
    event.preventDefault();
    let data = new FormData(this);
    data.append("password", "memes");

    var formElement = document.querySelector("form");
    var request = new XMLHttpRequest();
    request.open("POST", "https://innovativedesign.club");
    request.onload = function() {
      if (request.status == 200) {
        $(".recruit-application-form").html("<br/><p>Thank you for applying. You should hear back in 1-2 weeks.</p>");
      } else {

      }
    };

    request.send(data);

  });

  // Change the input field to be the uploaded file name
  $( '.inputfile' ).each( function()
  {
    var $input	 = $( this ),
      $label	 = $input.next( 'label' ),
      labelVal = $label.html();

    $input.on( 'change', function( e )
    {
      var fileName = '';

      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else if( e.target.value )
        fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        $label.find( 'span' ).html( fileName );
      else
        $label.html( labelVal );
    });

    // Firefox bug fix
    $input
    .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
    .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
  });
});
