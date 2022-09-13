<script setup>
import {useListStore} from './stores/List';
import {ref} from "vue";


const storeCounter = useListStore();
const newTodo = ref('');
const deadline = ref('');
const id = ref(0)

const newStyle = ref('')

function addItem() {
console.log(newTodo.value)
  newTodo.value!==''?storeCounter.List.push({name: newTodo.value, id: id.value++}):alert('null input');
  document.getElementById("add").value=" dfsfds"
}

function deleteItem(index) {
  storeCounter.List.splice(index, 1)

}

function done() {
  newStyle.value = 'bg-green-300'
}


</script>

<template>
  <div class= " w-screen h-screen dark:bg-slate-800 justify-center items-center flex flex=wrap flex-col ">
    <h1 class="top-0 text-7xl">Mehran`s ToDoList</h1>
    <div class="flex flex-wrap flex-row  bg-slate-900 w-1/3 rounded-t-lg ">
      <input v-model.lazy="newTodo"
             class="rounded-md bg-slate-700 border-none  w-2/3 m-2 p-2 selection:bg-fuchsia-300 selection:text-fuchsia-900 "
             type="text"
             placeholder="">

      <button class="bg-blue-400 rounded-full font-bold text-2xl
     text-white m-2 p-2 w-1/6 hover:bg-blue-600 float-right   " id="add" @click.prevent="addItem">
        +
      </button>

    </div>
    <div class=" bg-slate-900 overflow-auto xl:w-1/2 rounded-md  w-9/12 p-2 justify-center items-center
     flex  flex-col">
      <p @click="done(index)" :class="newStyle"
         class="hover:bg-green-300 break-words selection:bg-fuchsia-300 selection:text-fuchsia-900  w-80 italic cursor-pointer hover:not-italic font-bold  bg-blue-300 m-3 p-4 rounded-md w-5/6 "
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
