<template>
  <router-link to="#" class="article-card">
    <img src="https://picsum.photos/200" alt="" srcset="" />
    <h4 class="title">
      Beginner Course to crypto trading, mining and money making
    </h4>
    <div class="info-block">
      <p>Sep 18, 2022 ||</p>
      <p>5 mins read</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "articleCard",
};
</script>

<style lang="scss" scoped>
$media-desktop: "only screen and (max-width : 1024px)";
$media-tablet: "only screen and (max-width : 768px)";
$media-mobile: "only screen and (max-width : 600px)";
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-desktop-strict: "only screen and (min-width: 768px) and (max-width: 1024)";
.article-card {
  text-decoration: none;
  margin: 8px 0px;
  background-color: #fff;
  color: #545454;
  border-radius: 10px;
  width: 20rem;
  height: 20rem;
  padding: 24px;
  display: flex;
  flex-direction: column;
  text-align: left;
  img {
    width: 100%;
    height: 70%;
    border-radius: 0px;
  }
  .title {
    margin: 4px 0px;
  }
  .info-block {
    display: flex;
    flex-direction: row;
    p {
      font-weight: 400;
    }
  }
}
@media #{$media-mobile} {
  .article-card {
    width: auto;
    height: auto;
    padding: 8px;
    img {
      border-radius: 8px;
    }
    .title {
      font-size: 12px;
    }
    .info-block {
      font-size: 12px;
    }
  }
}
.article-card:hover {
  box-shadow: 4px 1px 10px -4px rgba(0, 0, 0, 0.301);
}
</style>
