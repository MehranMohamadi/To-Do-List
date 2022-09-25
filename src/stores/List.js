import {defineStore} from 'pinia'
import {ref} from "vue";

export const useListStore = defineStore('counter', {
    state: () => {
        return {
            List: [],
            newTodo: '',
            id: 0,
            newStyle: ''
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {

        deleteItem(index) {
            this.List.splice(index, 1);
            console.log('deleteItem')

        },
        addItem() {
            console.log(this.newTodo)
            this.newTodo.value !== '' ?
                this.List.push({name: this.newTodo, id: this.id++})
                : alert('null input');
            this.newTodo = ''
        },


        done() {
            this.newStyle = 'bg-green-300'
        }

    },
})