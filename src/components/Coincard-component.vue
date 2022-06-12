<template>
  <div>
    <div class="coin-card">
      <div class="content">
        <div class="top">
          <img src="../assets/images/bitcoin_logo.svg" alt="" srcset="" />
          <p>Bitcoin</p>
          <img src="../assets/images/graph_icon.svg" alt="" srcset="" />
        </div>
        <div class="middle">
          <p class="small">Market Value</p>
          <h3>$37,320.34</h3>
        </div>
        <div class="bottom">
          <router-link to="/coin">View Rates </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Coincard-component",
};
</script>

<style lang="scss" scoped>
$media-desktop: "only screen and (max-width : 1024px)";
$media-tablet: "only screen and (max-width : 768px)";
$media-mobile: "only screen and (max-width : 600px)";
$media-mobile-sm: "only screen and (max-width : 480px)";
$media-desktop-strict: "only screen and (min-width: 768px) and (max-width: 1024)";
.coin-card {
  width: 11rem;
  height: 11rem;
  background: #ffffff;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-right: 32px;
  text-align: left;
  .content {
    padding: 4px;
    .top {
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;

      img:first-of-type {
        grid-column: 1;
        align-items: flex-end;
        max-width: 37px;
        max-height: 37px;
      }
      p {
        display: grid;
        grid-column: 2;
        align-items: center;
        margin: 0px;
        padding: 0px;
      }
      img:nth-of-type(2) {
        grid-column: 3;
        align-self: center;
      }
      width: 100%;
    }
    .middle {
      display: grid;
      height: 0.4 * 11rem;
      align-content: center;
      padding: 8px;
      .small {
        margin: 0px;
        font-size: 14px;
      }
      h3 {
        color: #938ba1;
        font-weight: 400;
        margin: 0px;
        font-size: 28px;
      }
    }
    .bottom {
      display: grid;
      align-content: center;
      justify-content: center;
      a {
        background: linear-gradient(0deg, #0155dc 38.39%, #006fe8 66.76%);
        /* Shadow one */

        box-shadow: 0px 4px 8px -2px #0647af;
        border-radius: 10px;
        font-weight: 600;
        width: 8rem;
        padding: 8px 12px;
        text-align: center;
        text-decoration: none;
        color: #fff;
      }
    }
  }
}
@media #{$media-mobile} {
  .coin-card {
    width: auto;
    height: auto;
    margin-right: 16px;
    .bottom {
      a {
        width: 7.5rem;
        padding: 8px;
      }
    }
  }
}
</style>
