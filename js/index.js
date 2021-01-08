//楼层跳跃

var floor = $(".floor-name")
var aim = $(".floor-jump li")

$(window).scroll(function () {
    var height = $('html').height()
    var scroll = $(window).scrollTop()
    var li=$(".floor-jump li")
   
    // for (var i = 0; i < floor.length; i++) {

        if (scroll > floor[0].offsetTop) {
        
            $(".floor-jump").slideDown()
            $('.flex-search').slideDown();
        }else {
          
            $(".floor-jump").slideUp()
            $('.flex-search').slideUp()
        } 
        for( var i=0;i<li.length;i++){

            li[i].onclick=function(){
                for(var j=0;j<li.length;j++){
                if(this==li[j]){
                
                    $("html,body").animate({scrollTop:floor[j].offsetTop-60},500);
                }
             }
            }

        }
         
    // } 
})

$('.return-top').click(()=>{
            $("html,body").animate({scrollTop:0},500);

           })

