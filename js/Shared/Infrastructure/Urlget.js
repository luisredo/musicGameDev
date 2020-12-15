export class Urlget{
    constructor(url){
        return url.split ("&");
    }
}
export function setSession(array){
    return array.split("=");
}