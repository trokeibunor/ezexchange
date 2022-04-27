<template>
  <div class="container-fluid" id="content">
    <nav-component />
    <div class="content">
      <div id="title">
        <!-- Company logo -->
        <img src="../assets/images/apple_logo.svg" alt="" srcset="" />
        <div>
          <h4>Apple Gift card</h4>
          <p>Redeem your gift cards and get paid in Nigerian Naira</p>
        </div>
      </div>
      <div class="grid-hold">
        <div class="card-image-holder">
          <!-- gift-card-image -->
          <img src="../assets/images/apple-gift-card.png" alt="" srcset="" />
        </div>
        <div class="trade-description">
          <!-- Card description -->
          <div class="card-description">
            <h4>Description:</h4>
            <p>
              The Apple gift card is used to purchase goods and services,
              produced or rendered by apple.inc. These usually include apple
              products, itunes etc. You would be able to redeem your apple
              giftcard by clicking the redeem button below.
            </p>
          </div>
          <img
            src="../assets/images/exchange_illustration.svg"
            id="illustration"
            alt=""
            srcset=""
          />
          <p id="note">
            Please note that the prices indicated below might be subject to
            change based on bargaining factors such as volume of trade time of
            trade and other factors
          </p>
          <div class="btn-stack">
            <a href="javascript:void(Tawk_API.toggle())" id="sell"
              >Redeem your gift card @ &#8358;450/$</a
            >
            <router-link to="" id="buy"
              >Buy Apple giftcard @ &#8358;470/$</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-component />
</template>

<script>
import navComponent from "../components/Nav-component.vue";
import footerComponent from "../components/Footer-component.vue";

export default {
  name: "productCard",
  components: {
    navComponent,
    footerComponent,
  },
};
</script>

<style lang="scss" scoped>
#content {
  background-color: #eef2f5;
}
.content {
  margin: 1.5rem 4rem 0rem 4rem;
}
#title {
  display: flex;
  flex-direction: row;
  text-align: left;
  img {
    min-height: 54px;
    min-width: 54px;
    max-width: 54px;
    max-height: 54px;
  }
  h4,
  p {
    margin: 0px;
    padding: 0px;
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 10px;
    h4,
    p {
      margin: 0px;
      padding: 0px;
    }
  }
}
.grid-hold {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;
  margin-top: 0.5rem;
  p,
  h2 {
    margin: 0px;
    padding: 0px;
  }
  .card-image-holder {
    width: 100%;
    height: 95%;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-items: center;
    img {
      width: 70%;
      height: 70%;
      margin: auto;
    }
  }
  .trade-description {
    background-color: #ffffff;
    border-radius: 8px;
    margin-bottom: 2rem;
    .card-description {
      text-align: left;
      margin-top: 8px;
      width: 90%;
      margin: 8px auto;
    }
    #illustration {
      margin: 8px 0px;
    }
    .btn-stack {
      width: 90%;
      margin: 1.5rem auto;
      display: flex;
      flex-direction: column;
      a {
        text-decoration: none;
        color: white;
        text-align: center;
        width: 100%;
        padding: 10px 0px;
        height: fit-content;
        margin: 4px 0px;
      }
      #sell {
        background: linear-gradient(0deg, #0155dc 38.39%, #006fe8 66.76%);
        /* Shadow one */
        box-shadow: 0px 4px 8px -2px #0647af;
        border-radius: 5px;
      }
      #buy {
        /* Red */

        background: #eb5757;
        /* Alt shadow */

        box-shadow: 0px 2px 8px -4px #708e95;
        border-radius: 5px;
      }
    }
  }
}
</style>
