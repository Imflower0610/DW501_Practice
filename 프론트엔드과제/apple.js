var board = new Array(400);
board.fill(0);

for (var i = 0; i < 20; ) {
  let pos = Math.floor(Math.random() * 400);
  if (board[pos] != 1) {
    board[pos] = 1;
    i++;
  }
}
window.onload = function () {
  var table = "<table>";
  for (var i = 0; i < 10; i++) {
    table += "<tr>";
    for (var k = 0; k < 10; k++) {
      table += "<td class='bm' data-idx=" + (i * 10 + k) + "></td>";
      // * 바깥쪽에 있는 따옴표랑 안에 있는 따옴표는 다르게 해야한다.
    }
    table += "</tr>";
  }
  document.getElementById("wrap").innerHTML = table;

  var bm = document.getElementsByClassName("bm");
  // alert(bm.length);
  // bm[0].sytle.background='red';

  var bingo = new Array();
  while (bingo.length != 150) {
    let num = Math.floor(Math.random() * 10) + 1;
    if (bingo.indexOf(num) == -1)
      // index는 0부터 시작이니까 -1이라는건, 해당 값이 없다는 얘기
      bingo.push(num);
  }

  window.onload = function () {
    var td = document.querySelectorAll(".bm");

    for (var i = 0; i < td.length; i++) {
      td[i].innerHTML = bingo[i];
      td[i].addEventListener("click", function () {
        this.style.background = "pink";
        check(this.innerHTML);
      });
    }
  };
};
