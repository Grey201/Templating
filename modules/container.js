import header from "./header.js";
import Element from "../constructor/Element.js";

import footer from "./footer.js";
import main from "./main.js";

const containers = [header, main, footer];

const elements = containers.map((el) =>
  new Element(el.tag, el.classes, el.children).get()
);

const container = new Element("article", "container", elements);
export default container;
