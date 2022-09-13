<script setup>
import {useListStore} from './stores/List';
import {ref} from "vue";


const storeCounter = useListStore();
const newTodo = ref('');
const deadline = ref('');
const taskDone = ref(true)
const isDone = ref(true)
const newStyle=ref('')
async function addItem() {
  await storeCounter.List.push({name: newTodo.value, deadline: deadline.value})
  newTodo.value = ''
  console.log(newTodo.value)
  deadline.value = 0

  storeCounter.taskDone(taskDone)
  console.log(taskDone)
}

function deleteItem(index) {
  storeCounter.List.splice(index, 1)

}

function done(index) {
  newStyle.value='bg-green-300'
}


</script>

<template>
  <div class=" w-screen h-screen dark:bg-slate-800 justify-center items-center flex flex=wrap flex-col ">
    <h1 class="text-7xl">Mehran`s ToDoList</h1>
    <input v-model.lazy="newTodo"
           class="bg-blue-300 border-none  w-1/3 m-4 p-4 selection:bg-fuchsia-300 selection:text-fuchsia-900 "
           type="text"
           placeholder="">
    {{ storeCounter.List }}
    <input v-model="deadline" class="bg-blue-900" type="text" placeholder="example:3 days">

    <button class="bg-blue-500 rounded-full font-bold text-2xl
     text-white m-3 p-4 " @click.prevent="addItem">
      +
    </button>
    <div class="bg-slate-900 xl:w-1/2  w-9/12 p-2 justify-center items-center
     flex flex-wrap flex-col">
      <p @click="done(index)" :class="newStyle"
         class="hover:bg-green-300 selection:bg-fuchsia-300 selection:text-fuchsia-900  w-80 italic cursor-pointer hover:not-italic font-bold  bg-blue-300 m-3 p-4 rounded-md w-9/12 "
         v-for="(List,index) in storeCounter.List" :key="index">
        {{ List.name }}
        <span
            @click="()=>deleteItem(index)"
            class=" hover:bg-zinc-50 hover:text-red-600 bg-red-600 cursor-pointer text-zinc-50 w-10 justify-center rounded-full font-bold float-right flex justify-center items-center">x</span>
      </p>

    </div>
  </div>
</template>

<style scoped>

</style>
