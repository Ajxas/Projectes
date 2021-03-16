 $(document).ready(function() {
     //si la pantalla té una mida inferior a la suposada per ordinadors es deshabilita l'smooth scroll

     smoothScroll();
     mobileDevice();


 });

 function smoothScroll() {
     if ($(window).width() > 796) {
         $("a").on('click', function(event) {
             if (this.hash !== "") {
                 event.preventDefault();

                 var hash = this.hash;


                 $('html, body').animate({
                     scrollTop: $(hash).offset().top
                 }, 1000, function() {


                     window.location.hash = hash;
                 });
             }
         });
     }



 };


 function mobileDevice() {
     //S'amaguen menú mòbil i icona de tancar menú.
     $('.menu').hide();
     $('#cross').hide();

     //Si es clicka burguerButton es mostra el menú, s'amaga burguerButton i es mostra icona tancar menú.
     $("#burguerButton").click(function() {
         $(".menu").slideToggle("slow", function() {
             $("#burguerButton").hide();
             $('#cross').show();

         });
     })

     $("#cross").click(function() {
         $(".menu").slideToggle("slow", function() {
             $("#burguerButton").show();
             $('#cross').hide();
         });
     })

     $('li').click(function() {
         $(".menu").slideToggle("slow", function() {
             $("#burguerButton").show();
             $('#cross').hide();
         });
     });

 };