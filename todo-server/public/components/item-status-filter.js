Vue.component('item-status-filter', {
    template: `
        <div class="btn-group">
            <filter-button v-for="button in buttons"
                           :key="button.name"
                           :name="button.name"
                           :label="button.label"
                           @on-click="$emit('on-click', button.name)"></filter-button>
        </div>
    `,
    data: function () {
        return {
            buttons: [
                { name: 'all', label: 'Все'},
                { name: 'active', label: 'Активные'},
                { name: 'done', label: 'Выполненные'}
            ]
        }
    }
});