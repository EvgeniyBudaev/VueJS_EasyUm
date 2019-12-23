Vue.component('todo-list-item', {
   template: `
   <span class="todo-list-item" :class="{ done: done, important: important }">
        <span class="todo-list-item-label" @click="$emit('on-toggle-done')">
            {{ label }}
        </span>
        <button class="btn btn-outline-danger float-right" v-on:click="$emit('on-delete-item')">
            <i class="fa fa-trash-o"></i>
        </button>
        <button class="btn btn-outline-warning float-right" v-on:click="$emit('on-toggle-important')">
            <i class="fa fa-exclamation"></i>
        </button>
        <button class="btn btn-outline-info float-right" v-on:click="$emit('on-edit-item')">
            <i class="fa fa-edit"></i>
        </button>
    </span>
   `,
   props: [ 'label', 'done', 'important' ]
})