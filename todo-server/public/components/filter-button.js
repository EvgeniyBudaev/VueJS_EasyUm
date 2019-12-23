Vue.component('filter-button', {
    template: `
        <button class="btn btn-outline-secondary"
                @click="$emit('on-click')">{{label}}</button>
    `,
    props: [ 'name', 'label' ]
});