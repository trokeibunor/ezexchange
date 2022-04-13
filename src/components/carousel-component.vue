<template>
  <Carousel>
    <template #slides>
      <Slide v-for="image in images" :key="image.id">
        <img :src="image.url" />
        <div class="holder">
          <h3>Highlight</h3>
          <h4>{{ image.header }}</h4>
          <p>{{ image.writeup }}</p>
        </div>
      </Slide>
    </template>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>
<script>
import { defineComponent, toRefs } from "vue";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
// import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "carouselComponent",
  props: {
    images: Array,
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  setup(props, { emit }) {
    const { images } = toRefs(props);

    const deleteImage = (index) => emit("delete-image", index);

    // eslint-disable-next-line vue/no-dupe-keys
    return { images, deleteImage };
  },
});
</script>
<style lang="scss">
img {
  border-radius: 10px;
}
.carousel__prev,
.carousel__next {
  background-color: #0f64c1;
  border-radius: var(--vc-nav-width);
  width: var(--vc-nav-width);
  height: var(--vc-nav-width);
  text-align: center;
  font-size: calc(var(--vc-nav-width) * 2 / 3);
  padding: 0;
  color: var(--vc-nav-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 0;
  cursor: pointer;
}

.carousel__prev {
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
}

.carousel__next {
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
}

.carousel--rtl .carousel__prev {
  left: auto;
  right: 0;
  transform: translate(50%, -50%);
}

.carousel--rtl .carousel__next {
  right: auto;
  left: 0;
  transform: translate(-50%, -50%);
}
:root {
  /* Color */
  --vc-clr-primary: #642afb;
  --vc-clr-secondary: #8e98f3;
  --vc-clr-white: #ffffff;

  /* Icon */
  --vc-icn-width: 1.2em;

  /* Navigation */
  --vc-nav-width: 30px;
  --vc-nav-color: #ffffff;
  --vc-nav-background-color: var(--vc-clr-primary);

  /* Pagination */
  --vc-pgn-width: 10px;
  --vc-pgn-height: 5px;
  --vc-pgn-margin: 5px;
  --vc-pgn-border-radius: 0;
  --vc-pgn-background-color: var(--vc-clr-secondary);
  --vc-pgn-active-color: var(--vc-clr-primary);
}
.carousel__icon {
  width: var(--vc-icn-width);
  height: var(--vc-icn-width);
  fill: currentColor;
}
.carousel {
  position: relative;
  text-align: center;
  box-sizing: border-box;
}

.carousel * {
  box-sizing: border-box;
}

.carousel__track {
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
}

.carousel__viewport {
  overflow: hidden;
}
.carousel__pagination {
  display: flex;
  justify-content: center;
  list-style: none;
}
.carousel__pagination-button {
  margin: var(--vc-pgn-margin);
  width: var(--vc-pgn-width);
  height: var(--vc-pgn-height);
  border-radius: var(--vc-pgn-height);
  border: 0;
  cursor: pointer;
  background-color: #0f65c15e;
}

.carousel__pagination-button--active {
  background-color: #0f64c1;
}
.carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
}
.holder {
  text-align: left;
  padding: 8px;
  h3 {
    background: linear-gradient(170deg, #0f64c1 1.56%, #152a41 111.22%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}
</style>
