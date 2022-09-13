import {defineStore} from 'pinia'

export const useListStore = defineStore('counter', {
    state: () => {
        return {
            List: [{name: 'ali', deadline: '2', id: 0},
                {name: 'omid', deadline: '5', id: 1},]
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