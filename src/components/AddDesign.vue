<template>
  <div class="container">
    <div class="sidebar">
      <img
        src="../../public/images/logo.svg"
        alt="Logo"
        class="sidebar__logo"
      />
    </div>
    <div class="main-content">
      <header class="header">
        <div class="header__flex">
          <router-link to="/" style="margin-right: 80px">
            <img src="../../public/images/ArrowLeft.svg" alt="Home page" />
          </router-link>

          <label class="checkbox">
            <input type="checkbox" class="checkbox__input" />
            <div class="checkbox__div"></div>
          </label>
          <div class="header__text">Опублікований</div>
        </div>
        <div class="header__flex">
          <button class="header__button--delete" style="width: 131px">
            Видалити
          </button>
          <button
            class="header__button"
            style="width: 131px"
            @click="saveAndExit"
          >
            Зберегти і вийти
          </button>
        </div>
      </header>

      <main class="main">
        <div>
          <img
            src="../../public/images/image.svg"
            alt="Add Design"
            class="image"
          />
          <div
            v-for="(photo, index) in computedPhotos"
            :key="photo.id"
            style="display: inline"
          >
            <img
              :src="photo.url"
              alt="Selected Photo"
              :style="imageStyle"
              @click="openPhoto(index)"
            />
            <span class="delete-icon" @click="deletePhoto(index)">
              <img src="../../public/images/delete.svg" alt="Delete icon" />
            </span>
          </div>

          <img
            src="../../public/images/addPicture.svg"
            alt="Add Design"
            style="margin-bottom: 140px"
            @click="addMorePhotos"
          />

          <input
            type="file"
            ref="fileInput"
            style="display: none"
            accept="image/*"
            @change="handleFileChange"
            multiple
          />
        </div>

        <br /><br />
        <input
          type="text"
          style="width: 80px; height: 32px; margin-right: 8px;"
          placeholder="###"
          class="main__input"
        />
        <input
          type="text"
          style="width: 512px; height: 32px"
          placeholder="Назва дизайну"
          class="main__input"
        /><br /><br />
        <input
          type="url"
          style="width: 600px; height: 32px"
          placeholder="https://design###.horoshop.ua/"
          class="main__input"
        />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [],
      selectedPhotoIndex: -1,
    };
  },
  computed: {
    computedPhotos() {
      return [...this.photos];
    },
    imageStyle() {
      return {
        borderRadius: "3px",
        marginRight: "8px",
        width: "120px",
        height: "149px",
        marginBottom: "115px",
        cursor: "pointer",
      };
    },
  },
  methods: {
    addMorePhotos() {
      this.$refs.fileInput.click();
    },
    async handleFileChange() {
      const { files } = this.$refs.fileInput;
      for (const file of files) {
        const photoUrl = URL.createObjectURL(file);
        const photoId = this.photos.length + 1;
        this.photos.push({ id: photoId, url: photoUrl });
      }
    },
    saveAndExit() {
      this.$emit("save-and-exit", this.computedPhotos);
    },
    deletePhoto(index) {
      this.computedPhotos.splice(index, 1);
    },
    openPhoto(index) {
      this.selectedPhotoIndex = index;
    },
  },
};
</script>

<style scoped>
.delete-icon {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 4px;
}

.delete-icon img {
  width: 16px;
  height: 16px;
}

.main {
  margin-top: 40px;
}

.main__input {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 3px 11px;
}

input::placeholder {
  color: rgba(0, 0, 0, 0.2);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.checkbox {
  --first-color: #fff;
  --second-color: rgba(0, 0, 0, 0.1);
  --width: 64px;
  --height: 24px;

  --offset: 2px;
  cursor: pointer;
}

.checkbox__div {
  position: relative;
  width: var(--width);
  height: var(--height);
  border-radius: var(--width);
  background-color: var(--second-color);
  transition: 0.3s;
}

.checkbox__input {
  display: none;
}

.checkbox__input:checked ~ .checkbox__div {
  background-color: #7ab10e;
}

.checkbox__input:checked ~ .checkbox__div::before {
  left: calc(var(--width) - var(--height) + var(--offset));
}

.checkbox__div::before {
  content: "";
  position: absolute;
  top: var(--offset);
  left: var(--offset);
  width: calc(var(--height) - 2 * var(--offset));
  height: calc(var(--height) - 2 * var(--offset));
  background-color: var(--first-color);
  border-radius: 50%;
  transition: 0.3s;
}

.container {
  background-color: #fff;
  height: 100vh;
  display: flex;
}

.main {
  margin: 40px 120px;
}

.image {
  margin-right: 8px;
  margin-bottom: 40px;
  cursor: pointer;
  width: 120px;
  height: 223px;
  border-radius: 3px;
}
</style>
