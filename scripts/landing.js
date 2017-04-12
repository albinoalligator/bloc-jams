 //Javascript
var animatePoints = function(){
    var revealPoint = function(){
        //makes styling the property simple
        //since this is wrapped in jQ method it references a different point element each time and executes the revealPoint callback
        $(this).css({
            opacity: 1,
            transform: 'scaleX(1) translateY(0)'
        });
                
    }; 
    
    //each method iterates over each point and executes a callback
    $.each($('.point'), revealPoint);
};

//window becomes a jQ object, load method takes function as an argument
$(window).load(function(){
    
//jQ height property gets the objects height (window)
   if($(window).height() > 950) {
       animatePoints();  
     }
//uses jQ offset method    
   var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
    
//jQ scroll method is an event listener but it wraps the appearance of events    
    $(window).scroll(function(event){
        
       if($(window).scrollTop() >= scrollDistance){
           animatePoints();
          
         }
        
    });
});

