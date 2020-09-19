/*
 *   Funcion Pintar en...
 *   Parametros de entrada :
 *   textList se carga el contenedor del texto completo.
 *   idFrame carga el id del contedor html determinado para mostrar dicha información
 *   en el html.
 *   textList "Object list",idFrame "String"
 */

function PrintOn(textList, idFrame, solution) {
  for (let i = 0; i < textList.split.length; i++) {
    if (textList.split[i].tags != "") {
      addSpaceToText(textList, idFrame);
    } else {
      addSpaceToTextWTag(word, idFrame, tags, i, solution);
    }
  }
}
/*
 *   Añade espacio o salto de linea.
 *   word "String", idFrame "String"
 */
function addSpaceToText(word, idFrame) {
  switch (word) {
    case "\\n":
      document.getElementById(idFrame).innerHTML += `<br>`;
      break;
    case ".":
      document.getElementById(idFrame).innerHTML +=
        `<span>` + word.split[i].text + `</span>`;
      break;
    case ",":
      document.getElementById(idFrame).innerHTML +=
        `<span>` + word.split[i].text + `</span>`;
      break;
    default:
      document.getElementById(idFrame).innerHTML +=
        `<span>` + word.split[i].text + ` </span>`;
      break;
  }
}
/*
 *   filtra por tag y muestra texto o hueco sin resolver
 *   word "string",idFrame "numerico",tag "string",index "numerico",solution "boolean"
 */
function addSpaceToTextWTag(word, idFrame, tag, index, solution) {
  if (tag == "") {
    addSpaceToText(word, idFrame);
  } else {
    if (solution) {
      document.getElementById(idFrame).innerHTML +=
        `<span><input type="text" id="p` +
        index +
        `" value="word.split[i].text" \>` +
        word.split[i].text +
        ` </span>`;
    } else {
      document.getElementById(idFrame).innerHTML +=
        `<span><input type="text" id="p` +
        index +
        `" value="" \>` +
        word.split[i].text +
        ` </span>`;
    }
  }
}
