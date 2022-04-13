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
:hover {
  box-shadow: 4px 1px 10px -4px rgba(0, 0, 0, 0.301);
}
</style>
