<template>
  <nav-component />
  <div class="container-fluid" id="highlights">
    <div class="highlight">
      <carousel :images="images" @deleteImage="handelDeleteImage" />
    </div>
  </div>
  <div class="container-fluid" id="featured">
    <div class="latest">
      <div class="header">
        <h3>Featured Article</h3>
        <div></div>
      </div>
      <div class="content">
        <div class="text-holder">
          <h3>Expert Opinion: Dodge coin</h3>
          <p>
            Phasellus et neque sed augue consectetur consequat vitae at orci. Ut
            eu venenatis massa. Phasellus in dui nec odio tempus condimentum id
            eu erat. Nunc et mi ac odio consequat egestas. Cras ut tristique
            libero, eu rhoncus nunc. Curabitur eros diam, consectetur vitae
            felis vitae, laoreet sollicitudin sapien. Sed quis risus in eros
            tristique molestie. Donec dapibus tortor eget justo pretium tempor.
            Aliquam mollis, est vitae fringilla consequat, felis leo tristique
            sem, in cursus nunc metus et ipsum. Sed turpis nulla, pretium quis
            tincidunt vel, maximus a libero. Vestibulum sodales elit velit, non
            tincidunt metus ultrices pellentesque. Proin varius bibendum ex eu
            eleifend. Vestibulum a mi congue dolor fermentum commodo in a magna.
            Aliquam molestie leo sed facilisis consequat. Ut euismod et metus
            rhoncus fermentum. Aliquam mollis, est vitae fringilla consequat,
            felis leo tristique sem, in cursus nunc metus et ipsum. Sed turpis
            nulla, pretium quis tincidunt vel, maximus a libero. Vestibulum
            sodales elit velit, non tincidunt metus ultrices pellentesque. Proin
            varius bibendum ex eu eleifend. Vestibulum a mi congue dolor
            fermentum commodo in a magna. Aliquam molestie leo sed facilisis
            consequat. Ut euismod et metus rhoncus fermentum.
          </p>
        </div>
        <img src="https://picsum.photos/400/300?random=1" alt="test image" />
      </div>
    </div>
  </div>
  <div class="container-fluid" id="latest">
    <div class="latest">
      <div class="header">
        <h3>Latest Articles</h3>
        <a href="#">View all</a>
      </div>
      <div class="articles">
        <article-card />
        <article-card />
        <article-card />
        <article-card />
        <article-card />
        <article-card />
      </div>
    </div>
  </div>
  <div class="container-fluid" id="announcement">
    <div class="latest">
      <div class="header">
        <h3>Annoucement</h3>
        <div></div>
      </div>
      <div class="content">
        <img src="https://picsum.photos/400/300?random=1" alt="test image" />
        <div class="text-holder">
          <h3>How the current Market would affect our rates</h3>
          <p>
            Phasellus et neque sed augue consectetur consequat vitae at orci. Ut
            eu venenatis massa. Phasellus in dui nec odio tempus condimentum id
            eu erat. Nunc et mi ac odio consequat egestas. Cras ut tristique
            libero, eu rhoncus nunc. Curabitur eros diam, consectetur vitae
            felis vitae, laoreet sollicitudin sapien. Sed quis risus in eros
            tristique molestie. Donec dapibus tortor eget justo pretium tempor.
            Aliquam mollis, est vitae fringilla consequat, felis leo tristique
            sem, in cursus nunc metus et ipsum. Sed turpis nulla, pretium quis
            tincidunt vel, maximus a libero. Vestibulum sodales elit velit, non
            tincidunt metus ultrices pellentesque. Proin varius bibendum ex eu
            eleifend. Vestibulum a mi congue dolor fermentum commodo in a magna.
            Aliquam molestie leo sed facilisis consequat. Ut euismod et metus
            rhoncus fermentum. Aliquam mollis, est vitae fringilla consequat,
            felis leo tristique sem, in cursus nunc metus et ipsum. Sed turpis
            nulla, pretium quis tincidunt vel, maximus a libero. Vestibulum
            sodales elit velit, non tincidunt metus ultrices pellentesque. Proin
            varius bibendum ex eu eleifend. Vestibulum a mi congue dolor
            fermentum commodo in a magna. Aliquam molestie leo sed facilisis
            consequat. Ut euismod et metus rhoncus fermentum.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid" id="resources">
    <div class="resources">
      <div class="header">
        <h3>Resource Center</h3>
        <a href="#">View all</a>
      </div>
      <div class="content">
        <resource-card />
        <resource-card />
        <resource-card />
        <resource-card />
      </div>
    </div>
  </div>

  <footer-component />
