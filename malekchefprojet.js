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
  let onclk = "setitemx('"+idetion+"')";
  let subbtn = creatanelemn("input", "submitBtn", "", "", "", "", "button", "Set Data", "", onclk, "", "");
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
    if (kYs[i] == "DSD" || kYs[i] == "DED" || kYs[i] == "RSD" || kYs[i] == "RED" || kYs[i] == "CSD" || kYs[i] == "CED") {
      let teo = val.split("-");
      tempObj[kYs[i]] = teo[2] + "/" + teo[1] + "/" + teo[0];
    }
    else {
      tempObj[kYs[i]] = val;
    }
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
          let teo = tempPileData[drc_det[i][y][x]].split("/");
          vAl = teo[2] + "-" + teo[1] + "-" + teo[0];
        }
        let inpX = creatanelemn("input", "", idsz, "", "width:120px;font-size:16px;", "", funsOfDH[x], vAl, "", "", "", "");
        sssRow.appendChild(inpX);ssRow.appendChild(sssRow);
      }
      tRow.appendChild(ssRow);
    }
    hdiv.appendChild(tRow);
  }
  condiv.appendChild(hdiv);
  let onclk = "setitemx('"+idetion+"')";
  let subbtn = creatanelemn("input", "submitBtn", "", "", "", "", "button", "Set Data", "", onclk, "", "");
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
  delete onlineProjects["SiloOfOuargla"]["piles"][id];
  try {
    delete tempProject["SiloOfOuargla"]["piles"][id];
  } catch (e) {} finally {}
  closeDialog("deleteDiag");
  closeDialog("pileViewPlatform");
  let theItem = document.getElementById(id);
  theItem.removeAttribute("class");
  theItem.removeAttribute("onclick");
  theItem.setAttribute("class", "eley");
  theItem.setAttribute("onclick", "setterPiles(this.id)");
  projectAnalyzer();
  let stringedProjects = JSON.stringify(onlineProjects);
  window.localStorage.setItem("ProjectsData", stringedProjects);
  let stringedNSProjects = JSON.stringify(tempProject);
  window.localStorage.setItem("ProjectsNotSavedData", stringedNSProjects);
  let h = "FyMDAfhUTTHZgQYUPJECSv3R3eiQMNFUgF2NqCWzIiD4TGSyrlBh8_Dkx3MyXRmO7E2atvh2";
  let WEB_APP_URL = "https://script.google.com/macros/s/passkey/exec";
  WEB_APP_URL = WEB_APP_URL.replace("passkey", decoderX(pasValInp, h));
  let deleteProjects = new Object();
  deleteProjects["SiloOfOuargla"] = [id];
  const formData = new FormData();
  formData.append('jsonPayload', JSON.stringify(deleteProjects));
  fetch(WEB_APP_URL, {
    method: 'POST',
    mode: 'cors',
    body: formData
  })
  .then(response => response.json())
  .then(result => {
    if (result.status === 'success') {
      ayanotifiys("Success", "Pile Data Deleted successfully", "shoenotiynow");
    }
    else {
      ayanotifiys("ERR - 10", result.message, "shoenotiynow");
    }
  })
  .catch(error => {
    ayanotifiys("ERR - 11", error, "shoenotiynow");
  });
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
  let yesbtn = creatanelemn("input", "submitBtn", "", "", "", "", "button", "YES", "", onclk, "", "");
  let footer = creatanelemn("div", "diaghead", "", "", "", "", "", "", yesbtn, "", "", "");
  let nobtn = creatanelemn("input", "submitBtn", "", "", "", "", "button", "NO", "", clsfun, "", "");
  footer.appendChild(nobtn);condiv.appendChild(footer);
  let bgdiv = creatanelemn("div", "bgdiv", id, "", "", "", "", "", condiv, "", "", "");
  document.getElementsByTagName('body')[0].appendChild(bgdiv);
}
