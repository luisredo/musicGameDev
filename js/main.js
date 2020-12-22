import { MusicGame } from "./musicGame/Infrastructure/musicGame.js";
import { MusicGameView } from "./musicGame/Infrastructure/MusicGameView.js";


async function app(){
  new MusicGame();
  }

app();