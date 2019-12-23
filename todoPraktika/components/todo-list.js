Vue.component('todo-list', {
    template: `
        <div>
            <ul class="list-group todo-list">
                <li class="list-group-item" v-for="todo in todos">
                
                <todo-list-item v-bind:label="todo.label"
                                v-on:on-delete-item="onDeleteItem">                              
                </todo-list-item>
               
                </li>
            </ul>           
            <div>Всего дел: {{ todos.length }}</div>
        </div>
   `,
    props: ['todos'],
    methods: {
        onDeleteItem: function () {
            this.$emit('on-delete-item');       // передаем событие компоненту родителю (app)
        }
    }
});