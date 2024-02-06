import categoryView from "./categoryView.js";
import ProductView from "./ProductView.js";

document.addEventListener("DOMContentLoaded", () => {
	categoryView.setApp();
	ProductView.setApp();
	categoryView.createCategoriesList();
	ProductView.createProductsList(ProductView.products);
});
