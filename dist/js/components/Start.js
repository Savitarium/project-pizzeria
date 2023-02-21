import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Start {
    constructor(element, app){
        const thisStart = this;

        thisStart.app = app;
        thisStart.render();
        thisStart.initActions();
    }


    render(element) {
        const thisStart = this;

        const generatedHTML = templates.startWidget();
        console.log(element);
        thisStart.element = utils.createDOMFromHTML(generatedHTML);
        const startContainer = document.querySelector(select.containerOf.start);
        startContainer.appendChild(thisStart.element).innerHTML;

        thisStart.dom = {};
        thisStart.dom.wrapper = element;

        thisStart.dom.startHeader = document.querySelector(select.start.startHeader);
    }
    initActions() {
        const thisStart = this;
        thisStart.dom.startHeader.addEventListener('click', function(event){
            event.preventDefault();
            let pageId = event.target.offsetParent.getAttribute(select.start.dataId);
            if (pageId) {
                thisStart.app.activatePage(pageId);
            }
        });
    }

}

export default Start;