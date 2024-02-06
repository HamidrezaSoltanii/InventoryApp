// title , description => {} => save category => ...
import Storage from "./Storage.js";

const categoryTitle = document.querySelector("#category-title");
const categoryDescription = document.querySelector("#category-description");
const addNewCetegoryBtn = document.querySelector("#add-new-category");
const toggleAddCategoryBtn = document.querySelector("#toggle-add-category");
const catrgoryWrapper = document.querySelector("#category-wrapper");
const canelAddCategory = document.querySelector("#cancel-add-category");

class categoryView {
	constructor() {
		addNewCetegoryBtn.addEventListener("click", (e) => this.addNewCetegory(e));
		toggleAddCategoryBtn.addEventListener("click", (e) => this.toggleAddCategory(e));
		canelAddCategory.addEventListener("click", (e) => this.canelAddCategory(e));
		this.categories = [];
	}
	addNewCetegory(e) {
		e.preventDefault();
		const title = categoryTitle.value;
		const description = categoryDescription.value;
		if (!title || !description) return;
		Storage.saveCategory({ title, description });
		Storage.getAllCategories();
		this.categories = Storage.getAllCategories();
		this.createCategoriesList();
		catrgoryWrapper.classList.add("hidden");
		toggleAddCategoryBtn.classList.remove("hidden");
	}
	setApp() {
		this.categories = Storage.getAllCategories();
	}
	createCategoriesList() {
		let result = `<option class="bg-slate-500 text-slate-300" value="">Select a category</option>`;
		this.categories.forEach((element) => {
			result += `<option class="bg-slate-500 text-slate-300" value=${element.id}>${element.title}</option>`;
		});
		const categoryDom = document.getElementById("Product-category");
		categoryDom.innerHTML = result;
	}
	toggleAddCategory(e) {
		e.preventDefault();
		catrgoryWrapper.classList.remove("hidden");
		toggleAddCategoryBtn.classList.add("hidden");
	}
	canelAddCategory(e) {
		e.preventDefault();
		catrgoryWrapper.classList.add("hidden");
		toggleAddCategoryBtn.classList.remove("hidden");
	}
}

export default new categoryView();
