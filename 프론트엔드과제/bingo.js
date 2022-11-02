//user bingo 기본값
var user_bingo = new Array();
while (user_bingo.length != 25) {
  let num = Math.floor(Math.random() * 100) + 1;
  if (user_bingo.indexOf(num) == -1)
    // index는 0부터 시작이니까 -1이라는건, 해당 값이 없다는 얘기
    user_bingo.push(num);
}
//com bingo 기본값
var com_bingo = new Array();
while (com_bingo.length != 25) {
  let num = Math.floor(Math.random() * 100) + 1;
  if (com_bingo.indexOf(num) == -1)
    // index는 0부터 시작이니까 -1이라는건, 해당 값이 없다는 얘기
    com_bingo.push(num);
}

window.onload = function () {
  var td = document.querySelectorAll(".me_box");
  var td_c = document.querySelectorAll(".com_box");
  for (var i = 0; i < td.length; i++) {
    td[i].innerHTML = user_bingo[i];
    td_c[i].innerHTML = com_bingo[i];
    td[i].addEventListener("click", function () {
      this.style.background = "lightgrey";
      check_com(this.innerHTML);
      check(this.innerHTML);
    });
  }
};
function check_com(n) {
  for (let i in com_bingo) {
    if (com_bingo[i] == n) {
      if (com_bingo[i] == td_c[i].value) td_c[i].style.background = "lightgrey";
      com_bingo[i] = 0;
    }
  }
}
function check(n) {
  // 체크한 숫자를 빙고배열에서 제외시키기
  for (let i in user_bingo) {
    if (user_bingo[i] == n) {
      // 선택한 숫자를 배열에서 찾기
      user_bingo[i] = 0;
      break;
    }
  }
  for (let i in com_bingo) {
    if (com_bingo[i] == n) {
      // 선택한 숫자를 배열에서 찾기
      com_bingo[i] = 0;
      break;
    }
  }

  //5줄 빙고 확인
  var wd = 0,
    hg = 0,
    cr1 = 0,
    cr2 = 0,
    end = 0;
  for (var i = 0; i < 5; i++) {
    for (var k = 0; k < 5; k++) {
      if (user_bingo[i * 5 + k] == 0) wd++; // 가로 줄에 0이 몇개냐
      if (user_bingo[k * 5 + i] == 0) hg++; // 세로 줄에 0이 몇개냐
    }
    if (user_bingo[i * 6] == 0) cr1++; // 왼쪽 위 시작 대각선
    if (user_bingo[i * 4 + 4] == 0) cr2++;
    if (cr1 == 5) end++;
    if (cr2 == 5) end++;
    if (wd == 5) end++; // 한줄에 0이 5개라면 한줄빙고
    if (hg == 5) end++;
    wd = 0; // 다음줄 0개수를 확인하기위해 다시 0으로
    hg = 0;
  }
  var wd = 0,
    hg = 0,
    cr1 = 0,
    cr2 = 0,
    end = 0;
  for (var i = 0; i < 5; i++) {
    for (var k = 0; k < 5; k++) {
      if (user_bingo[i * 5 + k] == 0) wd++; // 가로 줄에 0이 몇개냐
      if (user_bingo[k * 5 + i] == 0) hg++; // 세로 줄에 0이 몇개냐
    }
    if (user_bingo[i * 6] == 0) cr1++; // 왼쪽 위 시작 대각선
    if (user_bingo[i * 4 + 4] == 0) cr2++;
    if (cr1 == 5) end++;
    if (cr2 == 5) end++;
    if (wd == 5) end++; // 한줄에 0이 5개라면 한줄빙고
    if (hg == 5) end++;
    wd = 0; // 다음줄 0개수를 확인하기위해 다시 0으로
    hg = 0;
  }

  var count = document.getElementById("count");
  count.innerHTML = "BINGO : " + end;
  var res = document.getElementById("out");
  if (end == 5) {
    res.innerHTML = "BINGO! The user wins!";
  }
}
