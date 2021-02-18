import { MusicGameController } from "./musicGame/Infrastructure/MusicGameController.js";
import { PageController } from "./Shared/Infrastructure/PageController.js";

async function app(){
  new PageController().showPage("home");
  listerClickBtnMusic();
  listerClickBtnFillTheGaps();
  }

app();
function listerClickBtnMusic(){
  document.getElementById("musicGameBtn").addEventListener("click", function(){
    new PageController().showPage("musicGame");
    new MusicGameController();
   });
}
function listerClickBtnFillTheGaps(){
  document.getElementById("FillTheGapsBtn").addEventListener("click", function(){
    new PageController().showPage("musicGame");
    new MusicGameController();
   });
}