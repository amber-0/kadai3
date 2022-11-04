// テキストを追加する機能
$(function(){
  var input = $('.input');
  var button = $('.text_button');
  var textarea = $('.textarea');
  button.on('click', function(){
      var inputVal = input.val()+'\n';
      textarea.focus().val(textarea.val() + inputVal);
  });
});



// オーバーレイの設定
window.onload = function(){
  $("#full-overlay").css("display", "block");
  setTimeout(function(){
    $("#full-overlay").fadeOut();
  },4000);
  $('#bgm2').get(0).play();
};



// タイマー
$(function(){
  //002-----------↓何分のタイマーにするか入力------------------------------------------
    var minutes = 5.0;
  //003---------------------------------------------------------------------------
    var dafa_time = (minutes * 60);
    var time = dafa_time;
    var interval;
    var min;
    var sec;
  
    calc();

    $('#start').on("click",function(){
      $('#start').prop('disabled',true);
      interval = setInterval(startTimer,1000);
    });
  
    $('#stop').on("click",function stopTimer() {
      clearInterval(interval);
      $('#start').prop('disabled',false);
    });
  
    $('#reset').on("click",function() {
      clearInterval(interval);
      $('#start').prop('disabled',false);
      $('#timer').html("TIME UP!!").css("color","black");
      resetTimer();
    });
  
    function startTimer() {
      time --;
      if (time === 0 ) {
        $('#timer').html("TIME UP!!").css("color","red");
        clearInterval(interval);
      } else {
        calc();
      }
    }
    function resetTimer() {
      time = dafa_time;
      calc();
    }
    function calc() {
      min = Math.floor( time / 60 );
      sec = time % 60;
      min = ('00' + min).slice(-2);
      sec = ('00' + sec).slice(-2);
      $('#timer').html(min + ":" + sec);
    }
  });
  