<template>
  <h3 class="text-center">
  
   {{ route.query.title }}
  </h3>
  <hr />
  <p class="px-3">
    <ul>
      <li v-for="(data,index) in route.query.context" :key="index">
       {{ data }}
      </li>
    </ul>
  
    </p>
</template>

<script lang="ts" setup>
import {useRoute} from 'vue-router'

const route = useRoute()

console.log(import.meta.env.VITE_text)

</script>
