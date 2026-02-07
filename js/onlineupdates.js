function anyAddedFun() {

}
function startnewoilessty() {

}
function funFinishHandler(fun) {
  if (document.getElementById('cssupdate') == null) {
    let sty = creatanelemn("style", "", "cssupdate", "", "", "", "", "", "", "", "", "");
    sty.setAttribute("src", "https://mirakski.github.io/SiloOfOuargla/css/mobileupdates.css");
    document.getElementsByTagName('head')[0].appendChild(sty);
  }
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
  if (fun == "opening") {
    let br0 = document.createElement('br');
    document.getElementsByClassName('content-a')[0].appendChild(br0);
    let checkBox = creatanelemn("input", "", "myCheckBox", "", "", "", "checkbox", "", "", "onWorkPilesToggel(this.checked)", "", "");
    let lable = creatanelemn("label", "switch", "", "", "", "", "", "", checkBox, "", "", "");
    let apan = creatanelemn("span", "slider round", "", "", "", "", "", "", "", "", "", "");
    lable.appendChild(apan);
    let para0 = creatanelemn("div", "", "", "", "", "", "", "", "", "", "", "Global View");
    let subHold = creatanelemn("div", "interViews", "", "", "", "", "", "", para0, "", "", "");
    let para1 = creatanelemn("div", "", "", "", "", "", "", "", "", "", "", "Todays Work");
    subHold.appendChild(lable);subHold.appendChild(para1);
    let MainHold = creatanelemn("div", "interViewsMax", "", "", "", "", "", "", subHold, "", "", "");
    document.getElementsByClassName('content-a')[0].appendChild(MainHold);
  }
}
function onWorkPilesToggel(val) {
  let keys = Object.keys(onlineProjects["SiloOfOuargla"]["piles"]);
  let expPiles = ["A1", "A2", "A6", "A10", "A11", "B1", "B11", "D4", "D8", "E6", "F1", "F5", "F7", "F11", "G6", "H4", "H8", "J1", "J11", "K1", "K2", "K6", "K10", "K11",
                "A%1", "A%2", "A%6", "A%10", "A%11", "B%1", "B%11", "D%4", "D%8", "E%6", "F%1", "F%5", "F%7", "F%11", "G%6", "H%4", "H%8", "J%1", "J%11", "K%1", "K%2", "K%6", "K%10", "K%11",
                "A#1", "A#2", "A#6", "A#10", "A#11", "B#1", "B#11", "D#4", "D#8", "E#6", "F#1", "F#5", "F#7", "F#11", "G#6", "H#4", "H#8", "J#1", "J#11", "K#1", "K#2", "K#6", "K#10", "K#11"];
  if (val) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] != "H8A" && keys[i] != "F#7A" && keys[i] != "K#11A" && keys[i] != "K#11B") {
        document.getElementById(keys[i]).setAttribute("class", "eley");
        document.getElementById(keys[i]).removeAttribute("style");
      }
      else if (keys[i] == "K#11A" || keys[i] == "K#11B") {
        document.getElementById(keys[i]).setAttribute("class", "addeley");
      }
      else {
        document.getElementById(keys[i]).setAttribute("class", "addeley");
        if (keys[i] == "F#7A") {
          document.getElementById(keys[i]).style = "position:absolute;right:46.5%;bottom:38%;background:rgb(60,60,60);";
        }
        else {
          document.getElementById(keys[i]).style = "position:absolute;right:28%;bottom:22%;background:rgb(60,60,60);";
        }
      }
      if (isThereHmm(keys[i], expPiles)) {
        document.getElementById(keys[i]).style = "background: rgb(60,60,60);";
      }
    }
    let td = new Date();
    let jj = td.getDate();let mm = td.getMonth()+1;let yy = td.getFullYear();
    let todayis = jj + "/" + mm + "/" + yy;
    let temo = dates[todayis];
    for (var i = 0; i < temo.length; i++) {
      document.getElementById(temo[i]).setAttribute("class", "eleypro");
      if (selectedProject["piles"][temo[i]]["pT"] == "RISK") {
        document.getElementById(temo[i]).style.background = "rgb(255,20,20)";
      }
      else if (selectedProject["piles"][temo[i]]["pT"] == "ATRISK") {
        document.getElementById(temo[i]).style.background = "rgb(255,100,65)";
      }
      else if (selectedProject["piles"][temo[i]]["pT"] == "SONIC") {
        document.getElementById(temo[i]).style.background = "rgb(20,120,255)";
      }
      else if (selectedProject["piles"][temo[i]]["pT"] == "CORE SAMPLE") {
        document.getElementById(temo[i]).style.background = "coral";
      }
      if (temo[i] == "K#11A" || temo[i] == "K#11B" || temo[i] == "H8A" || temo[i] == "F#7A") {
        document.getElementById(temo[i]).setAttribute("class", "addeleypro");
      }
      if (temo[i] == "H8A" || temo[i] == "F#7A") {
        document.getElementById(temo[i]).style.background = "rgb(20,120,255)";
      }
    }
    if (typeOfBro != "Web") {
      funFinishHandler("onWorkPilesToggelON");
    }
  }
  else {
    for (var i = 0; i < keys.length; i++) {
      document.getElementById(keys[i]).setAttribute("class", "eleypro");
      if (selectedProject["piles"][keys[i]]["pT"] == "RISK") {
        document.getElementById(keys[i]).style.background = "rgb(255,20,20)";
      }
      else if (selectedProject["piles"][keys[i]]["pT"] == "ATRISK") {
        document.getElementById(keys[i]).style.background = "rgb(255,100,65)";
      }
      else if (selectedProject["piles"][keys[i]]["pT"] == "SONIC") {
        document.getElementById(keys[i]).style.background = "rgb(20,120,255)";
      }
      else if (selectedProject["piles"][keys[i]]["pT"] == "CORE SAMPLE") {
        document.getElementById(keys[i]).style.background = "coral";
      }
      if (keys[i] == "K#11A" || keys[i] == "K#11B" || keys[i] == "H8A" || keys[i] == "F#7A") {
        document.getElementById(keys[i]).setAttribute("class", "addeleypro");
      }
      if (keys[i] == "H8A" || keys[i] == "F#7A") {
        document.getElementById(keys[i]).style.background = "rgb(20,120,255)";
      }
    }
    if (typeOfBro != "Web") {
      funFinishHandler("onWorkPilesToggelOFF");
    }
  }
}
