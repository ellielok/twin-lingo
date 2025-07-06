<script setup lang="ts">
import title from './assets/whitetitle.png';
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
          <router-link class="btn btn-outline-light me-2" to="/">Home</router-link>
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
      <small>&copy; 2025 KindBite · Helping people find food with dignity</small>
    </footer>
  </div>
</template>

<!-- <style scoped>
/* 💡 移除默认 padding 和 margin */
body, html {
  margin: 0;
  padding: 0;
}

/* 可选：让 logo 与按钮不贴边 */
.navbar-brand {
  font-weight: bold;
}
</style> -->


<!-- <style scoped>
.logo {
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
}
</style> -->
