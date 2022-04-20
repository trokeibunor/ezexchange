<template>
  <div>
    <navcomponent />
    <div class="img-holder">
      <img src="../assets/images/verifyMail.svg" alt="" srcset="" />
    </div>
    <div class="text-holder">
      <h2>Please verify your Email Address</h2>
      <p>
        A link has been sent to your Email address, please click on the link to
        verify your Email.
      </p>
      <div class="button-row">
        <router-link to="#" id="noMail">
          I did not receive any mail</router-link
        >
        <router-link to="#" id="conSupport">Contact Support</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import navcomponent from "../components/Nav-component.vue";
export default {
  name: "verifyEmail",
  components: {
    navcomponent,
  },
};
</script>

<style lang="scss" scoped>
.img-holder {
  width: fit-content;
  height: fit-content;
  margin: 5% auto 32px auto;
  img {
    width: 60vw;
    height: 40vh;
    object-fit: contain;
  }
}
.text-holder {
  width: 60vh;
  text-align: center;
  margin: auto;
}
.button-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  justify-items: center;
  align-items: center;
  #noMail {
    background: linear-gradient(0deg, #0155dc 38.39%, #006fe8 66.76%);
    border-radius: 10px;
    color: #fff;
    text-decoration: none;
    padding: 8px 16px;
  }
  #conSupport {
    /* White */
    background: #ffffff;
    /* analogous */
    border: 3px solid #938ba1;
    box-sizing: border-box;
    border-radius: 10px;
    color: #938ba1;
    text-decoration: none;
    padding: 7px 16px;
  }
}
</style>
