import { SearchValues } from "../../Shared/Application/SearchValues.js";
import { textObjects } from "../../Shared/Application/TextObjects.js";
import { FilterContentWithTagsUseCase } from "./FilterContentsWithTagsUseCase.js";
import { hasTags } from "./hasTags.js";
export class MusicGameApplication {
  #contents = null;
  constructor(contents) {
    this.#contents = contents;
  }

  filter(mustHaveTags) {
    var filterContentWithTagsUseCase = new FilterContentWithTagsUseCase(
      this.#contents
    );
    var filteredArrayObjects = filterContentWithTagsUseCase.execute(
      mustHaveTags
    );
    var splitIndexSelection = this.selectRandomElementFromArray(
      filteredArrayObjects
    );
    return splitIndexSelection;
  }

  getContentTextUseCase(content,mustHaveTags){
    var json = content;
    var route = ["split"];
    var objectArrayElements = new SearchValues(json, route);
    return this.getArrayTextObject(objectArrayElements,mustHaveTags);
  }

  getArrayTextObject(objectArrayElements,mustHaveTags){
    var tagsContainer = new textObjects();
    objectArrayElements.forEach((element) => {
      if(mustHaveTags.includes(element.tags)){
        var textObj = new Object();
        textObj.tag = true;
        textObj.text = element.text;
        tagsContainer.addObjectToTagArray(textObj);
      } else {
        var textObj = new Object();
        textObj.tag = false;
        textObj.text = element.text;
        tagsContainer.addObjectToTagArray(textObj);
      }
    });
    return tagsContainer.getObjectTagArray();
  }

  getContentText(contents) {
    var textArray = [];
    var json = contents;
    var route = ["split"];
    var textElements = new SearchValues(json, route);
    textElements.forEach((element) => {
      textArray.push(element.text);
    });
    return textArray;
  }

  tagsToArrayElements(...mustHaveTags) {
    var numElements = [];
    var contentCount = this.#contents.length;
    for (var p = 0; p < contentCount; p++) {
      var allTags = this.#contents[p].tags[0].tags;
      if (hasTags(allTags, mustHaveTags)) {
        numElements.push(p);
      }
    }
    return numElements;
  }

  selectRandomElementFromArray(array) {
    var elementsCount = array.length;
    var randomKey = Math.floor(Math.random() * elementsCount);
    var randomElement = array[randomKey];
    return randomElement;
  }

  getText(index) {
    var texto = [];
    for (let i = 0; i < index.length; i++) {
      texto += index.split[i].text;
    }
    return texto;
  }

  getMediaPlayer(object) {
    var url = object.video[0].url;
    return url;
  }

  getTitle() {
    return new SearchValues(object, ["title"]);
  }
}
