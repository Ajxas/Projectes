 $(document).ready(function(){
   //si la pantalla té una mida inferior a la suposada per ordinadors es deshabilita l'smooth scroll
   
    smoothScroll();
    mobileDevice();
    showBios();
    
  });

  function smoothScroll(){
    if($(window).width()>796){
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
    }
  
  
  
  };


  function mobileDevice(){
    //S'amaguen menú mòbil i icona de tancar menú.
    $('.menu').hide();
    $('#cross').hide();

    //Si es clicka burguerButton es mostra el menú, s'amaga burguerButton i es mostra icona tancar menú.
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
    
  };

  

  //.membres-section-img {
 //   width:40%;
 //
 //
 //   margin-bottom: 5%;
   // margin-left: 30%;
    //transition: all ease 2s;
    
//}

//.membres-section-img:hover{
  //  transform: scale(1.1) ;
//}

//.membres-section-img img{
  //  width:100%;
 //   display:block;
//}