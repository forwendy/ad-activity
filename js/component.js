Vue.component('label-input', {
    template: '<div><label>{{label}}</label>\
        <input type="text" :value="value" :placeholder="placeholder" :maxLength="max" \
        v-focus="isFocus" v-on:focus="focus" v-on:blur="blur" v-on:input="$emit(\'input\', $event.target.value)">\
        <i class="ico-del" v-show="isFocus && value != \'\'" v-on:click="removeAll"></i></div>',
    data: function() {
        return {
            isFocus: false
        }
    },
    props: {
        value: String,
        label: String,
        placeholder: String,
        max: Number
    },
    methods: {
        removeAll: function(e) {
            this.$emit('clear');
            this.isFocus = true;
        },
        focus: function() {
            this.isFocus = true;
        },
        blur: function() {
            this.isFocus = false;
        }
    },
    directives: {
        focus: {
            update: function(el, obj) {
                if (obj.value) {
                    el.focus();
                }
            }
        }
    }
});
