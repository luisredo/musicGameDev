export class filterView {
  createSelect(arrayOptions) {
    var select = document.createElement("select");
    select.setAttribute("class","form-control select-input placeholder-active active");
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
    button.setAttribute("class","form-control select-input placeholder-active active");
    button.setAttribute("id","btnAccept");
    var text = document.createTextNode("Aceptar");
    button.append(text);
    return button;
  }
}
