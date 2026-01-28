function anyAddedFun() {

}
function startnewoilessty() {

}
function funFinishHandler(fun) {
  if (fun == "creatAnaly") {
    let ti = 2000;
      let ty = setInterval(function () {
        if (ti > 0) {
          ti = ti - 100;
        }
        else {
          if (passKey == cryppassKey && !submited) {
            document.getElementById('logview').style = "";
          }
          clearInterval(ty);
        }
      }, 100);
  }
}
