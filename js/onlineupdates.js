function anyAddedFun() {

}
function startnewoilessty() {

}
function funFinishHandler(fun) {
  if (fun == "creatAnaly") {
    let ti = 5000;
      let ty = setInterval(function () {
        if (ti > 0) {
          ti = ti - 100;
        }
        else {
          if (passKey == cryppassKey && !submited) {
            document.getElementById('logview').removeAttribute("style");
          }
          clearInterval(ty);
        }
      }, 100);
  }
}
