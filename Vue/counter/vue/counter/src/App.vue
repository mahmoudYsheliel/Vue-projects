
<script  setup >

  import { ref } from 'vue';
  const count=ref(0);

</script>
<template>
  <main>
    <div>
      <h2>the count is </h2>
      <h1>{{count}}</h1>
      <button @click="count--">-</button>
      <button @click="count++">+</button>
    </div>
  </main>
</template>