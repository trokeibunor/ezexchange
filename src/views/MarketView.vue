<template>
  <div class="hero">
    <nav-component />
    <section class="market-hero">
      <div class="left">
        <img src="../assets/images/big_search_logo.png" alt="" srcset="" />
      </div>
      <div class="right">
        <form action="#" method="post">
          <input
            type="text"
            name="search_token"
            id="search_token"
            placeholder="Search for Tokens, coins and giftcards"
          />
          <button type="submit">Search Token</button>
        </form>
      </div>
    </section>
  </div>
  <div class="container-fluid">
    <div class="market-favourites">
      <h3>Market Favourites</h3>
      <div class="coin-rack">
        <coincard-component />
        <coincard-component />
        <coincard-component />
        <coincard-component />
        <coincard-component />
        <coincard-component />
        <coincard-component />
      </div>
    </div>
  </div>
  <footer-component />
</template>

<script>
import navComponent from "../components/Nav-component.vue";
import footerComponent from "../components/Footer-component.vue";
import coincardComponent from "../components/Coincard-component.vue";
export default {
  name: "MarketView",
  components: {
    navComponent,
    footerComponent,
    coincardComponent,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url(../assets/images/market_pattern.svg);
  width: 100%;
  height: 57vh;
}
.market-hero {
  display: grid;
  grid-template-columns: 40% 60%;
  .left {
    width: 100%;
    height: 50vh;
    img {
      width: 55%;
      height: 100%;
    }
  }
  .right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    form {
      display: flex;
      flex-direction: column;
      width: 85%;
      #search_token {
        background: #ffffff;
        box-shadow: 0px 0px 10px -3px #708e95;
        border: none;
        border-radius: 8px;
        width: 100%;
        height: 48px;
        padding: 0px 16px;
        outline: none;
      }
      button[type="submit"] {
        background: linear-gradient(0deg, #0155dc 38.39%, #006fe8 66.76%);
        box-shadow: 0px 3.30377px 6.60755px -1.65189px #0647af;
        width: fit-content;
        height: fit-content;
        padding: 10px 20px;
        margin-top: 16px;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
}
.market-favourites {
  width: 90%;
  margin: 2rem auto;
  text-align: left;
  .coin-rack {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
}
</style>
