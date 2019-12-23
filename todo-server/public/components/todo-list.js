Vue.component('todo-list', {
    template: `
        <div>
            <ul class="list-group todo-list">
                <li class="list-group-item" v-for="todo in todos">
                    <todo-list-item :label="todo.label"
                                    :done="todo.done"
                                    :important="todo.important"
                                    @on-delete-item="onDeleteItem"
                                    @on-edit-item="$emit('on-edit-item', todo.id)"
                                    @on-toggle-done="$emit('on-toggle-done', todo.id)"
                                    @on-toggle-important="$emit('on-toggle-important', todo.id)"></todo-list-item>
                </li>
            </ul>
            <div>Всего дел: {{ todos.length }}</div>
        </div>
    `,
    props: [ 'todos' ],
    methods: {
        onDeleteItem: function (id) {
            this.$emit('on-delete-item', id);       // передаем событие компоненту родителю (app)
        }
    }
});