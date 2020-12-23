
import { MusicGameView } from "./MusicGameView.js";
import { AllContent } from "./ContentSelector.js";
import { AllContentRepository } from "./AllContentRepository.js";


export class MusicGame {
    constructor(){
        this.getContent();
        }
    async getContent(){
            var fullContent = await new AllContentRepository().get();
            var allContent = new AllContent(fullContent);
            var arrayOptions = allContent.tagsToArrayElements("A1","it","music");
            var splitIndexSelection = allContent.selectRandomElementFromArray(arrayOptions);
            var urlMediaPlayer = allContent.getMediaPlayer(splitIndexSelection);
            var texto = allContent.getContentText(splitIndexSelection);
            var view = new MusicGameView();
            var iframeUI = view.iframeYoutube(urlMediaPlayer);
            var textElementsUI = view.showText(texto);
            view.printHTML(iframeUI);
            view.printHTML(textElementsUI);
        }

}
