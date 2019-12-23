Vue.component('todo-list-item', {
    template: `
    <span class="todo-list-item">
        <span class="todo-list-item-label">
            {{ label }}
        </span>
        <button class="btn btn-outline-danger float-right" v-on:click="$emit('on-delete-item')">
            <i class="fa fa-trash-o"></i>
        </button>
    </span>
    `,
    props: ['label'],
});