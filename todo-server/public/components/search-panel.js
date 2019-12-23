Vue.component('search-panel', {
    template: `
        <input v-model="text" 
               class="search-panel form-control"
               @input="$emit('on-search', text)" 
               placeholder="Введите что-то для поиска" />
    `,
    data: function () {
        return {
            text: ''
        }
    }
});