const product = [
	{
		id: 1,
		title: "React.js",
		category: "frontend",
		createdAt: " 2024-01-09T13:41:00.413Z",
	},
	{
		id: 2,
		title: "Node.js",
		category: "backend",
		createdAt: " 2024-01-09T13:41:00.413Z",
	},
	{
		id: 3,
		title: "Vue.js",
		category: "frontend",
		createdAt: " 2024-01-09T13:41:00.413Z",
	},
];

const categories = [
	{
		id: 1,
		title: "frondEnd",
		description: "frontend of applications",
		createdAt: "2024-01-09T13:41:00.413Z",
	},
	{
		id: 2,
		title: "backend",
		description: "backend of applications",
		createdAt: "2023-01-09T13:41:00.413Z",
	},
];

export default class Storage {
	// add new category
	// save category
	//getAllCategory

	static getAllCategories() {
		// product , categor => localStorage =>
		const savedCategory = JSON.parse(localStorage.getItem("category")) || [];

		// sort نزولی  ==> desecnding

		const sortedCategories = savedCategory.sort((a, b) => {
			return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
		});
		return sortedCategories;
	}

	static saveCategory(categoryToSave) {
		const savedCategories = Storage.getAllCategories();
		// edit => ... save
		// new => save
		const existedItem = savedCategories.find((c) => c.id === categoryToSave.id);
		if (existedItem) {
			//edit
			existedItem.title = categoryToSave.title;
			existedItem.description = categoryToSave.description;
		} else {
			//new
			categoryToSave.id = new Date().getTime();
			categoryToSave.createdAt = new Date().toISOString();
			savedCategories.push(categoryToSave);
		}
		localStorage.setItem("category", JSON.stringify(savedCategories));
	}
	static getAllProducts(sort = "newest") {
		const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
		return savedProducts.sort((a, b) => {
			if (sort === "newest") {
				return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
			} else if (sort === "oldest") {
				return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
			}
		});
	}
	static saveProducts(productToSave) {
		const savedProducts = Storage.getAllProducts();
		// edit => ... save
		// new => save
		const existedItem = savedProducts.find((c) => c.id === productToSave.id);
		if (existedItem) {
			//edit
			existedItem.title = productToSave.title;
			existedItem.quantity = productToSave.quantity;
			existedItem.category = productToSave.category;
		} else {
			//new
			productToSave.id = new Date().getTime();
			productToSave.createdAt = new Date().toISOString();
			savedProducts.push(productToSave);
		}
		console.log(savedProducts);
		localStorage.setItem("products", JSON.stringify(savedProducts));
	}
	static deleteProduct(id) {
		const savedProducts = Storage.getAllProducts();
		const filterProducts = savedProducts.filter((p) => p.id !== Number(id));
		localStorage.setItem("products", JSON.stringify(filterProducts));
	}
}
