/*  version:2.17  */
let onlineProjects;let cryppassKey,passKey;let supportsaving = false;let saved = false;
let dataElement = "";let submited = false, logedin = false;let moposition = 0, tapotition = 0;
let crushing_notify = false, app_news = false, app_interval = 5000,downloaded = true;
let version = 2.17,quickSelection;
if (typeof(Storage) !== "undefined") {
  supportsaving = true;
  saved = window.localStorage.getItem("saved");
  submited = window.localStorage.getItem("submited");
  dataElement = window.localStorage.getItem("dataElement");
  notecedApp = window.localStorage.getItem("app_news");
  downloadedft = window.localStorage.getItem("downloaded");
  if (saved == "false") {
    saved = false;
  }
  else if (saved == "true") {
    saved = true;
  }
  if (submited == "false") {
    submited = false;
  }
  else if (submited == "true") {
    submited = true;
  }
  if (dataElement == null) {
    dataElement = "";
  }
  if (notecedApp != null && notecedApp != undefined) {
    app_news = true;
  }
  if (downloadedft != null) {
    downloaded = false;
  }
}
function loaduphandler() {
  //startupset();return;
  let encr_dec = window.localStorage.getItem("dec");//key:i,i,i,i#
  if (supportsaving && encr_dec != null) {
    try {
      let obj_items = Object.keys(JSON.parse(encr_dec));let securite = false;
      if (obj_items.length >= 1) {
        securite = true;
      }
      if (saved && securite) {
        let last_update_ms = window.localStorage.getItem("lastUpdate");
        let now_update = new Date().getTime();
        let hr = Math.floor((now_update - last_update_ms) / (60 * 60 * 1000));
        if (hr < 1) {
          loaderfromOffData();
        }
        else {
          startupset();
        }
      }
      else {
        startupset();
      }
    } catch (e) {
      startupset()
    } finally {}
  }
  else {
    startupset();
  }
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    try {
      document.getElementById('swipeview').style.display = "block";
    } catch (e) {} finally {}
  }
  let dateaa = window.localStorage.getItem("dataElement");
  if (dateaa != null && dateaa != "") {
    let tempProjectX = JSON.parse(dateaa);
    let keys = Object.keys(tempProjectX);
    for (var i = 0; i < keys.length; i++) {
      if (tempProjectX[keys[i]]["pT"] != "REMOVE") {
        document.getElementById(keys[i]).setAttribute("class", "eleypro");
        if (tempProjectX[keys[i]]["pT"] == "RISK") {
          document.getElementById(keys[i]).style.background = "rgb(255,20,20)";
        }
        else if (tempProjectX[keys[i]]["pT"] == "ATRISK") {
          document.getElementById(keys[i]).style.background = "rgb(255,100,65)";
        }
        else if (tempProjectX[keys[i]]["pT"] == "SONIC") {
          document.getElementById(keys[i]).style.background = "rgb(20,120,255)";
        }
        else if (tempProjectX[keys[i]]["pT"] == "CORE SAMPLE") {
          document.getElementById(keys[i]).style.background = "coral";
        }
        if (keys[i] == "K#11A" || keys[i] == "K#11B" || keys[i] == "H8A" || keys[i] == "F#7A") {
          document.getElementById(keys[i]).setAttribute("class", "addeleypro");
        }
        if (keys[i] == "H8A" || keys[i] == "F#7A") {
          document.getElementById(keys[i]).style.background = "rgb(20,120,255)";
        }
      }
    }
    creatAnaly();
  }
}
//creatanelemn("kng", "clss", "id", "name", "style", "title", "type", "value", "elem", "onclick", "disabled", "innertext");
function loaderfromOffData() {
  let encr_dec = window.localStorage.getItem("dec");//key:i,i,i,i#
  onlineProjects = JSON.parse(encr_dec);
  selectedProject = onlineProjects["SiloOfOuargla"];
  let keys = Object.keys(selectedProject["piles"]);
  for (var i = 0; i < keys.length; i++) {
    document.getElementById(keys[i]).setAttribute("class", "eleypro");
    if (passKey == cryppassKey) {
      document.getElementById(keys[i]).removeAttribute("onclick");
      document.getElementById(keys[i]).setAttribute("onclick", "viewer(this.id)");
    }
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
  creatAnaly();
}
function startupset() {
  const WEB_APP_URLS = "https://script.google.com/macros/s/AKfycbyKX3MQPGZS_6UrFaUk9WS7eiy2kwwBuLEGOW94AkxXHvc0nFO7CLFYG_4hONtMIbvjFw/exec";
  const formData = new FormData();let jsonDataOBJ;
  const payload = { newData: "PullData", timestamp: new Date().toLocaleString('ar-EG')};
  formData.append('jsonPayload', JSON.stringify(payload));
  fetch(WEB_APP_URLS, {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(result => {
    if (result.status === 'success') {
      //`${JSON.stringify(result.content, null, 2)`;
      jsonDataOBJ = result.content;let long_keys = "";
      dec  = result.content;
      long_keys = JSON.stringify(dec);
      onlineProjects = jsonDataOBJ;
      selectedProject = jsonDataOBJ["SiloOfOuargla"];
      let keys = Object.keys(selectedProject["piles"]);
      for (var i = 0; i < keys.length; i++) {
        if (selectedProject["piles"][keys[i]]["DSD"] != "DELETE") {
          document.getElementById(keys[i]).setAttribute("class", "eleypro");
          if (passKey == cryppassKey) {
            document.getElementById(keys[i]).removeAttribute("onclick");
            document.getElementById(keys[i]).setAttribute("onclick", "viewer(this.id)");
          }
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
      }
      window.localStorage.setItem("dec", long_keys);
      window.localStorage.setItem("saved", true);
      window.localStorage.setItem("submited", true);
      window.localStorage.setItem("dataElement", "");
      let last_update_ms = new Date().getTime();
      window.localStorage.setItem("lastUpdate", last_update_ms);
      creatAnaly();
    }
    else {
      loaderfromOffData();
    }
    if (typeOfBro != "Web") {
      startnewoilessty();
    }
  })
  .catch(error => {
    try {
      clearInterval(waiterInt);
      if (window.localStorage.getItem("dec") != null && window.localStorage.getItem("dec") != "") {
        ayanotifiys("Erro - 05", "Error Loading Check your internet conection!\nLoading Offline Data.", "shoenotiynow");
      }
      else {
        ayanotifiys("Erro - 06", "couldn't load Check your internet conection!.", "shoenotiynow");
      }
      loaderfromOffData();
      try {
        document.getElementById('waitdiv').remove();
      }
      catch (e) {} finally {}
    }
    catch (e) {} finally {}
  });
  Waiter(0)//0=set; 1=remove;
}
function closeDialog(id) {
  if (id == "claseallbgdiv") {
    let divs = document.getElementsByClassName('bgdiv');
    for (var i = 0; i < divs.length; i++) {
      divs[i].remove();
    }
  }
  else {
    document.getElementById(id).remove();
  }
}
function refreshFun() {
  let holder = document.createElement('div');
  holder.setAttribute("class", "hdiag");
  for (var i = 0; i < 2; i++) {
    let hl = document.createElement('div');
    hl.setAttribute("class", "hhldiag");
    if (i == 0) {
      let ttl = document.createElement('p');
      ttl.innerText = "FORCE REFRESH";
      let cls = document.createElement('input');
      cls.setAttribute("onclick", "closediag()");cls.setAttribute("type", "button");
      cls.setAttribute("class", "clsbtn");cls.setAttribute("value", "X");
      hl.appendChild(ttl);hl.appendChild(cls);
      let br = document.createElement('br');
      hl.appendChild(br);
    }
    else {
      let btn = document.createElement('input');
      btn.setAttribute("onclick", "refreshCal()");btn.setAttribute("type", "button");
      btn.setAttribute("class", "seteditbtn");btn.setAttribute("value", "REFRESH!");
      hl.appendChild(btn);
    }
    holder.appendChild(hl);
  }
  let bg = document.createElement('div');
  bg.setAttribute("class", "bgdiag");
  bg.setAttribute("id", "seteditdiag");
  bg.appendChild(holder);
  document.getElementsByTagName('body')[0].appendChild(bg);
}
function refreshCal() {
  force_update_ms = eval(window.localStorage.getItem("force_update_ms"));let hr;
  if (force_update_ms == null) {
    hr = 1;
  }
  else {
    let now_update = new Date().getTime();
    hr = ((now_update - force_update_ms) / (60 * 60 * 1000)).toFixed(2);
  }
  if (hr > 0.16) {
    startupset();closediag();
  }
  else {
    closediag();
    let now_update = new Date().getTime();
    hr = ((now_update - force_update_ms) / (60 * 60 * 1000)).toFixed(2);
    hr = Math.ceil(60 * hr);
    alert("Wait " + hr + " minute.");
  }
}
function opening() {
  let fille = "ABCDEFGHIJK";fille = fille.split("");
  let bat = ["", "%", "#"];
  let axe = document.createElement('div');
  axe.setAttribute('class', "battey");
  let expPiles = ["A1", "A2", "A6", "A10", "A11", "B1", "B11", "D4", "D8", "E6", "F1", "F5", "F7", "F11", "G6", "H4", "H8", "J1", "J11", "K1", "K2", "K6", "K10", "K11",
                "A%1", "A%2", "A%6", "A%10", "A%11", "B%1", "B%11", "D%4", "D%8", "E%6", "F%1", "F%5", "F%7", "F%11", "G%6", "H%4", "H%8", "J%1", "J%11", "K%1", "K%2", "K%6", "K%10", "K%11",
                "A#1", "A#2", "A#6", "A#10", "A#11", "B#1", "B#11", "D#4", "D#8", "E#6", "F#1", "F#5", "F#7", "F#11", "G#6", "H#4", "H#8", "J#1", "J#11", "K#1", "K#2", "K#6", "K#10", "K#11"];
  for (var y = 0; y < 12; y++) {
    let divx = document.createElement('div');
    divx.setAttribute('class', "axey");
    let divz = document.createElement('div');
    divz.setAttribute('class', "nbrEL");
    let part = document.createElement('p');
    part.innerText = (y);
    if (y == 0) {
      part.setAttribute("style", "opacity:0;")
    }
    divz.appendChild(part);;
    divx.appendChild(divz);
    axe.appendChild(divx);
  }
  host.appendChild(axe);
  for (var i = 0; i < 3; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', "battey");
    let btrID = "battey" + i;
    div.setAttribute('id', btrID);
    let divpp = document.createElement('div');
    divpp.setAttribute('class', "axey");
    for (var z = 0; z < 11; z++) {
      let divz = document.createElement('div');
      divz.setAttribute('class', "elex");
      let part = document.createElement('p');
      let idf = bat[i].replace("%", "'");idf = idf.replace("#", "\"");
      let fil = fille[z] + idf;
      part.innerText = fil;
      divz.appendChild(part);;
      divpp.appendChild(divz);
    }
    div.appendChild(divpp);
    for (var y = 0; y < 11; y++) {
      let divx = document.createElement('div');
      divx.setAttribute('class', "axey");
      for (var z = 0; z < 11; z++) {
        let divz = document.createElement('div');
        divz.setAttribute('class', "eley");
        let id = fille[z]+bat[i]+(y+1);
        divz.setAttribute('id', id);
        divz.setAttribute("onclick", "viewer(this.id)");
        if (checkIfIn(id, expPiles)) {
          divz.style = "background: rgb(60,60,60);";
        }
        divx.appendChild(divz);
      }
      div.appendChild(divx);
    }
    let host = document.getElementById('host');
    host.appendChild(div);
  }
  for (var i = 0; i < 1; i++) {
    cryppassKey = "nbehzxz4";
  }
  addRePiles();
  addfastselectiontool(0);
  try {
    let br0 = document.createElement('br');
    document.getElementsByClassName('content-a')[0].appendChild(br0);
    let checkBox = creatanelemn("input", "", "myCheckBox", "", "", "", "checkbox", "", "", "onWorkPilesToggel(this.checked)", "", "");
    let lable = creatanelemn("label", "switch", "", "", "", "", "", "", checkBox, "", "", "");
    let apan = creatanelemn("span", "slider round", "", "", "", "", "", "", "", "", "", "");
    lable.appendChild(apan);
    let para0 = creatanelemn("div", "", "", "", "", "", "", "", "", "", "", "Global View🗺");
    let subHold = creatanelemn("div", "interViews", "interViews", "", "", "", "", "", para0, "", "", "");
    let para1 = creatanelemn("div", "", "", "", "", "", "", "", "", "", "", "Todays Work🔍");
    subHold.appendChild(lable);subHold.appendChild(para1);
    let MainHold = creatanelemn("div", "interViewsMax", "interViewsMax", "", "", "", "", "", subHold, "", "", "");
    document.getElementsByClassName('content-a')[0].appendChild(MainHold);
  } catch (e) {} finally {}
  try {
    let br0 = document.createElement('br');
    document.getElementsByClassName('content-a')[0].appendChild(br0);
    let btn5 = creatanelemn("input", "", "historyBtn", "", "", "", "button", "Show History Handler", "", "HistoryHand(this.id)", "", "");
    let subHold = creatanelemn("div", "secondCal", "secondCal", "", "", "", "", "", btn5, "", "", "");
    let MainHold = creatanelemn("div", "secondCalMax", "secondCalMax", "", "", "", "", "", subHold, "", "", "");
    document.getElementsByClassName('content-a')[0].appendChild(MainHold);
  } catch (e) {} finally {}
  let bdG = document.getElementsByClassName('body')[0];
  try {
    let divlS = document.createElement('div');
    divlS.setAttribute('class', "battey");
    let divppLS = document.createElement('div');
    divppLS.setAttribute('class', "axeZ");
    let btnL = document.createElement('input');
    btnL.setAttribute("onclick", "mobi('L')");btnL.setAttribute("type", "button");
    btnL.setAttribute("class", "swipeBTN");btnL.setAttribute("value", "<");
    //
    let btnR = document.createElement('input');
    btnR.setAttribute("onclick", "mobi('R')");btnR.setAttribute("type", "button");
    btnR.setAttribute("class", "swipeBTN");btnR.setAttribute("value", ">");
    //
    divppLS.appendChild(btnL);divppLS.appendChild(btnR);
    divlS.appendChild(divppLS);
    let diLSV = document.createElement('div');
    diLSV.setAttribute("class", "view");diLSV.setAttribute("id", "swipeview");
    diLSV.appendChild(divppLS);
    bdG.appendChild(diLSV);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      try {
        document.getElementById('swipeview').style.display = "none";
      } catch (e) {} finally {}
    }
  } catch (e) {} finally {}
  try {
    let divl = document.createElement('div');
    divl.setAttribute('class', "battey");
    let divppL = document.createElement('div');
    divppL.setAttribute('class', "axeZ");
    let btnL = document.createElement('input');
    btnL.setAttribute("onclick", "loging()");btnL.setAttribute("type", "button");
    btnL.setAttribute("class", "seteditbtn");btnL.setAttribute("value", "LOGIN");
    btnL.setAttribute("id", "loginbtn");
    divppL.appendChild(btnL);divl.appendChild(divppL);
    let diLS = document.createElement('div');
    diLS.setAttribute("class", "view");diLS.setAttribute("id", "logview");
    diLS.appendChild(divppL);
    bdG.appendChild(diLS);
  } catch (e) {} finally {}
  try {
    let wWidth = window.innerWidth;
    let wHeight = window.innerHeight;
    let breaks = document.getElementsByClassName('breaksR');
    if (wWidth > wHeight) {
      for (var i = 0; i < breaks.length; i++) {
        breaks[i].style.display = "none";
      }
    }
  } catch (e) {} finally {}
  loaduphandler();
  if (typeOfBro != "Web") {
    funFinishHandler("opening");
  }
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
function scrooll(sec) {
    if (sec != "top") {
      $.scrollify.move(`#${sec}`);
    }
    else {
      document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
    }
  }
function checkIfIn(nm, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == nm) {
      return true;
    }
  }
  return false;
}
function addRePiles() {
  document.getElementById('battey0').style.position = "relative";
  document.getElementById('battey2').style.position = "relative";
  let additive0 = ["H8A"];
  let pst0 = ["position:absolute;right:28%;bottom:22%;"]
  for (var z = 0; z < additive0.length; z++) {
    let divz = document.createElement('div');
    divz.setAttribute('class', "addeley");
    divz.style = pst0[z];
    let id = additive0[z];
    divz.setAttribute('id', id);
    divz.setAttribute("onclick", "viewer(this.id)");
    document.getElementById('battey0').appendChild(divz);
  }
  let additive = ["K#11A", "K#11B", "F#7A"];
  let pst = ["position:absolute;right:0.8%;bottom:6%;", "position:absolute;right:5%;bottom:1%;"
            , "position:absolute;right:46.5%;bottom:38%;"];
  for (var z = 0; z < additive.length; z++) {
    let divz = document.createElement('div');
    divz.setAttribute('class', "addeley");
    divz.style = pst[z];
    let id = additive[z];
    divz.setAttribute('id', id);
    divz.setAttribute("onclick", "viewer(this.id)");
    document.getElementById('battey2').appendChild(divz);
  }
}
function mobi(mod) {
  if (mod == "R") {
    if (moposition == 0) {
      document.getElementById("battey0").style.display = "none";
      document.getElementById("battey1").style.display = "grid";
      document.getElementById("battey2").style.display = "none";
      moposition++;
    }
    else if (moposition == 1) {
      document.getElementById("battey0").style.display = "none";
      document.getElementById("battey1").style.display = "none";
      document.getElementById("battey2").style.display = "grid";
      moposition++;
    }
    else if (moposition == 2) {
      document.getElementById("battey0").style.display = "grid";
      document.getElementById("battey1").style.display = "none";
      document.getElementById("battey2").style.display = "none";
      moposition = 0;
    }
  }
  else if (mod == "L") {
    if (moposition == 0) {
      document.getElementById("battey0").style.display = "none";
      document.getElementById("battey1").style.display = "none";
      document.getElementById("battey2").style.display = "grid";
      moposition = 2;
    }
    else if (moposition == 1) {
      document.getElementById("battey0").style.display = "grid";
      document.getElementById("battey1").style.display = "none";
      document.getElementById("battey2").style.display = "none";
      moposition--;
    }
    else if (moposition == 2) {
      document.getElementById("battey0").style.display = "none";
      document.getElementById("battey1").style.display = "grid";
      document.getElementById("battey2").style.display = "none";
      moposition--;
    }
  }
}
function loging() {
  let holder = document.createElement('div');
  holder.setAttribute("class", "hdiag");
  for (var i = 0; i < 4; i++) {
    let hl = document.createElement('div');
    hl.setAttribute("class", "hhldiag");
    if (i == 0) {
      let ttl = document.createElement('p');
      ttl.innerText = "Login";
      let cls = document.createElement('input');
      cls.setAttribute("onclick", "closediag()");cls.setAttribute("type", "button");
      cls.setAttribute("class", "clsbtn");cls.setAttribute("value", "X");
      hl.appendChild(ttl);hl.appendChild(cls);
      let br = document.createElement('br');
      hl.appendChild(br);
    }
    else if (i == 1) {
      let ttl = document.createElement('p');
      ttl.innerText = "PASSWORD:";
      hl.appendChild(ttl);
      let slct = document.createElement("input");slct.setAttribute("type", "password");
      slct.setAttribute("id", "PASSWORD");slct.setAttribute("class", "inputer");
      slct.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
          loged();
        }
      });
      hl.appendChild(slct);
    }
    else if (i == 2) {
      let ttl = document.createElement('p');
      ttl.setAttribute("id", "passINC");
      ttl.innerText = "";
      hl.appendChild(ttl);
      let br = document.createElement('br');
      hl.appendChild(br);
    }
    else {
      let btn = document.createElement('input');
      btn.setAttribute("onclick", "loged()");btn.setAttribute("type", "button");
      btn.setAttribute("class", "seteditbtn");btn.setAttribute("value", "login!");
      hl.appendChild(btn);
    }
    holder.appendChild(hl);
  }
  let bg = document.createElement('div');
  bg.setAttribute("class", "bgdiag");
  bg.setAttribute("id", "seteditdiag");
  bg.appendChild(holder);
  document.getElementsByTagName('body')[0].appendChild(bg);
  document.getElementById('PASSWORD').select();
}
function loged() {
  let psk = document.getElementById('PASSWORD').value;
  let chifr = decoder(psk);
  if (chifr == cryppassKey) {
    passKey = chifr;
    document.getElementById('passINC').innerText = "PASSWORD CORRECT";
    document.getElementById('passINC').setAttribute("style", "color:green;font-weight: bold;");
    let pieux = document.getElementsByClassName('eley');
    for (var i = 0; i < pieux.length; i++) {
      pieux[i].removeAttribute("onclick");
      pieux[i].setAttribute("onclick", "opendialog(this.id)");
    }
    let xcode = "fse2dla20jmhc2p";
    let link = "https://mirakski.github.io/SiloOfOuargla/passkey.js";
    link = link.replace("passkey", decoderX(xcode));
    try {
      window.localStorage.setItem("xcode", decoderX(xcode));
      window.localStorage.setItem("password", psk);
    } catch (e) {} finally {}
    let js = document.createElement('script');
    js.setAttribute("charset", "utf-8");js.setAttribute("src", link);
    document.getElementsByTagName('head')[0].appendChild(js);
    document.getElementById('loginbtn').removeAttribute("onclick");
    document.getElementById('loginbtn').setAttribute("onclick", "sendData()");
    document.getElementById('loginbtn').value = "Submit Editing";
    closediag();
    if (submited) {
      document.getElementById('logview').style = "display:none;";
    }
    else {
      document.getElementById('logview').style = "";
    }
  }
  else {
    document.getElementById('passINC').innerText = "PASSWORD INCORRECT";
    document.getElementById('passINC').setAttribute("style", "color:red;font-weight: bold;");
  }
}
function viewer(idetion) {
  let tempPileData = selectedProject["piles"][idetion];
  if (idetion in selectedProject["piles"]) {
    //
  }
  else {
    tempPileData = {"X":"", "Y":"", "Z":"", "pT":"", "DSD":"", "DSH":"", "DED":"", "DEH"
              :"", "RSD":"", "RSH":"", "RED":"", "REH":"", "CSD":"", "CSH":"", "CED":"", "CEH":""};
  }
  try {
    document.getElementById("pileViewPlatform").remove();
  } catch (e) {} finally {}
  let id = "pileViewPlatform", dataCarier;
  let basicDet = [tempPileData["X"], tempPileData["Y"], tempPileData["Z"], tempPileData["pT"]];
  let pileName = idetion.replace("%", "'");pileName = pileName.replace("#", "\"");
  let ttr = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", pileName);
  let header = creatanelemn("div", "diaghead", "", "", "", "", "", "", ttr, "", "", "");
  let clsfun = "closeDialog('"+id+"')";
  let clsbtn = creatanelemn("input", "clsbtn", "", "", "", "", "button", "X", "", clsfun, "", "");
  header.appendChild(clsbtn);
  let clas = "condiv";
  const darkmQ = window.matchMedia('(prefers-color-scheme: dark)');
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (darkmQ['matches'] && !isMobile) {
    console.log(darkmQ['matches']);
    clas += " dark_mode";
  }
  let condiv = creatanelemn("div", clas, "", "", "", "", "", "", header, "", "", "");
  let nmttl = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", "Coordanition 📍");
  let frow = creatanelemn("div", "diagcol", "", "", "", "", "", "", nmttl, "", "", "");
  let subrow = creatanelemn("div", "diagrowPro", "", "", "", "", "", "", "", "", "", "");
  let cords = ["X", "Y", "Z"];
  for (var i = 0; i < cords.length; i++) {
    dataCarier = "";
    if (basicDet[i] != undefined) {
      dataCarier = basicDet[i];
    }
    let txt = cords[i] + ": " + dataCarier;
    let corttl = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", txt);
    let ssrow = creatanelemn("div", "diagrow", "", "", "", "", "", "", corttl, "", "", "");
    subrow.appendChild(ssrow);
  }
  frow.appendChild(subrow);
  dataCarier = "";
  if (basicDet[3] != undefined) {
    dataCarier = basicDet[3];
  }
  let pTb = "Pile Type ❕: " + dataCarier;
  let typettl = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", pTb);
  let sRow = creatanelemn("div", "diagrow", "", "", "", "", "", "", typettl, "", "", "");
  let sty = "height: 90%;max-height: 90%;";
  if (passKey == cryppassKey) {
    sty = "height: 80%;max-height: 80%;";
  }
  let hdiv = creatanelemn("div", "hdiv", "newProHDiv", "", sty, "", "", "", frow, "", "", "");
  hdiv.appendChild(sRow);
  let drc_det = [[["DSD", "DSH"], ["DED", "DEH"]]
                , [["RSD", "RSH"], ["RED", "REH"]]
                , [["CSD", "CSH"], ["CED", "CEH"]]];
  let titling = ["Drilling⛏", "Reinforcment⛓", "Concreting⚫"];
  let functiling = [["SD", "SH"], ["ED", "EH"]];
  let namiling = [["Starting Date","Starting Hour"], ["Ending Date", "Ending Hour"]];
  for (var i = 0; i < titling.length; i++) {
    let titlttl = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", titling[i]);
    let tRow = creatanelemn("div", "diagcol", "", "", "", "", "", "", titlttl, "", "", "");
    for (var y = 0; y < namiling.length; y++) {
      let ssRow = creatanelemn("div", "diagrowPro", "", "", "", "", "", "", "", "", "", "");
      for (var x = 0; x < namiling[y].length; x++) {
        dataCarier = "";
        if (tempPileData[drc_det[i][y][x]] != undefined) {
          dataCarier = tempPileData[drc_det[i][y][x]];
        }
        let tSubTtl = namiling[y][x] + ": " + dataCarier;
        let subtitl = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", tSubTtl);
        let sssRow = creatanelemn("div", "diagrow", "", "", "", "", "", "", subtitl, "", "", "");
        ssRow.appendChild(sssRow);
      }
      tRow.appendChild(ssRow);
    }
    hdiv.appendChild(tRow);
  }
  if (true) {
      let onclik = "pilesNavi('L','" + idetion +"')";
      let delBtn = creatanelemn("input", "swipeBTN", "", "", "", "", "button", "<", "", onclik, "", "");
      let subFot = creatanelemn("div", "diagrow", "", "", "", "", "", "", delBtn, "", "", "");
      onclik = "pilesNavi('R','" + idetion +"')";
      let editBtn = creatanelemn("input", "swipeBTN", "", "", "", "", "button", ">", "", onclik, "", "");
      subFot.appendChild(editBtn)
      let footer = creatanelemn("div", "diaghead", "", "", "", "", "", "", subFot, "", "", "");
      hdiv.appendChild(footer);
    }
  if (passKey == cryppassKey) {
    let onclik = "dEleteIT('" + idetion + "')";
    let delBtn = creatanelemn("input", "submitBtn", "", "", "", "", "button", "DELETE!🗑", "", onclik, "", "");
    let subFot = creatanelemn("div", "diagrow", "", "", "", "", "", "", delBtn, "", "", "");
    onclik = "editdialog('" + idetion + "')";
    let editBtn = creatanelemn("input", "submitBtn", "", "", "", "", "button", "Edit🔧", "", onclik, "", "");
    subFot.appendChild(editBtn)
    let footer = creatanelemn("div", "diaghead", "", "", "", "", "", "", subFot, "", "", "");
    hdiv.appendChild(footer);
  }
  condiv.appendChild(hdiv);
  let bgdiv = creatanelemn("div", "bgdiv", id, "", "", "", "", "", condiv, "", "", "");
  document.getElementsByTagName('body')[0].appendChild(bgdiv);
  if (typeOfBro != "Web") {
    funFinishHandler("viewer");
  }
}
function pilesNavi(mod, id) {
  closediag();
  let idSegs = id.split("");
  let letters = "ABCDEFGHIJK", ind = 0;
  letters.split("");let bats = ["", "%", "#"];
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] == idSegs[0]) {
      ind = i;
      break;
    }
  }
  let numb = "";let batInd;
  if (isThereHmm("%", idSegs)) {
    if (idSegs.length == 3) {
      numb = idSegs[2];
    }
    else if (idSegs.length == 4) {
      numb = idSegs[2] + "" + idSegs[3];
    }
    batInd = 1;
  }
  else if (isThereHmm("#", idSegs)) {
    if (idSegs.length == 3) {
      numb = idSegs[2];
    }
    else if (idSegs.length == 4) {
      numb = idSegs[2] + "" + idSegs[3];
    }
    batInd = 2;
  }
  else {
    if (idSegs.length == 2) {
      numb = idSegs[1];
    }
    else if (idSegs.length == 3) {
      numb = idSegs[1] + "" + idSegs[2];
    }
    batInd = 0;
  }
  if (mod == "R") {
    numb = eval(numb) + 1;
  }
  else {
    numb = eval(numb) - 1;
  }
  if (numb > 11) {
    ind++;
    if (ind > 10) {
      batInd++;
      if (batInd > 2) {
        id = letters[0] + bats[0] + "1";
      }
      else {
        id = letters[0] + bats[batInd] + "1";
      }
    }
    else {
      if (batInd != 0) {
        id = letters[ind] + idSegs[1] + "1";
      }
      else {
        id = letters[ind] + "1";
      }
    }
  }
  else if (numb < 1) {
    ind--;
    if (ind < 0) {
      batInd--;
      if (batInd < 0) {
        id = letters[10] + bats[2] + "11";
      }
      else {
        id = letters[10] + bats[batInd] + "11";
      }
    }
    else {
      if (batInd != 0) {
        id = letters[ind] + idSegs[1] + "11";
      }
      else {
        id = letters[ind] + "11";
      }
    }
  }
  else {
    if (batInd != 0) {
      id = idSegs[0] + idSegs[1] + "" + numb;
    }
    else {
      id = idSegs[0] + "" + numb;
    }
  }
  viewer(id);
}
function addfastselectiontool(mod) {
  let fil = "ABCDEFGHIJK";
  fil = fil.split("");
  if (mod == 0) {
    let btn5 = creatanelemn("input", "", "Quickbtn", "", "", "", "button", "QUICK SELECTION", "", "addfastselectiontool(1)", "", "");
    let subHold = creatanelemn("div", "quicksel", "", "", "", "", "", "", btn5, "", "", "");
    let itm = creatanelemn("div", "quickselMAX", "", "", "", "", "", "", subHold, "", "", "");
    let mndv = document.getElementsByClassName('content-a')[0];
    rearrangehandler(mndv, itm, 3);
  }
  else if (mod == 1) {
    let f1 = creatanelemn("div", "fsbdv", "", "", "", "", "", "", "", "", "", "");
    let position = [[14.3, 62],[25.6,79.6],[44.9,88],[66.2,84.6],[81,72.3],[88,50],[81,27.7],[66.2,15.4],[44.9,12],[25.6,20.4],[14.3,38.1]];
    for (var i = 0; i < 11; i++) {
      let inp = creatanelemn("input", "", "fbtn"+i, "", "", "", "checkbox", "", "", "fastselechand(this.id,"+i+",'f')", "", "");
      if (i == 0) {
        inp.checked = true;
      }
      let sp = creatanelemn("span", "sliderFS roundFS", "", "", "", "", "", "", "", "", "", "");sp.innerHTML = fil[i];
      let sty = "position: absolute;top:"+position[10-i][0]+"%;right:"+position[10-i][1]+"%;transform: translate(50%, -50%);";
      let lab = creatanelemn("label", "switchFS", "", "", sty, "", "", "", inp, "", "", "");
      lab.appendChild(sp);
      f1.appendChild(lab);
    }
    let f2 = creatanelemn("div", "fsUbdv", "", "", "", "", "", "", f1, "", "", "");
    let l1 = creatanelemn("div", "lsbdv", "", "", "", "", "", "", "", "", "", "");
    for (var i = 1; i < 12; i++) {
      let inp = creatanelemn("input", "", "lbtn"+i, "", "", "", "checkbox", "", "", "fastselechand(this.id,"+i+",'l')", "", "");
      if (i == 1) {
        inp.checked = true;
      }
      let sp = creatanelemn("span", "sliderFS roundFS", "", "", "", "", "", "", "", "", "", "");sp.innerHTML = i;
      let sty = "position: absolute;top:"+position[11-i][0]+"%;right:"+position[11-i][1]+"%;transform: translate(50%, -50%);";
      let lab = creatanelemn("label", "switchFS", "", "", sty, "", "", "", inp, "", "", "");
      lab.appendChild(sp);
      l1.appendChild(lab);
    }
    let l2 = creatanelemn("div", "lsUbdv", "", "", "", "", "", "", l1, "", "", "");
    let bpost = [[22,50],[63,25],[63,75]];
    let b1 = creatanelemn("div", "sbdv", "", "", "", "", "", "", "", "", "", "");
    for (var i = 1; i < 4; i++) {
      let inp = creatanelemn("input", "", "bbtn"+i, "", "", "", "checkbox", "", "", "fastselechand(this.id,"+i+",'b')", "", "");
      if (i == 1) {
        inp.checked = true;
      }
      let sp = creatanelemn("span", "sliderFS roundFS", "", "", "", "", "", "", "", "", "", "");sp.innerHTML = i;
      let sty = "position: absolute;top:"+bpost[i-1][0]+"%;right:"+bpost[i-1][1]+"%;transform: translate(50%, -50%);";
      let lab = creatanelemn("label", "switchFS", "", "", sty, "", "", "", inp, "", "", "");
      lab.appendChild(sp);
      b1.appendChild(lab);
    }
    let b2 = creatanelemn("div", "sUbdv", "", "", "", "", "", "", b1, "", "", "");
    let id = "Fastelect";
    let header = creatanelemn("div", "diagheadX", "", "", "", "", "", "", "", "", "", "");
    let clsfun = "closeDialog('"+id+"')";
    let clsbtn = creatanelemn("input", "clsbtn", "", "", "", "", "button", "X", "", clsfun, "", "");
    header.appendChild(clsbtn);header.appendChild(f2);header.appendChild(l2);header.appendChild(b2);
    let condiv = creatanelemn("div", "condiv", "", "", "max-height:90%;height:90%;", "", "", "", header, "", "", "");
    let onclk = "addfastselectiontool(2)";
    let subbtn = creatanelemn("input", "submitBtn", "", "", "", "", "button", "✔", "", onclk, "", "");
    let footer = creatanelemn("div", "diaghead", "", "", "", "", "", "", subbtn, "", "", "");
    condiv.appendChild(footer);
    let bgdiv = creatanelemn("div", "bgdiv", id, "", "", "", "", "", condiv, "", "", "");
    quickSelection = {"b":1,"l":1,"f":0};
    document.getElementsByTagName('body')[0].appendChild(bgdiv);
  }
  else if (mod == 2) {
    let batrisel = {1:"", 2:"%", 3:"#"};
    let id = fil[quickSelection['f']] + batrisel[quickSelection['b']] + quickSelection['l'];
    document.getElementById(id).click();
    closeDialog('Fastelect');
  }
}
function rearrangehandler(div, itm, ind) {
  let chArr = div.children;
  if (chArr.length <= ind) {
    div.appendChild(itm);
  }
  else {
    if (ind == 0) {
      ind = 1;
    }
    for (var i = 1; i < (chArr.length + 1); i++) {
      chArr[i-1].setAttribute("data-order", i);
    }
    div.appendChild(itm);
    for (var i = 0; i < chArr.length; i++) {
      if (i >= (ind-1)) {
        chArr[i].setAttribute("data-order", (i+2));
      }
    }
    chArr[chArr.length-1].setAttribute("data-order", (ind));
    const items = Array.from(chArr);
    items.sort((a, b) => {
      const orderA = parseInt(a.getAttribute('data-order'));
      const orderB = parseInt(b.getAttribute('data-order'));
      return orderA - orderB;
    }).forEach(item => {
      div.appendChild(item);
    });
  }
}
function fastselechand(id, ind, typ) {
  if (typ == "b") {
    for (var i = 1; i < 4; i++) {
      if (i != ind) {
        document.getElementById('bbtn'+i).checked = false;
      }
    }
  }
  else if (typ == "f") {
    for (var i = 0; i < 11; i++) {
      if (i != ind) {
        document.getElementById('fbtn'+i).checked = false;
      }
    }
  }
  else if (typ == "l") {
    for (var i = 1; i < 12; i++) {
      if (i != ind) {
        document.getElementById('lbtn'+i).checked = false;
      }
    }
  }
  quickSelection[typ] = ind;
}
function isThereHmm(elem, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == elem) {
      return true;
    }
  }
  return false;
}
function closediag() {
  try {
    document.getElementById('seteditdiag').remove();
  } catch (e) {} finally {}
}
function decoder(passkey) {
  dic = "abcdefghijklmnopqrstuvwxyz0123456789";
  //let passkey = document.getElementById('id').value;
  dic = dic.split("");
  let newdic = new Array();
  passkey = passkey.split("");
  for (var c = 0; c < passkey.length; c++) {
    let ind = 0;
    for (var i = 0; i < newdic.length; i++) {
      if (newdic[i] == passkey[c]) {
        ind = 1;
      }
    }
    if (ind == 0) {
      newdic.push(passkey[c]);
    }
  }
  dic.forEach((char) => {
    let x = 0;
    for (var c = 0; c < newdic.length; c++) {
      if (newdic[c] == char) {
        x = 1;
      }
    }
    if (x == 0) {
      newdic.push(char);
    }
  });
  Con_Dic = new Object();
  deCon_Dic = new Object();
  for (var i = 0; i < dic.length; i++) {
    Con_Dic[dic[i]] = newdic[i];
  }
  for (var i = 0; i < dic.length; i++) {
    deCon_Dic[newdic[i]] = dic[i];
  }
  let trans = "";
  for (var i = 0; i < passkey.length; i++) {
    trans += Con_Dic[passkey[i]];
  }
  return trans;
}
function decoderX(passkey) {
  let psk = "";
  passkey = passkey.split("");
  for (var i = 0; i < passkey.length; i++) {
    let indf = 0;
    for (var x = 0; x < dic.length; x++) {
      if (passkey[i] == dic[x]) {
        indf = 1;
        break;
      }
    }
    if (indf == 1) {
      psk += deCon_Dic[passkey[i]];
    }
    else {
      psk += passkey[i];
    }
  }
  return psk;
}
function checkbat(key) {
  let tr = key.split("");
  for (var i = 0; i < tr.length; i++) {
    if (tr[i] == "%") {
      return "%";
    }
    else if (tr[i] == "#") {
      return "#";
    }
  }
  return "_";
}
function creatAnaly() {
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
  let sentance = "<p>Realised Piles✅:<br> <b>" + nBrOP + "/363 - " + plsps + "%</b><br>Working days🏗: <b>" + days.length + "</b><br>";
  sentance += "Battery one : <b>" + batteries["bat0"] + " - " + ((batteries["bat0"]/121) * 100).toFixed(2) + "% </b><br>";
  sentance += "Battery two : <b>" + batteries["bat1"] + " - " + ((batteries["bat1"]/121) * 100).toFixed(2) + "% </b><br>";
  sentance += "Battery three : <b>" + batteries["bat2"] + " - " + ((batteries["bat2"]/121) * 100).toFixed(2) + "% </b><br>";
  sentance += "Max Realised Par Day💹: <b>" + pPd + "</b><br>";
  sentance += "Expected Finish Date🗓: <b>" + re + "</b><br></p>";
  document.getElementById('deT').innerHTML = sentance;
  cercularti(nBrOP);calnder();
  if (typeOfBro != "Web") {
    funFinishHandler("creatAnaly");
  }
}
function cercularti(nBrOP) {
  const percentageValue = (nBrOP / 363) * 100
  const angle = (percentageValue / 100) * 360;
  const progressCircle = document.getElementById('progressCircle');
  const percentageText = document.getElementById('percentageText');
  const displayText = nBrOP + "/" + 363 + "\n" + percentageValue.toFixed(2) + '%';
  percentageText.innerText = displayText;
  const gradientStyle = `conic-gradient(#00ff7b ${angle}deg, #e0e0e0 ${angle}deg)`;
  progressCircle.style.background = gradientStyle;
  Waiter(1)//0=set; 1=remove;
}
function parseDDMMYYYY(dateString) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
}
function dateComparator(a, b) {
    const dateA = parseDDMMYYYY(a);
    const dateB = parseDDMMYYYY(b);
    return dateA.getTime() - dateB.getTime();
}
function calnder() {
  //return;
  ///document.getElementById("calndr").innerHTML = "";
  let keys = Object.keys(onlineProjects["SiloOfOuargla"]["piles"]);
  dates = new Object();
  for (var i = 0; i < keys.length; i++) {
    let date = onlineProjects["SiloOfOuargla"]["piles"][keys[i]]["DSD"];
    if (date != "") {
      if (dates[date] === undefined) {
        dates[date] = [keys[i]];
      }
      else {
        dates[date].push(keys[i]);
      }
    }
  }
  let mnts_len = [31,28,31,30,31,30,31,31,30,31,30,31];
  let dates_keys = Object.keys(dates);
  dates_keys.sort(dateComparator);let last_item = dates_keys[dates_keys.length - 1];
  let cal_dates = new Array();let ref_item = dates_keys[0];
  cal_dates.push(dates_keys[0]);
  for (var i = 0; i < 3630; i++) {
    let date_seg = ref_item.split("/");
    let max_day = mnts_len[eval(date_seg[1]) - 1];///31or30-28
    let next_day = eval(date_seg[0]) + 1;
    if (next_day <= max_day) {
      let trt = next_day + "/" + date_seg[1] + "/" + date_seg[2];
      let tst = [last_item, trt];
      tst.sort(dateComparator);
      if (tst[0] == trt) {
        cal_dates.push(trt);
        ref_item = trt;
      }
      else {
        break;
      }
    }
    else {
      let next_day = 1;
      let next_mnt = (eval(date_seg[1]) + 1);
      if (next_mnt <= 12) {
        let trt = next_day + "/" + next_mnt + "/" + date_seg[2];
        let tst = [last_item, trt];
        tst.sort(dateComparator);
        if (tst[0] == trt) {
          cal_dates.push(trt);
          ref_item = trt;
        }
        else {
          break;
        }
      }
      else {
        let next_day = 1;
        let next_mnt = 1;
        let next_year = (eval(date_seg[2]) + 1);
        let trt = next_day + "/" + next_mnt + "/" + next_year;
        let tst = [last_item, trt];
        tst.sort(dateComparator);
        if (tst[0] == trt) {
          cal_dates.push(trt);
          ref_item = trt;
        }
        else {
          break;
        }
      }
    }
  }
  tapotition = 0;
  try {
    document.getElementById("calndr").innerHTML = "";
  } catch (e) {} finally {}
  //all days = cal_dates
  // start from 155 = 22/10/2025;
  cal_dates.splice(0, 155);
  //start ;)
  let tbls_nbr = Math.ceil(cal_dates.length / 35), ind = 0;
  let week = 1,getOutCal = false;
  for (var d = 0; d < tbls_nbr; d++) {
    if (getOutCal) {
      break;
    }
    let h_th = creatanelemn("th", "", "", "", "", "", "", "", "", "", "", "Calendar 📅");
    h_th.setAttribute("colspan", 8);
    let h_tr = creatanelemn("tr", "", "", "", "", "", "", "", h_th, "", "", "");
    let tab_ID = "cal_tab_" + d;
    let table = creatanelemn("table", "cal_table", tab_ID, "", "", "", "", "", h_tr, "", "", "");
    if (d != 0) {
      table.setAttribute("style", "display:none;");
    }
    for (var i = 0; i < 5; i++) {
      if (getOutCal) {
        break;
      }
      let r_tr = creatanelemn("tr", "", "", "", "", "", "", "", "", "", "", "");
      for (var x = 0; x < 8; x++) {
        if (getOutCal) {
          break;
        }
        if (x == 0) {
          let name_wk = "Week"
          if (week < 10) {
            name_wk += "0" + week;
          }
          else {
            name_wk += week;
          }
          let r_td = creatanelemn("td", "", "", "", "", "", "", "", "", "", "", name_wk);
          r_tr.appendChild(r_td);
        }
        else {
          let td_nm = "";
          if (dates[cal_dates[ind]] === undefined) {
            if (cal_dates[ind] === undefined) {
              getOutCal = true;
            }
            else {
              td_nm += cal_dates[ind] + "\n#" + 0 + "\n /";
            }
          }
          else {
            td_nm += cal_dates[ind] + "\n#OfPiles: " + dates[cal_dates[ind]].length + "\n";
            for (var y = 0; y < dates[cal_dates[ind]].length; y++) {
              if (y != (dates[cal_dates[ind]].length - 1)) {
                let tdy = dates[cal_dates[ind]][y].replace("#", "\"");
                tdy = tdy.replace("%", "'");
                td_nm += tdy + " - ";
              }
              else {
                let tdy = dates[cal_dates[ind]][y].replace("#", "\"");
                tdy = tdy.replace("%", "'");
                td_nm += tdy;
              }
            }
          }
          let r_td = creatanelemn("td", "", "", "", "", "", "", "", "", "", "", td_nm);
          r_tr.appendChild(r_td);
          ind++;
        }
      }
      table.appendChild(r_tr);
      week++;
    }
    document.getElementById('calndr').appendChild(table);
  }
  try {
    document.getElementById("swipanelsSR").remove();
  } catch (e) {} finally {}
  try {
    let divlS = document.createElement('div');
    divlS.setAttribute('class', "battey");
    let divppLS = document.createElement('div');
    divppLS.setAttribute('class', "axeZ");
    let btnL = document.createElement('input');
    btnL.setAttribute("onclick", "cal_tabs('L')");btnL.setAttribute("type", "button");
    btnL.setAttribute("class", "swipeBTN");btnL.setAttribute("value", "<");
    //
    let btnR = document.createElement('input');
    btnR.setAttribute("onclick", "cal_tabs('R')");btnR.setAttribute("type", "button");
    btnR.setAttribute("class", "swipeBTN");btnR.setAttribute("value", ">");
    //
    divppLS.appendChild(btnL);divppLS.appendChild(btnR);
    divlS.appendChild(divppLS);
    let diLSV = document.createElement('div');
    diLSV.setAttribute("class", "view");diLSV.setAttribute("id", "swipanelsSR");
    diLSV.appendChild(divppLS);
    document.getElementById('swpanels').appendChild(diLSV);
  } catch (e) {} finally {}
  seveneight();
}
function seveneight() {
  //dates[dd/mm/yyyy] = [obj1, obj2, obj3, ....];
  let keys = Object.keys(dates);
  keys.sort(dateComparator);
  let seven_days = new Object(), twght_days = new Object();
  let mnts_len = [31,28,31,30,31,30,31,31,30,31,30,31];let start7Dating = false,start28Dating = false;
  for (var i = 0; i < keys.length; i++) {
    let parts = keys[i].split("/");
    let next_day = eval(parts[0]) + 7;
    let next_28day = eval(parts[0]) + 28;
    let this_mnth = eval(parts[1]) - 1;
    if (!start28Dating) {
      ////////handle 28 days
      date28Days = new Array();
      if (next_28day > mnts_len[this_mnth]) {
        next_dayDT = next_28day - mnts_len[this_mnth];
        let next_mnth = this_mnth + 1;
        if (next_mnth < mnts_len.length) {
          date28Days[0] = next_dayDT;
          date28Days[1] = next_mnth + 1;
          date28Days[2] = eval(parts[2]);
        }
        else {
          date28Days[0] = next_dayDT;
          date28Days[1] = 1;
          date28Days[2] = eval(parts[2]) + 1;
        }
      }
      else {
        date28Days[0] = next_28day;
        date28Days[1] = eval(parts[1]);
        date28Days[2] = eval(parts[2]);
      }
      ////////////////////////////////////////
      const d = new Date();
      let today = [d.getDate(), (d.getMonth() + 1), d.getFullYear()];
      if (date28Days[2] > today[2]) {
        start28Dating = true;
      }
      else if (date28Days[2] == today[2]) {
        if (date28Days[1] > today[1]) {
          start28Dating = true;
        }
        else if (date28Days[1] == today[1]) {
          if (date28Days[0] >= today[0]) {
            start28Dating = true;
          }
        }
      }
    }
    if (!start7Dating) {
      ////////handle 7 days
      date7Days = new Array();
      if (next_day > mnts_len[this_mnth]) {
        next_dayDT = next_day - mnts_len[this_mnth];
        let next_mnth = this_mnth + 1;
        if (next_mnth < mnts_len.length) {
          date7Days[0] = next_dayDT;
          date7Days[1] = next_mnth + 1;
          date7Days[2] = eval(parts[2]);
        }
        else {
          date7Days[0] = next_dayDT;
          date7Days[1] = 1;
          date7Days[2] = eval(parts[2]) + 1;
        }
      }
      else {
        date7Days[0] = next_day;
        date7Days[1] = eval(parts[1]);
        date7Days[2] = eval(parts[2]);
      }
      ////////////////////////////////////////
      const d = new Date();
      let today = [d.getDate(), (d.getMonth() + 1), d.getFullYear()];
      if (date7Days[2] > today[2]) {
        start7Dating = true;
      }
      else if (date7Days[2] == today[2]) {
        if (date7Days[1] > today[1]) {
          start7Dating = true;
        }
        else if (date7Days[1] == today[1]) {
          if (date7Days[0] >= today[0]) {
            start7Dating = true;
          }
        }
      }
    }
    if (start7Dating) {
      //seven days
      if (next_day <= mnts_len[this_mnth]) {
        let full_date = next_day + "/" + parts[1] + "/" + parts[2];
        seven_days[full_date] = dates[keys[i]];
      }
      else {
        next_day = next_day - mnts_len[this_mnth];
        next_mnt = eval(parts[1]) + 1;
        next_yer = eval(parts[2]);
        if (next_mnt > mnts_len.length) {
          next_mnt = 1;
          next_yer++;
        }
        let full_date = next_day + "/" + next_mnt + "/" + next_yer;
        seven_days[full_date] = dates[keys[i]];
      }
    }
    if (start28Dating) {
      //twenty-eight days
      if (next_28day <= mnts_len[this_mnth]) {
        let full_date = next_28day + "/" + parts[1] + "/" + parts[2];
        twght_days[full_date] = dates[keys[i]];
      }
      else {
        next_28day = next_28day - mnts_len[this_mnth];
        next_mnt = eval(parts[1]) + 1;
        next_yer = eval(parts[2]);
        if (next_mnt > mnts_len.length) {
          next_mnt = 1;
          next_yer++;
        }
        let full_date = next_28day + "/" + next_mnt + "/" + next_yer;
        twght_days[full_date] = dates[keys[i]];
      }
    }
  }
  ///add foreach
  let seday = Object.keys(seven_days);
  let ghday = Object.keys(twght_days);
  let totsKeys = new Object();
  for (var i = 0; i < seday.length; i++) {
    if (totsKeys[seday[i]] === undefined) {
      totsKeys[seday[i]] = 1;
    }
    else {
      totsKeys[seday[i]]++;
    }
  }
  for (var i = 0; i < ghday.length; i++) {
    if (totsKeys[ghday[i]] === undefined) {
      totsKeys[ghday[i]] = 1;
    }
    else {
      totsKeys[ghday[i]]++;
    }
  }
  let keysTotsKeys = Object.keys(totsKeys);
  keysTotsKeys.sort(dateComparator);
  try {
    document.getElementsByClassName('daysH')[0].remove();
  } catch (e) {} finally {}
  let d = new Date();
  let tday = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  let holDer = creatanelemn("div", "daysH", "", "", "", "", "", "", "", "", "", "");
  for (var i = 0; i < keysTotsKeys.length; i++) {
    let classy = "dayHSR"
    if (keysTotsKeys[i] == tday) {
      classy = "dayHSRST";
    }
    let dayHSR = creatanelemn("div", classy, "", "", "", "", "", "", "", "", "", "");
    let paRa = keysTotsKeys[i];
    if (seven_days[keysTotsKeys[i]] !== undefined) {
      let rRr = "";
      for (var x = 0; x < seven_days[keysTotsKeys[i]].length; x++) {
        let letter = seven_days[keysTotsKeys[i]][x].replace("#", "\"");
        letter = letter.replace("%", "'");
        rRr += letter;
        if (x < (seven_days[keysTotsKeys[i]].length - 1)) {
          rRr += ", ";
        }
        else {
          rRr += ".";
        }
      }
      paRa += "\n7 Days crushing: " + rRr;
    }
    if (twght_days[keysTotsKeys[i]] !== undefined) {
      let rRr = "";
      for (var x = 0; x < twght_days[keysTotsKeys[i]].length; x++) {
        let letter = twght_days[keysTotsKeys[i]][x].replace("#", "\"");
        letter = letter.replace("%", "'");
        rRr += letter;
        if (x < (twght_days[keysTotsKeys[i]].length - 1)) {
          rRr += ", ";
        }
        else {
          rRr += ".";
        }
      }
      paRa += "\n28 Days crushing: " + rRr;
    }
    let txt = "#" + (i + 1);
    let ptxt = creatanelemn("p", "nDsvp", "", "", "", "", "", "", "", "", "", txt);
    if (keysTotsKeys[i] == tday) {
      ptxt.style = "font-size:25px;color: rgb(0, 200, 0);"
    }
    else {
      ptxt.style = "font-size:25px;"
    }
    let numbDiv = creatanelemn("div", "nDsv", "", "", "", "", "", "", ptxt, "", "", "");
    dayHSR.appendChild(numbDiv);
    ///spliter
    let brdr = creatanelemn("div", "brdr", "", "", "", "", "", "", "", "", "", "");
    dayHSR.appendChild(brdr);
    ///
    let ptxtSR = creatanelemn("p", "nDsvSRp", "", "", "", "", "", "", "", "", "", paRa);
    if (keysTotsKeys[i] == tday) {
      ptxtSR.style = "margin: 0 0 0 10px;text-align:left;color: rgb(0, 200, 0);"
    }
    else {
      ptxtSR.style = "margin: 0 0 0 10px;text-align:left;";
    }
    let numbDivSR = creatanelemn("div", "nDsvSR", "", "", "", "", "", "", ptxtSR, "", "", "");
    dayHSR.appendChild(numbDivSR);
    holDer.appendChild(dayHSR);
  }
  document.getElementById('supportsaving').appendChild(holDer);
  let content = "Today you have:";
  if (keysTotsKeys[0] == tday) {
    if (seven_days[keysTotsKeys[0]] !== undefined) {
      let rRr = "";
      for (var x = 0; x < seven_days[keysTotsKeys[0]].length; x++) {
        let letter = seven_days[keysTotsKeys[0]][x].replace("#", "\"");
        letter = letter.replace("%", "'");
        rRr += letter;
        if (x < (seven_days[keysTotsKeys[0]].length - 1)) {
          rRr += ", ";
        }
        else {
          rRr += ".";
        }
      }
      content += "\n7 Days crushing: " + rRr;
    }
    if (twght_days[keysTotsKeys[0]] !== undefined) {
      let rRr = "";
      for (var x = 0; x < twght_days[keysTotsKeys[0]].length; x++) {
        let letter = twght_days[keysTotsKeys[0]][x].replace("#", "\"");
        letter = letter.replace("%", "'");
        rRr += letter;
        if (x < (twght_days[keysTotsKeys[0]].length - 1)) {
          rRr += ", ";
        }
        else {
          rRr += ".";
        }
      }
      content += "\n28 Days crushing: " + rRr;
    }
    let new_check = new Date();
    let trug = new_check.getDate() + "/" + new_check.getMonth() + "/" + new_check.getFullYear();
    let last_check = window.localStorage.getItem("lastsh");
    if (!crushing_notify && trug != last_check) {
      let trustdate = new Date();
      trustdate = trustdate.getDate() + "/" + trustdate.getMonth() + "/" + trustdate.getFullYear();
      window.localStorage.setItem("lastsh", trustdate);
      ayanotifiys("REMINDER", content, "shoenotiynow");
    }
  }
}
function cal_tabs(mod) {
  if (mod == "R") {
    tapotition++;
    let tabs = document.getElementsByClassName('cal_table');
    if (tapotition >= tabs.length) {
      tapotition = 0;
    }
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style = "display:none;";
    }
    document.getElementById("cal_tab_" + tapotition).style = "display:block;";
  }
  else if (mod == "L") {
    tapotition--;
    let tabs = document.getElementsByClassName('cal_table');
    if (tapotition < 0) {
      tapotition = (tabs.length - 1);
    }
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style = "display:none;";
    }
    document.getElementById("cal_tab_" + tapotition).style = "display:block;";
  }
}
function Waiter(mod) {
  if (mod == 0) {
    let p = creatanelemn("p", "", "waitP", "", "", "", "", "", "", "", "", "");
    let waitdiv = creatanelemn("div", "", "waitdiv", "", "", "", "", "", p, "", "", "");
    document.getElementsByTagName('body')[0].appendChild(waitdiv);
    let post = ["/", "-", "\\", "|", ";)", "¯", "-", "_", "-", "¯"], ind = 0;
    waiterInt = setInterval(function () {
      document.getElementById('waitP').innerText = post[ind];
      ind++;
      let cpm = post.length;
      if (ind == cpm) {
        ind = 0;
      }
    }, 100);
  }
  else if (mod == 1) {
    try {
      clearInterval(waiterInt);
      document.getElementById('waitdiv').remove();
    }
    catch (e) {} finally {}
  }
}
function open_cal(mod) {
  if (mod == 0) {
    document.getElementById('calender').style.display = "none";
  }
  else {
    document.getElementById('calender').style.display = "block";
  }
}
var windowWidth = window.innerWidth;
async function ayanotifiys(title, content, callback) {
  const elem = document.getElementsByClassName('notificatins').length;
  const elems = document.getElementsByClassName('notificatinsf').length;
  const count = elem + elems;var monteris;
  const idiv = "notify" + count;closeid = "notifyclosy" + count;
  if (windowWidth > 600) {
    //show it from right
    const clobtn = await creatanelemn("input", "notifyclosy", closeid, "", "", "", "button", "X", "", "closenotifi(this.id)", "", "");
    const titlep = await creatanelemn("p", "notifytitle", "", "", "", "", "", "", "", "", "", title);
    const contentx = await creatanelemn("p", "notifycontnt", "", "", "", "", "", "", "", "", "", content);
    const notificatins = await creatanelemn("div", "notificatins", idiv, "", "", "", "", "", titlep, "", "", "");
    notificatins.appendChild(contentx);notificatins.appendChild(clobtn);
    document.getElementById('karive').appendChild(notificatins);
    monteris = 0-270;
    shoenotiynow(monteris, idiv, "hidentermnite");
  }
  else {
    //show it form top
    const clobtn = await creatanelemn("input", "notifyclosy", closeid, "", "", "", "button", "X", "", "closenotifi(this.id)", "", "");
    const titlep = await creatanelemn("p", "notifytitle", "", "", "", "", "", "", "", "", "", title);
    const contentx = await creatanelemn("p", "notifycontnt", "", "", "", "", "", "", "", "", "", content);
    const notificatins = await creatanelemn("div", "notificatinsf", idiv, "", "", "", "", "", titlep, "", "", "");
    notificatins.appendChild(contentx);notificatins.appendChild(clobtn);
    document.getElementById('karive').appendChild(notificatins);
    monteris = 0-270;
    return shoenotiynow(monteris, idiv, "hidentermnite");
  }
  return true;
}
function shoenotiynow(monteris, idiv, callback) {
  if (windowWidth > 600) {
    var inerd = setInterval(function () {
      if (monteris < 20) {
        document.getElementById(idiv).style.right = monteris + "px";
        monteris += 2.7;
      }
      else {
        document.getElementById(idiv).style.right = 20 + "px";
        clearInterval(inerd);
      }
    }, 10);
    return hidentermnite("deletenotify")
  }
  else {
    var interv = setInterval(function () {
      if (monteris < 20) {
        document.getElementById(idiv).style.top = monteris + "px";
        monteris += 2.7
      }
      else {
        document.getElementById(idiv).style.top = 20 + "px";
        clearInterval(interv);
      }
    }, 10);
    return hidentermnite("deletenotify")
  }
  mksound("lib/finished.mp3");
}
function mksound(arg) {
  const audio = new Audio(arg);
  audio.play();
}
var interx;
function hidentermnite(callback) {
  var x = 0
  interx = setInterval(function () {
    if (x < 100) {
      x += 1;
    }
    else {
      clearInterval(interx);
      hidthempro();
    }
  }, 100);
}
function hidthempro() {
  var elem = document.getElementsByClassName('notificatins').length;
  var elems = document.getElementsByClassName('notificatinsf').length;
  var length = elem + elems;
  if (windowWidth > 600) {
    monteris = 20;
    interd = setInterval(function () {
      if (monteris > 0-270) {
        try {
          document.getElementById("notify"+0).style.right = monteris + "px";
          monteris -= 2.7;
        } catch (e) {
          try {
            clearInterval(intersk);
          } catch (e) {} finally {}
          try {
            clearInterval(interm);//
          } catch (e) {} finally {}
          try {
            clearInterval(interd);//
          } catch (e) {} finally {}
          try {
            clearInterval(interx);//
          } catch (e) {} finally {}
        } finally {}
      }
      else {
        document.getElementById("notify"+0).style.right = 0-270 + "px";
        clearInterval(interd);deletenotify(length)
      }
    }, 10);
  }
  else {
    monteris = 20;
    interd = setInterval(function () {
      if (monteris > 0-270) {
        try {
          document.getElementById("notify"+0).style.top = monteris + "px";
          monteris -= 2.7;
        } catch (e) {
          try {
            clearInterval(intersk);
          } catch (e) {} finally {}
          try {
            clearInterval(interm);//
          } catch (e) {} finally {}
          try {
            clearInterval(interd);//
          } catch (e) {} finally {}
          try {
            clearInterval(interx);//
          } catch (e) {} finally {}
        } finally {}
      }
      else {
        document.getElementById("notify"+0).style.top = 0-270 + "px";
        clearInterval(interd);deletenotify(length);
      }
    }, 10);
  }
}
function deletenotify(length) {
  var g = 0;
  intersk = setInterval(function () {
    if (g < 10) {
      g += 1
    }
    else {
      for (var i = 0; i < length; i++) {
        try {
          document.getElementById("notify"+i).remove();
        } catch (e) {} finally {}
        try {
          clearInterval(intersk);
        } catch (e) {} finally {}
        try {
          clearInterval(interm);//
        } catch (e) {} finally {}
        try {
          clearInterval(interd);//
        } catch (e) {} finally {}
        try {
          clearInterval(interx);//
        } catch (e) {} finally {}
        break;
      }
    }
  }, 100);
}
function closenotifi(btnid) {
  clearInterval(interx);
  parid = document.getElementById(btnid).parentElement.getAttribute("id");
  $("#"+parid).fadeToggle();
  var t = 0;
  interm = setInterval(function () {
    if (t < 5) {
      t += 1;
    }
    else {
      document.getElementById(parid).remove();
      try {
        clearInterval(intersk);
      } catch (e) {} finally {}
      try {
        clearInterval(interm);
      } catch (e) {} finally {}
      try {
        clearInterval(interd);
      } catch (e) {} finally {}
    }
  }, 100);
}
function donwAndApp() {
  console.log("clicked");
  return
  downloaded = false;
  window.localStorage.setItem("downloaded", downloaded);
}
function onWindowResize() {
  let wWidth = window.innerWidth;
  let wHeight = window.innerHeight;
  if (wWidth > wHeight) {
    document.getElementById('swipeview').style.display = "none";
  }
  else {
    document.getElementById('swipeview').style.display = "block";
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
function mobileAutoLogIn() {
  if (typeof(Storage) !== "undefined") {
    let pask = window.localStorage.getItem("password");
    if (pask != null && pask != undefined) {
      loging();
      document.getElementById('PASSWORD').value = pask;
      loged();
    }
  }
}
function automod(mod) {
  const darkmQ = window.matchMedia('(prefers-color-scheme: dark)');
  if (mod == 0) {
    if (darkmQ['matches']) {
      document.getElementById('karive').setAttribute('class', 'dark_mode');
    }
    darkmQ.addEventListener('change', e => {
      if (e.matches) {
        document.document,getElementById('karive').setAttribute('class', 'dark_mode');
      }
      else {
        try {
          document.document,getElementById('karive').removeAttribute('class');
        } catch (e) {} finally {}
      }
    });
  }
}
window.addEventListener('resize', onWindowResize);
document.addEventListener('DOMContentLoaded', (event) => {
  opening();window.addEventListener('resize', onWindowResize);
  document.getElementsByTagName('body')[0].addEventListener("keydown", function(event) {
    if (event.key === "F" || event.key === "f") {
      refreshFun();
    }
  });
  document.addEventListener('contextmenu', function(event) {
      event.preventDefault(); // Prevents the default browser context menu from appearing
      return false; // Ensures the event doesn't propagate further (for older browsers)
  });
  let mybutton = document.getElementById("myBtn");
  window.onscroll = function() {scrollFunction()};
  if (!app_news && typeOfBro == "Web") {
    let app_tkDWN = setInterval(function () {
      if (app_interval > 0) {
        app_interval = app_interval - 100;
      }
      else {
        app_news = true;
        window.localStorage.setItem("app_news", true);
        clearInterval(app_tkDWN);
        let content = "Our new android app is available download it down below.";
        ayanotifiys("NEWS!", content, "shoenotiynow");
      }
    }, 100);
  }
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    mobileAutoLogIn();
  }
  else {
  }
  automod(0);
});
