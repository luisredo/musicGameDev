import { MusicGameView } from "./MusicGameView.js";
import { AllContent } from "./ContentSelector.js";
import { AllContentRepository } from "./AllContentRepository.js";
import { utils } from "../Application/utils.js";
import { filterView } from "./filterView.js";
import { MusicGameListener } from "./MusicGameListerner.js";


export class MusicGameController {
    #fullContent = null;
    constructor(){
        this.#setFullContent();
        }
    async #setFullContent(){
        this.#fullContent = await new AllContentRepository().get();
        this.getRandomContent();
    }
    async getRandomContent(){
        var fullContent = this.#fullContent;

        var tags = new utils().getArrayTags(fullContent);
        var langs = new utils().getArrayLang(fullContent);
        var view = new MusicGameView();
        var selectOfLevels = new filterView().createSelect(tags);
        var selectOfLanguages = new filterView().createSelect(langs);
        var buttonAccept = new filterView().createButton();
        view.printHTML(selectOfLevels);
        view.printHTML(selectOfLanguages);
        view.printHTML(buttonAccept);
        var mustHaveTags = new MusicGameListener().btnListen();
        this.musicGameContentAndParamsToPage(mustHaveTags);
        
    }

    musicGameContentAndParamsToPage(mustHaveTags){
        var content = new AllContent(this.#fullContent); 
        var allContent = content.getContent(mustHaveTags);

        var urlMediaPlayer = content.getMediaPlayer(allContent);
        var textObject = content.getContentText(allContent);

        var view = new MusicGameView();
        var iframeUI = view.iframeYoutube(urlMediaPlayer);
        var textElementsUI = view.showText(textObject);
        view.printHTML(iframeUI);
        view.printHTML(textElementsUI);
    }

}
