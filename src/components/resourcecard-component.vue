<template>
  <div class="resource-card">
    <img src="https://picsum.photos/100" alt="" srcset="" />
    <div class="text-holder">
      <h3 class="title">How-to-post</h3>
      <p class="description">Understanding the crypto game: When to sell</p>
      <router-link to="#">Read More...</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "resourceCard",
};
</script>

<style lang="scss" scoped>
$media-desktop: "only screen and (max-width : 1024px)";
$media-tablet: "only screen and (max-width : 768px)";
$media-mobile: "only screen and (max-width : 600px)";
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-desktop-strict: "only screen and (min-width: 768px) and (max-width: 1024)";
.resource-card {
  background: #fff;
  border-radius: 10px;
  width: 28rem;
  height: 5.5rem;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  img {
    width: 5rem;
    height: 5rem;
    border: 1px dotted #cccccc;
  }
  .text-holder {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    h3,
    p,
    a {
      margin: 2px;
    }
    p {
      font-size: 18px;
      font-weight: 400;
    }
    a {
      text-decoration: none;
      font-size: 14px;
      color: #152a41;
    }
    a:hover {
      color: #006fe8;
    }
  }
}
@media #{$media-mobile} {
  .resource-card {
    width: auto;
    height: auto;
    flex-direction: column;
    img {
      width: 100%;
      height: auto;
    }
    .text-holder {
      h3 {
        font-size: 14px;
      }
      p,
      a {
        font-size: 12px;
      }
    }
  }
}
</style>
