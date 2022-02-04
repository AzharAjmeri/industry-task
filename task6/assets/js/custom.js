// document ready event
$(document).ready(function(){

    // Owl carousel
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        loop: true
    });

    // Mansonry
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 200
    });

    // Flex slider
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });

    // jQuery methods go here...
  
    // Selectors
    $(".ul-js li:last").html("Changes from Last to Third");
    $(".ul-js li:first-child").html("Changes every First element of UL");

    // CLick event
    $('.click-event-p').click(function(){
        alert("Hello there!");
    })
    $('.click-hide-event-p').click(function(){
        $(this).hide(100);
    })
    $('.double-click-hide-event-p').dblclick(function(){
        $(this).hide();
    })

    // focus event
    $("input").focus(function(){
        $(this).css("background-color", "#f1f1f1");
    });

    // on event
    $(".multiple-events").on({
        mouseenter: function(){
          $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
          $(this).css("background-color", "white");
        },
        click: function(){
          $(this).css("background-color", "yellow");
        }
    });

    //toggle
    $(".toggle-button").click(function(){
        $(".toggle-content").toggle(1000);
    });

    // Fade
    
    $(".fade-in").click(function(){
        $(".square-box").fadeIn();
    });
    $(".fade-out").click(function(){
        $(".square-box").fadeOut();
    });
    $(".fade-toggle").click(function(){
        $(".square-box").fadeToggle();
    });
    $(".fade-to").click(function(){
        $(".square-box").fadeTo("slow", 0.4);
    });

    // Animate
    $(".animation-button").click(function(){
        $(".square-box").animate({
            left: '250px',
            opacity: '0.5',
            height: '250px',
            width: '250px'
        });
    });

    // Stop
    $("#flip").click(function(){
            $("#panel").slideDown(5000);
    });
    $("#stop").click(function(){
        $("#panel").stop();
    });
    
    // Callback
    $("#callback").click(function(){
        $(".callback-p").toggle("slow", function(){
          alert("paragraph toggled");
        });
    });

    // chaining
    $(".toggle-para-btn").click(function(){
        $(".toggle-para").css("color", "blue").slideUp(1000).slideDown(1000).css("background", "black");
    });

    // set attr
    $(".change-attr").click(function(){
        $("#w3s").attr({
          "href" : "https://www.w3schools.com/jquery/",
          "title" : "W3Schools jQuery Tutorial"
        });
    });

    // error
    // $( "#book" )
    // .error(function() {
    //     alert( "Handler for .error() called." )
    // })
    // .attr( "src", "missing.png" );


    // Resize
    $( window ).resize(function() {
        $( "body" ).append( "<div style='background: black; color: white'>" + $( window ).width() + "</div>" );
    });

    // scroll
    $("#target").scroll(function() {
        $( "#target" ).append( "<div>Handler for .scroll() called.</div>" );
    });

    
    var xTriggered = 0;
    $( "#target-input" ).keydown(function( event ) {
        if ( event.which == 13 ) {
            event.preventDefault();
        }
        xTriggered++;
        var msg = "Handler for .keydown() called " + xTriggered + " time(s).";
        $("#input-data").html(msg);
    });
    $( "#target-input" ).keypress(function( event ) {
        if ( event.which == 13 ) {
            event.preventDefault();
        }
        xTriggered++;
        var msg = "Handler for .keypress() called " + xTriggered + " time(s).";
        $("#input-data").html(msg);
    });


});