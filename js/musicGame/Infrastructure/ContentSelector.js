import { SearchKey } from "./SearchKey.js";
import { SearchValues } from "./SearchValues.js";
export class AllContent{
    #content = null;
    constructor(content) {
        this.#content = content;
    }

    getContentText(index){
        var textArray = [];
        var json = this.#content[index];
        var route = ["split"];
        var textElements = new SearchValues(json,route);
        textElements.forEach(element => {
            textArray.push(element.text);
        });
        return textArray;
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
        for (let i = 0; i < this.#content.length; i++) {
            texto += this.#content[index].split[i].text;
        }
        return texto;
    }
    getMediaPlayer(index){
        return this.#content[index].video[0].url;
    }

    getTitle(index){
        this.#content;
    }
}