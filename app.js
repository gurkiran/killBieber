$(document).ready(function(){
    
    var step;
    var action;
    var play = false;
    var lives;
    var score;
   
    
    $('#go').click(function(){
       if(play === true){
           location.reload();
           $('#lost').hide();
       }
           else{
               $('#lost').hide();
               play = true;
               score =0;
               lives = 3;
               addhearts();
                start();
           }
       });  
        function start(){
            $('.letsc').show();
            
            $(".letsc").css({'left' :Math.round(600*Math.random()), 'top' : 0}); 
            step = 1+ Math.round(5*Math.random()); 

            action =   setInterval(function(){

                    $(".letsc").css('top',$(".letsc").position().top + step);
                    if($('.letsc').position().top > $('#killzone').height()){
                        lives--;
                        addhearts();    
                        if(lives > 0){
                             $('.letsc').show();
                             $(".letsc").css({'left' :Math.round(600*Math.random()), 'top' : 0}); 
                             step = 1+ Math.round(5*Math.random());
                        }
                       
                        else {
                            play=false;
                            stopaction();
                            $('#lost').show();
                        }  
                                   }
            },8);  
        };
   
    $(".letsc").mouseover(function(){
       $(".letsc").hide("explode", 500); 
       $("#sound")[0].play();
        clearInterval(action);
        setTimeout(start, 800);
        
        score++;
        $("#scorenumber").html(score);
        
        
    });
    
    
    function addhearts(){
                $('#lives').empty();
                   for(var i=0;i<lives;i++){
                       $('#lives').append("<img src='heart.jpg'/>");
                   }
               }
    function stopaction(){
        clearInterval(action);
    }
    
});

                
    

                 
                   
                   