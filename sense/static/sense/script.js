$(document).ready(function(){

//Sidebar************
            
          $( "#menu" ).click(function(){
            TweenMax.to("#sidebar", 0.5, { y:00 , opacity:1 , ease:Power1.easeOutIn });
          });
        /*  $( "#menu" ).click(function(){
            TweenMax.to("#sidebar", 0.5, { y:00 , opacity:1 , ease:Power1.easeOutIn });
          }); */   
          $( "#menu" ).dblclick(function(){
            TweenMax.to("#sidebar", 2, { y:-1000 , opacity:1 , ease:Power1.easeOutIn });
          });
          /*$("#sidebar").ready(function(){
            TweenMax.to("#sidebar", 2, { y:-322 , opacity:1 , ease:Power1.easeOutIn });
          }); */     

    
//Control**************
    
          $( "#me" ).mouseenter(function(){
            TweenMax.to("#control", 0.5, { y:00 , opacity:1 , ease:Power1.easeOutIn });
          });
          $( "#control" ).mouseenter(function(){
            TweenMax.to("#control", 0.5, { y:00 , opacity:1 , ease:Power1.easeOutIn });
          });    

    
           $( "#control" ).mouseleave(function(){
            TweenMax.to("#control", 2, { y:-255 , opacity:1 , ease:Power1.easeOutIn });
          });
    
           $("#control").ready(function(){
            TweenMax.to("#control", 0, { y:-255 , opacity:1 , ease:Power1.easeOutIn });
          });     
            
    
              
//cOne**************
    
            $("#cone").ready(function(){
            TweenMax.to("#ul", 0, { y:0, ease:Power1.easeOutIn });
          });     
            $("#cone").mouseenter(function(){
            TweenMax.to("#ul", 0.3, { y:-200, ease:Power1.easeOutIn });
          }); 
            $("#cone").mouseleave(function(){
            TweenMax.to("#ul", 0.3, { y:0, ease:Power1.easeOutIn });
          }); 
    
    
    
//cTwo**************
    
            $("#ctwo").ready(function(){
            TweenMax.to("#co", 0, { y:0, ease:Power1.easeOutIn });
          });     
            $("#ctwo").mouseenter(function(){
            TweenMax.to("#co", 0.3, { y:-200, ease:Power1.easeOutIn });
          }); 
            $("#ctwo").mouseleave(function(){
            TweenMax.to("#co", 0.3, { y:0, ease:Power1.easeOutIn });
          }); 

    
//f upload************
            
          $( "#cone" ).mouseenter(function(){
            TweenMax.to(".f", 0.3, { x:00, ease:Power1.easeOutIn });
          });
          $( "#cone" ).mouseleave(function(){
            TweenMax.to(".f", 1, { x:-150, ease:Power1.easeOutIn });
          });
          $("#cone").ready(function(){
            TweenMax.to(".f", 0, { x:-150, ease:Power1.easeOutIn });
          });    
    
    
//m upload************
            
          $( "#cone" ).mouseenter(function(){
            TweenMax.to(".m", 0.3, { x:00, ease:Power1.easeOutIn });
          });
          $( "#cone" ).mouseleave(function(){
            TweenMax.to(".m", 1, { x:150, ease:Power1.easeOutIn });
          });
          $("#cone").ready(function(){
            TweenMax.to(".m", 0, { x:150, ease:Power1.easeOutIn });
          });      
    
    
    
    
//shirts click************
    
    
          $( "#catshirts" ).ready(function(){
            TweenMax.to("#win1", 0, { x:00, opacity :0, ease:Power1.easeOutIn });
          });
          $( "#catshirts" ).click(function(){
            TweenMax.to("#win1", 0.3, { x:1000, opacity :1,ease:Power1.easeOutIn });
          });
        
          $( ".close" ).click(function(){
            TweenMax.to("#win1", 0.5, { x:0, opacity :0,ease:Power1.easeOutIn });
          });
    
          $("#catshirts").click(function(e) {
            TweenLite.to(window, 1, {scrollTo:{y:0, x:350}, ease:Power2.easeInOut});
        });
          
          $(".close").click(function(e) {
            TweenLite.to(window, 0.5, {scrollTo:{y:0, x:0}, ease:Power2.easeInOut});
        });
    
    
//shirts win1 click************
    
    
          $( ".win1contain2" ).ready(function(){
            TweenMax.to(".win1contain2", 0, { x:00, opacity :1, ease:Power1.easeOutIn });
          });

    
//Salwar click************
    
    
          $( "#catsalwars" ).ready(function(){
            TweenMax.to("#win2", 0, { x:00, opacity :0, ease:Power1.easeOutIn });
          });
          $( "#catsalwars" ).click(function(){
            TweenMax.to("#win2", 0.3, { x:1000, opacity :1,ease:Power1.easeOutIn });
          });
        
          $( ".close" ).click(function(){
            TweenMax.to("#win2", 0.5, { x:0, opacity :0,ease:Power1.easeOutIn });
          });
    
          $("#catsalwars").click(function(e) {
            TweenLite.to(window, 1, {scrollTo:{y:0, x:350}, ease:Power2.easeInOut});
        });
          
          $(".close").click(function(e) {
            TweenLite.to(window, 0.5, {scrollTo:{y:0, x:0}, ease:Power2.easeInOut});
        });

        
//small circles*********
          
    $('#catshirts').mouseleave(function () {
    TweenMax.to('#cattxt1', .3, {css:{y:0}});
    TweenMax.to('#catshirts', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#catshirts').mouseenter(	function () {
    TweenMax.to('#cattxt1', .3, {css:{y:0}});
    TweenMax.to('#catshirts', .3, { css:{ scaleX:1.2, scaleY:1.2 ,autoAlpha:1}, });
                                        });
//**************
            
    $('#catjeans').mouseleave(function () {
    TweenMax.to('#cattxt2', .3, {css:{y:0}});
    TweenMax.to('#catjeans', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#catjeans').mouseenter(	function () {
    TweenMax.to('#cattxt2', .3, {css:{y:0}});
    TweenMax.to('#catjeans', .3, { css:{ scaleX:1.2, scaleY:1.2 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#catshoes').mouseleave(function () {
    TweenMax.to('#cattxt3', .3, {css:{y:0}});
    TweenMax.to('#catshoes', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#catshoes').mouseenter(	function () {
    TweenMax.to('#cattxt3', .3, {css:{y:0}});
    TweenMax.to('#catshoes', .3, { css:{ scaleX:1.2, scaleY:1.2 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#catwatches').mouseleave(function () {
    TweenMax.to('#cattxt4', .3, {css:{y:0}});
    TweenMax.to('#catwatches', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#catwatches').mouseenter(	function () {
    TweenMax.to('#cattxt4', .3, {css:{y:0}});
    TweenMax.to('#catwatches', .3, { css:{ scaleX:1.2, scaleY:1.2 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#cathats').mouseleave(function () {
    TweenMax.to('#cattxt5', .3, {css:{y:0}});
    TweenMax.to('#cathats', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#cathats').mouseenter(	function () {
    TweenMax.to('#cattxt5', .3, {css:{y:0}});
    TweenMax.to('#cathats', .3, { css:{ scaleX:1.2, scaleY:1.2 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#catbelts').mouseleave(function () {
    TweenMax.to('#cattxt6', .3, {css:{y:0}});
    TweenMax.to('#catbelts', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#catbelts').mouseenter(	function () {
    TweenMax.to('#cattxt6', .3, {css:{y:0}});
    TweenMax.to('#catbelts', .3, { css:{ scaleX:1.2, scaleY:1.2 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#catglasses').mouseleave(function () {
    TweenMax.to('#cattxt7', .3, {css:{y:0}});
    TweenMax.to('#catglasses', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#catglasses').mouseenter(	function () {
    TweenMax.to('#cattxt7', .3, {css:{y:0}});
    TweenMax.to('#catglasses', .3, { css:{ scaleX:1.2, scaleY:1.2 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#catsalwars').mouseleave(function () {
    TweenMax.to('#cattxt8', .3, {css:{y:0}});
    TweenMax.to('#catsalwars', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#catsalwars').mouseenter(	function () {
    TweenMax.to('#cattxt8', .3, {css:{y:0}});
    TweenMax.to('#catsalwars', .3, { css:{ scaleX:1.2, scaleY:1.2 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#catkurtas2').mouseleave(function () {
    TweenMax.to('#cattxt9', .3, {css:{y:0}});
    TweenMax.to('#catkurtas2', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#catkurtas2').mouseenter(	function () {
    TweenMax.to('#cattxt9', .3, {css:{y:0}});
    TweenMax.to('#catkurtas2', .3, { css:{ scaleX:1.2, scaleY:1.2 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#catkurtis').mouseleave(function () {
    TweenMax.to('#cattxt10', .3, {css:{y:0}});
    TweenMax.to('#catkurtis', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#catkurtis').mouseenter(	function () {
    TweenMax.to('#cattxt10', .3, {css:{y:0}});
    TweenMax.to('#catkurtis', .3, { css:{ scaleX:1.2, scaleY:1.2 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#cattops').mouseleave(function () {
    TweenMax.to('#cattxt11', .3, {css:{y:0}});
    TweenMax.to('#cattops', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#cattops').mouseenter(	function () {
    TweenMax.to('#cattxt11', .3, {css:{y:0}});
    TweenMax.to('#cattops', .3, { css:{ scaleX:1.2, scaleY:1.2 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#catdresses').mouseleave(function () {
    TweenMax.to('#cattxt12', .3, {css:{y:0}});
    TweenMax.to('#catdresses', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#catdresses').mouseenter(	function () {
    TweenMax.to('#cattxt12', .3, {css:{y:0}});
    TweenMax.to('#catdresses', .3, { css:{ scaleX:1.2, scaleY:1.2 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#catjeans2').mouseleave(function () {
    TweenMax.to('#cattxt13', .3, {css:{y:0}});
    TweenMax.to('#catjeans2', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#catjeans2').mouseenter(	function () {
    TweenMax.to('#cattxt13', .3, {css:{y:0}});
    TweenMax.to('#catjeans2', .3, { css:{ scaleX:1.2, scaleY:1.2 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#catfoots').mouseleave(function () {
    TweenMax.to('#cattxt14', .3, {css:{y:0}});
    TweenMax.to('#catfoots', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#catfoots').mouseenter(	function () {
    TweenMax.to('#cattxt14', .3, {css:{y:0}});
    TweenMax.to('#catfoots', .3, { css:{ scaleX:1.5, scaleY:1.5 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#catwatches2').mouseleave(function () {
    TweenMax.to('#cattxt15', .3, {css:{y:0}});
    TweenMax.to('#catwatches2', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#catwatches2').mouseenter(	function () {
    TweenMax.to('#cattxt15', .3, {css:{y:0}});
    TweenMax.to('#catwatches2', .3, { css:{ scaleX:1.5, scaleY:1.5 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#cathats2').mouseleave(function () {
    TweenMax.to('#cattxt16', .3, {css:{y:0}});
    TweenMax.to('#cathats2', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#cathats2').mouseenter(	function () {
    TweenMax.to('#cattxt16', .3, {css:{y:0}});
    TweenMax.to('#cathats2', .3, { css:{ scaleX:1.5, scaleY:1.5 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#catbelts2').mouseleave(function () {
    TweenMax.to('#cattxt17', .3, {css:{y:0}});
    TweenMax.to('#catbelts2', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#catbelts2').mouseenter(	function () {
    TweenMax.to('#cattxt17', .3, {css:{y:0}});
    TweenMax.to('#catbelts2', .3, { css:{ scaleX:1.5, scaleY:1.5 ,autoAlpha:1}, });
                                        });
//**************    
            
    $('#catglasses2').mouseleave(function () {
    TweenMax.to('#cattxt18', .3, {css:{y:0}});
    TweenMax.to('#catglasses2', .7, { css:{ scaleX:1, scaleY:1 ,autoAlpha:1}});                                                                 });

       
    $('#catglasses2').mouseenter(	function () {
    TweenMax.to('#cattxt18', .3, {css:{y:0}});
    TweenMax.to('#catglasses2', .3, { css:{ scaleX:1.5, scaleY:1.5 ,autoAlpha:1}, });
                                        });
//**************    
            

            
            
            
            
            
});

























