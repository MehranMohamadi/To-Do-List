import {defineStore} from 'pinia'

export const useListStore = defineStore('counter', {
    state: () => {
        return {
            List: []
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        taskDone(taskDone) {
            return taskDone = !taskDone
        },
    },
})