
 $('.img-box1').mousemove(function (){
    var maskWidth=$('.img-box1 .mask')[0].offsetWidth;
    var maskHight=$('.img-box1 .mask')[0].offsetHeight;

    var y=event.pageY-$('.img-box')[0].offsetTop-maskHight/2;
    var x=event.pageX-$('.img-box')[0].offsetLeft-maskWidth/2

    if(x<0){
        x=0
    }else if(x>=$('.img-box')[0].offsetWidth-maskWidth-2){
        x=$('.img-box')[0].offsetWidth-maskHight-2
    }
    if(y<0){
        y=0
    }else if (y>=$('.img-box')[0].offsetHeight-maskHight+2){
        y=$('.img-box')[0].offsetHeight-maskHight+2
    }
    $(" .img-box1 .mask").css({
        top:y,
        left:x,
        display:'block',
    })
   
    var x2=$('.img-box2 img')[0].offsetWidth /$('.img-box')[0].offsetWidth*x
    var y2=$('.img-box2 img')[0].offsetWidth /$('.img-box')[0].offsetWidth*y
  
    $(".img-box2").css( {display:'block'})
    $(".img-box2 img").css({
        top:-y2,
        left:-x2,                 
    })
})
$('.img-box1').mouseleave(()=>{
$(" .img-box1 .mask").css({          
        display:'none'
    });
 $(".img-box2").css( {display:'none'})
})

$('.add').click(()=>{
    var a= $('#number').val()
    a++
    $('#number').val(a)
    console.log(a)
 })
 $('.reduce').click(()=>{
    var a= $('#number').val()
    a--
    $('#number').val(a)
   
 })

 var time =new Date
 console.log(time)