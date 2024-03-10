<script setup lang="ts">
import Navbar from './components/NavbarComponent.vue'
import About from './components/AboutComponent.vue';
import Project from './components/ProjectComponent.vue';
import Skill from './components/SkillComponent.vue';
import Footer from './components/FooterComponent.vue'





</script>

<template>
  <Navbar></Navbar>

  <header
    id="home"
  >
   <About></About>
  </header>



  <main class="container mt-5 py-5">
      <Project></Project>
    <hr class="my-4">
      <Skill></Skill>


  </main>
  
  
  
  <Footer id="contact"></Footer>
</template>

<style scoped>
* {
  padding: 0;
}
header{
  background:url(/public/assets/pic.jpg) no-repeat right top fixed;
      height: 100vh;
      background-size: cover;
}
</style>

