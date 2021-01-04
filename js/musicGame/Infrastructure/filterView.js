export class filterView {
  createSelect(arrayOptions) {
    var select = document.createElement("select");
    arrayOptions.forEach((element) => {
      var option = document.createElement("option");
      var text = document.createTextNode(element);
      option.append(text);
      select.append(option);
    });
    return select;
  }
  createButton() {
    var button = document.createElement("button");
    button.setAttribute("id","btnAccept");
    var text = document.createTextNode("Aceptar");
    button.append(text);
    return button;
  }
}
