function creatanelemn(kng, clss, id, name, style, title, type, value, elem, onclick, disabled, innertext) {
  const kingbck = document.createElement(kng)
  if (clss != "") {
    kingbck.setAttribute('class', clss);
  }
  if (id != "") {
    kingbck.setAttribute('id', id);
  }
  if (name != "") {
    kingbck.setAttribute('name', name);
  }
  if (style != "") {
    kingbck.setAttribute('style', style);
  }
  if (title != "") {
    kingbck.setAttribute('title', title);
  }
  if (type != "") {
    kingbck.setAttribute('type', type);
  }
  if (value != "") {
    kingbck.setAttribute('value', value);
  }
  if (onclick != "") {
    kingbck.setAttribute('onclick', onclick);
  }
  if (disabled != "") {
    kingbck.setAttribute('disabled', disabled);
  }
  if (innertext != "") {
    kingbck.innerText = innertext;
  }
  if (elem != "") {
    kingbck.appendChild(elem);
  }
  return kingbck
}
