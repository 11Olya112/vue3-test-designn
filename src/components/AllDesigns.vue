<template>
  <div class="app">
    <div class="sidebar">
      <img src="../../public/images/logo.svg" alt="Logo" class="sidebar__logo" />
    </div>

    <div class="main-content">
      <header class="header">
        <h1>Всі дизайни</h1>
        <router-link to="/add-design" class="header__button" style="height: 22px; width: 122px;">
          Додати дизайн
        </router-link>
      </header>

      <div class="main-content__cards">
        <div v-for="image in galleryImages" :key="image.id">
          <a :href="image.siteUrl" target="_blank">
            <img :src="image.imageUrl" :alt="image.name" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { galleryImages } from "@/data/design";

export default {
  data() {
    return {
      galleryImages: galleryImages,
    };
  },
};
</script>

<style scoped>

</style>
