export class AllContent{
    #content = null;
    constructor(content) {
        this.#content = content;
    }

    getFilesIndexFromContent(...mustHaveTags){
        var numElements = [];
        var contentCount = this.#content.length;
        for(var p = 0; p < contentCount; p++){
            var allTags = this.#content[p].tags[0].tags;
            if (this.hasTags(allTags,mustHaveTags)){
                numElements.push(p);
            }
        }
    }



    hasTags(allTags,mustHaveTags){
        var mustHaveTagsCount = mustHaveTags.length;
        for (let i = 0; i < mustHaveTagsCount; i++) {
            if(!allTags.include(mustHaveTags[i])) return false;
        }
        return true;
    }
      
    selectRandomElementFromArray(array){
        var elementsCount = array.length;
        var randomKey = Math.floor(Math.random() * elementsCount);
        var randomElement = array[randomKey];
        return randomElement;
    }
}