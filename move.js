// // JavaScript Document
function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
};

function move(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var bstop=true;
        for(var attr in json){
            var icur=0;
            if(attr=='opacity'){
                icur=parseInt(parseFloat(getStyle(obj,attr))*100);
            }else{
                icur=parseInt(getStyle(obj,attr));  
            }
            var speed=(json[attr]-icur)/5;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(attr=='opacity'){
                obj.style.filter='alpha(opacity:'+(icur+speed)+')';
                obj.style.opacity=(icur+speed)/100; 
            }else{
                obj.style[attr]=(icur+speed)+'px';
            }
            if(json[attr]!=icur){
                bstop=false;    
            }
        }   
    if(bstop){
        clearInterval(obj.timer);
        fn&&fn();   
    }
    },30);  
}


