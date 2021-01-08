import { SearchValues } from "../../Shared/Application/SearchValues.js";
export class MusicGameApplication{
    #contents = null;
    constructor(contents) {
        this.#contents = contents;
    }

    filter(mustHaveTags){
        var filteredArrayObjects = this.filteredOutToArrayObjects(mustHaveTags);
        var splitIndexSelection = this.selectRandomElementFromArray (filteredArrayObjects);
        return splitIndexSelection;
    }

    getContentText(contents){
        var textArray = [];
        var json = contents;
        var route = ["split"];
        var textElements = new SearchValues(json,route);
        textElements.forEach(element => {
            textArray.push(element.text);
        });
        return textArray;
    }

    filteredOutToArrayObjects(mustHaveTags){
        var numElements = [];
        var contentCount = this.#contents.length;
        for(var p = 0; p < contentCount; p++){
            var allTags = this.#contents[p].tags[0].tags;
            if (this.hasTags(allTags,mustHaveTags)){
               numElements.push(this.#contents[p]);
            }
        }
        return numElements;
    }
   
    tagsToArrayElements(...mustHaveTags){
        var numElements = [];
        var contentCount = this.#contents.length;
        for(var p = 0; p < contentCount; p++){
            var allTags = this.#contents[p].tags[0].tags;
            if (this.hasTags(allTags,mustHaveTags)){
               numElements.push(p);
            }
        }
        return numElements;
    }

    hasTags(allTags,mustHaveTags){
        var mustHaveTagsCount = mustHaveTags.length;
        for (let i = 0; i < mustHaveTagsCount; i++) {
            if(!allTags.includes(mustHaveTags[i])) return false;
        }
        return true;
    }
      
    selectRandomElementFromArray(array){
        var elementsCount = array.length;
        var randomKey = Math.floor(Math.random() * elementsCount);
        var randomElement = array[randomKey];
        return randomElement;
    }

    getText(index){
        var texto = [];
        for (let i = 0; i < index.length; i++) {
            texto += index.split[i].text;
        }
        return texto;
    }
    getMediaPlayer(object){
        var url = object.video[0].url;
        return url;
    }

    getTitle(){
        return new SearchValues(object,["title"]);
    }
}