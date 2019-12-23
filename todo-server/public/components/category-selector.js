Vue.component('category-selector', {
	template: `
        <div class="category-selector">
            <label v-if="showLabel" for="category-selector">Категория:</label>
            <select v-model="selectedCategoryId"
                    id="category-selector"
                    class="custom-select"
                    @change="$emit('on-select', selectedCategoryId)">
                <option v-for="category in categories" :value="category.id">{{category.name}}</option>
            </select>
        </div>
    `,
	props: [ 'categoryId', 'categories', 'showLabel'],
	data: function() {
		return {
			selectedCategoryId: null
		}
    },
    created: function () {
        this.selectedCategoryId = this.categoryId;
    },
    watch: {
        categoryId: function () {
            this.selectedCategoryId = this.categoryId;
        }
    }
})
