for(let i = 0; i < 9; i++){
    document.getElementById('gameField').innerHTML+='<div class="block"></div>';
}
let box = document.getElementById('gameField');
let move = 0;

box.onclick = function (event){
  console.log(event)
  if (event.target.className == 'block'){
      if(move%2==0){
        event.target.innerHTML = 'x';
      }
      else {
        event.target.innerHTML = '0';
      }
      move++;
      checkWinner();
  }
};
function checkWinner(){
    let allblock = document.getElementsByClassName('block');
    //Крестики горизонт
    if (allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2].innerHTML=='x') {
      alert('Победили крестики');
    };
    if (allblock[3].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x') {
      alert('Победили крестики');
    };
    if (allblock[6].innerHTML=='x' && allblock[7].innerHTML=='x' && allblock[8].innerHTML=='x') {
      alert('Победили крестики');
    };
    //Крестики вертикаль
    if (allblock[0].innerHTML=='x' && allblock[3].innerHTML=='x' && allblock[6].innerHTML=='x') {
      alert('Победили крестики');
    };
    if (allblock[1].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[7].innerHTML=='x') {
      alert('Победили крестики');
    };
    if (allblock[2].innerHTML=='x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x') {
      alert('Победили крестики');
    };
    //крестики диоганаль
    if (allblock[0].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[8].innerHTML=='x') {
      alert('Победили крестики');
    };
    if (allblock[2].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[6].innerHTML=='x') {
      alert('Победили крестики');
    };
    //Нолики
    if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0') {
      alert('Победили Нолики');
    };
    if (allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0') {
      alert('Победили Нолики');
    };
    if (allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0') {
      alert('Победили Нолики');
    };
    //нолики вертикаль
    if (allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML=='0') {
      alert('Победили Нолики');
    };
    if (allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0') {
      alert('Победили Нолики');
    };
    if (allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0') {
      alert('Победили Нолики');
    };
    //ноилики диоганаль
    if (allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0') {
      alert('Победили Нолики');
    };
    if (allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0') {
      alert('Победили Нолики');
    };
}
