import { SearchValues } from "../../Shared/Application/SearchValues.js";
import { textObjects } from "../../Shared/Application/TextObjects.js";
import { FilterContentWithTagsUseCase } from "./FilterContentsWithTagsUseCase.js";
import { selectRandomElementFromArray } from "./selectRandomElementFromArray.js";

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
    var splitIndexSelection = selectRandomElementFromArray(
      filteredArrayObjects
    );
    return splitIndexSelection;
  }

  getContentTextUseCase(content, mustHaveTags) {
    var objectArrayElements = content.split;
    return this.getArrayTextObject(objectArrayElements, mustHaveTags);
  }

  getArrayTextObject(objectArrayElements, mustHaveTags) {
    var tagsContainer = new textObjects();
    objectArrayElements.forEach((element) => {
      var textObj = new Object();
      textObj.text = element.text;
      textObj.tag = mustHaveTags.includes(element.tags) ? true : false;
      tagsContainer.addObjectToTagArray(textObj);
    });
    return tagsContainer.getObjectTagArray();
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
