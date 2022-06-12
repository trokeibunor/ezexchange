<template>
  <nav-component />
  <div class="container-fluid" id="content">
    <div class="content">
      <!-- Title -->
      <div id="title">
        <!-- coin logo -->
        <img src="../assets/images/bitcoin_logo.svg" alt="" srcset="" />
        <div>
          <h4>BTC/USD</h4>
          <P>Exchange your bitcoin for the Nigerian naira</P>
        </div>
      </div>
      <div class="grid-hold">
        <div class="chart-holder">
          <!-- Trade view widget -->
          <!-- TradingView Widget BEGIN -->
          <chart
            :options="{
              width: '100%',
              height: '100%',
              symbol: 'COINBASE:BTCUSD',
              interval: 'D',
              timezone: 'Etc/UTC',
              theme: 'light',
              style: '1',
              locale: 'en',
              toolbar_bg: '#f1f3f6',
              enable_publishing: 'false',
              allow_symbol_change: 'true',
            }"
          />
          <div id="tradingview_938b7"></div>
          <div class="tradingview-widget-copyright">
            <a
              href="https://www.tradingview.com/symbols/BTCUSD/?exchange=COINBASE"
              rel="noopener"
              target="_blank"
              ><span class="blue-text">BTCUSD Chart</span></a
            >
            by TradingView
          </div>
          <!-- TradingView Widget END -->
        </div>
        <div class="trade-description">
          <!-- coin description -->
          <div class="coin-value">
            <p style="font-size: 14px; font-weight: bold; color: #666">
              Bitcoin Price
            </p>
            <h2>${{ coinPrice }}</h2>
            <p class="small" style="color: green; font-size: 12px">
              current value
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
              >Sell @ &#8358;560/$</a
            >
            <router-link to="" id="buy">Buy @ &#8358;480/$</router-link>
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
import { Chart } from "vue-tradingview-widgets";
import axios from "axios";
export default {
  name: "productCoin",
  data() {
    return {
      coinCode: "",
      coinPrice: "",
    };
  },
  components: {
    Chart,
    navComponent,
    footerComponent,
  },
  methods: {
    getCoindata() {
      axios
        .get(`https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD`)
        .then((response) => {
          const coinData = response.data;
          this.coinPrice = coinData.USD;
        });
    },
    callChatBox() {},
  },
  created() {
    this.getCoindata();
  },
};
</script>

<style lang="scss" scoped>
$media-desktop: "only screen and (max-width : 1024px)";
$media-tablet: "only screen and (max-width : 768px)";
$media-mobile: "only screen and (max-width : 600px)";
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-desktop-strict: "only screen and (min-width: 768px)";
#content {
  background-color: #eef2f5;
}
.content {
  margin: 2rem 4rem 0rem 4rem;
}
@media #{$media-mobile} {
  .content {
    margin: 1rem;
  }
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
    margin-top: 4px;
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
  p,
  h2 {
    margin: 0px;
    padding: 0px;
  }
  .trade-description {
    background-color: #ffffff;
    border-radius: 8px;
    margin-bottom: 2rem;
    .coin-value {
      margin: 24px;
      text-align: left;
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
.grid-hold {
  margin-top: 1rem;
  grid-template-columns: none;
  grid-template-rows: 55vh auto;
}
</style>
