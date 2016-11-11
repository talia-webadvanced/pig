$(document).ready(function(){
        $(".boxText").hide();
        $(".circleBox").mouseenter(function(){
                    $(this).css({"width": "150px", "height": "150px", "border-radius": "0"});
                    $(".boxText").show(350);
                    $(".questionMark").hide(950);
        }).mouseleave(function(){
                    $(this).css({"width": "19px", "height": "20px", "border-radius": "100px"});
                    $(".boxText").hide(0);
                    $(".questionMark").show(750);
        });
                  
                  
                                    
//        console.log("Leg position top = " + legPositionTop + ", Leg position left = " + legPositionLeft);
                  
        $("#leg1").css({"top": legTop + "px", "left": legLeft1 + "px"});
        $("#leg2").css({"top": legTop + "px", "left": legLeft2 + "px"});
                  
        $(".st0").css("fill", randomPink);
                                    
                                   
                  
});