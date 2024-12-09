<script setup lang="ts">

useHead({
  title: "メルの図書館",
  meta: [
    { property: "og:title", content: "メルの図書館" },
    {
      property: "og:description",
      content: "Iris-Flaのポートフォリオサイトです。",
    },
    { property: "og:type", content: "website" },
  ],
});

</script>

<template>
  <div>
    Can You See Me?
  </div>
</template>
<style scoped lang="scss">
.header-image {
  width: 100%;
  height: auto;
}

.typed-text {
  font-size: 2em;
  font-weight: bold;
  color: $color-main;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0px;
}

hr {
  border: 5px solid $color-main;
  border-radius: 20px;
  width: 70%;
  opacity: 1;
  margin: 0 auto 50px auto;
}

.profile-icon {
  width: 200px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 8px $color-main;
}

.profile-text {
  color: $color-main;
}

.image-container {
  position: relative;
  display: inline-block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  .overlay-text {
    margin-top: 30px;
    color: $color-main;
    font-size: 1em;
    text-align: center;
  }
}

.overlay-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  .overlay-text {
    margin-top: 30px;
    color: $color-main;
    font-size: 1em;
    text-align: center;
  }
}

.button-style {
  background-color: $color-secondary;
  border-color: $color-secondary;
  border-radius: 50%;
  box-shadow: 0 0 5px $color-secondary;

  &:hover {
    background-color: #4d5a3d;
    border-color: #4d5a3d;
  }

  &:active {
    background-color: #4d5a3d;
    border-color: #4d5a3d;
  }

  &:focus {
    background-color: $color-secondary;
    border-color: $color-secondary;
  }
}

.image-container:hover .overlay-circle {
  opacity: 1;
}

.image-container:hover .overlay {
  opacity: 1;
}

.decorated-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  span {
    font-size: 1.5em;
    margin-top: 30px;
    position: relative;
    padding: 0 20px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 60px;
      height: 5px;
      border-radius: 5px;
      background-color: $color-main;
    }

    &::before {
      left: -70px;
    }

    &::after {
      right: -70px;
    }

    &::before::after,
    &::after::after {
      content: "";
      position: absolute;
      top: -2px;
      width: 20px;
      height: 5px;
      border-radius: 50%;
      background-color: $color-main;
    }

    &::before::after {
      right: 0;
    }

    &::after::after {
      left: 0;
    }
  }
}

.row-cards {
  max-width: 1000px;
  margin: 0 auto;

  .col-card {
    box-shadow: 0 0 8px $color-main;
  }
}

.works-card {
  background-color: $color-main;
  box-shadow: 0 0 8px $color-main;

  .title {
    color: $color-secondary;
  }
}

.background {
  background-color: $color-secondary;
  padding-bottom: 150px;
}
</style>
