import { SearchValues } from "../../Shared/Application/SearchValues.js";

export class utils {
  getArrayDemo(content) {
    var tagValue = [0, "ftg", 0, "tags"];
    var tag = new SearchValues(content, tagValue);
    console.log(tag);
  }
  getArrayTags(content) {
    var tagsMap = [];
    for (var p = 0; p < content.length; p++) {
      var tagValue = [p, "ftg", 0, "tags"];
      try {
        var tag = new SearchValues(content, tagValue);
        if (content[p].ftg[0].tag != "") {
          for (var n = 0; n < tag.length; n++) {
            tagsMap.push(tag[n]);
          }
        }
      } catch (error) {
        console.log("e");
      }
    }
    var noRepeatTags = this.eliminarElementosRepetidos(tagsMap);
    console.log("tagsmap : " + noRepeatTags);
    return noRepeatTags;
  }

  getArrayLang(content) {
    var langsMap = [];
    for (var p = 0; p < content.length; p++) {
      var langRoute = [p, "ftg", 0, "language"];
      try {
        var lenguaje = new SearchValues(content, langRoute);
        debugger;
        if (lenguaje != "") {
          langsMap.push(content[p].ftg[0].language);
        }
      } catch (error) {
        console.log("e");
      }
    }
    var noRepeatLangs = this.eliminarElementosRepetidos(langsMap);
    noRepeatLangs = this.cleanArray(noRepeatLangs);
    console.log("langsMap: " + noRepeatLangs);
    return noRepeatLangs;
  }

  eliminarElementosRepetidos(a) {
    for (var i = a.length - 1; i >= 0; i--) {
      if (a.indexOf(a[i]) !== i) a.splice(i, 1);
    }
    return a;
  }

  cleanArray(a) {
    var newArray = new Array();
    for (var i = 0, j = a.length; i < j; i++) {
      if (a[i]) {
        newArray.push(a[i]);
      }
    }
    return newArray;
  }
}
