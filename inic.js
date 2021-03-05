 $(document).ready(function(){
    
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });



    $('.menu').hide();
    $('#cross').hide();

    
    $( "#burguerButton" ).click(function() {
      $( ".menu" ).slideToggle( "slow", function() {
        $( "#burguerButton" ).hide();
        $('#cross').show();

      });
    })

    $( "#cross" ).click(function() {
      $( ".menu" ).slideToggle( "slow", function() {
        $( "#burguerButton" ).show();
        $('#cross').hide();
      });
    })
    
    $('li').click(function(){
      $( ".menu" ).slideToggle( "slow", function() {
        $( "#burguerButton" ).show();
        $('#cross').hide();
      });
    });
    
  });