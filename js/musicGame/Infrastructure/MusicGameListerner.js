import { MusicGameController } from "./MusicGameController.js";

export class MusicGameListener{
    btnListen(){
        document.getElementById("btnAccept").addEventListener("click",function(){
           var selects = document.querySelectorAll("select");
           var mustHaveTags = ["music"];
            selects.forEach(function(select){
                mustHaveTags.push(select.value);
            })
        return mustHaveTags;
        });
    }
}