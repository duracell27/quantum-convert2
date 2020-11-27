const selectElement = document.querySelector('[data-select]');
const selectReal = document.querySelector('#category');

selectElement.addEventListener('click', function (e) {
	if (e.target.hasAttribute('data-select-item')) {
		const itemTitle = e.target.dataset.selectItem;
		e.target.closest('[data-select]').querySelector('[data-select-title]').innerText = itemTitle;
		e.target.closest('[data-select]').querySelector('.header-select__dropdown').classList.toggle('hidden');
		selectReal.value = itemTitle;
	} else {
		this.querySelector('.header-select__dropdown').classList.toggle('hidden');
	}
})