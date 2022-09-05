<script setup>
import {useListStore} from './stores/List';

const storeCounter = useListStore();
</script>

<template>
  <div class=" w-screen h-screen dark:bg-slate-800 justify-center items-center flex flex=wrap flex-col ">
  <h1 >Mehran`s ToDoList</h1>
  <input type="text">
  <input class="bg-slate-900" type="number">

  <button>add</button>
<div class="bg-slate-900 w-9/12 p-2 justify-center items-center flex flex-wrap">
  <p class="w-80  bg-blue-300 m-3 p-4 rounded-md w-9/12 "  v-for="(List,index) in storeCounter.List" :key="index">
    {{ List.name }}
    <span class=" bg-red-600 cursor-pointer text-zinc-50 w-10 justify-center rounded-full font-bold float-right flex justify-center items-center">x</span>
  </p>
</div>
  </div>
</template>

<style scoped>

</style>
