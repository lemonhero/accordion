pinao('box');

function pinao(id){
    var oBox=document.getElementById(id);
    var oUl=oBox.getElementsByTagName('ul')[0];
    var aLi=oUl.getElementsByTagName('li');
    var iw=oBox.offsetWidth;
    var ispan=60;
    var len=aLi.length;

    for(var i=0;i<len;i++){
        aLi[i].style.left=i*130+'px';
    }
    for(var i=0;i<len;i++){
        aLi[i].index=i;
        aLi[i].onmouseover=function(){
            for(var k=0;k<len;k++){
                if(k<=this.index){
                    move(aLi[k],{left:k*ispan});
                }else{
                    move(aLi[k],{left:(iw-ispan*len)+k*ispan});
                }
            }
        };
        aLi[i].onmouseout=function(){
            for(var i=0;i<len;i++){
               move(aLi[i],{left:i*130});
            }
        };
    }
};

