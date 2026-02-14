function anyAddedFun() {

}
function startnewoilessty() {

}
function funFinishHandler(fun) {
  if (document.getElementById('cssupdate') == null) {
    let sty = creatanelemn("link", "", "cssupdate", "", "", "", "", "", "", "", "", "");
    sty.setAttribute("rel", "stylesheet");
    sty.setAttribute("href", "https://mirakski.github.io/SiloOfOuargla/css/mobileupdates.css");
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
          try {let test = version + 1;} catch (e) {version = 2.15;} finally {}
          if (version <= 2.15) {
            newAnalyser();
          }
          clearInterval(ty);
        }
      }, 100);
  }
  if (fun == "opening") {
    if (document.getElementById('interViewsMax') == null) {
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
      let MainHold = creatanelemn("div", "interViewsMax", "interViewsMax", "", "", "", "", "", subHold, "", "", "");
      document.getElementsByClassName('content-a')[0].appendChild(MainHold);
      let br01 = document.createElement('br');
      document.getElementsByClassName('content-a')[0].appendChild(br01);
      let btn5 = creatanelemn("input", "", "historyBtn", "", "", "", "button", "Show History Handler", "", "HistoryHand(this.id)", "", "");
      let subHoldx = creatanelemn("div", "secondCal", "secondCal", "", "", "", "", "", btn5, "", "", "");
      let MainHoldX = creatanelemn("div", "secondCalMax", "secondCalMax", "", "", "", "", "", subHoldx, "", "", "");
      document.getElementsByClassName('content-a')[0].appendChild(MainHoldX);
    }
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
function newAnalyser() {
  let selectedProject = onlineProjects["SiloOfOuargla"]["piles"];
  let keys = Object.keys(selectedProject);
  let nBrOP = 0;batteries = {"bat0":0, "bat1":0, "bat2":0};
  dyRlzdMAP = new Object();
  for (var i = 0; i < keys.length; i++) {
    let date = selectedProject[keys[i]]["DSD"];
    if (dyRlzdMAP[date] === undefined) {
      dyRlzdMAP[date] = 1;
    }
    else {
      dyRlzdMAP[date]++;
    }
    let tst0 = checkbat(keys[i].toString());
    if ("%" == tst0) {
      if (selectedProject[keys[i]]["pT"] != "RISK" && selectedProject[keys[i]]["pT"] != "ATRISK") {
        batteries["bat1"]++;
        nBrOP++;
      }
    }
    else if ("#" == tst0) {
      if (selectedProject[keys[i]]["pT"] != "RISK" && selectedProject[keys[i]]["pT"] != "ATRISK") {
        batteries["bat2"]++;
        nBrOP++;
      }
    }
    else if ("_" == tst0) {
      if (selectedProject[keys[i]]["pT"] != "RISK" && selectedProject[keys[i]]["pT"] != "ATRISK") {
        batteries["bat0"]++;
        nBrOP++;
      }
    }
  }
  let days = Object.keys(dyRlzdMAP);
  let datess = new Object();
  for (var f = 0; f < keys.length; f++) {
    if (datess[selectedProject[keys[f]]["DSD"]] === undefined) {
      datess[selectedProject[keys[f]]["DSD"]] = [keys[f]];
    }
    else {
      datess[selectedProject[keys[f]]["DSD"]].push(keys[f]);
    }
  }
  let dates_kys = Object.keys(datess);
  let max_pPd = 0;
  for (var i = 0; i < dates_kys.length; i++) {
    let std_len = datess[dates_kys[i]].length;
    if (std_len > max_pPd) {
      max_pPd = std_len;
    }
  }
  let pPd = max_pPd;
  let rstdDys = (Math.ceil((363 - nBrOP) / pPd));
  rstdDys = rstdDys + Math.ceil(rstdDys/6);
  const d = new Date().getTime();
  let ms = 60 * 60 * 24 * 1000;
  let r = rstdDys * ms;
  let e = d + r;
  let dd = new Date(e);
  let e_seg = dd.toString().split(" ");
  let re = "";
  for (var i = 0; i < e_seg.length; i++) {
    re += e_seg[i] + " ";
    if (i == 3) {
      break;
    }
  }
  let plsps = ((nBrOP / 363) * 100).toFixed(2);
  let sentance = "<p>Realised Piles:<br> <b>" + nBrOP + "/363 - " + plsps + "%</b><br>Working days: <b>" + days.length + "</b><br>";
  sentance += "Battery one : <b>" + batteries["bat0"] + " - " + ((batteries["bat0"]/121) * 100).toFixed(2) + "% </b><br>";
  sentance += "Battery two : <b>" + batteries["bat1"] + " - " + ((batteries["bat1"]/121) * 100).toFixed(2) + "% </b><br>";
  sentance += "Battery three : <b>" + batteries["bat2"] + " - " + ((batteries["bat2"]/121) * 100).toFixed(2) + "% </b><br>";
  sentance += "Max Realised Par Day: <b>" + pPd + "</b><br>";
  sentance += "Expected Finish Date: <b>" + re + "</b><br></p>";
  document.getElementById('deT').innerHTML = sentance;
  cercularti(nBrOP);calnder();
}
function HistoryHand(id) {
  let keys = Object.keys(onlineProjects["SiloOfOuargla"]["piles"]);
  let expPiles = ["A1", "A2", "A6", "A10", "A11", "B1", "B11", "D4", "D8", "E6", "F1", "F5", "F7", "F11", "G6", "H4", "H8", "J1", "J11", "K1", "K2", "K6", "K10", "K11",
  "A%1", "A%2", "A%6", "A%10", "A%11", "B%1", "B%11", "D%4", "D%8", "E%6", "F%1", "F%5", "F%7", "F%11", "G%6", "H%4", "H%8", "J%1", "J%11", "K%1", "K%2", "K%6", "K%10", "K%11",
  "A#1", "A#2", "A#6", "A#10", "A#11", "B#1", "B#11", "D#4", "D#8", "E#6", "F#1", "F#5", "F#7", "F#11", "G#6", "H#4", "H#8", "J#1", "J#11", "K#1", "K#2", "K#6", "K#10", "K#11"];
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
  let kDate = Object.keys(dates);
  kDate.sort(dateComparator);
  let preselectedProject = onlineProjects["SiloOfOuargla"];
  let tempdatobj = new Object();
  for (var i = 0; i < keys.length; i++) {
    let ty = onlineProjects["SiloOfOuargla"]["piles"][keys[i]]["DSD"];
    if (tempdatobj[ty] === undefined) {
      tempdatobj[ty] = 1;
    }
    else {
      tempdatobj[ty]++;
    }
  }
  if (id == "historyBtn") {
    historyKeeper = 1;
    document.getElementById('secondCalMax').style.display = "grid";
    document.getElementById('interViewsMax').style.display = "none";
    let dateKeeper = new Object();
    let kkdate = new Array();
    for (var i = 0; i < historyKeeper; i++) {
      kkdate[i] = kDate[i];
    }
    for (var i = 0; i < kkdate.length; i++) {
      dateKeeper[kkdate[i]] = dates[kkdate[i]];
    }
    subanalyser(dateKeeper);
  }
  else if (id == "plus") {
    let dateKeeper = new Object();
    let kkdate = new Array();
    historyKeeper++;let tryu = Object.keys(tempdatobj);
    if (historyKeeper > tryu.length) {
      historyKeeper = tryu.length;
    }
    for (var i = 0; i < historyKeeper; i++) {
      kkdate[i] = kDate[i];
    }
    for (var i = 0; i < kkdate.length; i++) {
      dateKeeper[kkdate[i]] = dates[kkdate[i]];
    }
    subanalyser(dateKeeper);
  }
  else if (id == "mine") {
    let dateKeeper = new Object();
    let kkdate = new Array();
    historyKeeper--;let tryu = Object.keys(tempdatobj);
    if (historyKeeper < 1) {
      historyKeeper = 1;
    }
    for (var i = 0; i < historyKeeper; i++) {
      kkdate[i] = kDate[i];
    }
    for (var i = 0; i < kkdate.length; i++) {
      dateKeeper[kkdate[i]] = dates[kkdate[i]];
    }
    subanalyser(dateKeeper);
  }
  else if (id == "clear") {
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
    document.getElementById('historyInsight').remove();
    document.getElementById('insghtBtns').remove();
    document.getElementById('insghtclerBtn').remove();
    document.getElementById('interViewsMax').removeAttribute("style");
    let btn5 = creatanelemn("input", "", "historyBtn", "", "", "", "button", "Show History Handler", "", "HistoryHand(this.id)", "", "");
    let subHold = creatanelemn("div", "secondCal", "secondCal", "", "", "", "", "", btn5, "", "", "");
    document.getElementById('secondCalMax').appendChild(subHold);
  }
  if (id == "historyBtn" || id == "plus" || id == "mine") {
    for (var u = 0; u < historyKeeper; u++) {
      for (var i = 0; i < dates[kDate[u]].length; i++) {
        document.getElementById(dates[kDate[u]][i]).setAttribute("class", "eleypro");
        if (preselectedProject["piles"][dates[kDate[u]][i]]["pT"] == "RISK") {
          document.getElementById(dates[kDate[u]][i]).style.background = "rgb(255,20,20)";
        }
        else if (preselectedProject["piles"][dates[kDate[u]][i]]["pT"] == "ATRISK") {
          document.getElementById(dates[kDate[u]][i]).style.background = "rgb(255,100,65)";
        }
        else if (preselectedProject["piles"][dates[kDate[u]][i]]["pT"] == "SONIC") {
          document.getElementById(dates[kDate[u]][i]).style.background = "rgb(20,120,255)";
        }
        else if (preselectedProject["piles"][dates[kDate[u]][i]]["pT"] == "CORE SAMPLE") {
          document.getElementById(dates[kDate[u]][i]).style.background = "coral";
        }
        if (dates[kDate[u]][i] == "K#11A" || dates[kDate[u]][i] == "K#11B" || dates[kDate[u]][i] == "H8A" || dates[kDate[u]][i] == "F#7A") {
          document.getElementById(dates[kDate[u]][i]).setAttribute("class", "addeleypro");
        }
        if (dates[kDate[u]][i] == "H8A" || dates[kDate[u]][i] == "F#7A") {
          document.getElementById(dates[kDate[u]][i]).style.background = "rgb(20,120,255)";
        }
      }
    }
  }
}
function subanalyser(dateKeeper) {
  let keys = Object.keys(onlineProjects["SiloOfOuargla"]["piles"]);
  datekys = Object.keys(dateKeeper);
  let nBrOP = 0;batteries = {"bat0":0, "bat1":0, "bat2":0};
  let offdyRlzdMAP = new Object();
  for (var i = 0; i < datekys.length; i++) {
    let pil = dateKeeper[datekys[i]];
    for (var u = 0; u < pil.length; u++) {
      let date = datekys;
      if (offdyRlzdMAP[date] === undefined) {
        offdyRlzdMAP[date] = 1;
      }
      else {
        offdyRlzdMAP[date]++;
      }
      let tst0 = checkbat(pil[u].toString());
      if ("%" == tst0) {
        if (selectedProject["piles"][keys[i]]["pT"] != "RISK" && selectedProject["piles"][keys[i]]["pT"] != "ATRISK") {
          batteries["bat1"]++;
          nBrOP++;
        }
      }
      else if ("#" == tst0) {
        if (selectedProject["piles"][keys[i]]["pT"] != "RISK" && selectedProject["piles"][keys[i]]["pT"] != "ATRISK") {
          batteries["bat2"]++;
          nBrOP++;
        }
      }
      else if ("_" == tst0) {
        if (selectedProject["piles"][keys[i]]["pT"] != "RISK" && selectedProject["piles"][keys[i]]["pT"] != "ATRISK") {
          batteries["bat0"]++;
          nBrOP++;
        }
      }
    }
  }
  let days = Object.keys(offdyRlzdMAP);
  let datess = new Object();
  for (var f = 0; f < keys.length; f++) {
    if (datess[selectedProject["piles"][keys[f]]["DSD"]] === undefined) {
      datess[selectedProject["piles"][keys[f]]["DSD"]] = [keys[f]];
    }
    else {
      datess[selectedProject["piles"][keys[f]]["DSD"]].push(keys[f]);
    }
  }
  let dates_kys = Object.keys(datess);
  let max_pPd = 0;
  for (var i = 0; i < datekys.length; i++) {
    let std_len = dateKeeper[datekys[i]].length;
    if (std_len > max_pPd) {
      max_pPd = std_len;
    }
  }
  let pPd = max_pPd;
  let rstdDys = (Math.ceil((363 - nBrOP) / pPd));
  rstdDys = rstdDys + Math.ceil(rstdDys/6);
  let frd = datekys[datekys.length-1].split("/");
  const d = new Date(frd[2], frd[1], frd[0]).getTime();
  let ms = 60 * 60 * 24 * 1000;
  let r = rstdDys * ms;
  let e = d + r;
  let dd = new Date(e);
  let e_seg = dd.toString().split(" ");
  let re = "";
  for (var i = 0; i < e_seg.length; i++) {
    re += e_seg[i] + " ";
    if (i == 3) {
      break;
    }
  }
  let plsps = ((nBrOP / 363) * 100).toFixed(2);
  let sentance = "<p>Realised Piles:<br> <b>" + nBrOP + "/363 - " + plsps + "%</b><br>Working days: <b>" + datekys.length + " - " + datekys[datekys.length-1] + "</b><br>";
  sentance += "Battery one : <b>" + batteries["bat0"] + " - " + ((batteries["bat0"]/121) * 100).toFixed(2) + "% </b><br>";
  sentance += "Battery two : <b>" + batteries["bat1"] + " - " + ((batteries["bat1"]/121) * 100).toFixed(2) + "% </b><br>";
  sentance += "Battery three : <b>" + batteries["bat2"] + " - " + ((batteries["bat2"]/121) * 100).toFixed(2) + "% </b><br>";
  sentance += "Max Realised Par Day: <b>" + pPd + "</b><br>";
  sentance += "Expected Finish Date: <b>" + re + "</b><br></p>";
  const percentageValue = (nBrOP / 363) * 100
  const angle = (percentageValue / 100) * 360;
  const displayText = nBrOP + "/" + 363 + "\n" + percentageValue.toFixed(2) + '%';
  const gradientStyle = `background:conic-gradient(#00ff7b ${angle}deg, #e0e0e0 ${angle}deg)`;
  let p0 = creatanelemn("p", "percentage-text", "", "", "", "", "", "", "", "", "", displayText);
  let dv0 = creatanelemn("div", "progress-circle", "", "", gradientStyle, "", "", "", p0, "", "", "");
  let dv1 = creatanelemn("div", "progress-container", "", "", "", "", "", "", dv0, "", "", "");
  let dv2 = creatanelemn("div", "itemViewer", "", "", "", "", "", "", dv1, "", "", "");
  let dv3 = creatanelemn("div", "itemViewer", "", "", "", "", "", "", "", "", "", "");///////////////////////
  let dv4 = creatanelemn("div", "horViewer", "", "", "", "", "", "", dv2, "", "", "");dv4.appendChild(dv3);
  let dv5 = creatanelemn("div", "horViewer", "", "", "", "", "", "", "", "", "", "");
  let dv6 = creatanelemn("div", "round_an", "", "", "", "", "", "", dv4, "", "", "");dv6.appendChild(dv5);
  let dv7 = creatanelemn("div", "details", "", "", "", "", "", "", "", "", "", "");dv7.innerHTML = sentance;
  let dv8 = creatanelemn("div", "hold", "historyInsight", "", "", "", "", "", dv7, "", "", "");dv8.appendChild(dv6);
  let bn1 = creatanelemn("input", "submitBtn", "mine", "", "", "", "button", "-", "", "HistoryHand(this.id)", "", "");
  let bn2 = creatanelemn("input", "submitBtn", "plus", "", "", "", "button", "+", "", "HistoryHand(this.id)", "", "");
  let dv9 = creatanelemn("div", "axey", "insghtBtns", "", "", "", "", "", bn1, "", "", "");dv9.appendChild(bn2);
  let bn3 = creatanelemn("input", "submitBtn", "clear", "", "", "", "button", "Clear", "", "HistoryHand(this.id)", "", "");
  let dv10 = creatanelemn("div", "axey", "insghtclerBtn", "", "", "", "", "", bn3, "", "", "");
  try {
    document.getElementById('historyInsight').remove();
  } catch (e) {} finally {}
  try {
    document.getElementById('insghtBtns').remove();
  } catch (e) {} finally {}
  try {
    document.getElementById('secondCal').remove();
  } catch (e) {} finally {}
  try {
    document.getElementById('insghtclerBtn').remove();
  } catch (e) {} finally {}
  document.getElementById('secondCalMax').appendChild(dv8);
  document.getElementById('secondCalMax').appendChild(dv9);
  document.getElementById('secondCalMax').appendChild(dv10);
}
