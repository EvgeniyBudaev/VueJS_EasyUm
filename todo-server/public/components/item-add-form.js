/*
Добавить редактирование элемента todo
1. При нажатии на кнопку редактирования послать событие on-edit-click с id todo
2. Обработать событие on-edit-click в app 
3. В app добавить в data свойство editableItem - ссылается на редактируемый элемент.
4. Передать через props editableItem в форму item-add-form 
*/

Vue.component('item-add-form', {
    template: `
        <form class="item-add-form d-flex" v-on:submit="onFormSubmit">
            <input v-model="label" class="form-control" placeholder="Что надо сделать?"/>
            <button v-if="editableItemLabel === ''" class="btn btn-outline-secondary"
                    v-on:click="$emit('on-add-item', label)">Добавить</button>
            <button v-else class="btn btn-outline-secondary"
                    v-on:click="$emit('on-save-item', label)">Сохранить</button>
        </form>
    `,
    data: function () {
        return {
            label: ''
        }
    },
    props: [ 'editableItemLabel' ],
    methods: {
        onFormSubmit: function(event) {
            // отменяем отправку данных формы на сервер 
            // и перезагрузку страницы
            event.preventDefault();
            this.label = '';
        }
    },
    watch: {
        // Наблюдает за изменениями
        editableItemLabel: function() {
            this.label = this.editableItemLabel;
        }
    }
});