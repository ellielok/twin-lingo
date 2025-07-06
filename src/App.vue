<script setup lang="ts">
import title from './assets/whitetitle.png';

// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: 'smooth' })
// }
</script>

<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <!-- <router-link class="navbar-brand" to="/">KindBite</router-link> -->
        <router-link class="navbar-brand" to="/"> 
          <img :src="title" height="35"> 
        </router-link>
        <div>
          <router-link class="btn btn-outline-light me-2" to="/search">Search</router-link>
          <router-link class="btn btn-outline-light me-2" to="/admin">Admin</router-link>
          <router-link class="btn btn-light" to="/login">Login</router-link>
        </div>
      </div>
    </nav>

    <!-- Container of main content -->
    <main class="container mt-4 flex-grow-1">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-light text-center py-3 mt-5">
      <!-- Social Media -->
      <div class="container">
        <div class="d-flex justify-content-center gap-3 mb-2">  
          <!-- Facebook -->
          <a href="https://facebook.com/" target="_blank" class="text-primary fs-4" aria-label="Facebook">
            <i class="fab fa-facebook"></i>
          </a>
          <!-- Instagram -->
          <a href="https://instagram.com/" target="_blank" class="text-primary fs-4" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <!-- GitHub -->
          <a href="https://github.com/" target="_blank" class="text-primary fs-4" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>

      <hr class="my-2" />

      <!-- Footer Links -->
      <ul class="list-inline mb-2">
        <li class="list-inline-item me-4">
        <router-link to="/about" class="text-decoration-none text-secondary">
          About KindBite </router-link>
        </li>
      <li class="list-inline-item ">
        <router-link to="/contact" class="text-decoration-none text-secondary">
          Contact Us</router-link>
          </li>
        </ul>

      
      <!-- Footer Note -->
      <small>Copyright &copy; 2025 KindBite. Rights reserved.  ·  For every kind of help.</small>
    </footer>

    <!-- Back to Top Floating Button -->
    <!-- <button
      class="btn btn-secondary back-to-top"
      @click="scrollToTop"
      aria-label="Back to Top"
    >
      ⬆️
    </button> -->

  </div>
</template>



<style scoped>
  hr {
    border-color:  #8e8d8d;
  }

  /* .back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1000;
    border-radius: 50%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  } */

  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #666cf6);
  }
  .logo.sub:hover {
    filter: drop-shadow(0 0 2em #6fbbfa);
  } */
</style>
