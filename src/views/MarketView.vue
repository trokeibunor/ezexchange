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
        <coincard-component />
      </div>
    </div>
    <div class="market-favourites regular-trades">
      <h3>Your Regulars</h3>
      <div class="coin-rack">
        <coincard-component />
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
  <div class="container-fluid" id="giftcard">
    <div class="giftcard-section">
      <div class="header">
        <h3>Our Giftcard Section</h3>
        <a href="#">Request Giftcard</a>
      </div>
      <div class="content-box">
        <router-link class="giftcard-box" to="/card">
          <img src="../assets/images/apple_logo.svg" alt="" srcset="" />
          <h4>Apple Store Giftcard</h4>
        </router-link>
        <router-link class="giftcard-box" to="/card">
          <img src="../assets/images/apple_logo.svg" alt="" srcset="" />
          <h4>Apple Store Giftcard</h4>
        </router-link>
        <router-link class="giftcard-box" to="/card">
          <img src="../assets/images/apple_logo.svg" alt="" srcset="" />
          <h4>Apple Store Giftcard</h4>
        </router-link>
        <router-link class="giftcard-box" to="/card">
          <img src="../assets/images/apple_logo.svg" alt="" srcset="" />
          <h4>Apple Store Giftcard</h4>
        </router-link>
        <router-link class="giftcard-box" to="/card">
          <img src="../assets/images/apple_logo.svg" alt="" srcset="" />
          <h4>Apple Store Giftcard</h4>
        </router-link>
        <router-link class="giftcard-box" to="/card">
          <img src="../assets/images/apple_logo.svg" alt="" srcset="" />
          <h4>Apple Store Giftcard</h4>
        </router-link>
        <router-link class="giftcard-box" to="/card">
          <img src="../assets/images/apple_logo.svg" alt="" srcset="" />
          <h4>Apple Store Giftcard</h4>
        </router-link>
        <router-link class="giftcard-box" to="/card">
          <img src="../assets/images/apple_logo.svg" alt="" srcset="" />
          <h4>Apple Store Giftcard</h4>
        </router-link>
      </div>
    </div>
  </div>
  <div class="container-fluid" id="coin-table">
    <div class="coin-table">
      <div class="header">
        <h3>Our Token Catalogue</h3>
        <a href="#">Request Coin?</a>
      </div>
      <div class="content">
        <coincard-component />
        <coincard-component />
        <coincard-component />
        <coincard-component />
        <coincard-component />
        <coincard-component />
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
  /* Hide scrollbar for Chrome, Safari and Opera */
  .coin-rack::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  .coin-rack {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .coin-rack {
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 8px;
    align-items: center;
    overflow-x: scroll;
  }
}
#giftcard {
  background-color: #eef2f5;
}
.giftcard-section {
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
      justify-content: flex-end;
      font-weight: 600;
      text-decoration: none;
    }
    :hover {
      color: #708e95;
    }
  }
  .content-box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 32px;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    margin: 32px auto;
    .giftcard-box {
      width: 80%;
      height: 10rem;
      border-radius: 10px;
      background-image: url(../assets/images/giftcard_background.svg);
      background-position: bottom left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      img {
        width: auto;
        max-height: 64px;
      }
      h4 {
        color: #ffffff;
      }
    }
  }
}
#coin-table {
  // background-color: #006fe8;
  background-image: url(../assets/images/market_pattern.svg);
}
.coin-table {
  margin: 0px 2rem;
  color: #0d1b1e;
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
    :hover {
      color: #cccccc;
    }
  }
  .content {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-row-gap: 32px;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    color: #0d1b1e;
  }
}
</style>
