import {select, templates} from '../settings.js';
import AmountWidget from './AmountWidget.js';
import utils from '../utils.js';

class Booking{
    constructor(element) {
        const thisBooking = this;
        thisBooking.render(element);
        this.initWidget();
    };
    render(element){
        const thisBooking = this;
        const generatedHTML = templates.bookingWidget();
        const generatedDOM = utils.createDOMFromHTML(generatedHTML);
        const bookingWrapper = document.querySelector(select.containerOf.booking);
        bookingWrapper.appendChild(generatedDOM);
        thisBooking.dom = {
            wrapper: element,
            peopleAmount: element.querySelector(select.booking.peopleAmount),
            hoursAmount: element.querySelector(select.booking.hoursAmount),
        };
        console.log(generatedDOM);
    };
    initWidget(){
        const thisBooking = this;
        thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
        thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    };
};

export default Booking;