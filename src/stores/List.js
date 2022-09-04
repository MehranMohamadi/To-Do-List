import { defineStore } from 'pinia'

export const useListStore = defineStore('counter', {
    state: () => {
        return { List:[{name:'ali',deadline:'2',isDone:false},{name:'omid',deadline:'5',isDone:true},] }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.count++
        },
    },
})