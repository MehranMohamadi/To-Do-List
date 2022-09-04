<script setup>
import {useListStore} from './stores/List';

const storeCounter = useListStore();
</script>

<template>
  <div class=" dark:bg-slate-800 justify-center items-center flex flex=wrap flex-col ">
  <h1 >Mehran`s ToDoList</h1>
  <input type="text">
  <input class="bg-slate-900" type="number">

  <button>add</button>

  <p class="ListOfToDo w-80  bg-lime-300 m-8 p-8 rounded-md flex flex-col "  v-for="(List,index) in storeCounter.List" :key="index">
    {{ List.name }}
    <span class=" bg-red-500 w-10 justify-center rounded-full  ">x</span>
  </p>
  </div>
</template>

<style scoped>

</style>
