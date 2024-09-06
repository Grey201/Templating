import Wrapper from "./constructor/Wrapper.js";
import container from "./modules/container.js";
import sidebar from "./modules/sidebar.js";

new Wrapper("#root", [container, sidebar]);
