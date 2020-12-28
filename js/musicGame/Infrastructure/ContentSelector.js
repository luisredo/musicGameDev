import { SearchValues } from "./SearchValues.js";
export class AllContent{
    #content = null;
    constructor(content) {
        this.#content = content;
    }

    getContent(...mustHaveTags){
        var filteredArrayObjects = this.filteredOutToArrayObjects(mustHaveTags);
        var splitIndexSelection = this.selectRandomElementFromArray (filteredArrayObjects);
        return splitIndexSelection;
    }

    getContentText(content){
        var textArray = [];
        var json = content;
        var route = ["split"];
        var textElements = new SearchValues(json,route);
        textElements.forEach(element => {
            textArray.push(element.text);
        });
        return textArray;
    }

    filteredOutToArrayObjects(mustHaveTags){
        var numElements = [];
        var contentCount = this.#content.length;
        for(var p = 0; p < contentCount; p++){
            var allTags = this.#content[p].tags[0].tags;
            if (this.hasTags(allTags,mustHaveTags)){
               numElements.push(this.#content[p]);
            }
        }
        return numElements;
    }
   
    tagsToArrayElements(...mustHaveTags){
        var numElements = [];
        var contentCount = this.#content.length;
        for(var p = 0; p < contentCount; p++){
            var allTags = this.#content[p].tags[0].tags;
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