import { FillTheGapsView } from "./FillTheGapsView.js";
import { FillTheGapsApplication } from "../Application/FillTheGapsApplication.js";
import { ContentsRepository } from "../../Shared/Infrastructure/ContentsRepository.js";
import { utils } from "../Application/utils.js";
import { filterView } from "./filterView.js";

export class FillTheGapsController {
  #contents = null;
  constructor() {
    this.showMenuPage();
  }

  async showMenuPage() {
    this.#contents = await new ContentsRepository().getFTG();
    var contents = this.#contents;
    var tags = new utils().getArrayTags(contents);
    var langs = new utils().getArrayLang(contents);
    var veiw = new FillTheGapsView();
    var selectOfLevels = new filterView().createSelect(tags);
    var selectOfLanguages = new filterView().createSelect(langs);
    var buttonAccept = new filterView().createButton();
    var navbar = document.getElementById("navbar");
    navbar.append(selectOfLevels);
    navbar.append(selectOfLanguages);
    navbar.append(buttonAccept);
    this.listenMenu();
  }
  listenMenu() {
    document
      .getElementById("btnAccept")
      .addEventListener("click", this.onClickLoad.bind(this));
  }
  listenToCorrect() {
    document
      .getElementById("toCorrect")
      .addEventListener("click", this.correct.bind(this));
  }

  onClickLoad() {
    var selects = document.querySelectorAll("select");
    var mustHaveTags = ["idiomas"];
    selects.forEach(function (select) {
      mustHaveTags.push(select.value);
    });

    var navbar = document.getElementById("navbar");
    navbar.setAttribute("class","hidden");

    this.ContentAndParamsToPage(mustHaveTags);
  }

  ContentAndParamsToPage(mustHaveTags) {
    var allContent = new FillTheGapsApplication(this.#contents);
    var content = allContent.filter(mustHaveTags);

    //var urlMediaPlayer = allContent.getMediaPlayer(content);
    var urlMediaPlayer = allContent.getSoundUrl(content);
    var ArrayObject = allContent.getContentTextUseCase(content, mustHaveTags);
     //*TextDev
    var view = new FillTheGapsView();
    var div = document.createElement("div");
    div.setAttribute("class", "audioContent");
    var footer = document.getElementById("footer");
    //var iframeUI = view.iframeYoutube(urlMediaPlayer);
    var iframeUI = view.getSound(urlMediaPlayer);
    var textElementsUI = view.showText(ArrayObject);
    var toCorrect = view.toCorrect();
    view.blankId("footer");
    footer.setAttribute("class","footer");
    footer.append(toCorrect);
    div.append(iframeUI);
    div.append(textElementsUI);
    view.printHTML(div);
    this.listenToCorrect();
  }

  correct() {
    var arrayGame = document.querySelectorAll(".textElements input[type=text]");
    var arrayGameCount = arrayGame.length;
    for(var i = 0;i< arrayGameCount ;i++ ){
      var dataResponse = arrayGame[i].getAttribute("data-response");
      var value = arrayGame[i].value;
      var attribute = this.isCorrect(value,dataResponse) ? "correct" : "incorrect";
      arrayGame[i].classList.add(attribute);     
    }
    
  }
  isCorrect(value,correctAnswer){
    return value === correctAnswer ? true : false;
  }
}
