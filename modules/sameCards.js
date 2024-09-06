import sameCards from "./sameCards.js";

const containers = [sameCards];

const elements = containers.map((el) =>
  new Element(el.tag, el.classes, el.children).get()
);

const sameCards = new Element("section", "sameCards", elements);
export default sameCards;
