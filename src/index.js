import { products } from "./data.js";
import template from "./templates/product.hbs";

const app = document.getElementById("app");

const markup = products.map((item) => template(item)).join("");

app.innerHTML = markup;
