// canvasの初期設定
const canvas = $('#canvas')[0];
const ctx = canvas.getContext('2d');

// canvasのサイズ設定
// 横幅は画面全体、縦幅は画面全体の85%
// 画面サイズに応じて幅が変化する
$( '#canvas' ).get( 0 ).width = $( window ).width();
$( '#canvas' ).get( 0 ).height = $( window ).height()*0.98;

// パスの開始（初期化）
ctx.beginPath();

// 背景を白に設定
// この処理がないと背景が透明になってしまう
ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// オーバーレイの設定
window.onload = function(){
  $("#full-overlay").css("display", "block");
  setTimeout(function(){
    $("#full-overlay").fadeOut();
  },4000);
  $('#bgm1').get(0).play();
};

// canvas内部の設計について
// １．最初の要素は「why me?、今やっている、時間を忘れてできる、
//     好きな言葉、やりたくない、将来やりたい」
// ２．１の流れを関数に落とし込む
// ３．クリックするとテキストボックスが出現、文字をうっていく

// 定型の要素を表す関数
// フォントサイズ、フォントスタイル等
function decided_elem(width, height, word){
  ctx.lineWidth = 2;
  ctx.fillStyle = '#fa4141';
  ctx.font = '24px cursive';
  let x = (canvas.width / width);
  let y = (canvas.height / height);
  ctx.strokeStyle = '#f8c7bf';
  ctx.strokeText(word, x, y);
  ctx.fillText(word, x, y);
  // plusの画像を表示
  // const plus = new Image();
  // plus.src = 'img/baseline_add_circle_outline_black_24dp.png';
  // plus.onload = function(){
  //   ctx.drawImage(plus, x, y, 24, 24);
  // };
};

// 定型の要素を記載
function decided_elem_all(){
  decided_elem(2.1, 2, 'Why me?');
  decided_elem(7, 4, '①今やっている');
  decided_elem(1.8, 1.17, '②時間を忘れてできる');
  decided_elem(1.9, 5, '③好きな言葉');
  decided_elem(1.3, 2.2, '④やりたくない');
  decided_elem(4.2, 1.4, '⑤将来やりたい');
};
decided_elem_all();


// クリックしたらテキストエリアを生成
// テキストエリアのスタイルはどう設定する？
let text_area = document.getElementById("canvas"),textarea = null;
text_area.addEventListener('click', function(e) {
    textarea = document.createElement('textarea');
    textarea.className = 'info';
    document.body.appendChild(textarea);
    let x = e.clientX - canvas.offsetLeft,
        y = e.clientY - canvas.offsetTop; 
  textarea.style.position = 'absolute';
  textarea.style.top = e.clientY + 'px';
  textarea.style.left = e.clientX + 'px';
}, false);


// ペイントアプリ
// let canvas_mouse_event = false;
// let oldX = 0;
// let oldY = 0;
// let bold_line = 3;
// let color = '#fa4141'
// $(canvas).on('mousedown', function(e){
//   oldY = e.offsetY;
//   oldX = e.offsetX;
//   canvas_mouse_event = true;
// });
// $(canvas).on('mousemove', function(e){
//   if(canvas_mouse_event == true){
//     const px = e.offsetX
//     const py = e.offsetY
//     ctx.strokeStyle = color;
//     ctx.lineWidth = bold_line;
//     ctx.beginPath();
//     ctx.lineJoin = 'round';
//     ctx.lineCap = 'round';
//     ctx.moveTo(oldX, oldY);
//     ctx.lineTo(px,py);
//     ctx.stroke();
//     oldX = px;
//     oldY = py;
//   }
// });
// $(canvas).on('mouseup', function(){
//   canvas_mouse_event = false;
// });
// ペイントアプリ終了


// clearボタンを押すとcanvas内の要素を全削除
// $('#clear_btn').on('click', function(){
//   if(confirm('本当に削除しますか？')){
//     ctx.beginPath();
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     text_area.remove();
//     // 最初から表示する要素を表示
//     decided_elem_all();
//   }
// });

// canvas記載内容のダウンロード（イマイチわかってない）
// canvasの動作が終わってからダウンロード読み込ませるため、一応最後に記述
// document.getElementById('download_link').addEventListener('click', (e)=>{
//   const a = e.target;
//   a.href = canvas.toDataURL();
//   a.download = new Date().getTime() + '.png';
// });