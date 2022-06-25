<template>
  <nav-component />
  <div id="wrapper">
    <h4 id="article-type">Article</h4>
    <h3 class="title">This is the Article Title</h3>
    <div class="img-holder">
      <img src="https://picsum.photos/200" id="article-img" alt="" srcset="" />
    </div>
    <p class="time-indicator">5 minutes read</p>
    <div class="article-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies
      mauris non fringilla congue. Fusce ultrices sit amet arcu ac sodales.
      Donec sit amet nibh nec est sollicitudin fringilla in id purus. Donec
      dapibus enim in facilisis laoreet. Nunc mi metus, blandit sit amet
      pharetra eu, aliquet mattis sem. Cras malesuada in lorem quis iaculis.
      Quisque non euismod augue. Nullam elit eros, cursus at maximus sodales,
      pretium non nisl. Phasellus sed neque molestie, fringilla erat ac, aliquet
      diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
      rhoncus elementum odio a venenatis. In quis est justo. Ut porttitor
      bibendum vulputate. In hac habitasse platea dictumst. Pellentesque
      tincidunt est et elit finibus scelerisque. Fusce finibus finibus neque in
      convallis. Cras sagittis sagittis urna, sit amet porttitor eros
      pellentesque eu. Pellentesque porta turpis at massa porta, ac sodales
      nulla pharetra. Nam egestas, lectus ac mollis venenatis, dui leo laoreet
      ipsum, vitae consequat quam sem sit amet nisl. Donec nec finibus nibh, nec
      finibus orci. Fusce vitae dui turpis. Aenean risus eros, tincidunt ut nunc
      a, tincidunt porttitor magna. Aliquam bibendum orci ac mattis scelerisque.
      Integer finibus, neque sed consequat dignissim, est urna faucibus tortor,
      eu ornare eros tellus sit amet enim. Ut vel pharetra odio, eu tempus sem.
      Proin lectus dui, lacinia at scelerisque eget, vehicula sed lacus. Proin
      metus quam, consequat vitae tellus id, ultricies euismod ligula. Quisque
      at est id purus iaculis rhoncus vel sit amet ipsum. Vivamus gravida turpis
      eget tincidunt imperdiet. Curabitur et justo vel velit elementum porta.
      Aliquam erat volutpat. Nam augue tellus, tincidunt ac ex id, lobortis
      ullamcorper dui.
    </div>
  </div>
  <footer-component />
</template>

<script>
import navComponent from "../components/Nav-component.vue";
import footerComponent from "../components/Footer-component.vue";
export default {
  name: "articleRender",
  components: {
    navComponent,
    footerComponent,
  },
};
</script>

<style lang="scss" scoped>
$media-desktop: "only screen and (max-width : 1024px)";
$media-tablet: "only screen and (max-width : 768px)";
$media-mobile: "only screen and (max-width : 600px)";
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-desktop-strict: "only screen and (min-width: 768px) and (max-width: 1024)";
#wrapper {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.5rem auto;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.548);
  #article-type {
    font-size: 16px;
    font-weight: 600;
    color: rgb(131, 130, 130);
    margin: 0.5rem 0px;
    padding: 0;
  }
  .title {
    margin: 0.5rem 0px;
    padding: 0;
  }
  .img-holder {
    width: 100%;
    #article-img {
      width: 100%;
      height: 60vh;
      box-shadow: 0px 0px 10px -1px #ccc;
    }
  }
  @media #{$media-mobile} {
    .img-holder {
      #article-img {
        height: 35vh;
      }
    }
  }
  .time-indicator {
    padding: 0;
    margin: 0.5rem 0px;
    font-size: 12px;
    font-weight: 600;
  }
  .article-content {
    text-align: left;
  }
}
@media #{$media-mobile} {
  #wrapper {
    width: 94%;
  }
}
</style>
