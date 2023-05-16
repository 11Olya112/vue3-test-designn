<template>
  <div class="app">
    <div class="sidebar">
      <img src="../../public/images/logo.svg" alt="Logo" class="sidebar__logo" />
    </div>

    <div class="main-content">
      <header class="header">
        <h1>Всі дизайни</h1>
        <router-link to="/add-design" class="header__button button">Додати дизайн</router-link>
      </header>

      <div class="main-content__cards">
        <div v-for="image in galleryImages" :key="image.id">
          <a :href="image.siteUrl" target="_blank">
            <img :src="image.imageUrl" :alt="image.name" />
          </a>
        </div>

        <div v-for="(photo, index) in photos" :key="index">
          <img :src="photo.url" :alt="photo.name" />
        </div>
      </div>

      <input type="file" ref="fileInput" style="display:none" @change="handleFileChange" />

    </div>
  </div>
</template>

<script>
import { galleryImages } from "@/data/design";

export default {
  computed: {
    galleryImages() {
      return galleryImages;
    },
  },
  data() {
    return {
      photos: [],
    };
  },
  methods: {
    addMorePhotos() {
      this.$refs.fileInput.click();
    },
    handleFileChange: function (event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (e) => {
          const photo = {
            url: e.target.result,
            name: file.name,
          };
          this.photos.push(photo);
        };
        reader.readAsDataURL(file);
      }
    },
    saveAndExit(photos) {
      this.photos = photos;
    },
  },
};
</script>

<style scoped>
.button {
  height: 22px;
  width: 122px;
  border-radius: 3px;
}
</style> 
