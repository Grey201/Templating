import Element from "../constructor/Element.js";
import mainContent from "./mainContent.js";
import additionalContent from "./additionalContent.js";

const containers = [mainContent, additionalContent];

const elements = containers.map((el) =>
  new Element(el.tag, el.classes, el.children).get()
);

const main = new Element("article", "main", elements);
export default main;
