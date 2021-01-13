import { MusicGameView } from "./MusicGameView.js";
import { MusicGameApplication } from "../Application/MusicGameApplication.js";
import { ContentsRepository } from "../../Shared/Infrastructure/ContentsRepository.js";
import { utils } from "../Application/utils.js";
import { filterView } from "./filterView.js";

export class MusicGameController {
  #contents = null;
  constructor() {
    this.showMenuPage();
  }

  async showMenuPage() {
    
    this.#contents = await new ContentsRepository().get();
    var contents = this.#contents;

    var tags = new utils().getArrayTags(contents);
    var langs = new utils().getArrayLang(contents);
    var view = new MusicGameView();
    var selectOfLevels = new filterView().createSelect(tags);
    var selectOfLanguages = new filterView().createSelect(langs);
    var buttonAccept = new filterView().createButton();
    view.printHTML(selectOfLevels);
    view.printHTML(selectOfLanguages);
    view.printHTML(buttonAccept);
    this.listenMenu();
  }
  listenMenu(){
    document.getElementById("btnAccept").addEventListener("click",this.onClickLoadMusicGame.bind(this));
  }
  onClickLoadMusicGame() {
    var selects = document.querySelectorAll("select");
    var mustHaveTags = ["music"];
    selects.forEach(function (select) {
      mustHaveTags.push(select.value);
    });
    this.musicGameContentAndParamsToPage(mustHaveTags);
  }

  musicGameContentAndParamsToPage(mustHaveTags) {
    var allContent = new MusicGameApplication(this.#contents);
    var content = allContent.filter(mustHaveTags);
    
    var urlMediaPlayer = allContent.getMediaPlayer(content);
    var ArrayObject = allContent.getContentTextUseCase(content,mustHaveTags);
    
    var view = new MusicGameView();
    var iframeUI = view.iframeYoutube(urlMediaPlayer);
    var textElementsUI = view.showText(ArrayObject);
    view.printHTML(iframeUI);
    view.printHTML(textElementsUI);
  }
}
