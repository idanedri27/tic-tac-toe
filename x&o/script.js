
$(document).ready(function() {  
   
    let count = 0;
    let player1 = true;
    let player2 = true;
    let turn = document.querySelector('.turn');
   
    function resetP1() {
        player1 = true;
       
    }

    function resetP2() {
        player2 = true;
       
    }
    
    let whoStart = ['O you start play','X you start play']
       let line=  Math.floor(Math.random()*2);
  
         turn.innerHTML=whoStart[line];

         if(whoStart[line]=='X you start play'){
            
            $(".cell").click(function() {
                if(player1) {  
                    $(this).addClass('x');
                    count++
                    $(this).off('click');
                    player1 = false;
                    resetP2();
                    turn.innerHTML='O that your turn';
                } else{    
                    $(this).addClass('o');
                    count++
                    $(this).off('click');
                    player2 = false;           
                    resetP1();
                    turn.innerHTML='X that your turn';
                }

                xternaryWin()
                oternaryWin()

                if(count ==9 ){
                draw();
                }

            });
            
         }else{

            $(".cell").click(function() {
                if(player1) {  
                    $(this).addClass('o');
                    count++
                    $(this).off('click');
                    player1 = false;
                    resetP2();
                    turn.innerHTML='X that your turn';
                } else{
                    
                    $(this).addClass('x');
                    count++
                    $(this).off('click');
                    player2 = false;           
                    resetP1();
                    turn.innerHTML='O that your turn';
                }

                xternaryWin()
                oternaryWin()
                if(count ==9 ){
                draw();
                }
            });

         }

});



 function xternaryWin(){
   if( $('.cell-1').hasClass('x') && $('.cell-2').hasClass('x') && $('.cell-3').hasClass('x')   
    ||  $('.cell-1').hasClass('x') && $('.cell-4').hasClass('x') && $('.cell-7').hasClass('x')
    ||  $('.cell-1').hasClass('x') && $('.cell-5').hasClass('x') && $('.cell-9').hasClass('x')    
    ||$('.cell-2').hasClass('x') && $('.cell-5').hasClass('x') && $('.cell-8').hasClass('x')    
    ||  $('.cell-3').hasClass('x') && $('.cell-6').hasClass('x') && $('.cell-9').hasClass('x')  
    ||  $('.cell-3').hasClass('x') && $('.cell-5').hasClass('x') && $('.cell-7').hasClass('x')    
    || $('.cell-7').hasClass('x') && $('.cell-8').hasClass('x') && $('.cell-9').hasClass('x')   
    ||  $('.cell-4').hasClass('x') && $('.cell-5').hasClass('x') && $('.cell-6').hasClass('x')
   ){
    Xwinner()
   }
   };

 function oternaryWin(){
   if( $('.cell-1').hasClass('o') && $('.cell-2').hasClass('o') && $('.cell-3').hasClass('o')   
    ||  $('.cell-1').hasClass('o') && $('.cell-4').hasClass('o') && $('.cell-7').hasClass('o')
    ||  $('.cell-1').hasClass('o') && $('.cell-5').hasClass('o') && $('.cell-9').hasClass('o')    
    ||$('.cell-2').hasClass('o') && $('.cell-5').hasClass('o') && $('.cell-8').hasClass('o')    
    ||  $('.cell-3').hasClass('o') && $('.cell-6').hasClass('o') && $('.cell-9').hasClass('o')  
    ||  $('.cell-3').hasClass('o') && $('.cell-5').hasClass('o') && $('.cell-7').hasClass('o')    
    || $('.cell-7').hasClass('o') && $('.cell-8').hasClass('o') && $('.cell-9').hasClass('o')   
    ||  $('.cell-4').hasClass('o') && $('.cell-5').hasClass('o') && $('.cell-6').hasClass('o'))
    {
        Owinner();
    }
 }

 function Xwinner(){ 
    turn.innerHTML= "";
    $('body').addClass('screen');
    $('.cell').off()
    $('.X-win').css('display','block')
    $('button').css('display','block')
     
}

function Owinner(){  
    turn.innerHTML= "";
    $('body').addClass('screen');
    $('.cell').off();
    $('.O-win').css('display','block')
    $('button').css('display','block')
  
}

function draw(){
    turn.innerHTML= "";
    $('body').addClass('screen');
    $('.draw').css('display','block')   
}

function empty(){
    location.reload();
    
}

