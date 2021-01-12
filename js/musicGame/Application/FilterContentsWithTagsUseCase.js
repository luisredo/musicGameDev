import {hasTags} from "./hasTags.js";
export class FilterContentWithTagsUseCase{
    #contents = null;
    constructor(contents){
        this.#contents = contents;
    }
    execute(mustHaveTags){
        var filteredContent = [];
        var contentCount = this.#contents.length;
        for(var p = 0; p < contentCount; p++){
            var allTags = this.#contents[p].tags[0].tags;
            if (hasTags(allTags,mustHaveTags)){
                filteredContent.push(this.#contents[p]);
            }
        }
        return filteredContent;
    }   
}
