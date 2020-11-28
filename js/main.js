const selectAllElements = document.querySelectorAll('[data-select]');

selectAllElements.forEach(function (element) {
	element.addEventListener('click', function (e) {
		const realSelect = this.nextElementSibling;
		if (e.target.hasAttribute('data-select-item')) {

			const itemTitle = e.target.dataset.selectItem;
			this.querySelector('[data-select-title]').innerText = itemTitle;


			this.querySelector('.header-select__dropdown').classList.toggle('hidden');
			realSelect.value = itemTitle;

		} else {
			this.querySelector('.header-select__dropdown').classList.toggle('hidden');
		}
	})
})

// selectElement.addEventListener('click', function (e) {
// 	if (e.target.hasAttribute('data-select-item')) {
// 		const itemTitle = e.target.dataset.selectItem;
// 		e.target.closest('[data-select]').querySelector('[data-select-title]').innerText = itemTitle;
// 		e.target.closest('[data-select]').querySelector('.header-select__dropdown').classList.toggle('hidden');
// 		selectReal.value = itemTitle;
// 	} else {
// 		this.querySelector('.header-select__dropdown').classList.toggle('hidden');
// 	}
// })