function interactionEvent() {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    alert(iOS);
    return iOS ? 'touchstart' : 'click';
}

export function iOSversion() {

    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    console.log("ios -> "+ iOS);
      if (iOS) { 
        sessionStorage.setItem('isIOS', 'touchstart');
        return 'iOS 3 or earlier';
    }
    sessionStorage.setItem('isIOS', 'click');
    confirm('Are you sure?');
    return 'Not an iOS device';
}
/*
class SingleLeadInteraction {
    constructor() {
        const urlSearch = new URLSearchParams(window.location.search);
        this.leadId = urlSearch.get("id");
        this.addListeners();
    }
    addListeners() {
        this.addNoteButton.addEventListener(interactionEvent(), e => { SingleLeadInteraction.addNoteModal.showModal(); }, false);
        this.addAttachmentButton.addEventListener(interactionEvent(), e => { SingleLeadInteraction.addAttachmentModal.showModal(); }, false);
        this.changeAgentButton.addEventListener(interactionEvent(), () => { SingleLeadInteraction.changeAgentModal.showModal(); }, false);
        const leadDetailInputs = document.querySelectorAll(".field-container label input[data-api-name], .field-container label select[data-api-name]");
        leadDetailInputs.forEach(input => {
            input.addEventListener("input", e => {
                // code that isn't firing
            }, false);
        });
    }
}
SingleLeadInteraction.changeAgentModal = new Modal("#changeAgentModal");
SingleLeadInteraction.addNoteModal = new Modal("#addNoteModal");
SingleLeadInteraction.addAttachmentModal = new Modal("#addAttachmentModal");
let lead;
if (new URL(window.location.href).pathname === "/contact/") {
    lead = new SingleLeadInteraction();
}
*/