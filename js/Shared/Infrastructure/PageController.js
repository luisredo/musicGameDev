export class PageController{
    hiddenAllPages(){
        var pages = document.querySelectorAll(".page");
        pages.forEach(element => {
            element.classList.add("hidden");
        });
    }
    showPage(id){
        this.hiddenAllPages();
        var page = document.getElementById(id);
        page.classList.remove("hidden");
    }
}