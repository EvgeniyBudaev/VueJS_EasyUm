Vue.component('item-add-form', {
    template:`
    <form class="item-add-form d-flex" v-on:submit="onFormSubmit">
            <input v-model="label" class="form-control" placeholder="Что надо сделать?"/>
            <button  class="btn btn-outline-secondary"
                     v-on:click="$emit('on-add-item', label)">Добавить</button>
    </form>
    `,
    data: function () {
        return {
            label: ''
        }
    },
    props: ['editableItemLabel'],
    methods: {
        onFormSubmit: function(event) {
            // отменяем отправку данных формы на сервер
            // и перезагрузку страницы
            event.preventDefault();
            this.label = '';
        }
    },
    watch: {
        //наблюдает за изменениями
        editableItemLabel: function () {
            this.label = this.editableItemLabel;
        }
    }
});