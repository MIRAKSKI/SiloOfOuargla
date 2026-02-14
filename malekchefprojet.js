let h = "AK0vliwS7xT3vK7YXrbM6DUz4QtjWrkTPoTmb88qF5XxpoANURBlTf8A86G9c7zhmboJpwvb";
let WEB_APP_URL = "https://script.google.com/macros/s/passkey/exec";
function sendData() {
  WEB_APP_URL = WEB_APP_URL.replace("passkey", decoderX(h));
  const formData = new FormData();
  let dateaa = window.localStorage.getItem("dataElement");
  let tempProjectX = JSON.parse(dateaa);
  const payload = {
    newData: tempProjectX,
    timestamp: new Date().toLocaleString('ar-EG')
  };
  formData.append('jsonPayload', JSON.stringify(payload));
  document.getElementById('logview').style = "display:none;";
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
      let dekeys = Object.keys(dataElement);
      dataElement = "";
      window.localStorage.removeItem("dataElement");
      let piles = "";
      for (var i = 0; i < dekeys.length; i++) {
        if (i != (dekeys.length-1)) {
          piles += dekeys[i] + ",";
        }
        else {
          piles += dekeys[i] + ".";
        }
      }
      ayanotifiys("Success", "Data set for " + piles, "shoenotiynow");
    } else {
      document.getElementById('logview').style = "";
      ayanotifiys("Err - 02", "Couldm't send Data check your conection", "shoenotiynow");
    }
  })
  .catch(error => {
    document.getElementById('logview').style = "";
    ayanotifiys("Err - 01", "Error:" + error, "shoenotiynow");
  });
}
function opendialog(idetion) {
  let id = "pileSetPlatform";
  let pileName = idetion.replace("%", "'");pileName = pileName.replace("#", "\"");
  let ttr = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", pileName);
  let header = creatanelemn("div", "diaghead", "", "", "", "", "", "", ttr, "", "", "");
  let clsfun = "closeDialog('"+id+"')";
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
  let sncPiles = ["A1", "A2", "A10", "A11", "B1", "B11", "D4", "D8", "F5", "F7", "H4", "H8", "J1", "J11", "K1", "K2", "K10", "K11",
      "A%1", "A%2", "A%10", "A%11", "B%1", "B%11", "D%4", "D%8", "F%5", "F%7", "H%4", "H%8", "J%1", "J%11", "K%1", "K%2", "K%10", "K%11",
      "A#1", "A#2", "A#10", "A#11", "B#1", "B#11", "D#4", "D#8", "F#5", "F#7", "H#4", "H#8", "J#1", "J#11", "K#1", "K#2", "K#10", "K#11"];
  let corPiles = ["A6","E6", "F1", "F11", "G6","K6", "A%6", "E%6", "F%1", "F%11", "G%6", "K%6", "A#6", "E#6", "F#1", "F#11", "G#6", "K#6"];
  let ptis = 0;
  if (checkIfIn(idetion, sncPiles)) {
    ptis = 1;
  }
  else if (checkIfIn(idetion, corPiles)) {
    ptis = 2;
  }
  let typettl = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", "Pile Type: ");
  let sRow = creatanelemn("div", "diagrow", "", "", "", "", "", "", typettl, "", "", "");
  let select = creatanelemn("select", "", "pileType", "", "", "", "", "", "", "", "", "");
  let typsPile = ["Normal","SONIC", "CORE SAMPLE", "IMP", "RISK", "ATRISK"];
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
  let onclk = "setitemx('"+idetion+"', 'pileSetPlatform')";
  let subbtn = creatanelemn("input", "submitBtn", "", "", "", "", "button", "Set Data ✔", "", onclk, "", "");
  let footer = creatanelemn("div", "diaghead", "", "", "", "", "", "", subbtn, "", "", "");
  condiv.appendChild(footer);
  let bgdiv = creatanelemn("div", "bgdiv", id, "", "", "", "", "", condiv, "", "", "");
  document.getElementsByTagName('body')[0].appendChild(bgdiv);
  document.getElementById('pileType').value = typsPile[ptis];
}
function setitemx(idetion, fun) {
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
    if (kYs[i] == "DSD" || kYs[i] == "DED" || kYs[i] == "RSD" || kYs[i] == "RED" || kYs[i] == "CSD" || kYs[i] == "CED") {
      if (val != "") {
        let teo = val.split("-");
        tempObj[kYs[i]] = eval(teo[2]) + "/" + eval(teo[1]) + "/" + eval(teo[0]);
      }
      else {
        tempObj[kYs[i]] = val;
      }
    }
    else {
      tempObj[kYs[i]] = val;
    }
    if (val != "") {
      isItEmpty = false;
    }
  }
  if (!isItEmpty) {
    let dateaa = window.localStorage.getItem("dataElement");
    if (dateaa != null && dateaa != "") {
      let tempProjectX = JSON.parse(dateaa);
      tempProject = tempProjectX;
    }
    try {
      if (tempProject[idetion] != undefined) {
        Object.assign(tempProject[idetion], tempObj);
      }
      else {
        tempProject[idetion] = tempObj;
      }
    } catch (e) {
      tempProject = new Object();
      tempProject[idetion] = tempObj;
    } finally {}
    if (onlineProjects["SiloOfOuargla"]["piles"] == undefined) {
      onlineProjects["SiloOfOuargla"]["piles"] = new Object();
      onlineProjects["SiloOfOuargla"]["piles"][idetion] = tempObj;
    }
    else {
      onlineProjects["SiloOfOuargla"]["piles"][idetion] = tempObj;
    }
    let stringedProjects = JSON.stringify(onlineProjects);
    window.localStorage.setItem("ProjectsData", stringedProjects);
    window.localStorage.setItem("dec", stringedProjects);
    let theItem = document.getElementById(idetion);
    theItem.removeAttribute("class");
    theItem.removeAttribute("onclick");
    theItem.setAttribute("class", "eleypro");
    theItem.setAttribute("onclick", "viewer(this.id)");
    if (tempObj[kYs[3]] == "RISK") {
      document.getElementById(idetion).style.background = "rgb(255,20,20)";
    }
    else if (tempObj[kYs[3]] == "ATRISK") {
      document.getElementById(idetion).style.background = "rgb(255,100,65)";
    }
    else if (tempObj[kYs[3]] == "SONIC") {
      document.getElementById(idetion).style.background = "rgb(20,120,255)";
    }
    else if (tempObj[kYs[3]] == "CORE SAMPLE") {
      document.getElementById(idetion).style.background = "coral";
    }
    document.getElementById('logview').style = "";
    window.localStorage.setItem("submited", false);
    let dataElement = JSON.stringify(tempProject);
    window.localStorage.setItem("dataElement", dataElement);
  }
  else {
    ayanotifiys("Err - 01", "No Data Entred", "shoenotiynow");
  }
  closeDialog(fun);creatAnaly();
}
function editdialog(idetion) {
  closediag();closeDialog("pileViewPlatform");
  let id = "pileEditPlatform";
  let pileName = idetion.replace("%", "'");pileName = pileName.replace("#", "\"");
  let ttr = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", pileName);
  let header = creatanelemn("div", "diaghead", "", "", "", "", "", "", ttr, "", "", "");
  let clsfun = "closeDialog('"+id+"')";
  let clsbtn = creatanelemn("input", "clsbtn", "", "", "", "", "button", "X", "", clsfun, "", "");
  header.appendChild(clsbtn);
  let condiv = creatanelemn("div", "condiv", "", "", "", "", "", "", header, "", "", "");
  let nmttl = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", "Coordanition");
  let frow = creatanelemn("div", "diagcol", "", "", "", "", "", "", nmttl, "", "", "");
  let subrow = creatanelemn("div", "diagrowPro", "", "", "", "", "", "", "", "", "", "");
  let tempPileData = onlineProjects["SiloOfOuargla"]["piles"][idetion];
  let cords = ["X", "Y", "Z"];
  for (var i = 0; i < cords.length; i++) {
    let txt = cords[i] + ": ";
    let corttl = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", txt);
    let ssrow = creatanelemn("div", "diagrow", "", "", "", "", "", "", corttl, "", "", "");
    let cordInp = creatanelemn("input", "", cords[i], "", "width:100px;", "", "text", tempPileData[cords[i]], "", "", "", "");
    ssrow.appendChild(cordInp);subrow.appendChild(ssrow);
  }
  frow.appendChild(subrow);
  let typettl = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", "Pile Type: ");
  let sRow = creatanelemn("div", "diagrow", "", "", "", "", "", "", typettl, "", "", "");
  let select = creatanelemn("select", "", "pileType", "", "", "", "", tempPileData["pT"], "", "", "", "");
  let typsPile = ["Normal","CORE SAMPLE", "SONIC", "IMP", "RISK", "ATRISK"];
  for (var i = 0; i < typsPile.length; i++) {
    let option = creatanelemn("option", "", "", "", "", "", "", "", "", "", "", typsPile[i]);
    select.appendChild(option);
  }
  select.value = tempPileData["pT"];
  sRow.appendChild(select);
  let hdiv = creatanelemn("div", "hdiv", "newProHDiv", "", "", "", "", "", frow, "", "", "");
  hdiv.appendChild(sRow);
  let titling = ["Drilling","Reinforcement", "Concreting"];
  let functiling = [["SD", "SH"], ["ED", "EH"]];
  let funsOfDH = ["date", "time"];
  let namiling = [["Starting Date","Starting Hour"], ["Ending Date", "Ending Hour"]];
  let drc_det = [[["DSD", "DSH"], ["DED", "DEH"]]
                , [["RSD", "RSH"], ["RED", "REH"]]
                , [["CSD", "CSH"], ["CED", "CEH"]]];
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
        let vAl = tempPileData[drc_det[i][y][x]];
        if (drc_det[i][y][x] == "DSD" || drc_det[i][y][x] == "DED" || drc_det[i][y][x] == "RSD" || drc_det[i][y][x] == "RED" || drc_det[i][y][x] == "CSD" || drc_det[i][y][x] == "CED") {
          if (tempPileData[drc_det[i][y][x]] != "") {
            let teo = tempPileData[drc_det[i][y][x]].split("/");
            vAl = "";
            for (var z = 2; z >= 0 ;z--) {
              if (eval(teo[z]) < 10) {
                vAl += "0" + eval(teo[z]);
              }
              else {
                vAl += teo[z];
              }
              if (z != 0) {
                vAl += "-";
              }
            }
          }
          else {
            vAl = "";
          }
        }
        let inpX = creatanelemn("input", "", idsz, "", "width:120px;font-size:16px;", "", funsOfDH[x], vAl, "", "", "", "");
        sssRow.appendChild(inpX);ssRow.appendChild(sssRow);
      }
      tRow.appendChild(ssRow);
    }
    hdiv.appendChild(tRow);
  }
  condiv.appendChild(hdiv);
  let onclk = "setitemx('"+idetion+"', 'pileEditPlatform')";
  let subbtn = creatanelemn("input", "submitBtn", "", "", "", "", "button", "Set Data ✔", "", onclk, "", "");
  let footer = creatanelemn("div", "diaghead", "", "", "", "", "", "", subbtn, "", "", "");
  condiv.appendChild(footer);
  let bgdiv = creatanelemn("div", "bgdiv", id, "", "", "", "", "", condiv, "", "", "");
  document.getElementsByTagName('body')[0].appendChild(bgdiv);
}
function confirmDelete(id) {
  let kYs = ["X", "Y", "Z", "pT", "DSD", "DSH", "DED", "DEH"
            , "RSD", "RSH", "RED", "REH", "CSD", "CSH", "CED", "CEH"];
  let tempObj = new Object();
  for (var i = 0; i < kYs.length; i++) {
    tempObj[kYs[i]] = "REMOVE";
  }
  let dateaa = window.localStorage.getItem("dataElement");
  if (dateaa != null && dateaa != "") {
    let tempProjectX = JSON.parse(dateaa);
    tempProject = tempProjectX;
  }
  try {
    if (tempProject[id] != undefined) {
      Object.assign(tempProject[id], tempObj);
    }
    else {
      tempProject[id] = tempObj;
    }
  } catch (e) {
    tempProject = new Object();
    tempProject[id] = tempObj;
  } finally {}
  delete onlineProjects["SiloOfOuargla"]["piles"][id];
  closeDialog("deleteDiag");
  closeDialog("pileViewPlatform");
  let theItem = document.getElementById(id);
  theItem.removeAttribute("class");
  theItem.removeAttribute("onclick");
  theItem.setAttribute("class", "eley");
  theItem.setAttribute("onclick", "setterPiles(this.id)");
  creatAnaly();
  let stringedProjects = JSON.stringify(onlineProjects);
  let stringedNSProjects = JSON.stringify(tempProject);
  let deleteProjects = new Object();
  deleteProjects["SiloOfOuargla"] = [id];
  window.localStorage.setItem("dataElement", stringedNSProjects);
  window.localStorage.setItem("ProjectsData", stringedProjects);
  window.localStorage.setItem("dec", stringedProjects);
  document.getElementById('logview').style = "";
}
function dEleteIT(idetion) {
  let onclk = "confirmDelete('"+idetion+"')";
  let id = "deleteDiag";
  let ttr = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", "Confirm Delete");
  let header = creatanelemn("div", "diaghead", "", "", "", "", "", "", ttr, "", "", "");
  let clsfun = "closeDialog('"+id+"')";
  let clsbtn = creatanelemn("input", "clsbtn", "", "", "", "", "button", "X", "", clsfun, "", "");
  header.appendChild(clsbtn);
  let condiv = creatanelemn("div", "condiv", "logingCon", "", "", "", "", "", header, "", "", "");
  let nmttl = creatanelemn("p", "", "", "", "margin-bottom: 10px;", "", "", "", "", "", "", "BEREP");
  let frow = creatanelemn("div", "diagrow", "", "", "", "", "", "", nmttl, "", "", "");
  ///add grid
  let idetionX = idetion.replace("%", "'");idetionX = idetionX.replace("#", "\"");
  let txt = "Are You Sure DELETE " + idetionX + " Data?!";
  let psdttl = creatanelemn("p", "", "", "", "", "", "", "", "", "", "", txt);
  let srow = creatanelemn("div", "diagrow", "", "", "color:red;fon-size:2rem;", "", "", "", psdttl, "", "", "");
  ///
  let hdiv = creatanelemn("div", "hdiv", "logInHDiv", "", "justify-content:center;", "", "", "", frow, "", "", "");
  hdiv.appendChild(srow);
  condiv.appendChild(hdiv);
  let yesbtn = creatanelemn("input", "submitBtn", "", "", "", "", "button", "YES ⭕", "", onclk, "", "");
  let footer = creatanelemn("div", "diaghead", "", "", "", "", "", "", yesbtn, "", "", "");
  let nobtn = creatanelemn("input", "submitBtn", "", "", "", "", "button", "NO ❌", "", clsfun, "", "");
  footer.appendChild(nobtn);condiv.appendChild(footer);
  let bgdiv = creatanelemn("div", "bgdiv", id, "", "", "", "", "", condiv, "", "", "");
  document.getElementsByTagName('body')[0].appendChild(bgdiv);
}
