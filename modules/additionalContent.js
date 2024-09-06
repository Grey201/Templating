import Element from "../constructor/Element.js";
import CART_DATA from "../constants.js";

const cards = CART_DATA.map((el) =>
  new Element(
    "div",
    "card2",
    `Same ${el.charAt(0).toLowerCase() + el.slice(1)}`
  ).get()
);

const additionalContent = new Element("aside", "sameContent", cards);

export default additionalContent;
