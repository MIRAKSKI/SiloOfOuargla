let h = "AK0vliwS7xT3vK7YXrbM6DUz4QtjWrkTPoTmb88qF5XxpoANURBlTf8A86G9c7zhmboJpwvb";
let WEB_APP_URL = "https://script.google.com/macros/s/passkey/exec";
function sendData() {
  WEB_APP_URL = WEB_APP_URL.replace("passkey", decoderX(h));
  const formData = new FormData();
  const payload = {
    newData: tempProject,
    timestamp: new Date().toLocaleString('ar-EG')
  };
  formData.append('jsonPayload', JSON.stringify(payload));
  fetch(WEB_APP_URL, {
    method: 'POST',
    mode: 'cors',
    body: formData
  })
  .then(response => response.json())
  .then(result => {
    if (result.status === 'success') {
      submited = true;
      try {
        window.localStorage.setItem("submited", submited);
      } catch (e) {} finally {}
      document.getElementById('logview').style = "display:none;";
      dataElement = "";
      window.localStorage.setItem("dataElement", "");
    } else {
      //`${result.message}`;
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
function opendialog(idetion) {
  let id = "pileSetPlatform";
  let pileName = idetion.replace("%", "'");pileName = pileName.replace("#", "\"");
  let ttr = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", pileName);
  let header = creatanelemn("div", "diaghead", "", "", "", "", "", "", ttr, "", "", "");
  let clsfun = "closediag('"+id+"')";
  let clsbtn = creatanelemn("input", "clsbtn", "", "", "", "", "button", "X", "", clsfun, "", "");
  header.appendChild(clsbtn);
  let condiv = creatanelemn("div", "condiv", "", "", "", "", "", "", header, "", "", "");
  let nmttl = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", "Coordanition");
  let frow = creatanelemn("div", "diagcol", "", "", "", "", "", "", nmttl, "", "", "");
  let subrow = creatanelemn("div", "diagrowPro", "", "", "", "", "", "", "", "", "", "");
  let cords = ["X", "Y", "Z"];
  for (var i = 0; i < cords.length; i++) {
    let txt = cords[i] + ": ";
    let corttl = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", txt);
    let ssrow = creatanelemn("div", "diagrow", "", "", "", "", "", "", corttl, "", "", "");
    let cordInp = creatanelemn("input", "", cords[i], "", "width:100px;", "", "text", "", "", "", "", "");
    ssrow.appendChild(cordInp);subrow.appendChild(ssrow);
  }
  frow.appendChild(subrow);
  let typettl = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", "Pile Type: ");
  let sRow = creatanelemn("div", "diagrow", "", "", "", "", "", "", typettl, "", "", "");
  let select = creatanelemn("select", "", "pileType", "", "", "", "", "", "", "", "", "");
  let typsPile = ["Nul","SONIC", "CORE SAMPLE", "IMP", "RISK", "ATRISK"];
  for (var i = 0; i < typsPile.length; i++) {
    let option = creatanelemn("option", "", "", "", "", "", "", "", "", "", "", typsPile[i]);
    select.appendChild(option);
  }
  sRow.appendChild(select);
  let hdiv = creatanelemn("div", "hdiv", "newProHDiv", "", "", "", "", "", frow, "", "", "");
  hdiv.appendChild(sRow);
  let titling = ["Drilling","Reinforcement", "Concreting"];
  let functiling = [["SD", "SH"], ["ED", "EH"]];
  let funsOfDH = ["date", "time"];
  let namiling = [["Starting Date","Starting Hour"], ["Ending Date", "Ending Hour"]];
  for (var i = 0; i < titling.length; i++) {
    let titlttl = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", titling[i]);
    let tRow = creatanelemn("div", "diagcol", "", "", "", "", "", "", titlttl, "", "", "");
    for (var y = 0; y < namiling.length; y++) {
      let ssRow = creatanelemn("div", "diagrowPro", "", "", "", "", "", "", "", "", "", "");
      for (var x = 0; x < namiling[y].length; x++) {
        let tSubTtl = namiling[y][x] + ": ";
        let subtitl = creatanelemn("p", "", "", "", "font-size:18px;", "", "", "", "", "", "", tSubTtl);
        let sssRow = creatanelemn("div", "diagrow", "", "", "", "", "", "", subtitl, "", "", "");
        let idsz = titling[i] + functiling[y][x];
        let inpX = creatanelemn("input", "", idsz, "", "width:120px;font-size:16px;", "", funsOfDH[x], "", "", "", "", "");
        sssRow.appendChild(inpX);ssRow.appendChild(sssRow);
      }
      tRow.appendChild(ssRow);
    }
    hdiv.appendChild(tRow);
  }
  condiv.appendChild(hdiv);
  let onclk = "setitemx('"+idetion+"')";
  let subbtn = creatanelemn("input", "submitBtn", "", "", "", "", "button", globalLang[57], "", onclk, "", "");
  let footer = creatanelemn("div", "diaghead", "", "", "", "", "", "", subbtn, "", "", "");
  condiv.appendChild(footer);
  let bgdiv = creatanelemn("div", "bgdiv", id, "", "", "", "", "", condiv, "", "", "");
  document.getElementsByTagName('body')[0].appendChild(bgdiv);
}
function setitemx(id) {
  if (cryppassKey != passKey) {
    return;
  }
  let iDs = ["X", "Y", "Z", "pileType"
            , "DrillingSD", "DrillingSH", "DrillingED", "DrillingEH"
            , "ReinforcementSD", "ReinforcementSH", "ReinforcementED", "ReinforcementEH"
            , "ConcretingSD", "ConcretingSH", "ConcretingED", "ConcretingEH"];
  let kYs = ["X", "Y", "Z", "pT", "DSD", "DSH", "DED", "DEH"
            , "RSD", "RSH", "RED", "REH", "CSD", "CSH", "CED", "CEH"];
  let tempObj = new Object();isItEmpty = true;
  for (var i = 0; i < iDs.length; i++) {
    let val = document.getElementById(iDs[i]).value;
    tempObj[kYs[i]] = val;
    if (val != "") {
      isItEmpty = false;
    }
  }
  if (!isItEmpty) {
    if (tempProject == undefined) {
      tempProject = new Object();
      tempProject[idetion] = tempObj;
    }
    else {
      tempProject[idetion] = tempObj;
    }
    let stringedNSProjects = JSON.stringify(tempProject);
    window.localStorage.setItem("ProjectsNotSavedData", stringedNSProjects);
    if (onlineProjects["SiloOfOuargla"]["piles"] == undefined) {
      onlineProjects["SiloOfOuargla"]["piles"] = new Object();
      onlineProjects["SiloOfOuargla"]["piles"][idetion] = tempObj;
    }
    else {
      onlineProjects["SiloOfOuargla"]["piles"][idetion] = tempObj;
    }
    let stringedProjects = JSON.stringify(onlineProjects);
    window.localStorage.setItem("ProjectsData", stringedProjects);
    let theItem = document.getElementById(idetion);
    theItem.removeAttribute("class");
    theItem.removeAttribute("onclick");
    theItem.setAttribute("class", "eleypro");
    theItem.setAttribute("onclick", "viewerPiles(this.id)");
  }
  else {
    ayanotifiys("Err - 01", "No Data Entred", "shoenotiynow");
  }
  closediag();creatAnaly();
}
function editdialog(id) {
  closediag();
  
}
function dEleteIT(id) {
  let log = id+":"+"REMOVE:REMOVE";
  let arr = dataElement.split("@");
  dataElement = "";
  if (arr != "") {
    for (var i = 0; i < arr.length; i++) {
      let itms = arr[i].split(":");
      if (id != itms[0]) {
        dataElement += arr[i] + "@";
      }
      else {
        dataElement += log + "@";
      }
    }
  }
  else {
    dataElement += log + "@";
  }
  ////////////////
  try {
    window.localStorage.setItem("dataElement", dataElement);
  } catch (e) {} finally {}
  document.getElementById('logview').style = "";
  delete dec[id];
  document.getElementById(id).removeAttribute("class");
  document.getElementById(id).removeAttribute("onclick");
  document.getElementById(id).setAttribute("class", "eley");
  document.getElementById(id).setAttribute("onclick", "viewer(this.id)");
  let keys = Object.keys(dec);let long_keys = "";
  keys.forEach((key, i) => {
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
  });
  try {
    window.localStorage.setItem("dec", long_keys);
    window.localStorage.setItem("saved", true);
    let last_update_ms = new Date().getTime();
    window.localStorage.setItem("lastUpdate", last_update_ms);
  } catch (e) {} finally {}
  closediag();creatAnaly();
}
function setEDITED(id) {
  if (cryppassKey != passKey) {
    return;
  }
  let month = {"Jan":1, "Feb":2, "Mar":3, "Apr":4,"May":5,"Jun":6,"Jul":7,"Aug":9,"Sep":9,"Oct":10,"Nov":11,"Dec":12};
  ids = id.replace("%", "'");ids = ids.replace("#", "\"");
  let dd = document.getElementById('DD').value;
  let mm = document.getElementById('MM').value;
  let yy = document.getElementById('YYYY').value;
  let exp = document.getElementById('exp').value;
  let fulldate = dd+"/"+month[mm]+"/"+yy;
  let log = id+":"+fulldate+":"+exp;
  dataElement += log + "@";
  try {
    window.localStorage.setItem("dataElement", dataElement);
  } catch (e) {} finally {}
  document.getElementById('logview').style = "";
  dec[id] = [fulldate, exp];
  document.getElementById(id).removeAttribute("class");
  document.getElementById(id).removeAttribute("onclick");
  document.getElementById(id).setAttribute("class", "eleypro");
  document.getElementById(id).setAttribute("onclick", "viewer(this.id)");
  if (exp == "SONIC") {
    document.getElementById(id).setAttribute("style", "background:rgb(20,120,255);");
  }
  else if (exp == "CORE SAMPLE") {
    document.getElementById(id).setAttribute("style", "background:coral;");
  }
  else if (exp == "RISK") {
    document.getElementById(id).setAttribute("style", "background:rgb(255,20,20);");
  }
  else if (exp == "ATRISK") {
    document.getElementById(id).setAttribute("style", "background:rgb(255,100,65);");
  }
  let keys = Object.keys(dec);let long_keys = "";
  keys.forEach((key, i) => {
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
  });
  try {
    window.localStorage.setItem("dec", long_keys);
    window.localStorage.setItem("saved", true);
    let last_update_ms = new Date().getTime();
    window.localStorage.setItem("lastUpdate", last_update_ms);
  } catch (e) {} finally {}
  closediag();creatAnaly();
}
