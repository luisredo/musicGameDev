import { MusicGameController } from "./musicGame/Infrastructure/MusicGameController.js";
import { PageController } from "./Shared/Infrastructure/PageController.js";

async function app(){
  new PageController().showPage("home");
  listerClickBtn();
  
  }

app();
function listerClickBtn(){
  document.getElementById("musicGameBtn").addEventListener("click", function(){
    new PageController().showPage("musicGame");
    new MusicGameController();
   });
}