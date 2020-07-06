function pokreni(){
    document.getElementById('brojevi').style.display="block";
    document.getElementById('gif').style.display="block";
    document.getElementById('pokreni').style.display="none";
    prikaz();
    dodeljivanje();
}
function dodeljivanje(){
    var prvibroj=document.getElementById('prvibroj');
    var drugibroj=document.getElementById('drugibroj');
    var trecibroj=document.getElementById('trecibroj');
    var cetvrtibroj=document.getElementById('cetvrtibroj');
    var petibroj=document.getElementById('petibroj');
    var sestibroj=document.getElementById('sestibroj');
    var sedmibroj=document.getElementById('sedmibroj');
    var brojeviElement=[prvibroj,drugibroj,trecibroj,cetvrtibroj,petibroj,sestibroj,sedmibroj];
    var brojevi=new Array;
    var a;
    var i=0;
    do{
        a=randomBroj(1,39);
        if(!brojevi.includes(a)){
            brojevi[i]=a;
            i++;
        }    
    }while(i<7);     
    for(var i=0;i<7;i++){
        brojeviElement[i].innerHTML=brojevi[i];
        if(parseInt(brojeviElement[i].innerHTML)<10){
            brojeviElement[i].style.padding="10px 17px";
        }
    }
}
function randomBroj(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function prikaz(){
    setTimeout(function(){ document.getElementById('prvibroj').style.display="inline"; }, 3000);
    setTimeout(function(){ document.getElementById('drugibroj').style.display="inline"; }, 6000);
    setTimeout(function(){ document.getElementById('trecibroj').style.display="inline"; }, 9000);
    setTimeout(function(){ document.getElementById('cetvrtibroj').style.display="inline"; }, 12000);
    setTimeout(function(){ document.getElementById('petibroj').style.display="inline"; }, 15000);
    setTimeout(function(){ document.getElementById('sestibroj').style.display="inline"; }, 18000);
    setTimeout(function(){ document.getElementById('sedmibroj').style.display="inline"; }, 21000);
    setTimeout(function(){ document.getElementById('gif').style.display="none"; }, 21050);
    setTimeout(function(){ document.getElementById('srecno').style.display="block"; 
                           document.getElementById('ponovopokreni').style.display="block";
    }, 22000);
}
function ponovopokreni(){
    location.reload();
}