</template>
<script>
import navComponent from "../components/Nav-component.vue";
import footerComponent from "../components/Footer-component.vue";
import { ref } from "vue";
import carouselComponent from "../components/carousel-component.vue";
import articleCard from "../components/articlecard-component.vue";
import resourceCard from "../components/resourcecard-component.vue";
export default {
  name: "NewsView",
  data() {
    return {
      slides: [],
    };
  },

  components: {
    navComponent,
    footerComponent,
    // coincardComponent,
    carousel: carouselComponent,
    articleCard,
    resourceCard,
  },
  setup() {
    const _images = [
      {
        id: 1,
        url: "https://picsum.photos/500/400?q=1",
        header: "Bitcoin tanks for second week in a row",
        writeup:
          "Vivamus dui quam, mattis id eleifend quis, sodales vel enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut mattis id tellus ut consectetur. Ut in nisl aliquet, aliquam risus eget, finibus erat. Curabitur quis purus urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate rutrum ante at rhoncus. Vestibulum pretium ipsum eget turpis blandit fermentum. Maecenas ac sem velit. Vestibulum sodales dignissim nibh. Vivamus lacinia quam nec sem euismod, eget rutrum dolor tristique. Nullam sit amet molestie turpis, nec ornare lectus. Praesent magna erat, condimentum ut lacus imperdiet, bibendum congue enim. Vestibulum sit amet varius libero. Nunc eu nulla elit. Suspendisse potenti.",
      },
      {
        id: 2,
        url: "https://picsum.photos/500/400?q=2",
        header: "Bitcoin tanks for second week in a row",
        writeup:
          "Vivamus dui quam, mattis id eleifend quis, sodales vel enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut mattis id tellus ut consectetur. Ut in nisl aliquet, aliquam risus eget, finibus erat. Curabitur quis purus urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate rutrum ante at rhoncus. Vestibulum pretium ipsum eget turpis blandit fermentum. Maecenas ac sem velit. Vestibulum sodales dignissim nibh. Vivamus lacinia quam nec sem euismod, eget rutrum dolor tristique. Nullam sit amet molestie turpis, nec ornare lectus. Praesent magna erat, condimentum ut lacus imperdiet, bibendum congue enim. Vestibulum sit amet varius libero. Nunc eu nulla elit. Suspendisse potenti.",
      },
      {
        id: 3,
        url: "https://picsum.photos/500/400?q=3",
        header: "Bitcoin tanks for second week in a row",
        writeup:
          "Vivamus dui quam, mattis id eleifend quis, sodales vel enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut mattis id tellus ut consectetur. Ut in nisl aliquet, aliquam risus eget, finibus erat. Curabitur quis purus urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate rutrum ante at rhoncus. Vestibulum pretium ipsum eget turpis blandit fermentum. Maecenas ac sem velit. Vestibulum sodales dignissim nibh. Vivamus lacinia quam nec sem euismod, eget rutrum dolor tristique. Nullam sit amet molestie turpis, nec ornare lectus. Praesent magna erat, condimentum ut lacus imperdiet, bibendum congue enim. Vestibulum sit amet varius libero. Nunc eu nulla elit. Suspendisse potenti.",
      },
      {
        id: 4,
        url: "https://picsum.photos/500/400?q=4",
        header: "Bitcoin tanks for second week in a row",
        writeup:
          "Vivamus dui quam, mattis id eleifend quis, sodales vel enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut mattis id tellus ut consectetur. Ut in nisl aliquet, aliquam risus eget, finibus erat. Curabitur quis purus urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate rutrum ante at rhoncus. Vestibulum pretium ipsum eget turpis blandit fermentum. Maecenas ac sem velit. Vestibulum sodales dignissim nibh. Vivamus lacinia quam nec sem euismod, eget rutrum dolor tristique. Nullam sit amet molestie turpis, nec ornare lectus. Praesent magna erat, condimentum ut lacus imperdiet, bibendum congue enim. Vestibulum sit amet varius libero. Nunc eu nulla elit. Suspendisse potenti.",
      },
    ];
    const images = ref(_images);
    const handelDeleteImage = (index, number) =>
      images.value.splice(index, number);

    return { handelDeleteImage, images };
  },
};
</script>

<style lang="scss" scoped>
#highlights {
  margin: 4px 0px 0px 0px;
  background-color: #eef2f5;
}
.highlight {
  margin: 4px 4rem;
  padding: 1.5rem 0px;
}
#featured {
  background-color: #eef2f5;
  .latest {
    margin: 0px 4rem;
    .header {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      h3 {
        background: linear-gradient(170deg, #0f64c1 1.56%, #152a41 140%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
      div {
        width: 85%;
        height: 0px;
        border: 1px solid #57595aab;
      }
    }
    .content {
      display: grid;
      grid-template-columns: 1fr 30%;
      padding: 1.5rem 0px;
      text-align: left;
      width: 100%;
      p {
        width: 90%;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
#latest {
  width: 100%;
  background-color: #eef2f5;
  .latest {
    margin: 0px 4rem;
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      h3,
      a {
        display: flex;
        width: 100%;
        margin: 24px auto;
      }
      h3 {
        justify-content: flex-start;
      }
      a {
        color: #006fe8;
        justify-content: flex-end;
        font-weight: 600;
        text-decoration: none;
      }
      a:hover {
        color: #cccccc;
      }
    }
    .articles {
      margin-bottom: 1rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      grid-row-gap: 16px;
      justify-content: center;
      align-items: center;
      justify-items: center;
    }
  }
}
#announcement {
  background-color: #fff;
  .latest {
    margin: 0px 4rem;
    .header {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      h3 {
        background: linear-gradient(170deg, #0f64c1 1.56%, #152a41 140%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
      div {
        width: 85%;
        height: 0px;
        border: 1px solid #57595aab;
      }
    }
    .content {
      display: grid;
      grid-template-columns: 30% 1fr;
      column-gap: 32px;
      padding: 1.5rem 0px;
      text-align: left;
      width: 100%;
      p {
        width: 90%;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
#resources {
  background-color: #eef2f5;
  .resources {
    margin: 0px 8rem;
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      h3,
      a {
        display: flex;
        width: 100%;
        margin: 24px auto;
      }
      h3 {
        justify-content: flex-start;
      }
      a {
        color: #006fe8;
        justify-content: flex-end;
        font-weight: 600;
        text-decoration: none;
      }
      a:hover {
        color: #cccccc;
      }
    }
  }
  .content {
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
  }
}
</style>
