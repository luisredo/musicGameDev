import { SearchValues } from "../../Shared/Application/SearchValues.js";

export class utils{
    getArrayTags(content){
        var tagsMap = [];
        for(var p = 0; p < content.length; p++){
            var tagValue = [p,'video',0,'tags'];                  
            var tag = new SearchValues(content,tagValue);
            if (content[p].video[0].tag!=""){
                for(var n = 0; n < tag.length; n++){
                tagsMap.push(tag[n]);
                }
            }
        }
        var noRepeatTags = this.eliminarElementosRepetidos(tagsMap);
        console.log("tagsmap : " + noRepeatTags );
        return noRepeatTags;
    }

    getArrayLang(content){
        var langsMap = [];
        for(var p = 0; p < content.length; p++){                
            var langRoute = [p,'video',0,'language'];
            var lenguaje = new SearchValues(content,langRoute);
            if (lenguaje!=""){
                    langsMap.push(content[p].video[0].language);
            }
        }
        var noRepeatLangs = this.eliminarElementosRepetidos(langsMap);
        noRepeatLangs = this.cleanArray(noRepeatLangs);
        console.log("langsMap: " + noRepeatLangs);
        return noRepeatLangs;
    }

    eliminarElementosRepetidos(a){
        for(var i = a.length -1; i >=0; i--){
            if(a.indexOf(a[i]) !== i) a.splice(i,1);
            }
        return a;
    }

    cleanArray( a ){
        var newArray = new Array();
        for( var i = 0, j = a.length; i < j; i++ ){
            if ( a[ i ] ){
              newArray.push( a[ i ] );
          }
        }
        return newArray;
    }
}