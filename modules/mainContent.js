import Element from "../constructor/Element.js";
import CART_DATA from "../constants.js";


const cards = CART_DATA.map(el => new Element('div', 'card', el).get())

const mainContent = new Element('section', 'mainContent', cards);

export default mainContent;