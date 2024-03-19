<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid bg-dark py-1">
      <a class="navbar-brand text-white" href="#">Home</a>
      <button
        class="navbar-toggler text-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon text-white d-flex flex-column justify-content-center">
          <i class="bi bi-list"></i>
        </span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item">
            <a class="nav-link link-light" aria-current="page" href="javscript;" @click.prevent="goTo('#about')">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-light" href="javscript;" @click.prevent="goTo('#about')">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-light" href="javscript;" @click.prevent="goTo('#project')">project</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-light" href="javscript;" @click.prevent="goTo('#skill')">skill</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-light" href="javscript;" @click.prevent="goTo('#contact')">contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup type="ts">



function goTo(id){

const tag = document.querySelector(id);

  tag.scrollIntoView();


}
</script>
