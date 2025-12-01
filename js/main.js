let dec = new Object();let cryppassKey,passKey;let supportsaving = false;let saved = false;
let dataElement = "";let submited = false, logedin = false;let moposition = 0
if (typeof(Storage) !== "undefined") {
  supportsaving = true;
  saved = window.localStorage.getItem("saved");
  submited = window.localStorage.getItem("submited");
  dataElement = window.localStorage.getItem("dataElement");
  logedin = window.localStorage.getItem("logedin");
  passKey = window.localStorage.getItem("passKey");
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
  if (logedin == "false") {
    logedin = false;
  }
  else if (logedin == "true") {
    logedin = true;
  }
  if (dataElement == null) {
    dataElement = "";
  }
}
function loaduphandler() {
  //startupset();return;
  let encr_dec = window.localStorage.getItem("dec");//key:i,i,i,i#
  if (supportsaving && encr_dec != null) {
    let obj_items = encr_dec.split("@");let securite = false;
    if (obj_items.length > 1) {
      securite = true;
    }
    if (saved && securite) {
      let last_update_ms = window.localStorage.getItem("lastUpdate");
      let now_update = new Date().getTime();
      let hr = Math.floor((now_update - last_update_ms) / (60 * 60 * 1000));
      if (hr < 1) {
        for (var i = 0; i < obj_items.length; i++) {
          let y = (obj_items.length) - 1;
          if (i == y) {
            break;
          }
          let obj_seg = obj_items[i].split(":");
          let key = obj_seg[0];let aary = obj_seg[1].split(",");dec[key] = aary;
          document.getElementById(key).removeAttribute("class");
          document.getElementById(key).removeAttribute("onclick");
          document.getElementById(key).setAttribute("class", "eleypro");
          document.getElementById(key).setAttribute("onclick", "viewer(this.id)");
          let arr = dec[key];
          if (arr[1] == "SONIC") {
            document.getElementById(key).setAttribute("style", "background:rgb(20,120,255);");
          }
          else if (arr[1] == "CORE SAMPLE") {
            document.getElementById(key).setAttribute("style", "background:coral;");
          }
          else if (arr[1] == "RISK") {
            document.getElementById(key).setAttribute("style", "background:rgb(255,20,20);");
          }
          else if (arr[1] == "ATRISK") {
            document.getElementById(key).setAttribute("style", "background:rgb(255,100,65);");
          }
        }
        let keys = Object.keys(obj_items);
        creatAnaly(keys);
      }
      else {
        startupset();
      }
    }
    else {
      startupset();
    }
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
  //login back
  if (logedin && logedin != null) {
    let pieux = document.getElementsByClassName('eley');
    for (var i = 0; i < pieux.length; i++) {
      pieux[i].removeAttribute("onclick");
      pieux[i].setAttribute("onclick", "opendialog(this.id)");
    }
    let xcode = window.localStorage.getItem("xcode");
    let link = "https://mirakski.github.io/SiloOfOuargla/passkey.js";
    link = link.replace("passkey", xcode);
    let js = document.createElement('script');
    js.setAttribute("charset", "utf-8");js.setAttribute("src", link);
    document.getElementsByTagName('body')[0].appendChild(js);
    document.getElementById('logview').style = "display:none;";
    document.getElementById('loginbtn').removeAttribute("onclick");
    document.getElementById('loginbtn').setAttribute("onclick", "submithandlerT()");
    document.getElementById('loginbtn').value = "Submit Editing";
    let urls = window.localStorage.getItem("WEB_APP_URL");
    WEB_APP_URL = urls;
  }
  else {
    passKey = "";
    window.localStorage.setItem("passKey", "");
  }
  if (!submited && submited != null) {
    document.getElementById('logview').style = "";
  }
}
//creatanelemn("kng", "clss", "id", "name", "style", "title", "type", "value", "elem", "onclick", "disabled", "innertext");
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
      jsonDataOBJ = result.content;
      dec  = result.content;
      let keys = Object.keys(jsonDataOBJ);let long_keys = "";
      keys.forEach((key) => {
        document.getElementById(key).removeAttribute("class");
        document.getElementById(key).removeAttribute("onclick");
        document.getElementById(key).setAttribute("class", "eleypro");
        document.getElementById(key).setAttribute("onclick", "viewer(this.id)");
        let arr = dec[key];
        long_keys += key +":";
        for (var i = 0; i < arr.length; i++) {
          if (i != (arr.length-1)) {
            long_keys += arr[i] + ",";
          }
          else {
            long_keys += arr[i];
          }
        }
        long_keys += "@";
        if (arr[1] == "SONIC") {
          document.getElementById(key).setAttribute("style", "background:rgb(20,120,255);");
        }
        else if (arr[1] == "CORE SAMPLE") {
          document.getElementById(key).setAttribute("style", "background:coral;");
        }
        else if (arr[1] == "RISK") {
          document.getElementById(key).setAttribute("style", "background:rgb(255,20,20);");
        }
        else if (arr[1] == "ATRISK") {
          document.getElementById(key).setAttribute("style", "background:rgb(255,100,65);");
        }
        force_update_ms = new Date().getTime();
        window.localStorage.setItem("force_update_ms", force_update_ms);
        //key = key.replace("%", "'");key = key.replace("#", "\"");
      });
      window.localStorage.setItem("dec", long_keys);
      window.localStorage.setItem("saved", true);
      window.localStorage.setItem("submited", true);
      window.localStorage.setItem("dataElement", "");
      let last_update_ms = new Date().getTime();
      window.localStorage.setItem("lastUpdate", last_update_ms);
      creatAnaly(keys);
    } else {
      //`${result.message}`;
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
  Waiter(0)//0=set; 1=remove;
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
        divx.appendChild(divz);
      }
      div.appendChild(divx);
    }
    let host = document.getElementById('host');
    host.appendChild(div);
  }
  for (var i = 0; i < 2; i++) {
    let br = document.createElement('br');
    document.getElementsByTagName('body')[0].appendChild(br);
    cryppassKey = "nbehzxz4";
  }
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
  loaduphandler();
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
      let slct = document.createElement("input");slct.setAttribute("type", "text");
      slct.setAttribute("id", "PASSWORD");slct.setAttribute("class", "inputer");
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
  document.getElementById('PASSWORD').click();
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
    } catch (e) {} finally {}
    let js = document.createElement('script');
    js.setAttribute("charset", "utf-8");js.setAttribute("src", link);
    document.getElementsByTagName('body')[0].appendChild(js);
    document.getElementById('logview').style = "display:none;";
    document.getElementById('loginbtn').removeAttribute("onclick");
    document.getElementById('loginbtn').setAttribute("onclick", "submithandlerT()");
    document.getElementById('loginbtn').value = "Submit Editing";
    logedin = true;let ind = 2000;
    int_X = setInterval(function () {
      if (ind > 1000) {
        ind -= 100;
      }
      else {
        setUrls();
        clearInterval(int_X);
      }
    }, 100);
    try {
      window.localStorage.setItem("logedin", true);
      window.localStorage.setItem("passKey", chifr);
    } catch (e) {} finally {}
    closediag();
  }
  else {
    document.getElementById('passINC').innerText = "PASSWORD INCORRECT";
    document.getElementById('passINC').setAttribute("style", "color:red;font-weight: bold;");
  }
}
function submithandlerT() {
  sendData();
  document.getElementById('logview').style = "display:none;";
}
function viewer(id) {
  let holder = document.createElement('div');
  holder.setAttribute("class", "hdiag");
  for (var i = 0; i < 4; i++) {
    let hl = document.createElement('div');
    hl.setAttribute("class", "hhldiag");
    if (i == 0) {
      let ttl = document.createElement('p');
      let idf = id.replace("%", "'");idf = idf.replace("#", "\"");
      ttl.innerText = idf;
      let cls = document.createElement('input');
      cls.setAttribute("onclick", "closediag()");cls.setAttribute("type", "button");
      cls.setAttribute("class", "clsbtn");cls.setAttribute("value", "X");
      hl.appendChild(ttl);hl.appendChild(cls);
      let br = document.createElement('br');
      hl.appendChild(br);
    }
    else if (i == 1) {
      let ttl = document.createElement('p');
      let date_data;
      if (dec[id] != undefined) {
        date_data = dec[id][0]
      }
      else {
        date_data = undefined;
      }
      ttl.innerText = "Date: " + date_data;
      hl.appendChild(ttl);
    }
    else if (i == 2) {
      let ttl = document.createElement('p');
      let date_data;
      if (dec[id] != undefined) {
        date_data = dec[id][1]
      }
      else {
        date_data = undefined;
      }
      ttl.innerText = "Expe: " + date_data;
      hl.appendChild(ttl);
    }
    else if (i == 3 && passKey == cryppassKey) {
      let btns = document.createElement('input');
      id = id.replace("'", "%");id = id.replace("\"", "#");
      btns.setAttribute("onclick", "dEleteIT('"+id+"')");btns.setAttribute("type", "button");
      btns.setAttribute("class", "seteditbtn");btns.setAttribute("value", "DELETE!");
      //
      let btn = document.createElement('input');
      btn.setAttribute("onclick", "editdialog('"+id+"')");btn.setAttribute("type", "button");
      btn.setAttribute("class", "seteditbtn");btn.setAttribute("value", "EDIT!");
      hl.appendChild(btns);hl.appendChild(btn);
    }
    holder.appendChild(hl);
  }
  let bg = document.createElement('div');
  bg.setAttribute("class", "bgdiag");
  bg.setAttribute("id", "seteditdiag");
  bg.appendChild(holder);
  document.getElementsByTagName('body')[0].appendChild(bg);
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
  let keys = Object.keys(dec);
  let nBrOP = keys.length,batteries = {"bat0":0, "bat1":0, "bat2":0};
  dyRlzdMAP = new Object();
  for (var i = 0; i < keys.length; i++) {
    let date = dec[keys[i]][0];
    if (dyRlzdMAP[date] === undefined) {
      dyRlzdMAP[date] = 1;
    }
    else {
      dyRlzdMAP[date]++;
    }
    let tst0 = checkbat(keys[i].toString());
    if ("%" == tst0) {
      batteries["bat1"]++;
    }
    else if ("#" == tst0) {
      batteries["bat2"]++;
    }
    else if ("_" == tst0) {
      batteries["bat0"]++;
    }
  }
  let days = Object.keys(dyRlzdMAP);
  let pPd = (nBrOP / days.length).toFixed(2);
  let rstdDys = (Math.ceil((363 - nBrOP) / pPd));
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
  sentance += "Averege Realised Par Day: <b>" + pPd + "</b><br>";
  sentance += "Expected Finish Date: <b>" + re + "</b><br></p>";
  document.getElementById('deT').innerHTML = sentance;
  cercularti(nBrOP);calnder();
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
  return;
  let keys = Object.keys(dec);
  dates = new Object();
  for (var i = 0; i < keys.length; i++) {
    let date = dec[keys[i]][0];
    if (dates[date] === undefined) {
      dates[date] = [keys[i]];
    }
    else {
      dates[date].push(keys[i]);
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
  console.log(cal_dates, dates_keys);
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
opening();
document.getElementsByTagName('body')[0].addEventListener("keydown", function(event) {
  if (event.key === "F" || event.key === "f") {
    refreshFun();
  }
});
