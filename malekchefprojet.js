let h = "AK0vliwS7xT3vK7YXrbM6DUz4QtjWrkTPoTmb88qF5XxpoANURBlTf8A86G9c7zhmboJpwvb";
let WEB_APP_URL = "https://script.google.com/macros/s/passkey/exec";
function sendData() {
  const formData = new FormData();
  const payload = {
    newData: dataElement,
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
      //`${JSON.stringify(result.content, null, 2)}`;
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
function opendialog(id) {
  let holder = document.createElement('div');
  holder.setAttribute("class", "hdiag");
  for (var i = 0; i < 4; i++) {
    let hl = document.createElement('div');
    hl.setAttribute("class", "hhldiag");
    if (i == 0) {
      let ttl = document.createElement('p');
      let ids = id.replace("%", "'");ids = ids.replace("#", "\"");
      ttl.innerText = ids;
      let cls = document.createElement('input');
      cls.setAttribute("onclick", "closediag()");cls.setAttribute("type", "button");
      cls.setAttribute("class", "clsbtn");cls.setAttribute("value", "X");
      hl.appendChild(ttl);hl.appendChild(cls);
      let br = document.createElement('br');
      hl.appendChild(br);
    }
    else if (i == 1) {
      let ttl = document.createElement('p');
      ttl.innerText = "Date:";
      hl.appendChild(ttl);
      let slct = document.createElement("select");
      slct.setAttribute("id", "DD");slct.setAttribute("class", "selector");
      for (var d = 0; d < 31; d++) {
        let innr = d;
        let pp = document.createElement("option");
        pp.innerText = (d+1);
        slct.appendChild(pp);
      }
      hl.appendChild(slct);
      let month = ["Jan", "Feb", "Mar", "Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      let slctt = document.createElement("select");
      slctt.setAttribute("id", "MM");slctt.setAttribute("class", "selector");
      for (var d = 0; d < 12; d++) {
        let innr = d;
        let pp = document.createElement("option");
        pp.innerText = month[d];
        slctt.appendChild(pp);
      }
      hl.appendChild(slctt);
      let year = ["2025", "2026"];
      let slcttt = document.createElement("select");
      slcttt.setAttribute("id", "YYYY");slcttt.setAttribute("class", "selector");
      for (var d = 0; d < 2; d++) {
        let innr = d;
        let pp = document.createElement("option");
        pp.innerText = year[d];
        slcttt.appendChild(pp);
      }
      hl.appendChild(slcttt);
    }
    else if (i == 2) {
      let ttl = document.createElement('p');
      ttl.innerText = "Expe:";
      hl.appendChild(ttl);
      let exp = ["Nul", "SONIC", "CORE SAMPLE"];
      let slcttt = document.createElement("select");
      slcttt.setAttribute("id", "exp");slcttt.setAttribute("class", "selector");
      for (var d = 0; d < 3; d++) {
        let innr = d;
        let pp = document.createElement("option");
        pp.innerText = exp[d];
        slcttt.appendChild(pp);
      }
      hl.appendChild(slcttt);
    }
    else {
      let btn = document.createElement('input');
      id = id.replace("'", "%");id = id.replace("\"", "#");
      btn.setAttribute("onclick", "setitemx('"+id+"')");btn.setAttribute("type", "button");
      btn.setAttribute("class", "seteditbtn");btn.setAttribute("value", "SET!");
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
function setitemx(id) {
  if (cryppassKey != passKey) {
    return;
  }
  let dd = document.getElementById('DD').value;
  let mm = document.getElementById('MM').value;
  let yy = document.getElementById('YYYY').value;
  let exp = document.getElementById('exp').value;
  let month = {"Jan":1, "Feb":2, "Mar":3, "Apr":4,"May":5,"Jun":6,"Jul":7,"Aug":9,"Sep":9,"Oct":10,"Nov":11,"Dec":12};
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
  closediag();
}
function editdialog(id) {
  closediag();
  ids = id.replace("%", "'");ids = ids.replace("#", "\"");
  let fulldatede = dec[id][0];
  fulldatede = fulldatede.split("/");
  let dd = fulldatede[0];
  let mm = fulldatede[1];
  let yyyy = fulldatede[2];
  let exprt = dec[id][1];
  let month = {1:"Jan", 2:"Feb", 3:"Mar", 4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"};
  let holder = document.createElement('div');
  holder.setAttribute("class", "hdiag");
  for (var i = 0; i < 4; i++) {
    let hl = document.createElement('div');
    hl.setAttribute("class", "hhldiag");
    if (i == 0) {
      let ttl = document.createElement('p');
      ttl.innerText = ids;
      let cls = document.createElement('input');
      cls.setAttribute("onclick", "closediag()");cls.setAttribute("type", "button");
      cls.setAttribute("class", "clsbtn");cls.setAttribute("value", "X");
      hl.appendChild(ttl);hl.appendChild(cls);
      let br = document.createElement('br');
      hl.appendChild(br);
    }
    else if (i == 1) {
      let ttl = document.createElement('p');
      ttl.innerText = "Date:";
      hl.appendChild(ttl);
      let slct = document.createElement("select");
      slct.setAttribute("id", "DD");slct.setAttribute("class", "selector");
      for (var d = 0; d < 31; d++) {
        let innr = d;
        let pp = document.createElement("option");
        pp.innerText = (d+1);
        slct.appendChild(pp);
      }
      slct.value = dd;
      hl.appendChild(slct);
      let month = ["Jan", "Feb", "Mar", "Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      let slctt = document.createElement("select");
      slctt.setAttribute("id", "MM");slctt.setAttribute("class", "selector");
      for (var d = 0; d < 12; d++) {
        let innr = d;
        let pp = document.createElement("option");
        pp.innerText = month[d];
        slctt.appendChild(pp);
      }
      slctt.value = month[mm];
      hl.appendChild(slctt);
      let year = ["2025", "2026"];
      let slcttt = document.createElement("select");
      slcttt.setAttribute("id", "YYYY");slcttt.setAttribute("class", "selector");
      for (var d = 0; d < 2; d++) {
        let innr = d;
        let pp = document.createElement("option");
        pp.innerText = year[d];
        slcttt.appendChild(pp);
      }
      slcttt.value = yyyy;
      hl.appendChild(slcttt);
    }
    else if (i == 2) {
      let ttl = document.createElement('p');
      ttl.innerText = "Expe:";
      hl.appendChild(ttl);
      let exp = ["Nul", "SONIC", "CORE SAMPLE"];
      let slcttt = document.createElement("select");
      slcttt.setAttribute("id", "exp");slcttt.setAttribute("class", "selector");
      for (var d = 0; d < 3; d++) {
        let innr = d;
        let pp = document.createElement("option");
        pp.innerText = exp[d];
        slcttt.appendChild(pp);
      }
      slcttt.value = exprt;
      hl.appendChild(slcttt);
    }
    else {
      let btn = document.createElement('input');
      id = id.replace("'", "%");id = id.replace("\"", "#");
      btn.setAttribute("onclick", "setEDITED('"+id+"')");btn.setAttribute("type", "button");
      btn.setAttribute("class", "seteditbtn");btn.setAttribute("value", "CONFORM!");
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
function setEDITED(id) {
  if (cryppassKey != passKey) {
    return;
  }
  ids = id.replace("%", "'");ids = ids.replace("#", "\"");
  let dd = document.getElementById('DD').value;
  let mm = document.getElementById('MM').value;
  let yy = document.getElementById('YYYY').value;
  let exp = document.getElementById('exp').value;
  let fulldate = dd+"/"+mm+"/"+yy;
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
  closediag();
}
function setUrls() {
  WEB_APP_URL = WEB_APP_URL.replace("passkey", decoderX(h));
  window.localStorage.setItem("WEB_APP_URL", WEB_APP_URL);
  try {
    clearInterval(int_X);
  } catch (e) {} finally {}
}

