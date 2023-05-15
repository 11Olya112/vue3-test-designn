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
          <button class="header__button" style="width: 131px">
            Зберегти і вийти
          </button>
        </div>
      </header>

      <main class="main">
        <div>
          <img
            src="../../public/images/image.svg"
            alt="Add Design"
            style="margin: 0 20px 40px 0px; max-width: 200px; max-height: 200px"
          />

          <img
            :src="selectedPhoto"
            alt="Selected Photo"
            style="
              max-width: 200px;
              max-height: 200px;
              margin-right: 20px;
              margin-bottom: 40px;
            "
            v-if="selectedPhoto"
          />

          <img
            :src="additionalPhoto"
            alt="Additional Photo"
            style="
              max-width: 200px;
              max-height: 200px;
              margin-right: 20px;
              margin-bottom: 120px;
            "
            v-if="additionalPhoto"
          />

          <img
            src="../../public/images/addPicture.svg"
            alt="Add Design"
            style="margin-bottom: 120px"
            @click="addPhoto"
          />

          <input
            type="file"
            ref="fileInput"
            style="display: none"
            accept="image/*"
            @change="handleFileChange"
          />
        </div>

        <br /><br />
        <input
          type="text"
          style="width: 80px; height: 32px"
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
      selectedPhoto: null,
    };
  },
  methods: {
    addPhoto() {
      // Коли користувач натисне на зображення
      // Тригеруємо клік на прихований input file
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      // Отримуємо вибраний файл з input file
      const file = event.target.files[0];

      // Можете виконати додаткові дії з файлом тут,
      // наприклад, завантажити його на сервер або обробити його яким-небудь способом

      // Відображення вибраної фотографії
      this.selectedPhoto = URL.createObjectURL(file);
    },
  },
};
</script>

<style scoped>
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

  --offset: 20px;
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
</style>
