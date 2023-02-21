export const select = {
  templateOf: {
    menuProduct: '#template-menu-product',
    cartProduct: '#template-cart-product',
    bookingWidget: '#template-booking-widget',
    startWidget: '#template-start-widget',
  },
  containerOf: {
    menu: '#product-list',
    cart: '#cart',
    pages: '#pages',
    booking: '.booking-wrapper',
    start: '.start-wrapper',
  },
  all: {
    menuProducts: '#product-list > .product',
    menuProductsActive: '#product-list > .product.active',
    formInputs: 'input, select',
  },
  menuProduct: {
    clickable: '.product__header',
    form: '.product__order',
    priceElem: '.product__total-price .price',
    imageWrapper: '.product__images',
    amountWidget: '.widget-amount',
    cartButton: '[href="#add-to-cart"]',
  },
  widgets: {
    amount: {
      input: 'input.amount', // CODE CHANGED
      linkDecrease: 'a[href="#less"]',
      linkIncrease: 'a[href="#more"]',
    },
    datePicker: {
      wrapper: '.date-picker',
      input: `input[name="date"]`,
    },
    hourPicker: {
      wrapper: '.hour-picker',
      input: 'input[type="range"]',
      output: '.output',
    },
  },
  booking: {
    peopleAmount: '.people-amount',
    hoursAmount: '.hours-amount',
    tables: '.floor-plan .table',
    floor: '.floor-plan',
    duration: '[name="hours"]',
    people: '[name="people"]',
    submit: '.booking-form [type="submit"]',
    address: '[name="address"]',
    phone: '[name="phone"]',
    starters: 'input[type="checkbox"]',
  },
  nav: {
    links: '.main-nav a',
  },
  cart: {
    productList: '.cart__order-summary',
    toggleTrigger: '.cart__summary',
    totalNumber: `.cart__total-number`,
    totalPrice: '.cart__total-price strong, .cart__order-total .cart__order-price-sum strong',
    subtotalPrice: '.cart__order-subtotal .cart__order-price-sum strong',
    deliveryFee: '.cart__order-delivery .cart__order-price-sum strong',
    form: '.cart__order',
    formSubmit: '.cart__order [type="submit"]',
    phone: '[name="phone"]',
    address: '[name="address"]',
  },
  cartProduct: {
    amountWidget: '.widget-amount',
    price: '.cart__product-price',
    edit: '[href="#edit"]',
    remove: '[href="#remove"]',
  },
  start: {
    startHeader: '.navigation',
    dataId: 'id-data',
  },
};

export const classNames = {
  menuProduct: {
    wrapperActive: 'active',
    imageVisible: 'active',
  },
  cart: {
    wrapperActive: 'active',
  },
  booking: {
    loading: 'loading',
    tableBooked: 'booked',
    tableClicked: 'success',
    floorplan: '.floor-plan',
    tableBooked: 'booked',
    tableSelected: 'selected',
  },
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};

export const settings = {
  amountWidget: {
    defaultValue: 1,
    defaultMin: 1,
    defaultMax: 9,
  },
  db: {
    url: '//localhost:3131',
    products: 'products',
    orders: 'orders',
    booking: 'bookings',
    events: 'events',
    dateStartParamKey: 'date_gte',
    dateEndParamKey: 'date_lte',
    notRepeatParams: 'repeat=false',
    repeatParams: 'repeat_ne=false',
  },
  cart: {
    defaultDeliveryFee: 20,
  },
  hours: {
    open: 12,
    close: 24,
  },
  datePicker: {
    maxDaysInFuture: 14,
  },
  booking: {
    tableIdAttribute: 'data-table',
  },
};

export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
  cartProduct: Handlebars.compile(document.querySelector(select.templateOf.cartProduct).innerHTML),
  bookingWidget: Handlebars.compile(document.querySelector(select.templateOf.bookingWidget).innerHTML),
  startWidget: Handlebars.compile(document.querySelector(select.templateOf.startWidget).innerHTML),
};